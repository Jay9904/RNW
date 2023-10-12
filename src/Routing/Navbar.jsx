import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return <>
        <div className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse container">
                <ul className="navbar-nav fw-semibold">
                    <li className="nav-itme me-2"><Link className="nav-link" to={"/"}>Home</Link></li>
                    <li className="nav-itme me-2"><Link className="nav-link" to={"/about"}>About</Link></li>
                    <li className="nav-itme me-2"><Link className="nav-link" to={"/shop"}>Shop</Link></li>
                    <li className="nav-itme me-2"><Link className="nav-link" to={"/student"}>Student</Link></li>
                </ul>
            </div>
        </div>
    </>
}