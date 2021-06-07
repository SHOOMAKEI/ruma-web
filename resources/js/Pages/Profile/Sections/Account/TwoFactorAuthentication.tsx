import React, {useContext} from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {User} from "../../../../Shared/Types";
import route from "ziggy-js";
import {AccountContext} from "../../Index";

interface settings {
    two_factor_recovery_codes: code []
    qrcode_svg: string
}

interface code {
    code: string
}

export default () => {

    // @ts-ignore
    const {provider}= useContext(AccountContext)

    return (
        <>
            <div className="col-12">
                <div className="row col-lg-12">
                    <div className="col-lg-5">
                        <h4 className="header-title">Two Factor Authentication</h4>
                        <small className="text-muted font-14">
                            Additional security to your account using two factor authentication.
                        </small>
                    </div>
                    <div className="card col-lg-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <small className=" font-14">
                                            When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.
                                        </small>
                                        {
                                            (provider.user as User).settings?.has_enable_two_factory_auth?
                                                <>
                                                    <div className="mt-3">
                                                        <small className="font-14">
                                                            Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.
                                                        </small>
                                                    </div>

                                                    <div className="mt-4" dangerouslySetInnerHTML={{__html: (provider.settings as settings).qrcode_svg}}>

                                                    </div>
                                                    <div className="my-4">
                                                        <small className=" font-14">
                                                            Store these recovery codes in a secure password manager.
                                                            They can be used to recover access to your account if your two factor authentication device is lost.
                                                        </small>
                                                    </div>

                                                    <div className="w-75 bg-light rounded p-3 mb-2">
                                                        { provider.settings as settings && (provider.settings as settings)?.two_factor_recovery_codes?.map((code, index: number)=>(
                                                            <div key={index+1} className="py-1">{code.code}</div>
                                                        ))}

                                                    </div>
                                                    <div className="form-group mt-3 text-left">
                                                        <InertiaLink
                                                            href={route('settings.recovery_code')}
                                                            className="btn btn-outline-secondary btn-md mr-3"
                                                        >
                                                            Generate Recovery Code
                                                        </InertiaLink>
                                                        <InertiaLink
                                                            href={route('settings.toggle2fa')}
                                                            className="btn btn-danger btn-md"
                                                        >
                                                            Disable
                                                        </InertiaLink>
                                                    </div>
                                                </>:
                                                <div className="form-group mt-3 text-left">
                                                    <InertiaLink
                                                        href={route('settings.toggle2fa')}
                                                        className="btn btn-primary btn-md"
                                                    >
                                                        Enable
                                                    </InertiaLink>
                                                </div>
                                        }
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
