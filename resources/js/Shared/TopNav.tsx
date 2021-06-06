import React from 'react'
import UserMenu from "./UserMenu";
import {SideNavToggle} from "./Icons/svg";

export default function TopNav() {

    return (
        <div id="kt_header" className="header align-items-stretch">
            <div className="container-fluid d-flex align-items-stretch justify-content-between">
                <div className="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
                    <div className="btn btn-icon btn-active-light-primary" id="kt_aside_mobile_toggle">
                        <SideNavToggle />
                    </div>
                </div>

                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                    <a href="" className="d-lg-none">
                        <span className={"text-primary h1"}>RUMA</span>
                    </a>
                </div>

                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                    <div className="d-flex align-items-stretch" id="kt_header_nav">

                    </div>
                    <div className="d-flex align-items-stretch flex-shrink-0">
                        <div className="d-flex align-items-stretch flex-shrink-0">
                            <UserMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
