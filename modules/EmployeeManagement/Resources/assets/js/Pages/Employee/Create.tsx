import React, {Component, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../../../../../../resources/js/Shared/TextInput";
import SelectInput from "../../../../../../../resources/js/Shared/SelectInput";
import LoadingButton from "../../../../../../../resources/js/Shared/LoadingButton";

import Layout from "../../../../../../../resources/js/Shared/Layout";
// @ts-ignore
import TagInput from "../../../../../../../resources/js/Shared/TagInput";
import CheckBoxInput from "../../../../../../../resources/js/Shared/CheckBoxInput";
// @ts-ignore
import FileInput from "../../../../../../../resources/js/Shared/FileInput";
import CardWrapper from "../../../../../../../resources/js/Shared/CardWrapper";
import  { User} from "../../../../../../../resources/js/Shared/Types";
import {Inertia} from "@inertiajs/inertia";
import MultiSelectInput from "../../../../../../../resources/js/Shared/MultiSelectInput";
import Permission from "../../../../../../../resources/js/Pages/Role/Permission";

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
        gender: '',
        surname: '',
        other_name: '',
        alternative_email: '',
        alternative_mobile_number: '',
        mobile_number: '',
        region: '',
        location: '',
        position: '',
        address: '',
        resumption_date: '',
        due_date: '',
        date_of_birth: '',
        email: '',
        password: '',
        password_confirmation: '',
        roles: [],
        companies: [],
        is_active: true,
        photo: '',
        permissions: [],
        create_account: false,
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
        Inertia.post(route('employees.store'), data).then(() => {
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
                    <div className="">
                        <h4 className="py-4">Profile Information</h4>
                        <div className="fv-row mb-5 row">
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Surname"
                                placeholder="Surname"
                                name="surname"
                                type="text"
                                label_required={true}
                                required
                                errors={errors.surname}
                                value={data.surname}
                                onChange={handleChange}
                            />
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Other Name"
                                placeholder="Other Name"
                                name="other_name"
                                type="text"
                                required
                                label_required={true}
                                errors={errors.other_name}
                                value={data.other_name}
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
                                label_required={true}
                                required
                                errors={errors.email}
                                value={data.email}
                                onChange={handleChange}
                            />
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Mobile Number"
                                placeholder="Mobile Number"
                                name="mobile_number"
                                type="text"
                                required
                                label_required={true}
                                errors={errors.mobile_number}
                                value={data.mobile_number}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="fv-row mb-5 row">
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Alternative Email"
                                placeholder="Alternative Email"
                                name="alternative_email"
                                type="text"
                                errors={errors.alternative_email}
                                value={data.alternative_email}
                                onChange={handleChange}
                            />
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Alternative Mobile Number"
                                placeholder="Alternative Mobile Number"
                                name="alternative_mobile_number"
                                type="text"
                                errors={errors.alternative_mobile_number}
                                value={data.alternative_mobile_number}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="fv-row mb-5 row">
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Region"
                                placeholder="Region"
                                name="region"
                                type="text"
                                label_required={true}
                                required
                                errors={errors.region}
                                value={data.region}
                                onChange={handleChange}
                            />
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Location"
                                placeholder="Location"
                                name="location"
                                type="text"
                                required
                                label_required={true}
                                errors={errors.location}
                                value={data.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="fv-row mb-5 row">
                            <SelectInput
                                className="mt-10 col-md-6"
                                label="Position"
                                placeholder="Position"
                                name="position"
                                label_required={true}
                                required
                                errors={errors.position}
                                value={data.position}
                                onChange={handleChange}
                            >
                                {
                                    roles && roles.map((role: {label:string, value: string}) =>(
                                        <option value={role.value}>{role.label.replace('-', ' ')}</option>
                                    ))
                                }

                            </SelectInput>
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Address"
                                placeholder="Address"
                                name="address"
                                type="text"
                                required
                                label_required={true}
                                errors={errors.address}
                                value={data.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="fv-row mb-5 row">
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Resumption Date"
                                placeholder="Resumption Date"
                                name="resumption_date"
                                type="date"
                                label_required={true}
                                required
                                errors={errors.resumption_date}
                                value={data.resumption_date}
                                onChange={handleChange}
                            />
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Due Date"
                                placeholder="Due Date"
                                name="due_date"
                                type="date"
                                required
                                label_required={true}
                                errors={errors.due_date}
                                value={data.due_date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="fv-row mb-5 row">
                            <TextInput
                                className="mt-10 col-md-6"
                                label="Date Of Birth"
                                placeholder="Date Of Birth"
                                name="date_of_birth"
                                type="date"
                                label_required={true}
                                required
                                errors={errors.date_of_birth}
                                value={data.date_of_birth}
                                onChange={handleChange}
                            />
                            <SelectInput
                                className="mt-10 col-md-6"
                                label="Gender"
                                placeholder="Gender"
                                name="gender"
                                required
                                label_required={true}
                                errors={errors.gender}
                                value={data.gender}
                                onChange={handleChange}
                            >
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                            </SelectInput>
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

                        </div>
                        <div className="fv-row mb-5 row">
                            <CheckBoxInput
                                className="mt-10 col-md-6"
                                label="Create Account"
                                name="create_account"
                                errors={errors.create_account}
                                checked={data.create_account}
                                value={data.create_account}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div style={{display:data.create_account?'block': 'none'}}>
                        <h4 className="py-5">Account Information</h4>
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
                            <CheckBoxInput
                                className="mt-10 col-md-12"
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
    children={page}  title="Create Employee"
 />;

export default Create;
