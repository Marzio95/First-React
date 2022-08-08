import React from "react";

const Header: React.FC<{logout: () => void}> =({logout}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"    data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand" href="#">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Attori</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">

                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Link
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarScrollingDropdown">
                                <li>
                                    <a onClick={ logout } className="dropdown-item" href="#">Logout</a>
                                </li>                   
                            </ul>       

                        </li>
                    </ul>

                </div>
            </div>
        </nav>)

}

export default Header;
