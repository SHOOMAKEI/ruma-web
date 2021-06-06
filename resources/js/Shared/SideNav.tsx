import Menu from "./Menu";
import {dropdownMenus} from "./SidebarLink";
import {SideNavCollapse} from "./Icons/svg";
import React from "react";
export default () => {
    return (
        <div id="kt_aside" className="aside aside-dark aside-hoverable" data-kt-drawer="true"
             data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}"
             data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}"
             data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
            <div className="aside-logo flex-column-auto" id="kt_aside_logo">
                <a href="">
                    {/*<img alt="Logo" src={"/images/brand/logo.png"} className="h-15px logo"/>*/}
                    <span className={"text-white h1"}>RUMA</span>
                </a>
                <div id="kt_aside_toggle"
                     className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
                     data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
                     data-kt-toggle-name="aside-minimize">
                    <SideNavCollapse />
                </div>
            </div>
            <div className="aside-menu flex-column-fluid">
                <div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper"
                     data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                     data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
                     data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
                    <div
                        className="menu menu-column menu-title-gray-800 menu-state-title-primary
                    menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                        id="#kt_aside_menu"
                        data-kt-menu="true">
                        {
                            dropdownMenus.map((menu: any) => (
                                <Menu menu={menu}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="aside-footer flex-column-auto" id="kt_aside_footer"/>
        </div>
    )
}
