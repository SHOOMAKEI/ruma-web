import {Company, Role} from "../../Shared/Types";
import {CustomButtonDropdownToggle, CustomDropdownMenuItem} from '../../Shared/ToggleDropdown'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

import CardWrapper from "../../Shared/CardWrapper";
import {Dropdown} from "react-bootstrap";
import { DropdownIcon } from "../../Shared/Icons/svg";
import Layout from "../../Shared/Layout";
import React from "react";
import route from "ziggy-js";

interface props {
    roles?: Role []
    [key: string]: any
}


function Index()  {
    const { roles }:props = usePage().props


    //@ts-ignore
    $(document).ready(function() {
        //@ts-ignore
        $('#role-data-table').DataTable();
    });

    // @ts-ignore
    return (

<CardWrapper>
        <table id="role-data-table" className="table align-middle table-row-dashed gy-2">
            <thead>
            <tr className="fw-bolder text-muted">
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
