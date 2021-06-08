import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Layout from "../../Shared/Layout";
import route from "ziggy-js";
import {Company} from "../../Shared/Types";

interface props {
    company?: Company []
    [key: string]: any
}

function Index()  {
    const { companies }:props = usePage().props



    return (


        <table id="kt_datatable_example_5" className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
            <thead>
            <tr className="fw-bolder fs-6 text-gray-800 px-7">
                <th>Name</th>
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
                    <td>{company.phone}</td>
                    <td>{company.email}</td>
                    <td>{company.is_active}</td>
                    <td></td>
                </tr>
            ))}

            </tbody>
        </table>
    )
}

Index.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Companies"
    toolBarLeftContent={ <InertiaLink href={route('companies.create')} className="btn btn-primary">Add Company</InertiaLink>} />;

export default Index;
