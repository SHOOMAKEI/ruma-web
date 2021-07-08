import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Layout from "../../Shared/Layout";
import route from "ziggy-js";
import {Company} from "../../Shared/Types";
import CardWrapper from "../../Shared/CardWrapper";
import {Dropdown} from "react-bootstrap";
import {CustomDropdownMenuItem, CustomButtonDropdownToggle} from '../../Shared/ToggleDropdown'
import { DropdownIcon } from "../../Shared/Icons/svg";
import {comment} from "postcss";


interface props {
    company?: Company []
    [key: string]: any
}

function Index()  {
    const { companies }:props = usePage().props

    //@ts-ignore
    $(document).ready(function() {
        //@ts-ignore
        $('#kt_datatable_example_5').DataTable();
        //@ts-ignore
        $('.dataTables_filter input[type="search"]').css(
            {'width':'145px','display':'inline-block'}
        );
    });


    // @ts-ignore
    return (

<CardWrapper>
        <table id="kt_datatable_example_5" className="table table-row-bordered gy-5 gs-7 border rounded">
            <thead>
            <tr className="fw-bolder fs-6 text-gray-800 px-7">
                <th>Name</th>
                <th>Code Name</th>
                <th>phone</th>
                <th>email</th>
                <th>Is Active</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {companies as props && companies.map((company: Company)=>(
                <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.code_name}</td>
                    <td>{company.phone}</td>
                    <td>{company.email}</td>
                    <td>{company.is_active? <span className="badge badge-light-primary">Active</span>:
                        <span className="badge badge-light-warning">In Active</span>}</td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle cssClass={"btn btn-sm btn-light btn-active-light-primary"} variant="success" id="dropdown-basic" as={CustomButtonDropdownToggle}>
                                Actions
                                <DropdownIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px">
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                        <InertiaLink href={route('companies.edit', company.id)} className="menu-link px-3" >Edit</InertiaLink>
                                </Dropdown.Item>
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                    <InertiaLink href={route('departments.index', company.id)} className="menu-link px-3" >View Departments</InertiaLink>
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
    children={page}  title="Companies"
    toolBarLeftContent={ <InertiaLink href={route('companies.create')} className="btn btn-primary">Add Company</InertiaLink>} />;

export default Index;
