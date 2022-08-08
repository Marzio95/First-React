import React from "react";
import { Redirect, Route } from "react-router-dom";
import Users from "../../features/users/Users";
import Header from "../Header";

const AuthRoute: React.FC<{logout: () => void}> = ({logout}) => {

    return (
        <div>
            <Header logout={logout} />
            <Route exact path="/users" component={Users} />
            <Redirect from="*" to="/users" />
        </div>
    )
}

export default AuthRoute;