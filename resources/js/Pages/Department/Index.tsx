import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Layout from "../../Shared/Layout";
import route from "ziggy-js";
import {Company} from "../../Shared/Types";
import CardWrapper from "../../Shared/CardWrapper";
import {Dropdown} from "react-bootstrap";
import {CustomDropdownMenuItem, CustomButtonDropdownToggle} from '../../Shared/ToggleDropdown'
import { DropdownIcon } from "../../Shared/Icons/svg";


interface props {
    department?: Department []
    [key: string]: any
}

interface Department {
    id: number
    name: string
    code_name: string
    parent_department: {id?: number, name?:string}
    company: {id: number, name:string}
}


function Index()  {
    const { departments, company }:props = usePage().props


    //@ts-ignore
    $(document).ready(function() {
        //@ts-ignore
        $('#department-data-table').DataTable();
    });

    // @ts-ignore
    return (

<CardWrapper>
        <table id="department-data-table" className="table table-row-bordered gy-5 gs-7 border rounded">
            <thead>
            <tr className="fw-bolder fs-6 text-gray-800 px-7">
                <th>Name</th>
                <th>Code Name</th>
                <th>Company</th>
                <th>Parent Department</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {departments as props && departments.map((department: Department)=>(
                <tr key={department.id}>
                    <td>{department.name}</td>
                    <td>{department.code_name}</td>
                    <td>{department.company.name}</td>
                    <td>{department.parent_department?.name}</td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle cssClass={"btn btn-sm btn-light btn-active-light-primary"} variant="success" id="dropdown-basic" as={CustomButtonDropdownToggle}>
                                Actions
                                <DropdownIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px">
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                        <InertiaLink href={route('departments.edit', department.id)} className="menu-link px-3" >Edit</InertiaLink>
                                </Dropdown.Item>
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                    <InertiaLink href={route('departments.child_department', department.id)} className="menu-link px-3" >Show Sub Department</InertiaLink>
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
    children={page}  title={`Departments`}
    toolBarLeftContent={ <InertiaLink href={route('departments.create')} className="btn btn-primary">Add Department </InertiaLink>} />;

export default Index;
