import React, {useContext} from "react";
import LoadingButton from "../../../../Shared/LoadingButton";
import TextInput from "../../../../Shared/TextInput";
import {useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import {SettingsContext} from "../../../../Shared/Contexts/SettingsContexts";

type Sessions = Session[];

export type Session = {
    agent: Agent
    ip_address: string
    is_current_device: boolean
    last_active: string
}

export type Agent = {
    is_desktop: boolean
    platform: string
    browser: string
}

export default () => {
    // @ts-ignore
    const { sessions, errors } = useContext(SettingsContext)
    const { data, setData, post, processing } = useForm({
        confirm_password: '',
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('settings.sessions_browser'));
    }

    // @ts-ignore
    return (
        <>
            <div className="col-12">
                <div className="row col-lg-12">
                    <div className="col-lg-5">
                        <h4 className="header-title">Browser Sessions</h4>
                        <small className="text-muted font-14">
                            Manage and logout your active sessions on other browsers and devices.
                        </small>
                    </div>
                    <div className="card col-lg-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <small className=" font-14">
                                            If necessary, you may logout of all of your other browser sessions across all of your devices.
                                            Some of your recent sessions are listed below; however, this list may not be exhaustive.
                                            If you feel your account has been compromised, you should also update your password.
                                        </small>

                                        <div className="mt-3">

                                            {
                                                (sessions ) && (sessions as Sessions).length>0 && (sessions as Sessions).map((session : Session, index : number)=>(
                                                    <div className="d-flex mb-3" key={index+1}>
                                                        <div>
                                                            {session.agent.is_desktop && (
                                                                <svg fill="none" width="32" strokeLinecap="round"
                                                                     strokeLinejoin="round" strokeWidth="2"
                                                                     viewBox="0 0 24 24" stroke="currentColor"
                                                                     className="text-muted">
                                                                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                                                </svg>
                                                            )}
                                                            {!session.agent.is_desktop && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32"
                                                                     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                                                     fill="none" strokeLinecap="round" strokeLinejoin="round"
                                                                     className="text-muted">
                                                                    <path d="M0 0h24v24H0z" stroke="none"/>
                                                                    <rect x="7" y="4" width="10" height="16" rx="1"/>
                                                                    <path d="M11 5h2M12 17v.01"/>
                                                                </svg>
                                                            )}

                                                        </div>

                                                        <div className="px-2">
                                                            <div>
                                                                {session.agent.platform} - {session.agent.browser}
                                                            </div>

                                                            <div>
                                                                <div className="font-14 font-weight-lighter text-muted">
                                                                    {session.ip_address}

                                                                    {session.is_current_device && (
                                                                        <span className="text-primary font-weight-bold ml-1 px-3">
                                                                                This device</span>                                                                        )}
                                                                    {!session.is_current_device &&(
                                                                        <span className="text-secondary ml-1 font-14 px-3">
                                                                                 Last active  {session.last_active}
                                                                            </span>
                                                                    )}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <div className="d-flex mt-3">
                                                <form onSubmit={handleSubmit}>
                                                    <TextInput
                                                        name="confirm_password"
                                                        type="password"
                                                        label="Enter Current Password To Logout Other Browser Sessions"
                                                        errors={errors.confirm_password}
                                                        value={data.confirm_password}
                                                        onChange={(e: { target: { value: string; }; }) => setData('confirm_password', e.target.value)}
                                                    />
                                                    <div className="form-group mb-0 text-left">
                                                        <LoadingButton
                                                            type="submit"
                                                            className="btn btn-primary btn-md"
                                                            loading={processing}
                                                        >
                                                            Logout Other Browser Sessions
                                                        </LoadingButton>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
