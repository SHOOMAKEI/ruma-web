// @ts-ignore
import {InertiaHead, usePage} from '@inertiajs/inertia-react'
import React, {ReactNode, useEffect} from 'react';
import {author, siteDescription, siteTitle} from '../config';

import Footer from "./Footer";
import SideNav from "./SideNav";
import SuccessToast from "./SuccessToast";
import ToolBar from "./ToolBar";
import TopNav from "./TopNav";

interface Props {
    children?: ReactNode;
    title: string;
    toolBarLeftContent?: ReactNode;
}

export default function Framework({children, title, toolBarLeftContent}: Props) {
    const { status } = usePage().props;

    useEffect(()=>(
        //@ts-ignore
        $('#success-toast').toast('show')
    ),[])

    return (
        <React.Fragment>
            <InertiaHead>

                {/* Meta content */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="og:title" content={siteTitle} />
                <meta name="description" content={siteDescription} />
                <meta name="author" content={author} />
                <title>{siteTitle}</title>
                {/* End meta content */}
            </InertiaHead>
            <SuccessToast status={status as string}/>
            <SideNav />
            <div className="wrapper d-flex flex-column flex-row-fluid flex-root" id="kt_wrapper">
                <TopNav />
                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <ToolBar title={title} leftContent={toolBarLeftContent}/>
                    <div className="post d-flex flex-column-fluid" id="kt_post">
                        <div id="kt_content_container" className="container">
                            {children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}
