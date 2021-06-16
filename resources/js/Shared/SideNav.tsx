import Menu, {MenuType} from "./Menu";
import {dropdownMenus} from "./SidebarLink";
import {DropdownIcon, SideNavCollapse} from "./Icons/svg";
import React, {useState} from "react";
import SelectInput from "./SelectInput";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {Dropdown} from "react-bootstrap";
import {CustomButtonDropdownToggle, CustomDropdownMenuItem} from "./ToggleDropdown";
import route from "ziggy-js";
import {comment} from "postcss";

interface mainMenu {
    menu: MenuType []
}
export default () => {
    const { auth, main_menu } = usePage().props
    const [toggle, setToggle] = useState(false)

    return (
        <div id="kt_aside" className="aside aside-dark aside-hoverable" data-kt-drawer="true"
             data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}"
             data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}"
             data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
            <div className="aside-logo flex-column-auto" id="kt_aside_logo">
                <a href={route('home')}>
                    <img alt="Logo" src="/assets/images/brand/logoicon.png" className="h-55px logo"/>
                    <span className="text-white h1 mx-5">RUMA</span>
                </a>

                <div id="kt_aside_toggle" onChange={event => setToggle(!toggle)}
                     className={`btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle ${toggle?'active': ''}`}
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
                            //@ts-ignore
                          main_menu && (main_menu).map((menu: any, ) => (
                                <Menu key={Math.random()} menu={menu}/>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="aside-footer flex-column-auto" id="kt_aside_footer">
            <Dropdown>
                    <Dropdown.Toggle cssClass={"btn btn-sm btn-light btn-primary w-100"} variant="success" id="dropdown-basic" as={CustomButtonDropdownToggle}>
                        {
                            //@ts-ignore
                            auth.current_company.substring(0,20)
                        }

                        <DropdownIcon />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-900   fw-bold py-1 px-1 mr-3 fs-6 w-100">
                        {
                            //@ts-ignore
                            auth.companies && auth.companies.map((company)=>(
                                <Dropdown.Item as={CustomDropdownMenuItem} key={Math.random()}>
                                    <InertiaLink href={route('company.default_dashboard', company.id)} className="menu-link px-1 text-primary text-hover-white">{company.name}</InertiaLink>
                                </Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
