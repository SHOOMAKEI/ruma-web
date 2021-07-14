import EmployeeEditModal from "./Modal";
import React, {useCallback, useContext, useEffect, useState} from "react";
import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";
import {Employee} from "../../../../../../../../../resources/js/Shared/Types";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import SelectInput from "../../../../../../../../../resources/js/Shared/SelectInput";
import {EmployeeContext} from "../../../../Shared/Contexts/Contexts";

interface Props {
    modalId: string;
    employee: Employee;
}

interface EmploymentInfoValuesType {
    employment_status: string;
    job_status: string;
}


export default function EmploymentContractModal({modalId}: Props) {


    // @ts-ignore
    const {employee, contract_definitions}  = useContext(EmployeeContext)

    return (
        <EmployeeEditModal modalId={modalId+'-show'} title={'Show Contract Information'}>
            <div className="py-0">
                <table className="table table-row-dashed table-row-gray-300 gy-3">
                    <thead>
                    <tr className="fw-bolder fs-6 text-gray-800">
                        <th>Contract</th>
                        <th>Stated At</th>
                        <th>Ended At</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        employee.contracts.length>0? employee.contracts.map((contract :{id:number, started_at: string, ended_at:string,status:string, contract_definition: {id:number,title:string, type:string, description:string }}) =>(
                            <tr key={Math.random()}>
                                <td>{contract.contract_definition.title} - {contract.contract_definition.type}</td>
                                <td>{contract.started_at}</td>
                                <td>{contract.ended_at}</td>
                                <td>{contract.status}</td>
                            </tr>
                        )):
                        <tr>
                            <td colSpan={4}>No Contract Found.</td>
                        </tr>
                    }

                    </tbody>
                </table>
            </div>
        </EmployeeEditModal>
    )
}
