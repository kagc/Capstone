import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import { Link, Route, useHistory } from 'react-router-dom'
import './Navigation.css'
import LogoutButton from "../auth/LogoutButton";

function ProfileButton({ user }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();
  
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
  
    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
      closeMenu();
      history.push('/')
    };
  
    // let pClassName = "profile-button-outline"
    let ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
    // if (!user) {
    //   ulClassName = "profile-dropdown2" + (showMenu ? "" : " hidden")
    //   pClassName = "profile-button" 
    // }
  
    return (
      <div className='profile-button-div'>
        <button onClick={openMenu} className="profile-button"><i class="fa-solid fa-cat"></i></button>
        <div className={ulClassName} ref={ulRef}>
        <div className='modal-dropdown'>
              <LogoutButton />
            </div>
        </div>
      </div>
    );
  }
  
  export default ProfileButton;