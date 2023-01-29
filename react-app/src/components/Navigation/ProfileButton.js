import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import { NavLink, Link, Route, useHistory } from 'react-router-dom'
import './Navigation.css'
import LogoutButton from "../auth/LogoutButton";
import { getUserProjects } from "../../store/project";
import { getUserFavorites } from "../../store/favorite";

function ProfileButton({ user }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [ isLoaded, setIsLoaded ] = useState(false)
    const ulRef = useRef();

    const userProjectsObj = useSelector(state => state.projects.usersProjects)
    const userProjects = Object.values(userProjectsObj)
    const userFavoritesObj = useSelector(state => state.favorites.userFavorites)
    
    const userFavorites = Object.values(userFavoritesObj)
    // const userFavorites = useSelector(state => state.favorites.userFavoritesArray)
    // const filteredFavs = userFavorites.filter(fav => typeof fav.id === 'number')
    // console.log("AAAAAA",filteredFavs)

    useEffect(() => {
      dispatch(getUserProjects())
      dispatch(getUserFavorites())
      .then(setIsLoaded(true))
    }, [dispatch, showMenu])
    // console.log(user)
  
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
  
    return isLoaded && (
      <div className='profile-button-div'>
        <button onClick={openMenu} className="profile-button"><i class="fa-solid fa-cat"></i></button>
        <div className={ulClassName} ref={ulRef}>
        <div className='modal-dropdown'>
          <div className='dropdown-container'>
            <div className='nav-box-user-data'>

              
            <div className="user-section"><div className="user-section-title"><i class="fa-solid fa-shield-cat"></i> User Info</div>
              <div className="user-projects-container">
                <div className="user-link">Hello, {user.username}!</div>

              </div>
              </div>

              <div className="user-section"><div className="user-section-title"><i class="fa-solid fa-heart"></i> Favorites ({userFavoritesObj.total})</div>
              <div className="user-projects-container">
                {userFavoritesObj.total > 0 ? (userFavorites.map(fav => {
                  return (
                    <Link key={fav.id} onClick={closeMenu} to={`/projects/${fav.projectId}`}>
                      <div className="user-link">
                        {fav.title}
                      </div>
                    </Link>
                  )
                })) : (<div className="none-yet"> No Favorites Yet</div>)}

              </div>
              </div>

              <div className="user-section"><div className="user-section-title"><i class="fa-solid fa-scroll"></i> Project Directions</div>
              <div className="user-projects-container-BOTTOM">
                {userProjects.length ? (userProjects.map(project => {
                  return (
                      <Link key={project.id} onClick={closeMenu} to={`/projects/${project.id}`}>
                    <div className="user-link">
                        
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