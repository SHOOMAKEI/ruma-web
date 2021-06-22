import InformationSectionTemplate from "../Information/Section";
import SearchBar from "../../../../../../../../../resources/js/Shared/SearchBar";
import React, {ChangeEvent, useState} from "react";
import {Employee, SaleZone} from "../../../../../../../../../resources/js/Shared/Types";

interface Props {
    employee: Employee
}

const zones: Array<SaleZone> = [
    {id: 1, name: 'North zone', code_name: 'NZ'},
    {id: 2, name: 'East zone', code_name: 'EZ'},
    {id: 3, name: 'South zone', code_name: 'SZ'},
    {id: 4, name: 'West zone', code_name: 'WZ'},
    {id: 5, name: 'Lagos', code_name: 'LG'},
]

function ZonesSection({employee}: Props) {
    const [shownZones, setShownZones] = useState<Array<SaleZone>>(zones);
    const [selectedZone, setSelectedZone] = useState<SaleZone>(zones[0]);

    // this is here to mimic the process of assigning zones to sales managers
    // it will be removed once we connect with api
    // TODO: REMOVE THIS AFTER CONNECTION WITH THE API
    const [assignedZone, setAssignedZone] = useState<SaleZone>(zones[0]);

    function searchZones(text: string) {
        if (text.length === 0) {
            setShownZones(zones);
            return;
        }

        setShownZones(zones.filter(zone => {
            if (zone.name?.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
                return zone;
            }
        }))
    }

    function assignZone() {
        if (shownZones.length > 1) {
            setAssignedZone(selectedZone);
        } else {
            setAssignedZone(shownZones[0]);
        }
    }

    function selectZone(event: ChangeEvent<HTMLSelectElement>) {
        zones.map(zone => {
            // @ts-ignore
            if (zone.id == event.target.value) {
                setSelectedZone(zone);
            }
        })
    }

    return (
        <div className="flex-grow-1">
            <div className="d-flex mb-5">
                <div className="text-gray-400 w-125px">Assigned Zone</div>
                <div className="text-gray-800">{assignedZone.name}</div>
            </div>
            <h5 className="mb-5">Assign new zone</h5>
            <SearchBar onSearch={searchZones} placeHolder={'Search zones'} />
            <div className="d-flex my-5">

                <select className="form-select" aria-label="Select example" onChange={selectZone}>
                    {
                        shownZones.map(zone => (
                            <option
                                value={zone.id}
                                key={zone.code_name}>
                                {zone.name}
                            </option>
                        ))
                    }
                </select>

                {
                    shownZones.length > 0 && (
                        <button className="btn btn-light-primary ms-5" onClick={assignZone}>
                            Assign
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Zones',
    Content: ZonesSection,
    modalId: 'zones-information-modal',
    showEditButton: false,
});
