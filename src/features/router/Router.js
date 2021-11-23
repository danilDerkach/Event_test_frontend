import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Events from "../events/Events";
import ManageEvent from "../manageEvent/ManageEvent";
import Login from "../login/Login";
import Register from "../register/Register";

const routs = [
    {path: "/", component: <Events/>, exact: false},
    {path: "/manage-event", component: <ManageEvent/>, exact: false},
];

function Router(props) {
    const isAuthorized = false;
    return (
        <Routes>
            {isAuthorized ?
                routs.map(route => <Route {...route} />)
                :
                <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </>
            }

        </Routes>
    );
}

export default Router;