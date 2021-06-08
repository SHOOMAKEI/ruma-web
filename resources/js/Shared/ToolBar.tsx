import React, {ReactNode} from "react";
import {InertiaLink} from "@inertiajs/inertia-react";

interface Props {
    title: string;
    leftContent?: ReactNode;
}

export default ({title, leftContent}: Props) => {
    return (
        <div className="toolbar" id="kt_toolbar">
            <div id="kt_toolbar_container" className="container-fluid d-flex flex-stack">
                <div data-kt-place="true" data-kt-place-mode="prepend"
                     data-kt-place-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                     className="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1">
                    <h1 className="d-flex align-items-center text-dark fw-bolder my-1 fs-3">{title}</h1>
                    <span className="h-20px border-gray-200 border-start mx-4"/>
                    {/*<ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">*/}
                    {/*    <li className="breadcrumb-item text-muted">*/}
                    {/*        <a href="" className="text-muted text-hover-primary">Home</a>*/}
                    {/*    </li>*/}
                    {/*    <li className="breadcrumb-item">*/}
                    {/*        <span className="bullet bg-gray-200 w-5px h-2px"/>*/}
                    {/*    </li>*/}
                    {/*    <li className="breadcrumb-item text-muted">Customers</li>*/}
                    {/*    <li className="breadcrumb-item">*/}
                    {/*        <span className="bullet bg-gray-200 w-5px h-2px"/>*/}
                    {/*    </li>*/}
                    {/*    <li className="breadcrumb-item text-dark">Getting Started</li>*/}
                    {/*</ul>*/}
                </div>

                <div className="d-flex align-items-center py-1">
                    {leftContent}
                </div>
            </div>
        </div>
    )
}
