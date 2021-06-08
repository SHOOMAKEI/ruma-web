import {Dropdown} from 'react-bootstrap';
import React from 'react';
import {CustomDropdownMenuItem} from "./ToggleDropdown";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";

interface Props {
    user?: User;
    [key: string]: any
}

interface  User {
    email: string
    username: string
    roles: string []
    permissions: string []
}

interface CustomToggleProps {
    children: React.ReactNode;
    onClick: any;
}

const CustomToggle = React.forwardRef(
    ({ children, onClick }: CustomToggleProps, ref) => {
        return (
            // @ts-ignore
            <div ref={ref}
                 onClick={(e) => {
                     e.preventDefault();
                     onClick(e);
                 }}>
                {children}
            </div>
        );
    },
);


export default () => {
const { user }: Props = usePage().props
    return (
        <div className="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
            <div className="">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" as={CustomToggle}>
                        <div className="cursor-pointer symbol symbol-30px symbol-md-40px">
                            <img src={'/assets/images/models/avatar.jpg'} alt="metronic" />
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px">
                        <Dropdown.Header className="menu-item px-3 mb-3">
                            <div className="menu-content d-flex align-items-center px-3">
                                <div className="symbol symbol-50px me-5">
                                    <img alt="Logo" src={'/assets/images/models/avatar.jpg'}/>
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="fw-bolder d-flex align-items-center fs-5">{user?.username}
                                    </div>
                                    <a href="#" className="fw-bold text-muted text-hover-primary fs-7">{user?.email}</a>
                                </div>
                            </div>
                        </Dropdown.Header>
                        <Dropdown.Item as={CustomDropdownMenuItem}>
                            <InertiaLink href={route('profile')} className="menu-link px-5">My Profile</InertiaLink>
                        </Dropdown.Item>
                        {/*<Dropdown.Item as={CustomDropdownMenuItem}>*/}
                        {/*    <a href="" className="menu-link px-5">Account Settings</a>*/}
                        {/*</Dropdown.Item>*/}
                        <Dropdown.Item as={CustomDropdownMenuItem}>
                            <InertiaLink href={route('logout')}  method="post"  className="menu-link px-5" >Sign Out</InertiaLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </div>
    )
}

