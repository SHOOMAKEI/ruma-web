import React, {Component, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../resources/js/Shared/LoadingButton";

import Layout from "../../../../../../../resources/js/Shared/Layout";
// @ts-ignore
import TagInput from "../../../../../../../resources/js/Shared/TagInput";
import CheckBoxInput from "../../../../../../../resources/js/Shared/CheckBoxInput";
// @ts-ignore

import CardWrapper from "../../../../../../../resources/js/Shared/CardWrapper";
import SelectInput from "../../../../../../../resources/js/Shared/SelectInput";
import TextAreaInput from "../../../../../../../resources/js/Shared/TextAreaInput";
import MultiSelectInput from "../../../../../../../resources/js/Shared/MultiSelectInput";

interface type {
    name: string
}

interface contract_definition {
    type: type []
}

function Create() {

    // @ts-ignore
    const { contract_types, leave_groups } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        title: '',
        type: '',
        description: '',
        leave_groups:[]
    });

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
        e.preventDefault();
        post(route('contract-definitions.store'));
    }


    // @ts-ignore
    return(
        <CardWrapper>
                <form onSubmit={handleSubmit} className="form w-100">
                    <div className="fv-row mb-5 row">
                        <TextInput
                            className="mt-10 col-md-6"
                            label="Title"
                            placeholder="title"
                            name="title"
                            type="text"
                            label_required={true}
                            required
                            errors={errors.title}
                            value={data.title}
                            onChange={(e: { target: { value: string; }; }) => setData('title', e.target.value)}
                        />
                        <SelectInput
                            className="mt-10 col-md-6"
                            label="Type"
                            placeholder="Type"
                            name="type"
                            required
                            label_required={true}
                            errors={errors.type}
                            value={data.type}
                            onChange={(e: { target: { value: string; }; }) => setData('type', e.target.value)}
                        >

                            {
                                //@ts-ignore
                                contract_types as contract_definition && (contract_types as contract_definition).map((type: type)=>(
                                    <option value={type.name}>{type.name.replace('-', ' ')}</option>
                                    )
                                )
                            }

                        </SelectInput>
                    </div>
                    <div className="fv-row mb-5 row">
                        <TextAreaInput
                            className="mt-10 col-md-6"
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
                        <MultiSelectInput
                            className="mt-10 col-md-6"
                            label="Leave Groups"
                            name="leave_groups"
                            placeholder="Press enter to select new Leave Group"
                            label_required={true}
                            errors={errors.leave_groups}
                            value={data.leave_groups}
                            options={leave_groups}
                            onChange={handleSelectChange}
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

Create.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Create Contract Definition"
 />;

export default Create;
