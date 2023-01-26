import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css'
import LogoutButton from "../auth/LogoutButton";
import ProfileButton from "./ProfileButton";

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();
    const history = useHistory()

    const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (!ulRef.current.contains(e.target)) {
                setShowMenu(false);
        }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

//   const loginpage = () => {

//   }

//   const signuppage = () => {

//   }

    return (
        <nav className="nav-container">
            <div className="navbar">
                <div className="left-nav">
                    <div><NavLink to="/">Icon/homelink</NavLink></div>
                </div>

                <div className="mid-nav">
                    Searchbar
                </div>

                {/* <div className="right-nav"> */}
                    {sessionUser === null ?
                        (
                            <div className="right-nav">
                                <div><NavLink to="/login" exact={true}><button className="login-button">Log In</button></NavLink></div>
                                <div><NavLink to="/sign-up" exact={true}><button className="signup-button">Sign Up</button></NavLink></div>
                            </div>
                            
                        )
                    : (
                        <div className="right-nav">
                            <div><NavLink to="/editor"><button className="signup-button">+ New</button></NavLink></div>
                            <div><ProfileButton /></div>
                        </div>
                    )}
                    
                {/* </div> */}
            </div>
        </nav>
    )
}

export default Navigation