import React, {useEffect, useState} from "react";
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
import {Inertia} from "@inertiajs/inertia";
import MultiSelectInput from "../../Shared/MultiSelectInput";
import Permission from "../Role/Permission";

interface permission {
    id: number
    name: string
    checked: boolean
}

interface props {
    permissions?: permission []
    [key:string]: any
}

function Create() {
    const {companies, roles, permissions, errors}: props = usePage().props
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        roles: [],
        companies: [],
        is_active: true,
        photo: '',
        permissions: [],
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

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()
        setLoading(true)
        // @ts-ignore
        Inertia.post(route('users.store'), data).then(() => {
            setLoading(false);
        })
    }


    function setPhoto(photo: string){
        setData(data => ({
            ...data,
            ['photo']: photo,
        }))
    }

    //@ts-ignore
    function setPermission(permissions){
        setData(data => ({
            ...data,
            ['permissions']: permissions,
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
                        <MultiSelectInput
                            className="mt-10 col-md-6"
                            label="Roles"
                            name="roles"
                            placeholder="Press enter to select new Role"
                            label_required={true}
                            errors={errors.roles}
                            value={data.roles}
                            options={roles}
                            onChange={handleSelectChange}
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
                        <h4 className="py-4">Direct Permissions</h4>
                        <Permission permissions={permissions} callback={setPermission}/>
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
    children={page}  title="Create User Account"
 />;

export default Create;
