import React, {useEffect, useState} from "react";
import {usePage} from "@inertiajs/inertia-react";
import {CloseIcon} from "./Icons/svg";



export default () => {
    const [visible, setVisible] = useState(false);
    const { status, errors } = usePage().props;

    useEffect(() => {

        if(status !== null) {
            setVisible(true);
        }

        if(!(JSON.stringify(errors) === JSON.stringify({}))) {
            setVisible(true);
        }

    }, [status, errors]);


    return (
        <div style={{position: "absolute", top: 64, right: 10, zIndex: 99999, display: visible?'block': 'none'}}>
            <div className={`toast fade ${status? 'bg-success': 'bg-danger'} ${visible?'show':''}`} role="alert" aria-live="assertive" aria-atomic="true" data-autohide={true}>
                <div className="toast-header">
                        <strong className="w-150px text-dark">{status? 'Success': 'Error'}</strong>
                        <small className="mx-3 text-muted text-white">just now</small>
                        <div onClick={()=> setVisible(false)} className="close btn btn-icon btn-sm btn-active-light-primary ms-2 mx-2" data-dismiss="toast" aria-label="Close">
                            <CloseIcon />
                        </div>
                </div>
                <div className={`toast-body ${status? 'bg-success': 'bg-danger'} text-white`}>
                    {status as string?status as string:''}
                    {JSON.stringify(errors) === JSON.stringify({})?'':JSON.stringify(errors)}

                </div>
            </div>
        </div>
    )
}
