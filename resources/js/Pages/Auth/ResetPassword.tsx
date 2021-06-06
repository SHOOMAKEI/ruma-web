import React, {useCallback, useEffect, useState} from "react";
import TextInput from "../../Shared/TextInput";
import {useForm, usePage} from "@inertiajs/inertia-react";
import AuthFramework from "./AuthFramework";
import LoadingButton from "../../Shared/LoadingButton";
import route from "ziggy-js";
import {Inertia} from "@inertiajs/inertia";


const ILLUSTRATION_URL = '/assets/images/illustrations/new-password.svg';
const TITLE = 'Create New Password';
const SUBTITLE = 'Your new password must be different from the previous password';

export default () => {
    const { email, token } = usePage().props
    const { data, setData, errors, post, processing } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: ''
    })
console.log(email, token)
    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('password.update', token as string));
    }


    return (
        <AuthFramework illustrationUrl={ILLUSTRATION_URL} title={TITLE} subtitle={SUBTITLE}>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-5">
                    <TextInput
                        className="mt-10"
                        label="Password"
                        name="password"
                        type="password"
                        errors={errors.password}
                        value={data.password}
                        onChange={(e: { target: { value: string; }; }) => setData('password', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5">
                    <TextInput
                        className="mt-10"
                        label="Confirm Password"
                        name="password_confirmation"
                        type="password"
                        errors={errors.password_confirmation}
                        value={data.password_confirmation}
                        onChange={(e: { target: { value: string; }; }) => setData('password_confirmation', e.target.value)}
                    />
                </div>
                <div className="fv-row ">
                    <LoadingButton
                        type="submit"
                        loading={processing} >
                        Reset Password
                    </LoadingButton>
                </div>
            </form>
        </AuthFramework>
    )
}
