import React from "react";

interface Props {
    status: string
}

export default ({status}: Props) => {



    return (
        <div id="success-toast" aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight: "200px"}} >
            <div style={{position: "absolute", top: 0, right: 0}}>
                <div className="toast bg-primary" role="alert" aria-live="assertive" aria-atomic="true" data-autohide={true}>
                    <div className="toast-header">
                        <img src="" className="rounded mr-2" alt="..."/>
                            <strong className="mr-auto text-white">Success</strong>
                            <small className="text-muted text-white">just now</small>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="toast-body bg-primary text-white">
                        {status}
                    </div>
                </div>
            </div>
        </div>
    )
}
