import React, {Component, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../resources/js/Shared/LoadingButton";

import Layout from "../../../../../../../resources/js/Shared/Layout";
// @ts-ignore
import TagInput from "../../../../../../../resources/js/Shared/TagInput";
import CardWrapper from "../../../../../../../resources/js/Shared/CardWrapper";

import SelectInput from "../../../../../../../resources/js/Shared/SelectInput";
import TextAreaInput from "../../../../../../../resources/js/Shared/TextAreaInput";

interface leaveGroup {
    id: number
    title: string
    number_of_days: string
    description: string
}


function Edit() {
// @ts-ignore
    const {  leave_group } = usePage().props;
    const { data, setData, errors, put, processing } = useForm({
        name: (leave_group as leaveGroup).title || '',
        number_of_days: (leave_group as leaveGroup).number_of_days || '',
        description: (leave_group as leaveGroup).description || ''
    });



    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        put(route('leave-groups.update', (leave_group as leaveGroup).id));
    }

    // @ts-ignore
    return(
        <CardWrapper>
            <form onSubmit={handleSubmit} className="form w-100">
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Name"
                        placeholder="name"
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
                        label="Number of Days"
                        placeholder="Number of Days"
                        name="number_of_days"
                        required
                        type="number"
                        label_required={true}
                        errors={errors.number_of_days}
                        value={data.number_of_days}
                        onChange={(e: { target: { value: string; }; }) => setData('number_of_days', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextAreaInput
                        className="mt-10 col-md-12"
                        label="Description"
                        placeholder="Description"
                        name="description"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.description}
                        value={data.description}
                        onChange={(e: { target: { value: string; }; }) => setData('description', e.target.value)}
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
        </CardWrapper>
    )
}

Edit.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Edit Leave Group"
 />;

export default Edit;
