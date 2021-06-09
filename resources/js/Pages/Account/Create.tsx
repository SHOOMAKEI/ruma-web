import React from "react";
import {InertiaLink, useForm} from "@inertiajs/inertia-react";
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
    const { data, setData, errors, post, processing } = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        roles: [],
        companies: [],
        is_active: true,
    });



    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('accounts.store'));
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
                        <TagInput
                            className="mt-10 col-md-6"
                            label="Currency"
                            placeholder="Currency"
                            name="currency"
                            label_required={true}
                            errors={errors.companies}
                            tags={data.companies}
                            suggestions={suggestions}
                            onChange={(e: { target: { value: string; }; }) => setData('companies', e.target.value)}
                        >
                            <option value="USD"> USD</option>
                            <option value="NGN"> NGN</option>
                            <option value="TZS"> TZS</option>
                            </TagInput>
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
                            onChange={(e: { target: { value: string; }; }) => setData('tax_number', e.target.value)}
                        />
                    </div>
                    <div className="fv-row mb-5 row">
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
                        onChange={(e: { target: { value: string; }; }) => setData('phone', e.target.value)}
                    />
                    <TextAreaInput
                        className="mt-10 col-md-6"
                        label="Address"
                        placeholder="Address"
                        name="address"
                        required
                        label_required={true}
                        errors={errors.address}
                        value={data.address}
                        onChange={(e: { target: { value: string; }; }) => setData('address', e.target.value)}
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
                        callback={setData}
                    />
                    <CheckBoxInput
                        className="mt-10 col-md-6"
                        label="Is Active"
                        name="is_active"
                        required
                        label_required={true}
                        errors={errors.is_active}
                        value={data.is_active}
                        onChange={(e: { target: { checked: boolean; }; }) => setData('is_active', e.target.checked)}
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
    children={page}  title="Create Company"
 />;

export default Create;
