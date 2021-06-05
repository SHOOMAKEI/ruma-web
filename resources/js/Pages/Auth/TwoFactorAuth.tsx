import React, {useCallback, useEffect, useState} from "react";
import TextInput from "../../Shared/TextInput";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import LoadingButton from "../../Shared/LoadingButton";
import AuthFramework from "./AuthFramework";


const ILLUSTRATION_URL = '/assets/images/illustrations/login.svg';
const TITLE = 'Two Factor Verification';
const SUBTITLE = 'Please provide verification code sent to your email or verification code from your authenticator app';

 export default () =>  {
     const { status } = usePage().props
     const { data, setData, errors, post, processing } = useForm({
         username: '',
         two_factory_code: '',
         recovery_code: ''
     });

     function handleSubmit(e: { preventDefault: () => void; }) {
         e.preventDefault();
         Inertia.post(route('two-factor.login'));
     }


    return (
        <AuthFramework illustrationUrl={ILLUSTRATION_URL} title={TITLE} subtitle={SUBTITLE}>
            <ul className="nav nav-tabs nav-line-tabs mb-15 fs-6">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#kt_tab_pane_1">Two Factor</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">Verification Code</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                    <form onSubmit={handleSubmit} className="form w-100">
                        <div className="fv-row mb-5">
                            <TextInput
                                className="mt-10"
                                label="Two Factor Code"
                                name="two_factory_code"
                                type="text"
                                errors={errors.two_factory_code}
                                value={data.two_factory_code}
                                onChange={(e: { target: { value: string; }; }) => setData('two_factory_code', e.target.value)}
                            />
                        </div>
                        <div className="fv-row ">
                            <LoadingButton
                                type="submit"
                                loading={processing} >
                                Verify
                            </LoadingButton>
                            <InertiaLink href={route('login')} className="btn btn-light-primary" style={{marginLeft: '1rem'}} >
                                <span className="indicator-label h4">Cancel</span>
                            </InertiaLink>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                    <form onSubmit={handleSubmit} className="form w-100">
                        <div className="fv-row mb-5">
                            <TextInput
                                className="mt-10"
                                label="Recovery Code"
                                name="recovery_code"
                                type="text"
                                errors={errors.recovery_code}
                                value={data.recovery_code}
                                onChange={(e: { target: { value: string; }; }) => setData('recovery_code', e.target.value)}
                            />
                        </div>
                        <div className="fv-row ">
                            <LoadingButton
                                type="submit"
                                loading={processing} >
                                Verify
                            </LoadingButton>
                            <InertiaLink href={route('login')} className="btn btn-light-primary" style={{marginLeft: '1rem'}} >
                                <span className="indicator-label h4">Cancel</span>
                            </InertiaLink>
                        </div>
                    </form>
                </div>
            </div>
        </AuthFramework>
    )
}

