import {ChangeEvent} from "react";
import {SearchIcon} from "./Icons/svg";
import React from "react";

interface Props {
    onSearch: (text: string) => void;
    placeHolder: string;
}

export default function SearchBar({onSearch, placeHolder}: Props) {

    function _onSearch(event: ChangeEvent<HTMLInputElement>) {
        onSearch(event.target.value);
    }

    return (
        <div className="d-flex align-items-center position-relative my-1">
            <SearchIcon extraClasses={'position-absolute ms-3'} />
            <input
                type="text"
                data-kt-customer-table-filter="search"
                className="form-control form-control-sm form-control-solid w-250px ps-11"
                placeholder={placeHolder}
                onChange={_onSearch}
            />
        </div>
    )
}
