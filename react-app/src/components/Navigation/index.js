import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css'
import LogoutButton from "../auth/LogoutButton";
import ProfileButton from "./ProfileButton";
import icon from "../../images/directablesLogo.png"

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

  const submitSearch = async (e) => {
    e.preventDefault()
    alert("Sorry, that function hasn't been implemented yet.")
  }

    return (
        <nav className="nav-container">
            <div className="navbar">
                <div className="left-nav">
                    <div><NavLink to="/"><img className="logo-img" src={icon}></img></NavLink></div>
                </div>

                <div className="mid-nav">
                    <div className="searchbar-container">
                        <form className="searchform">
                        <input
                        className="search-input"
                        type="text"
                        disabled="true"
                        placeholder="Search Coming Soon!"></input>
                        
                        <button onClick={submitSearch} className="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
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
                            <div><ProfileButton user={sessionUser}/></div>
                        </div>
                    )}
                    
                {/* </div> */}
            </div>
        </nav>
    )
}

export default Navigation