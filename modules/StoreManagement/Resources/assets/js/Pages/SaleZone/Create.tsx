import React, {Component, useState} from "react";
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../resources/js/Shared/LoadingButton";
// @ts-ignore
import LocationPicker from 'react-location-picker';

import Layout from "../../../../../../../resources/js/Shared/Layout";
// @ts-ignore
import TagInput from "../../../../../../../resources/js/Shared/TagInput";
import CheckBoxInput from "../../../../../../../resources/js/Shared/CheckBoxInput";
// @ts-ignore

import CardWrapper from "../../../../../../../resources/js/Shared/CardWrapper";
import SelectInput from "../../../../../../../resources/js/Shared/SelectInput";
import TextAreaInput from "../../../../../../../resources/js/Shared/TextAreaInput";
import MultiSelectInput from "../../../../../../../resources/js/Shared/MultiSelectInput";



function Create() {

    // @ts-ignore
    const { sale_zonables } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        name: '',
        code_name: '',
        sale_zonables: [],
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
        post(route('sale-zones.store'));
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
                            label="Code Name"
                            placeholder="Code Name"
                            name="code_name"
                            type="text"
                            label_required={true}
                            required
                            errors={errors.code_name}
                            value={data.code_name}
                            onChange={(e: { target: { value: string; }; }) => setData('code_name', e.target.value)}
                        />
                    </div>
                    <div className="fv-row mb-5 row">
                        <MultiSelectInput
                            className="mt-10 col-md-12"
                            label="Location"
                            name="sale_zonables"
                            placeholder="Press enter to select new location"
                            label_required={true}
                            errors={errors.sale_zonables}
                            value={data.sale_zonables}
                            options={sale_zonables}
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
    children={page}  title="Create Region"
 />;

export default Create;
