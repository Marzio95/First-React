import React, { useState } from "react";
import { useHistory } from "react-router";
import { UserModel } from "../../model/User.model";
import { HttpBase } from "../../shared/utils/Http";

interface UserLogin {
    email?: string;
    password?: string;
}

const Login: React.FC<{loginAction: () => void}> = ({loginAction}) => {

    const [userData, setUserData] = useState<UserLogin>({}); // partial serve per avere un oggetto con campi opzionali

    const history = useHistory();

    const loginHandler: React.FormEventHandler<HTMLFormElement> = (event) => {

        event.preventDefault();

        HttpBase.post<{token: string, user: UserModel}>( `${process.env.REACT_APP_URL}login` , userData, {headers: {'Content-Type': 'application/json'}})
            .then(res => {
            localStorage.setItem('token', res.data.token);
            loginAction && loginAction()
            history.push('/users');
       })
    }

    const changeData: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value}); // sfrutto l attributo name del tag input per avere il nome del campo dinamico
    }

    return (
        <div>
            <h1>Login</h1>
            <h2>{JSON.stringify(userData)}</h2>
            <form onSubmit={loginHandler}>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" onChange={changeData} value={userData.email || ''} />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" name="password" onChange={changeData} value={userData.password || ''} />
                </div>

                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login;