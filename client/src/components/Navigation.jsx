

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo-black.png"
import user from "../assets/user.jpg"

const Navigation = () =>{
    const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

    return(
        <div className="navigation">
            <div className="navigation-con">
                <div className="nav-left">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="links">
                        <Link to='/'>Blockchain</Link>
                        <Link to='/'>Trading</Link>
                        <Link to='/'>Crypto</Link>
                        <Link to='/'>NFT</Link>
                        <Link to='/'>AI</Link>
                    </div>
                    <div className="user">
                        <div className="user-box">
                            <div className="user-img"  onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                                <img src={user} alt="" />
                            </div>
                            {isMenuVisible && (
                            <div className="user-link">
                                <Link>Profile</Link>
                                <Link>Dashboard</Link>
                                <Link>Change Password</Link>
                                <Link>Logout</Link>
                            </div>
                                )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;