import React from 'react';

interface Props {
    children: React.ReactNode;
    illustrationUrl: string;
    title: string;
    subtitle: string;
}

export default function AuthFramework({children, illustrationUrl, title, subtitle}: Props) {
    return (
        <div className="d-flex flex-column flex-root">
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                <div className="d-flex flex-column flex-lg-row-auto w-xl-600px position-xl-relative" style={{backgroundColor: '#F7FAF7'}}>
                    <div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px">
                        <div className="d-flex flex-row-fluid flex-column text-center p-6 pt-lg-20">
                            <a href="" className="py-9">
                                <img alt="Logo" src={"/assets/images/brand/logo.svg"} style={{width: '230px', height: '230px'}}/>
                            </a>
                        </div>
                        <img src={illustrationUrl} className="d-none d-lg-block" alt='illustration'/>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row-fluid py-10">
                    <div className="d-flex flex-center flex-column flex-column-fluid">
                        <div className="w-100 w-md-50 w-lg-500px p-10 p-lg-15 mx-auto">
                            <div className="mb-6">
                                <h1 className="text-dark mb-3 auth-heading">{title}</h1>
                                <p className="h4 mb-3 fw-light">{subtitle}</p>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
