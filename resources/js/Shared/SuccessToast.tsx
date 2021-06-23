import React, {useEffect, useState} from "react";
import {usePage} from "@inertiajs/inertia-react";
import {CloseIcon} from "./Icons/svg";



export default () => {
    const [visible, setVisible] = useState(false);
    const { status, errors } = usePage().props;

    useEffect(() => {
        if(status || errors === typeof Object) {
            setVisible(true);
        }
    }, [status, errors]);


    return (
        <div style={{position: "absolute", top: 64, right: 10, zIndex: 99999}}>
            <div className={`toast fade ${status? 'bg-success': 'bg-danger'} ${visible?'show':''}`} role="alert" aria-live="assertive" aria-atomic="true" data-autohide={true}>
                <div className="toast-header">
                        <strong className="mr-auto text-white">{status? 'Success': 'Error'}</strong>
                        <small className="text-muted text-white">just now</small>
                        <div onClick={()=> setVisible(false)} className="close btn btn-icon btn-sm btn-active-light-primary ms-2 mx-2" data-dismiss="toast" aria-label="Close">
                            <CloseIcon />
                        </div>
                </div>
                <div className={`toast-body ${status? 'bg-success': 'bg-danger'} text-white`}>
                    {status as string?status as string:''}
                    {/*{errors as string?errors as string:''}*/}
                    The resource at “http://127.0.0.1:8050/fonts/EuclidCircularB-Bold.ttf”
                    preloaded with link preload was not used within a few seconds.
                    Make sure all attributes of the preload tag are set correctly.
                </div>
            </div>
        </div>
    )
}
