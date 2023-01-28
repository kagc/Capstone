import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import { NavLink, Link, Route, useHistory } from 'react-router-dom'
import './Navigation.css'
import LogoutButton from "../auth/LogoutButton";
import { getUserProjects } from "../../store/project";

function ProfileButton({ user }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    useEffect(() => {
      dispatch(getUserProjects())
    }, [dispatch])
    // console.log(user)

    const userProjectsObj = useSelector(state => state.projects.usersProjects)
    const userProjects = Object.values(userProjectsObj)
    console.log(userProjects)
  
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

    if (!userProjectsObj) return null
  
    return (
      <div className='profile-button-div'>
        <button onClick={openMenu} className="profile-button"><i class="fa-solid fa-cat"></i></button>
        <div className={ulClassName} ref={ulRef}>
        <div className='modal-dropdown'>
          <div className='dropdown-container'>
            <div className='nav-box-user-data'>

              
            <div className="user-section"><div className="user-section-title">User Info</div>
              <div className="user-projects-container">
                <div className="user-link">Hello, {user.username}!</div>

              </div>
              </div>

              <div className="user-section"><div className="user-section-title">Project Directions</div>
              <div className="user-projects-container-BOTTOM">
                {userProjects.length ? (userProjects.map(project => {
                  return (
                      <Link onClick={closeMenu} to={`/projects/${project.id}`}>
                    <div className="user-link" key={project.id}>
                        
                        {project.title}
                        
                        </div>
                        </Link>
                  )
                })): (<div className="none-yet">No Directions Yet</div>)}

              </div>
              </div>

            </div>
              <LogoutButton />
          </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ProfileButton;