import React, {Component, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";
import AuthFramework from "../Auth/AuthFramework";
import Layout from "../../Shared/Layout";
import Index from "./Index";
import TextAreaInput from "../../Shared/TextAreaInput";
import SelectInput from "../../Shared/SelectInput";
import CheckBoxInput from "../../Shared/CheckBoxInput";
// @ts-ignore
import FileInput from "../../Shared/FileInput";
import CardWrapper from "../../Shared/CardWrapper";
import {Company} from "../../Shared/Types";
import {Inertia} from "@inertiajs/inertia";

interface props {
    companies: Company []
    department: {id: number, name: string, code_name:string, company_id:number, parent_department_id:number }
    [key:number]:any
}
function Edit() {
    // @ts-ignore
    const { companies, department, departments }: props = usePage().props
    // @ts-ignore
    const { data, setData, errors, put, processing } = useForm({
        name: department.name || '',
        code_name: department.code_name || '',
        // @ts-ignore
        company_id: department.company_id || '',
        parent_department_id: department.parent_department_id || ''
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        put(route('departments.update',department.id));
    }

    return(
        <CardWrapper>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Name"
                        placeholder="Name"
                        name="name"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.name}
                        value={data.name}
                        onChange={(e: { target: { value: string; }; }) => setData('name', e.target.value)}
                    />
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Code Name"
                        placeholder="Code Name"
                        name="code_name"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.code_name}
                        value={data.code_name}
                        onChange={(e: { target: { value: string; }; }) => setData('code_name', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <SelectInput
                        className="mt-10 col-md-6"
                        label="Company"
                        placeholder="Company"
                        name="company_id"
                        required
                        label_required={true}
                        errors={errors.company_id}
                        value={data.company_id}
                        onChange={(e: { target: { value: string; }; }) => setData('company_id', e.target.value)}
                    >
                        {
                            // @ts-ignore
                            companies && companies.map( company => (
                                <option value={company.id} key={Math.random()}> {company.name}</option>
                            ))
                        }
                    </SelectInput>
                    <SelectInput
                        className="mt-10 col-md-6"
                        label="Parent Department"
                        placeholder="Parent Department"
                        name="parent_department_id"
                        errors={errors.parent_department_id}
                        value={data.parent_department_id}
                        onChange={(e: { target: { value: string; }; }) => setData('parent_department_id', e.target.value)}
                    >
                        <option value="" disabled>Select Parent Department</option>
                        {
                            // @ts-ignore
                            departments && departments.map( dep => (
                                <option value={dep.id} key={Math.random()}> {dep.name} - {dep.company}</option>
                            ))
                        }
                    </SelectInput>
                </div>

                <div className="fv-row">
                    <LoadingButton
                        type="submit"
                        loading={processing} >
                        Save
                    </LoadingButton>
                </div>
            </form>
        </CardWrapper>
    )
}

Edit.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Edit Department"
 />;

export default Edit;
