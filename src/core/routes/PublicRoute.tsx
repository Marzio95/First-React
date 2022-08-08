
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Login from "../../features/login/Login";


const PublicRoute: React.FC<{loginAction: () => void}> = ({loginAction}) => {

    return (
        <div>
           <Route exact path="/">
                <Login loginAction={loginAction} />
           </Route>
            <Redirect from="*" to="/" />
        </div>
    )
}

export default PublicRoute;