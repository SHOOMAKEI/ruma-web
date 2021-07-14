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


function Edit() {
    const {company, errors} = usePage().props
    let checked: boolean = false;

    const [data, setData] = useState({
        id: (company as Company).id || '',
        name: (company as Company).name || '',
        code_name: (company as Company).code_name || '',
        email: (company as Company).email || '',
        phone: (company as Company).phone,
        currency: (company as Company).currency || '',
        tax_number: (company as Company).tax_number || '',
        address: (company as Company).address || '',
        is_active: (company as Company).is_active || (checked),
        logo: ''
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
        Inertia.put(route('companies.update', (company as Company).id), data).then(() => {
            setLoading(false);
        })
    }
    function setLogo(photo: string){
        setData(data => ({
            ...data,
            ['photo']: photo,
        }))
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
                        label_required={true}
                        required
                        errors={errors.code_name}
                        value={data.code_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <SelectInput
                        className="mt-10 col-md-6"
                        label="Currency"
                        placeholder="Currency"
                        name="currency"
                        type="text"
                        required
                        label_required={true}
                        errors={errors.currency}
                        value={data.currency}
                        onChange={handleChange}
                    >
                        <option value="USD"> USD</option>
                        <option value="NGN"> NGN</option>
                        <option value="TZS"> TZS</option>
                    </SelectInput>
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Tax Number"
                        placeholder="Tax Number"
                        name="tax_number"
                        type="text"
                        required
                        label_required={true}
                        errors={errors.tax_number}
                        value={data.tax_number}
                        onChange={handleChange}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Email"
                        placeholder="Email"
                        name="email"
                        type="text"
                        required
                        label_required={true}
                        errors={errors.email}
                        value={data.email}
                        onChange={handleChange}
                    />
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Phone"
                        placeholder="Phone"
                        name="phone"
                        type="text"
                        required
                        label_required={true}
                        errors={errors.phone}
                        value={data.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextAreaInput
                        className="mt-10 col-md-12"
                        label="Address"
                        placeholder="Address"
                        name="address"
                        required
                        label_required={true}
                        errors={errors.address}
                        value={data.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <FileInput
                        className="mt-10 col-md-6"
                        name="logo"
                        label="Logo"
                        accept="image/*"
                        required
                        label_required={true}
                        errors={errors.logo}
                        value={data.logo}
                        callback={setLogo}
                    />
                    <CheckBoxInput
                        className="mt-10 col-md-6"
                        label="Is Active"
                        name="is_active"
                        required
                        checked={data.is_active}
                        label_required={true}
                        errors={errors.is_active}
                        value={data.is_active}
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
    children={page}  title="Edit Company"
 />;

export default Edit;
