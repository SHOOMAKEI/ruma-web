import {Employee, Permission, Role, User} from "../../Shared/Types";
import React, {useEffect, useState} from "react";
import SearchBar from "../../Shared/SearchBar";
import CheckBoxInput from "../../Shared/CheckBoxInput";


interface Props {
    user?: User
    permissions?: permission []
    [key:string]: any
}

interface permission {
    id: number
    name: string
    checked: boolean
}

interface filterType {
    id: string;
    name: string;
}

const FILTERS: Array<filterType> = [
    {id: '1', name: 'Read'},
    {id: '2', name: 'Create'},
    {id: '3', name: 'Update'},
    {id: '4', name: 'Delete'},
]

export default ({user, permissions, callback}: Props) => {
    const [selectedPermissions, setSelectedPermissions] = useState<Array<permission>>();
    const [selectedPermission, setSelectedPermission] = useState<Array<permission>>();
    const [shownPermissions, setShownPermissions] = useState<Array<permission>>();
    const [activeFilter, setActiveFilter] = useState<filterType>(FILTERS[0]);


    useEffect(() => {
        setShownPermissions(permissions);
    }, [permissions])

    function searchPermissions(text: string) {
        if (text.length === 0) {
            setShownPermissions(permissions);
            return;
        }

        setShownPermissions(
            permissions?.filter(permission => {
                if (permission.name?.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
                    return permission
                }
            })
        )
    }

    function handleChange(e: { target: { id: any; value: any; }; }, permission: permission, i:number) {
        const key = e.target.id;
        // @ts-ignore
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        let newPer: permission = {id:permission.id, name:permission.name, checked: !permission.checked }
        // @ts-ignore
        setSelectedPermission(newPer)

        // @ts-ignore
        let newTags: permission [] = shownPermissions.filter((permission, index) => index !== i)

        newTags[i] = newPer;
        // @ts-ignore
        let inserted = newTags

        setShownPermissions(inserted)
        callback(shownPermissions)
    }

    return (
        <div>
            <div className="row mb-5">
                <div className="col">
                    <SearchBar onSearch={searchPermissions} placeHolder="Search permissions" />
                </div>
            </div>
            <div className="row mb-8">
                <div className="col d-flex">
                    {
                        FILTERS.map(filter => (
                            <button
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`btn btn-sm btn-flex ${filter.id === activeFilter.id ? 'btn-primary' : 'btn-light-primary'} me-3`}>
                                {filter.name}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="row">
                {
                    shownPermissions?.map((permission , index) => {
                        if (permission.name?.toLocaleLowerCase().includes(activeFilter.name.toLocaleLowerCase())) {
                            return (
                                <div className="col-md-4" key={Math.random()}>
                                        <CheckBoxInput
                                            key={Math.random()}
                                            label={`can ${permission.name?.split('.')[1].replace('_', ' ')} ${permission.name?.split('.')[0].replace('_', ' ')}`}
                                            type="checkbox"
                                            name="permission"
                                            checked={permission.checked}
                                            value={permission.checked}
                                            errors=''
                                            onChange={(e: { target: { id: any; value: any; }; }) => handleChange(e, permission, index)} />

                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
