import React, {useEffect, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";
import Layout from "../../Shared/Layout";
import Index from "./Index";
import TextAreaInput from "../../Shared/TextAreaInput";
// @ts-ignore
import TagInput from "../../Shared/TagInput";
import CheckBoxInput from "../../Shared/CheckBoxInput";
// @ts-ignore
import FileInput from "../../Shared/FileInput";
import CardWaper from "../../Shared/CardWaper";

function Create() {
    const {companies, roles} = usePage().props
    const [file, setFile] = useState('');

    const { data, setData, errors, post, processing } = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        roles: [],
        companies: [],
        is_active: true,
        photo: '',
        send_reset_password_notification: false
    });



    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('users.store'));
    }
    // @ts-ignore
    useEffect((file:string)=> {
        console.log(data.photo)
        console.log(file)
        setData('photo', file)
        console.log(data.photo)
        console.log(file)
    },[file])

    function setPhoto(photo: string){
        console.log(photo)
        console.log(data.photo)
        setData('photo', photo)
        setFile(photo)
        console.log(data.photo)
        console.log(file)
    }

    return(
        <CardWaper>
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
                            onChange={(e: { target: { value: string; }; }) => setData('username', e.target.value)}
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
                            onChange={(e: { target: { value: string; }; }) => setData('email', e.target.value)}
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
                            onChange={(e: { target: { value: string; }; }) => setData('password', e.target.value)}
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
                            onChange={(e: { target: { value: string; }; }) => setData('password_confirmation', e.target.value)}
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
                            tags={companies}
                            suggestions={companies}
                            callback={setPhoto}
                        />
                        <TagInput
                            className="mt-10 col-md-6"
                            label="Roles"
                            name="roles"
                            placeholder="Press enter to select new Role"
                            label_required={true}
                            errors={errors.roles}
                            tags={roles}
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
                        callback={setFile}
                    />
                    <CheckBoxInput
                        className="mt-10 col-md-6"
                        label="Is Active"
                        name="is_active"
                        label_required={true}
                        errors={errors.is_active}
                        checked={data.is_active}
                        value={data.is_active}
                        onChange={(e: { target: { checked: boolean; }; }) => setData('is_active', e.target.checked)}
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
                            onChange={(e: { target: { checked: boolean; }; }) => setData('send_reset_password_notification', e.target.checked)}
                        />
                    </div>
                    <div className="fv-row">
                        <LoadingButton
                            type="submit"
                            loading={processing} >
                            Save
                        </LoadingButton>
                    </div>
                </form>
        </CardWaper>
    )
}

Create.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Create User Account"
 />;

export default Create;
