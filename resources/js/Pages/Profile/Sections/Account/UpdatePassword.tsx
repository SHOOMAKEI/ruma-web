import React from "react";
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import TextInput from "../../../../Shared/TextInput";
import LoadingButton from "../../../../Shared/LoadingButton";



export default () =>{
    const { data, setData, errors, post, processing } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        post(route('login'));
    }

    return (
        <>
            <div className="col-12">
                <div className="row col-lg-12">
                    <div className="col-lg-5">
                        <h4 className="header-title">Update Password</h4>
                        <small className="text-muted font-14">
                            Ensure you account is using long and random password to stay secure.
                        </small>
                    </div>
                    <div className="card col-lg-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <form onSubmit={handleSubmit}>
                                            <TextInput
                                                name="current_password"
                                                type="password"
                                                label="Current Password"
                                                placeholder="Current Password"
                                                errors={errors.current_password}
                                                value={data.current_password}
                                                onChange={(e: { target: { value: string; }; }) => setData('current_password', e.target.value)}
                                            />
                                            <TextInput
                                                name="password"
                                                type="password"
                                                label="Password"
                                                placeholder="Password"
                                                errors={errors.password}
                                                value={data.password}
                                                onChange={(e: { target: { value: string; }; }) => setData('password', e.target.value)}
                                            />
                                            <TextInput
                                                name="password_confirmation"
                                                type="password"
                                                label="Confirm Password"
                                                placeholder="Confirm Password"
                                                errors={errors.password_confirmation}
                                                value={data.password_confirmation}
                                                onChange={(e: { target: { value: string; }; }) => setData('password_confirmation', e.target.value)}
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
