import React, {useCallback, useEffect, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import AuthFramework from "./AuthFramework";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";


const ILLUSTRATION_URL = '/assets/images/illustrations/forgot-password.svg';
const TITLE = 'Forgotten Password?';
const SUBTITLE = 'Enter your username to reset your password';


export default () => {
    const { status } = usePage().props
    const { data, setData, errors, post, processing } = useForm({
        username: '',
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        Inertia.post(route('password.email'));
    }
    return (
        <AuthFramework illustrationUrl={ILLUSTRATION_URL} title={TITLE} subtitle={SUBTITLE}>

            <form onSubmit={handleSubmit} className="form w-100">

                <div className="fv-row mb-5">
                    <TextInput
                        className="mt-10"
                        label="Your Username"
                        name="username"
                        type="text"
                        errors={errors.username}
                        value={data.username}
                        onChange={(e: { target: { value: string; }; }) => setData('username', e.target.value)}
                    />
                </div>
                <div className="fv-row ">
                        <LoadingButton
                            type="submit"
                            loading={processing} >
                            Send Reset Password Link
                        </LoadingButton>
                    <InertiaLink href={route('login')} className="btn btn-light-primary" style={{marginLeft: '1rem'}} >
                        <span className="indicator-label h4">Log In</span>
                    </InertiaLink>
                </div>
            </form>
        </AuthFramework>
    )
}
