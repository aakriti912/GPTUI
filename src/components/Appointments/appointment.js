import React from "react";

const Appointment = ({
    _id,
    user,
    doctor,
    phone,
    status,
    role = "doctor",
    index,
}) => {
    const btnClassName = "px-3 py-1 rounded";

    return (
        <div>
            {
                index === 0 &&  <div className="flex items-center justify-between capitalize text-sm bg-gray-200 py-2 px-2 text-gray-700 font-semibold">
                <p className="block text-center w-full border border-blue-300">{role}</p>
                <p className="block text-center w-full  border border-blue-300 ">
                    phone
                </p>
                <p className="block text-center w-full  border border-blue-300">
                    status
                </p>
                <p className="block text-center w-full  border border-blue-300">
                    action
                </p>
            </div>
            }
            
           
            
            
        <div
            className={`flex items-center justify-between  py-2 px-2 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
            }`}
        >
            <div className="flex flex-col">
                <span className="capitalize">
                    {role === "doctor" ? user?.username : doctor?.username}
                </span>
                <span className="text-sm text-gray-600">
                    {role === "doctor" ? user?.email : doctor?.email}
                </span>
            </div>

            <div className="text-sm text-gray-600">
                <span>{phone}</span>
            </div>

            <div className="px-5">
                <span className="text-gray-600">{status}</span>
            </div>

            {status === "pending" && role === "doctor" ? (
                <div className="flex flex-col space-y-2 ml-7">
                    <button className={`${btnClassName} bg-blue-400`}>
                        Approve
                    </button>
                    <button className={`${btnClassName} bg-red-400`}>
                        Reject
                    </button>
                </div>
            ) : (
                <button className={`${btnClassName} bg-red-400`}>delete</button>
            )}
        </div>
            </div>

    );
};

export default Appointment;