import React, {Component, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";

import Layout from "../../Shared/Layout";
// @ts-ignore
import TagInput from "../../Shared/TagInput";
import CheckBoxInput from "../../Shared/CheckBoxInput";
// @ts-ignore
import FileInput from "../../Shared/FileInput";
import CardWrapper from "../../Shared/CardWrapper";
import { User} from "../../Shared/Types";
import {Inertia} from "@inertiajs/inertia";


function Create() {
    const {companies, user, roles, errors} = usePage().props
    const [data, setData] = useState({
        username: (user as User).username || '',
        email: (user as User).email || '',
        password:  '',
        password_confirmation: '',
        roles: (user as User).account_roles || [],
        companies: (user as User).companies || [],
        is_active: (user as User).is_active || '',
        photo: '',
        send_reset_password_notification: false
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
        e.preventDefault()
        setLoading(true)
        // @ts-ignore
        Inertia.post(route('users.store'), data)
        setLoading(false)
    }


    function setPhoto(photo: string){
        setData(data => ({
            ...data,
            ['photo']: photo,
        }))
    }

    // @ts-ignore
    // @ts-ignore
    return(
        <CardWrapper>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Username"
                        placeholder="Username"
                        name="username"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.username}
                        value={data.username}
                        onChange={handleChange}
                    />
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
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Password"
                        placeholder="Password"
                        name="password"
                        type="password"
                        label_required={true}
                        required
                        errors={errors.password}
                        value={data.password}
                        onChange={handleChange}
                    />
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Password Confirmation"
                        placeholder="Password Confirmation"
                        name="password_confirmation"
                        type="password"
                        label_required={true}
                        required
                        errors={errors.password_confirmation}
                        value={data.password_confirmation}
                        onChange={handleChange}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TagInput
                        className="mt-10 col-md-6"
                        label="Companies"
                        name="companies"
                        placeholder="Press enter to select new Company"
                        label_required={true}
                        errors={errors.companies}
                        data={data}
                        tags={data.companies}
                        suggestions={companies}
                        callback={setData}
                    />
                    <TagInput
                        className="mt-10 col-md-6"
                        label="Roles"
                        name="roles"
                        placeholder="Press enter to select new Role"
                        label_required={true}
                        errors={errors.roles}
                        data={data}
                        tags={data.roles}
                        suggestions={roles}
                        callback={setData}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <FileInput
                        className="mt-10 col-md-6"
                        name="photo"
                        label="Photo"
                        accept="image/*"
                        required
                        label_required={true}
                        errors={errors.photo}
                        value={data.photo}
                        callback={setPhoto}
                    />
                    <CheckBoxInput
                        className="mt-10 col-md-6"
                        label="Is Active"
                        name="is_active"
                        label_required={true}
                        errors={errors.is_active}
                        checked={data.is_active}
                        value={data.is_active}
                        onChange={handleChange}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <CheckBoxInput
                        className="mt-10 col-md-6"
                        label="Send Reset Password Notification"
                        name="send_reset_password_notification"
                        checked={data.send_reset_password_notification}
                        errors={errors.send_reset_password_notification}
                        value={data.send_reset_password_notification}
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

Create.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Create Company"
 />;

export default Create;
