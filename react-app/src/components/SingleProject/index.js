import './SingleProject.css'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getOneProject } from '../../store/project';
import EditProject from '../EditProject';

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

            <div>
                <Link to={`/editor/${project.id}`} >
                    Edit
                    {/* <EditProject oneProject={project} /> */}
                </Link>
            </div>

        </div>
    )
}

export default SingleProject