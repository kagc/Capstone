import './SingleProject.css'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getOneProject } from '../../store/project';
import EditProject from '../EditProject';

const SingleProject = () => {
    const { projectId } = useParams()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    
    const project = useSelector(state => state.projects.singleProject)
    console.log(project)

    useEffect(() => {
        dispatch(getOneProject(projectId))
    }, [dispatch, projectId])
    // console.log("anything?",project.stepsList)


    if (!project) return null

    return (
        <div className="wholething">
            <div className="single-proj-content">

            
            <div className="titlebar">{project.title}</div>
            <div className="misc-infobar">By {project.creatorInfo.username} in {project.category}<div className="favsNum"><i class="fa-solid fa-heart"></i>(#Favs)</div></div>

            <div className="sub-titlebar">
                <div>Publish Date</div>
                <div><button className="fav-button"><i class="fa-solid fa-heart"></i>Favorite</button></div>
            </div>


            <div className="image-container"><img className="img" src={`${project.coverImageUrl}`}></img></div>

            {/* <div className="single-proj-section">Creator Info For Future</div> */}


            <div className="single-proj-section">{project.intro}</div>

            <div className="interaction-section">
                <div className="interact-bar">

                    <div><i class="fa-solid fa-circle-question"></i>Ask Question</div> 
                <div><i class="fa-solid fa-comments"></i>Comment</div></div>

                <div className="line-break"></div></div>

                <div className="single-step-title">Supplies</div>
                <div className="single-proj-section">{project.supplies}</div>



                <div className="interaction-section">
                <div className="interact-bar">

                    <div><i class="fa-solid fa-circle-question"></i>Ask Question</div> 
                <div><i class="fa-solid fa-comments"></i>Comment</div></div>

                <div className="line-break"></div></div>

            {project.stepsList.map(step => {
                return (
                    <div>
                        <div className="single-step-title">Step {step.stepNum}: {step.stepTitle}</div>
                    <div className="single-proj-section">
                        <div>{step.stepDescription}</div>
                    </div>



                    <div className="interaction-section">
                <div className="interact-bar">

                    <div><i class="fa-solid fa-circle-question"></i>Ask Question</div> 
                <div><i class="fa-solid fa-comments"></i>Comment</div></div>

                <div className="line-break"></div></div>

                
                    </div>
                )
            })}

            {currentUser.id === project.creatorInfo.id && (<div id="edit-float">
                <div className="admin-corner">Admin
                    <Link to={`/editor/${project.id}`} >
                    <button className="edit-button">Edit Directable</button>
                    {/* <EditProject oneProject={project} /> */}
                </Link>
                </div>
                
            </div>)}

        </div>
        </div>
    )
}

export default SingleProject