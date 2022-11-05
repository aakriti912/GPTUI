import React from "react";

import {
    pendingAppointments,
    approvedAppointments,
    rejectedAppointments,
} from "../components/Appointments/parappointments"

import AppointmentsList from "../components/Appointments/appointments-list"

const Appointments = () => {
    return (
        <div className="ml-[400px]">
            <h2 className="text-xl">Hello, Pratik Bhandari</h2>
            <h5>Here are your appointments:</h5>

            <div className="mt-5">
                <AppointmentsList
                    list={pendingAppointments}
                    status="Pending"
                    role="user"
                />
            </div>

            <div className="mt-5">
                <AppointmentsList
                    list={approvedAppointments}
                    status="Approved"
                    role="user"
                />
            </div>

            <div className="mt-5">
                <AppointmentsList
                    list={rejectedAppointments}
                    status="Rejected"
                    role="user"
                />
            </div>
        </div>
    );
};

export default Appointments;