import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Navbar() {
    const { msg } = useParams();
    const [loginButton, setLoginButton] = useState(false);

    return <>
        <div className="navbar navbar-expand-lg shadow mb-3 bg-offwhite">
            <div className="collapse navbar-collapse container">
                <ul className="navbar-nav fw-semibold">
                    <li className="nav-itme me-2"><Link className="nav-link" to={"/"}>Home</Link></li>
                    <li className="nav-itme me-2"><Link className="nav-link" to={"/about"}>About</Link></li>
                    <li className="nav-itme me-2"><Link className="nav-link" to={"/shop"}>Shop</Link></li>
                    <li className="nav-itme me-2"><Link className="nav-link" to={"/student"}>Student</Link></li>
                </ul>
                <div className="btn-group border border-dark border-2">
                    {/* {loginButton ? "Log Out" : "Log In"} */}
                    <Link className="btn btn-danger btn-sm" to={"./login"}>Log In</Link>
                    <Link className="btn btn-success btn-sm" to={"./signup"}>Sign Up</Link>
                </div>
            </div>
        </div>
    </>
}