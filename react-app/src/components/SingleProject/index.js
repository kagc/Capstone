import './SingleProject.css'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getOneProject } from '../../store/project';

const SingleProject = () => {
    const { projectId } = useParams()
    const dispatch = useDispatch()

    const project = useSelector(state => state.projects.singleProject)
    console.log("anything?",project)

    useEffect(() => {
        dispatch(getOneProject(projectId))
    }, [dispatch])

    if (!project) return null

    return (
        <div>
            {project.title}
            
        </div>
    )
}

export default SingleProject