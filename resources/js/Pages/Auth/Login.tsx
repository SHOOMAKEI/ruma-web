
import React, {useCallback, useEffect, useState} from "react";
import {InertiaLink, useForm} from "@inertiajs/inertia-react";
import AuthFramework from "./AuthFramework";
import TextInput from "../../Shared/TextInput"
import LoadingButton from "../../Shared/LoadingButton";
import route from "ziggy-js";
import {Inertia} from "@inertiajs/inertia";

const ILLUSTRATION_URL = '/assets/images/illustrations/login.svg';
const TITLE = 'Sign In';
const SUBTITLE = 'Provide your username and password to login';



export default () => {
    const { data, setData, errors, post, processing } = useForm({
        username: '',
        password: '',
        remember: true
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        Inertia.post(route('login'));
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
                        required
                        errors={errors.username}
                        value={data.username}
                        onChange={(e: { target: { value: string; }; }) => setData('username', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5">
                    <div className="d-flex flex-stack mb-2">
                        <label className="h4 mb-3 fw-light">Password</label>
                        <InertiaLink href={route('password.request')}
                           className="h4 mb-3 fw-light">Forgot Password ?
                        </InertiaLink>
                    </div>
                    <TextInput
                        className="mt-10"
                        name="password"
                        type="password"
                        required
                        errors={errors.password}
                        value={data.password}
                        onChange={(e: { target: { value: string; }; }) => setData('password', e.target.value)}
                    />
                </div>
                <div className="fv-row">
                    <LoadingButton
                        type="submit"
                        loading={processing} >
                        Log in
                    </LoadingButton>
                </div>
            </form>
        </AuthFramework>
    )
}

