import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Footer from "./Footer";
// @ts-ignore
import { InertiaHead } from '@inertiajs/inertia-react'
import React, {ReactNode} from 'react';
import {author, siteDescription, siteTitle} from '../config';
import ToolBar from "./ToolBar";

interface Props {
    children?: ReactNode;
    title: string;
    toolBarLeftContent?: ReactNode;
}

export default function Framework({children, title, toolBarLeftContent}: Props) {
    return (
        <React.Fragment>
            <InertiaHead>
                {/* Site links */}
                <link rel={"icon"} href={"/favicon.ico"} />
                {/* End site links */}

                {/* Meta content */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="og:title" content={siteTitle} />
                <meta name="description" content={siteDescription} />
                <meta name="author" content={author} />
                <title>{siteTitle}</title>
                {/* End meta content */}
            </InertiaHead>
            <main className="page d-flex flex-row flex-column-fluid">
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
            </main>
        </React.Fragment>
    )
}
