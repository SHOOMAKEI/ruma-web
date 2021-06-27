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
import {Country} from "../../../../../../../resources/js/Shared/Types";
// @ts-ignore
import LocationPicker from 'react-location-picker';

interface geopoliticalZone {
    id: number
    name: string
    code_name: string
    phone: string
    email: string
    address: string
    location: string
    district_id: number
    latitude: number
    longitude: number
}


function Edit() {
    // @ts-ignore
    const { shop, districts } = usePage().props;
    const { data, setData, errors, put, processing } = useForm({
        name: (shop as geopoliticalZone).name  || '',
        code_name: (shop as geopoliticalZone).code_name ||'',
        district_id: (shop as geopoliticalZone).district_id || '',
        email: (shop as geopoliticalZone).email || '',
        phone: (shop as geopoliticalZone).phone || '',
        address: (shop as geopoliticalZone).address || '',
        location: (shop as geopoliticalZone).location || '',
        longitude: (shop as geopoliticalZone).longitude || '',
        latitude: (shop as geopoliticalZone).latitude || ''
    });

    const defaultPosition= {
        lat: (shop as geopoliticalZone).latitude ==0?9.081999:(shop as geopoliticalZone).latitude,
        lng: (shop as geopoliticalZone).longitude==0?8.675277:(shop as geopoliticalZone).longitude
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
        put(route('shops.update', (shop as geopoliticalZone).id));
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
                        className="mt-10 col-md-6"
                        label="LAG"
                        placeholder="LAG"
                        name="district_id"
                        label_required={true}
                        required
                        errors={errors.district_id}
                        value={data.district_id}
                        onChange={(e: { target: { value: string; }; }) => setData('district_id', e.target.value)}
                    >
                        {
                            //@ts-ignore
                            districts && districts.map((district: {id:string, name: string}) =>(
                                <option key={Math.random()} value={district.id}>{district.name}</option>
                            ))
                        }

                    </SelectInput>
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Location"
                        placeholder="Location"
                        name="location"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.location}
                        value={data.location}
                        onChange={(e: { target: { value: string; }; }) => setData('location', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Address"
                        placeholder="Address"
                        name="address"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.address}
                        value={data.address}
                        onChange={(e: { target: { value: string; }; }) => setData('address', e.target.value)}
                    />
                </div>
                <div className="fv-row mb-5 row">
                    <TextInput
                        className="mt-10 col-md-6"
                        label="Phone"
                        placeholder="Phone"
                        name="phone"
                        type="text"
                        label_required={true}
                        required
                        errors={errors.phone}
                        value={data.phone}
                        onChange={(e: { target: { value: string; }; }) => setData('phone', e.target.value)}
                    />
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
                        onChange={(e: { target: { value: string; }; }) => setData('email', e.target.value)}
                    />
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

Edit.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Edit Shop"
 />;

export default Edit;
