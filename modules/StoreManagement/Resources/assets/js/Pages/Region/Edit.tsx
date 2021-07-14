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
    geopolitical_zone_id: number
    latitude: number
    longitude: number
}


function Edit() {
    // @ts-ignore
    const { region, geopolitical_zones } = usePage().props;
    const { data, setData, errors, put, processing } = useForm({
        name: (region as geopoliticalZone).name  || '',
        code_name: (region as geopoliticalZone).code_name ||'',
        geopolitical_zone_id: (region as geopoliticalZone).geopolitical_zone_id || '',
        longitude: (region as geopoliticalZone).longitude || '',
        latitude: (region as geopoliticalZone).latitude || ''
    });

    const defaultPosition= {
        lat: (region as geopoliticalZone).latitude ==0?9.081999:(region as geopoliticalZone).latitude,
        lng: (region as geopoliticalZone).longitude==0?8.675277:(region as geopoliticalZone).longitude
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
        put(route('regions.update', (region as geopoliticalZone).id));
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
                        label="Geopolitical Zone"
                        placeholder="Geopolitical Zone"
                        name="geopolitical_zone_id"
                        label_required={true}
                        required
                        errors={errors.geopolitical_zone_id}
                        value={data.geopolitical_zone_id}
                        onChange={(e: { target: { value: string; }; }) => setData('geopolitical_zone_id', e.target.value)}
                    >
                        {
                            //@ts-ignore
                            geopolitical_zones && geopolitical_zones.map((geopolitical_zone: {id:string, name: string}) =>(
                                <option key={Math.random()} value={geopolitical_zone.id}>{geopolitical_zone.name}</option>
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

Edit.layout = (page: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Layout
    children={page}  title="Edit State"
 />;

export default Edit;
