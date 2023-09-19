import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineCheck, AiOutlineEdit } from "react-icons/ai";

const Profile = () => {
    const userLogin = useSelector((state) => state.orebiReducer.userInfo);
    console.log({ userLogin });
    const [updateUser, setUpdateUser] = useState({
        name: "",
        phone: "",
        address: "",
        image: "",
    });
    const [save, setSave] = useState(false);
    return (
        <div className="flex p-3">
            <div className="mx-auto p-3 lg:w-[60%] w-full border">
                <div className="p-2">
                    <h1 className="font-bold text-2xl">My profile</h1>
                </div>
                <div className="flex">
                    <div className="w-[70%]">
                        <InputProfile
                            name="Name"
                            data={userLogin[0].data.name}
                            setSave={setSave}
                        />
                        <InputProfile
                            name="Phone"
                            data={userLogin[0].data.phone}
                            setSave={setSave}
                        />
                        <InputProfile
                            name="Address"
                            data={userLogin[0].data.address}
                            setSave={setSave}
                        />
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <div className="w-[100px] h-[100px] border rounded-[50%]">
                            <img src={updateUser.image} alt="" />
                        </div>
                        <input
                            type="file"
                            value={updateUser.image}
                            onChange={(e) =>
                                setUpdateUser({
                                    ...updateUser,
                                    image: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                {save && (
                    <button
                        // onClick={handleSignIn}
                        className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                    >
                        Save
                    </button>
                )}
            </div>
        </div>
    );
};

export default Profile;

export const InputProfile = ({ name, data, setSave }) => {
    const [edit, setEdit] = useState(false);
    const [val, setVal] = useState(data);
    const handleEdit = () => {
        setEdit(true);
        setSave(true);
    };
    const handleCheck = () => {
        setEdit(false);
    };
    return (
        <div className="flex w-full p-3">
            <label className="w-[20%] font-medium text-gray-600">{name}</label>
            <div className="w-[80%] flex items-centers">
                {edit ? (
                    <>
                        <input
                            type="text"
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                            className="w-[90%] h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                        />
                        <div
                            onClick={handleCheck}
                            className="w-[10%] px-1 hover:cursor-pointer"
                        >
                            <AiOutlineCheck className="h-full" />
                        </div>
                    </>
                ) : (
                    <>
                        <span className="w-[90%] h-8 font-bold">{val}</span>
                        <div
                            onClick={handleEdit}
                            className="w-[10%] px-1 hover:cursor-pointer"
                        >
                            <AiOutlineEdit className="h-full" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
