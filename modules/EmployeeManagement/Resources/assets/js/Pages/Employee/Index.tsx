import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Layout from "../../../../../../../resources/js/Shared/Layout";
import route from "ziggy-js";
import {Company, Employee, User} from "../../../../../../../resources/js/Shared/Types";
import CardWrapper from "../../../../../../../resources/js/Shared/CardWrapper";
import {Dropdown} from "react-bootstrap";
import {CustomDropdownMenuItem, CustomButtonDropdownToggle} from '../../../../../../../resources/js/Shared/ToggleDropdown'
import { DropdownIcon } from "../../../../../../../resources/js/Shared/Icons/svg";


interface props {
    employees?: Employee []
    auth?: auth
    [key: string]: any
}

interface auth {
    employee: Employee
}

function renderJobStatus(job_status: any) {
    switch (job_status){
        case 'TERMINATED':
            return '<span className="badge badge-light-danger">Terminated</span>'
        case 'IN-ACTIVE':
            return '<span className="badge badge-light-warning">In Active</span>'
        case 'ACTIVE':
            return '<span className="badge badge-light-primary">Active</span>'
        case 'SUSPENDED':
            return '<span className="badge badge-light-warning">Suspended</span>'
        default:
            return '<span className="badge badge-light-primary">Active</span>'
    }
}

function Index()  {
    const { employees, auth }:props = usePage().props

    //@ts-ignore
    $(document).ready(function() {
        //@ts-ignore
        $('#account-data-table').DataTable();
    });


    // @ts-ignore
    return (

<CardWrapper>
        <table id="account-data-table" className="table table-row-bordered gy-5 gs-7 border rounded">
            <thead>
            <tr className="fw-bolder fs-6 text-gray-800 px-7">
                <th>ID Number</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {employees as props && (employees as props).map((employee: Employee)=>(
                <tr key={employee.id}>
                    <td>{employee.id_number}</td>
                    <td>{employee.surname} {' '} {employee.other_name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.mobile_number}</td>
                    <td dangerouslySetInnerHTML={{__html: renderJobStatus(employee.job_status)}}/>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle cssClass={"btn btn-sm btn-light btn-active-light-primary"} variant="success" id="dropdown-basic" as={CustomButtonDropdownToggle}>
                                Actions
                                <DropdownIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px">
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                        <InertiaLink href={route('employees.edit', employee.id)} className="menu-link px-3" >Edit</InertiaLink>
                                </Dropdown.Item>
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                    <InertiaLink href={route('employees.show', employee.id)} className="menu-link px-3" >Show</InertiaLink>
                                </Dropdown.Item>
                                <Dropdown.Item as={CustomDropdownMenuItem}>
                                    <InertiaLink href={route('employees.destroy', employee.id)} method="delete" className="menu-link px-3" >Delete</InertiaLink>
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
    children={page}  title="Employees"
    toolBarLeftContent={<><InertiaLink href={route('employee.import_employees')} className="btn btn-secondary mx-3">Import
        Employee</InertiaLink><InertiaLink href={route('employees.create')} className="btn btn-primary">Add
        Employee</InertiaLink></>} />;

export default Index;
