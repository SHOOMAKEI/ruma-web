import {Company, User} from "../../Shared/Types";
import {CustomButtonDropdownToggle, CustomDropdownMenuItem} from '../../Shared/ToggleDropdown'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

import CardWrapper from "../../Shared/CardWrapper";
import {Dropdown} from "react-bootstrap";
import { DropdownIcon } from "../../Shared/Icons/svg";
import Layout from "../../Shared/Layout";
import React from "react";
import route from "ziggy-js";

interface props {
    users?: User []
    auth?: auth
    [key: string]: any
}

interface auth {
    user: User
}

function Index()  {
    const { users, auth }:props = usePage().props

    //@ts-ignore
    $(document).ready(function() {
        //@ts-ignore
        $('#account-data-table').DataTable();
    });


    // @ts-ignore
    return (

        <CardWrapper>
                <table id="account-data-table" className="table align-middle table-row-dashed gy-5">
                    <thead>
                        <tr className="fw-bolder text-muted">
                            <th>Username</th>
                            <th>Email</th>
                            <th>Is Active</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users as props && (users as props).map((user: User)=>(
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.is_active? <span className="badge badge-light-primary">Active</span>:
                                    <span className="badge badge-light-warning">In Active</span>}</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle cssClass={"btn btn-sm btn-light btn-active-light-primary"} variant="success" id="dropdown-basic" as={CustomButtonDropdownToggle}>
                                            Actions
                                            <DropdownIcon />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px">
                                            <Dropdown.Item as={CustomDropdownMenuItem}>
                                                    <InertiaLink href={route('users.edit', user.id)} className="menu-link px-3" >Edit</InertiaLink>
                                            </Dropdown.Item>
                                            {
                                                // @ts-ignore
                                                auth.user.id === user.id?'':
                                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                                    <InertiaLink href={route('users.destroy', user.id)} method="delete" className="menu-link px-3" >Delete</InertiaLink>
                                                </Dropdown.Item>
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </CardWrapper>
    )
}

Index.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Users Accounts"
    toolBarLeftContent={ <InertiaLink href={route('users.create')} className="btn btn-primary">Add User Account</InertiaLink>} />;

export default Index;
