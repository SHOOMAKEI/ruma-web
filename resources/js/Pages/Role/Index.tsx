import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Layout from "../../Shared/Layout";
import route from "ziggy-js";
import {Company, Role} from "../../Shared/Types";
import CardWrapper from "../../Shared/CardWrapper";
import {Dropdown} from "react-bootstrap";
import {CustomDropdownMenuItem, CustomButtonDropdownToggle} from '../../Shared/ToggleDropdown'
import { DropdownIcon } from "../../Shared/Icons/svg";


interface props {
    roles?: Role []
    [key: string]: any
}


function Index()  {
    const { roles }:props = usePage().props


    // @ts-ignore
    return (

<CardWrapper>
        <table id="kt_datatable_example_5" className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
            <thead>
            <tr className="fw-bolder fs-6 text-gray-800 px-7">
                <th>Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {roles as props && (roles as props).map((role: Role)=>(
                <tr key={role.id}>
                    <td>{role.name}</td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle cssClass={"btn btn-sm btn-light btn-active-light-primary"} variant="success" id="dropdown-basic" as={CustomButtonDropdownToggle}>
                                Actions
                                <DropdownIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px">
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                        <InertiaLink href={route('roles.edit', role.id)} className="menu-link px-3" >Edit</InertiaLink>
                                </Dropdown.Item>
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                    <InertiaLink href={route('roles.show', role.id)} className="menu-link px-3" >Show</InertiaLink>
                                </Dropdown.Item>
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
    children={page}  title={`Roles`}
    toolBarLeftContent={ <InertiaLink href={route('roles.create')} className="btn btn-primary">Add Role </InertiaLink>} />;

export default Index;
