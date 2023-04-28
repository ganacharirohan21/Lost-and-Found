import React from "react";
import "./style.css";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="logo">
                        <a href="/#">
                            <span>L</span>ost                            
                            <span>&</span>
                            <span>F</span>ound
                        </a>
                    </div>
                    {/* Buttons */}
                    <div className="nav-buttons">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/found">Found</a>
                            </li>
                            <li>
                                <a href="/lost">Lost</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
