

import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo-black.png"
import user from "../assets/user.jpg"
import { AuthContext } from '../context/authContex';

const Navigation = () =>{
    const {currentUser, logout} = useContext(AuthContext);
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
                        <Link to='/category/?cat=blockchain'>Blockchain</Link>
                        <Link to='/category/?cat=trading'>Trading</Link>
                        <Link to='/category/?cat=crypto'>Crypto</Link>
                        <Link to='/category/?cat=nft'>NFT</Link>
                        <Link to='/category/?cat=ai'>AI</Link>
                    </div>
                    {currentUser ? 
                    <div className="user">
                        <div className="user-box">
                            <div className="user-img"  onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                                <img src={user} alt="" />
                            </div>
                            {isMenuVisible && (
                            <div className="user-link">
                                <Link to="/write" onClick={toggleMenu}>Write</Link>
                                <Link to="/dashboard" onClick={toggleMenu}>Profile</Link>
                                <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
                                <Link to="/dashboard" onClick={toggleMenu}>Change Password</Link>
                                <Link onClick={logout}>Logout</Link>
                            </div>
                                )}
                        </div>

                    </div>
                    :
                    <Link to='/login' className='login-btn'>Login</Link>
                        }
                </div>
            </div>
        </div>
    );
};

export default Navigation;