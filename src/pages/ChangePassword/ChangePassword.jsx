import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as apiService from "../../modules/service/apiService";
import { Notification } from "../../components/Notification/Notification";

const ChangePassword = () => {
    const { id, resetstring } = useParams();
    const [formChangePass, setFormChangePass] = useState(false);
    const [msg, setMsg] = useState("");
    const [data, setData] = useState({
        pass: "",
        confirmPass: "",
    });

    useEffect(() => {
        const fetchApiVerifyResetPass = async () => {
            const res = await apiService.verifyResetPassword(id, resetstring);
            if (res.code === 200) {
                setFormChangePass(true);
            } else {
                setFormChangePass(false);
                setMsg(res.message);
            }
        };
        fetchApiVerifyResetPass();
    }, []);

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        const res = await apiService.updatePassword(
            id,
            data.pass,
            data.confirmPass
        );
        if (res.code === 200) {
            Notification("Đổi mật khẩu", res.message, "success");
        } else {
            Notification("Đổi mật khẩu", res.message, "error");
        }
        setData({ ...data, pass: "", confirmPass: "" });
    };

    return (
        <>
            {formChangePass ? (
                <form className="w-full">
                    <div className="max-w-[450px] mt-[40vh] m-auto border-[2px] bg-gray-200 rounded-lg text-center p-3">
                        <label htmlFor="">
                            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                                Update your password
                            </h1>
                        </label>
                        <div className="flex">
                            <input
                                className="w-full my-2 h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                type="password"
                                value={data.pass}
                                placeholder="Create new password"
                                onChange={(e) =>
                                    setData({ ...data, pass: e.target.value })
                                }
                            />
                        </div>
                        <div className="flex">
                            <input
                                className="w-full my-2 h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                type="password"
                                value={data.confirmPass}
                                placeholder="Confirm new password"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        confirmPass: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <button
                            onClick={handleUpdatePassword}
                            className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md my-2 duration-300"
                        >
                            Update Password
                        </button>
                    </div>
                </form>
            ) : (
                <div className="w-full">
                    <div className="max-w-[450px] mt-[40vh] m-auto border-[2px] bg-gray-200 rounded-lg text-center p-3">
                        <h3 className="text-base font-medium my-2">{msg}</h3>
                        <Link to="/signin">
                            <span className="hover:text-blue-600 duration-300 text-red-600 my-2">
                                Sign in
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChangePassword;
