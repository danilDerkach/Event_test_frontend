import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import Events from "../events/Events";
import ManageEvent from "../manageEvent/ManageEvent";
import Login from "../login/Login";
import Register from "../register/Register";

const routs = [
    {path: "/", element: <Events/>, exact: false},
    {path: "/manageEvent", element: <ManageEvent/>, exact: false},
];

function Router(props) {
    const isAuthorized = false; //TODO: create login functionality
    return (
            <Routes>
            {isAuthorized ?
                routs.map(route => <Route key={route.path} {...route} />)
                :
                <>
                    <Route path="/signIn" element={<Login />} />
                    <Route path="/signUp" element={<Register />} />
                </>
            }
            </Routes>
    );
}

export default Router;