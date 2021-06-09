import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Layout from "../../Shared/Layout";
import route from "ziggy-js";
import {Company, User} from "../../Shared/Types";
import CardWaper from "../../Shared/CardWaper";
import {Dropdown} from "react-bootstrap";
import {CustomDropdownMenuItem, CustomButtonDropdownToggle} from '../../Shared/ToggleDropdown'
import { DropdownIcon } from "../../Shared/Icons/svg";


interface props {
    users?: User []
    [key: string]: any
}

function Index()  {
    const { users }:props = usePage().props



    // @ts-ignore
    return (

<CardWaper>
        <table id="kt_datatable_example_5" className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
            <thead>
            <tr className="fw-bolder fs-6 text-gray-800 px-7">
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Is Active</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users as props && (users as props).map((user: User)=>(
                <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <ul>
                        {user.account_roles?.map((role)=>(
                        <li>{role.name}</li>
                        ))}
                        </ul>
                    </td>
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
                                        <InertiaLink href={route('accounts.edit', user.id)} className="menu-link px-3" >Edit</InertiaLink>
                                </Dropdown.Item>
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                    <InertiaLink href={route('accounts.destroy', user.id)} className="menu-link px-3" >Delete</InertiaLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                </tr>
            ))}

            </tbody>
        </table>
</CardWaper>
    )
}

Index.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Companies"
    toolBarLeftContent={ <InertiaLink href={route('companies.create')} className="btn btn-primary">Add Company</InertiaLink>} />;

export default Index;
