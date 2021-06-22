import InformationSectionTemplate from "../Information/Section";
import SearchBar from "../../../../../../../../../resources/js/Shared/SearchBar";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Employee, Shop} from "../../../../../../../../../resources/js/Shared/Types";

interface Props {
    employee: Employee
}

const AVAILABLE_SHOPS: Array<Shop> = [
    {id: 1, name: 'Xiaomi shop'},
    {id: 2, name: 'Readme shop'},
    {id: 3, name: 'Dummy shop'},
    {id: 4, name: 'Zed-net shop'},
    {id: 5, name: 'Whoeing shop'},
    {id: 6, name: 'Shengzang shop'},
    {id: 7, name: 'Just dummy data shop'},
]

function ShopsSection({employee}: Props) {
    const [shownAvailableShops, setShownAvailableShops] = useState<Array<Shop>>(AVAILABLE_SHOPS);
    const [assignedShops, setAssignedShops] = useState<Array<Shop>>([]);
    const [shownAssignedShops, setShownAssignedShops] = useState<Array<Shop>>([]);

    useEffect(() => {
        const newAssignedShops: Array<Shop>  = [];
        newAssignedShops.push(AVAILABLE_SHOPS[5]);
        newAssignedShops.push(AVAILABLE_SHOPS[6]);

        setAssignedShops(newAssignedShops);
        setShownAssignedShops(newAssignedShops);
    }, [])

    function searchAvailableShops(text: string) {
        if (text.length === 0) {
            setShownAvailableShops(AVAILABLE_SHOPS);
            return;
        }

        setShownAvailableShops(AVAILABLE_SHOPS.filter(shop => {
            if (shop.name?.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
                return shop;
            }
        }))
    }

    function searchShownAssignedShops(text: string) {
        if (text.length === 0) {
            setShownAssignedShops(assignedShops);
            return;
        }

        setShownAssignedShops(assignedShops.filter(shop => {
            if (shop.name?.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
                return shop;
            }
        }))
    }


    function assignShop(shop: Shop) {
        const newAssignedShops: Array<Shop>  = assignedShops.filter(_shop => {
            if (_shop.id !== shop.id) {
                return _shop
            }
        });

        newAssignedShops.push(shop);

        setAssignedShops(newAssignedShops);
        setShownAssignedShops(newAssignedShops);
    }

    function removeShop(shop: Shop) {
        const newAssignedShops: Array<Shop>  = assignedShops.filter(_shop => {
            if (_shop.id !== shop.id) {
                return _shop
            }
        })

        setAssignedShops(newAssignedShops);
        setShownAssignedShops(newAssignedShops);
    }

    return (
        <div className="flex-grow-1">
            <div className="row">
                <div className="col-md-6">
                    <h5 className="mb-5">Available shops</h5>
                    <SearchBar onSearch={searchAvailableShops} placeHolder={'Search available shops'} />
                    <div className="mt-7">
                        {
                            shownAvailableShops.map(shop => (
                                <div className="d-flex align-items-center justify-content-between mb-5" key={shop.id}>
                                    <div className="text-gray-400">{shop.name}</div>
                                    <div className="text-gray-800">
                                        <button
                                            className="btn btn-sm btn-light-primary ms-5"
                                            onClick={() => assignShop(shop)}>
                                            Assign
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-1"/>
                <div className="col-md-5">
                    <h5 className="mb-5">Assigned shops</h5>
                    <SearchBar onSearch={searchShownAssignedShops} placeHolder={'Search assigned shops'} />
                    <div className="mt-7">
                        {
                            shownAssignedShops.map(shop => (
                                <div className="d-flex align-items-center justify-content-between mb-5" key={shop.id}>
                                    <div className="text-gray-400">{shop.name}</div>
                                    <div className="text-gray-800">
                                        <button
                                            className="btn btn-sm btn-light-danger ms-5"
                                            onClick={() => removeShop(shop)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSectionTemplate({
    title: 'Shops',
    Content: ShopsSection,
    modalId: 'zones-information-modal',
    showEditButton: false,
});
