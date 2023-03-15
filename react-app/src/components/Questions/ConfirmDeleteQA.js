import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import { nukeProject } from "../../store/project";
import { useModal } from '../../context/Modal';
import { removeQuestion, unAnswer } from "../../store/question";


const ConfirmDeleteQA = ({info, type}) => {
    // const ulRef = useRef();
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()

    const deleteQuestion = async (e) => {
        e.preventDefault()
        const data = await dispatch(removeQuestion(info.id))
        if (data) closeModal()
        // const data = await dispatch(nukeProject(project.id))
        // if (data){
        //     closeModal()
        //     history.push('/')
        // }
    }

    const deleteAnswer = async (e) => {
        e.preventDefault()
        const data = await dispatch(unAnswer(info.id))
        if (data) closeModal()
        // const data = await dispatch(nukeProject(project.id))
        // if (data){
        //     closeModal()
        //     history.push('/')
        // }
    }

    return (
        <div className='confirmation-box'>
            {type === 'question' ? (
            <><div className="confirm-topline">Confirm Delete</div>
            <div className="deleting-line">
                <div className="delete-line-title">Permanently this question?</div>
            
            <div className="warning">This action cannot be undone.</div>
            </div>
            <div>
                <div className="confirm-buttons-holder">
                   <div className="confirm-buttons"><button className="sure-button" onClick={deleteQuestion}>Yes, I'm sure</button></div> 
                    <div className="confirm-buttons">
                    <button className='unsure-button' onClick={closeModal}>No, I've changed my mind</button>
                </div>
                </div>
                
            </div>
            </>
            ): (
                <><div className="confirm-topline">Confirm Delete</div>
                <div className="deleting-line">
                    <div className="delete-line-title">Permanently this answer?</div>
                
                <div className="warning">This action cannot be undone.</div>
                </div>
                <div>
                    <div className="confirm-buttons-holder">
                       <div className="confirm-buttons"><button className="sure-button" onClick={deleteAnswer}>Yes, I'm sure</button></div> 
                        <div className="confirm-buttons">
                        <button className='unsure-button' onClick={closeModal}>No, I've changed my mind</button>
                    </div>
                    </div>
                    
                </div>
                </>
            )}
            
        </div>
    )
}

export default ConfirmDeleteQA