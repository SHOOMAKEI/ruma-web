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
import  {Company,} from "../../Shared/Types";
import Permission from "./Permission";

interface props {
    permissions?: permission []
    [key:string]: any
}

interface permission {
    id: number
    name: string
    checked: boolean
}

function Edit() {
    const { permissions, role }: props = usePage().props
    // @ts-ignore
    const { data, setData, errors, put, processing } = useForm({
        name: role.name,
        permissions: role.permissions
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        put(route('roles.update', role.id));
    }

    //@ts-ignore
    function setPermission(permissions){
        setData(data => ({
            ...data,
            ['permissions']: permissions,
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
                        onChange={(e: { target: { value: string; }; }) => setData('name', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <Permission permissions={permissions} callback={setPermission}/>
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
    children={page}  title="Edit Role"
 />;

export default Edit;
