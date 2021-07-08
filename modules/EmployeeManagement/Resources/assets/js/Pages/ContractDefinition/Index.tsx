import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Layout from "../../../../../../../resources/js/Shared/Layout";
import route from "ziggy-js";
import {Company, User} from "../../../../../../../resources/js/Shared/Types";
import CardWrapper from "../../../../../../../resources/js/Shared/CardWrapper";
import {Dropdown} from "react-bootstrap";
import {CustomDropdownMenuItem, CustomButtonDropdownToggle} from '../../../../../../../resources/js/Shared/ToggleDropdown'
import { DropdownIcon } from "../../../../../../../resources/js/Shared/Icons/svg";


interface props {
    auth?: auth
    [key: string]: any
}

interface auth {
    user: User
}

interface contractDefinition {
    id: number
    title: string
    description: string
    type: string
}

function Index()  {
    const { contract_definitions, auth }:props = usePage().props

    //@ts-ignore
    $(document).ready(function() {
        //@ts-ignore
        $('#contract-data-table').DataTable();
    });


    // @ts-ignore
    return (

<CardWrapper>
        <table id="contract-data-table" className="table table-row-bordered gy-5 gs-7 border rounded">
            <thead>
            <tr className="fw-bolder fs-6 text-gray-800 px-7">
                <th>title</th>
                <th>type</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {contract_definitions as props && (contract_definitions as props).map((definition: contractDefinition)=>(
                <tr key={definition.id}>
                    <td>{definition.title}</td>
                    <td>{definition.type}</td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle cssClass={"btn btn-sm btn-light btn-active-light-primary"} variant="success" id="dropdown-basic" as={CustomButtonDropdownToggle}>
                                Actions
                                <DropdownIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px">
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                        <InertiaLink href={route('contract-definitions.edit', definition.id)} className="menu-link px-3" >Edit</InertiaLink>
                                </Dropdown.Item>
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                    <InertiaLink href={route('contract-definitions.destroy', definition.id)} method="delete" className="menu-link px-3" >Delete</InertiaLink>
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
    children={page}  title="Contract Definitions"
    toolBarLeftContent={ <InertiaLink href={route('contract-definitions.create')} className="btn btn-primary">Add Contract Definitions</InertiaLink>} />;

export default Index;
