import React, {useContext} from "react";
import TextInput from "../../../../../../../../../resources/js/Shared/TextInput";
import LoadingButton from "../../../../../../../../../resources/js/Shared/LoadingButton";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import {SettingsContext} from "../../../../../../../../../resources/js/Shared/Contexts/SettingsContexts";


class FileInput extends React.Component<{ errors: any, label: string, callback: any, name: string, value: any }> {
    render() {
        return null;
    }
}

export default  () => {
    // @ts-ignore
    const {auth,errors}  = useContext(SettingsContext)

    const { data, setData, post, processing } = useForm({
        username: auth.user.username,
        email: auth.user.email,
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('settings.updateAccountInfo'));
    }


    return (
        <>
            <div className="col-12">
                <div className="row col-lg-12">
                    <div className="col-lg-5">
                        <h4 className="header-title">Account Information</h4>
                        <small className="text-muted font-14">
                            Update your account's information, email address and mobile number.
                            make sure your provider valid information because we will use them to send security code
                            and other notification.
                        </small>
                    </div>
                    <div className="card col-lg-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <form onSubmit={handleSubmit} >
                                            <TextInput
                                                name="username"
                                                type="text"
                                                label="Username"
                                                placeholder="Username"
                                                errors={errors.username}
                                                value={data.username}
                                                onChange={(e: { target: { value: string; }; }) => setData('username', e.target.value)}
                                            />
                                            <TextInput
                                                name="email"
                                                type="text"
                                                label="Email"
                                                placeholder="Email"
                                                errors={errors.email}
                                                value={data.email}
                                                onChange={(e: { target: { value: string; }; }) => setData('email', e.target.value)}
                                            />
                                            <div className="form-group mb-0 text-right">
                                                <LoadingButton
                                                    type="submit"
                                                    className="btn btn-primary btn-md"
                                                    loading={processing}
                                                >
                                                    Save Changes
                                                </LoadingButton>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
