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
import MultiSelectInput from "../../Shared/MultiSelectInput";

interface operation_year {
    id: number
    name: string
    code_name: string
    start_at: string
    end_at: string
    companies: company[],
    is_current: boolean
}


interface company {
    id: number
    name: string
    is_current?: boolean
}

function Edit() {
    const {operation_year, errors, companies} = usePage().props
    let checked: boolean = false;


    // @ts-ignore
    const [data, setData] = useState(
        {
        id: (operation_year as operation_year).id || '',
        name: (operation_year as operation_year).name || '',
        code_name: (operation_year as operation_year).code_name ||'',
        start_at: (operation_year as operation_year).start_at ||'',
        end_at: (operation_year as operation_year).end_at ||'',
        companies: (operation_year as operation_year).companies || [],
        is_current: (operation_year as operation_year).companies[0]?.is_current || checked,
    })
    const [loading, setLoading] = useState(false)

    function handleChange(e: { target: { id: any; value: any; }; }) {
        const key = e.target.id;
        // @ts-ignore
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setData(data => ({
            ...data,
            [key]: value,
        }))
    }

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setLoading(true)
        //@ts-ignore
        Inertia.put(route('operation-years.update', (operation_year as operation_year).id), data).then(() => {
            setLoading(false);
        })
    }

    function handleSelectChange(newValue: any, actionMeta: any) {

        if(actionMeta.action === 'select-option'){
            //@ts-ignore
            let stateValue = data[actionMeta.name].find(role=> (role === newValue))

            if(!stateValue) {
                // @ts-ignore
                setData(data => ({
                    ...data,
                    // @ts-ignore
                    [actionMeta.name]: newValue,
                }))
            }
        }

        if(actionMeta.action === 'remove-value') {

            // @ts-ignore
            setData(data => ({
                ...data,
                // @ts-ignore
                [actionMeta.name]: newValue,
            }))
        }

        if(actionMeta.action === 'clear'){

            // @ts-ignore
            setData(data => ({
                ...data,
                // @ts-ignore
                [actionMeta.name]: [],
            }))

        }

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
                        onChange={handleChange}
                    />
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Code Name"
                        placeholder="Code Name"
                        name="code_name"
                        type="text"
                        required
                        label_required={true}
                        errors={errors.code_name}
                        value={data.code_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Start Date"
                        placeholder="Start Date"
                        name="start_at"
                        type="date"
                        required
                        label_required={true}
                        errors={errors.start_at}
                        value={data.start_at}
                        onChange={handleChange}
                    />
                    <TextInput
                        className="mt-10 col-md-6"
                        label="End Date"
                        placeholder="End Date"
                        name="end_at"
                        type="date"
                        required
                        label_required={true}
                        errors={errors.end_at}
                        value={data.end_at}
                        onChange={handleChange}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <MultiSelectInput
                        className="mt-10 col-md-6"
                        label="Companies"
                        name="companies"
                        placeholder="Press enter to select new Company"
                        label_required={true}
                        errors={errors.companies}
                        value={data.companies}
                        options={companies}
                        onChange={handleSelectChange}
                    />
                    <CheckBoxInput
                        className="mt-10 col-md-6"
                        label="Is Current"
                        name="is_current"
                        checked={data.is_current}
                        errors={errors.is_current}
                        value={data.is_current}
                        onChange={handleChange}
                    />
                </div>
                <div className="fv-row">
                    <LoadingButton
                        type="submit"
                        loading={loading} >
                        Save
                    </LoadingButton>
                </div>
            </form>
        </CardWrapper>
    )
}

Edit.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Edit Operation Year"
 />;

export default Edit;
