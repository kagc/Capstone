import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { nukeProject } from "../../store/project";
import { useModal } from '../../context/Modal';
import './unpubProjectModal.css'

const ConfirmUnpublish = ({project}) => {
    // const ulRef = useRef();
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()

    const unpublish = async (e) => {
        e.preventDefault()

        const data = await dispatch(nukeProject(project.id))
        if (data){
            closeModal()
            history.push('/')
        }
    }

    return (
        <div className='confirmation-box'>
            <div className="confirm-topline">Confirm Unpublish</div>
            <div className="deleting-line">
                <div className="delete-line-title">Permanently delete project directions for <span><span className="name-of-project">{project.title}</span>?</span></div>
            
            <div className="warning">This action cannot be undone.</div>
            </div>
            <div>
                <div className="confirm-buttons-holder">
                   <div className="confirm-buttons"><button className="sure-button" onClick={unpublish}>Yes, I'm sure</button></div> 
                    <div className="confirm-buttons">
                    <button className='unsure-button' onClick={closeModal}>No, I've changed my mind</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default ConfirmUnpublish