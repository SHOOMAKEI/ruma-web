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



function Create() {

    // @ts-ignore
    const { countries } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        name: '',
        code_name: '',
        country_id: '',
        longitude: '',
        latitude: ''
    });

    const defaultPosition= {
        lat: 9.081999,
        lng: 8.675277
    }

   // @ts-ignore
    function handleLocationChange ({ position, address, places }) {

        // @ts-ignore
        setData(
            data => ({
                ...data,
                ['longitude']: position.lng,
                ['latitude']: position.lat,
            })
        );
    }

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('geopolitical-zones.store'));
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
                        <SelectInput
                            className="mt-10 col-md-12"
                            label="Country"
                            placeholder="Country"
                            name="country_id"
                            label_required={true}
                            required
                            errors={errors.country_id}
                            value={data.country_id}
                            onChange={(e: { target: { value: string; }; }) => setData('country_id', e.target.value)}
                        >
                            {
                                //@ts-ignore
                                countries && countries.map((country: {id:string, name: string}) =>(
                                    <option key={Math.random()} value={country.id}>{country.name}</option>
                                ))
                            }

                        </SelectInput>

                    </div>
                    <div className="fv-row row mb-5">
                        <label className="h4 mb-3 fw-light required form-label">Location</label>
                        <LocationPicker
                            containerElement={ <div style={ {height: '100%'} } /> }
                            mapElement={ <div style={ {height: '400px'} } /> }
                            defaultPosition={defaultPosition}
                            onChange={handleLocationChange}
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
    children={page}  title="Create Geopolitical Zone"
 />;

export default Create;
