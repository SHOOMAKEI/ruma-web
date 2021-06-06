import React, {useCallback, useEffect, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import AuthFramework from "./AuthFramework";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";
import ResponseAlert from "../../Shared/ResponseAlert";


const ILLUSTRATION_URL = '/assets/images/illustrations/forgot-password.svg';
const TITLE = 'Forgotten Password?';
const SUBTITLE = 'Enter your email to reset your password';


export default () => {
    const { status } = usePage().props
    const { data, setData, errors, post, processing } = useForm({
        email: '',
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('password.email'));
    }
    return (
        <AuthFramework illustrationUrl={ILLUSTRATION_URL} title={TITLE} subtitle={SUBTITLE}>
            {
                status && <ResponseAlert type="success"  message={status as string} />
            }
            <form onSubmit={handleSubmit} className="form w-100">

                <div className="fv-row mb-5">
                    <TextInput
                        className="mt-10"
                        label="Your Email"
                        name="email"
                        type="text"
                        errors={errors.email}
                        value={data.email}
                        onChange={(e: { target: { value: string; }; }) => setData('email', e.target.value)}
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
