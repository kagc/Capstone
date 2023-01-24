//action types
const LOAD_PROJECTS = 'projects/loadProjects'
const LOAD_ONE = 'projects/loadOne'
const USER_PROJECTS = 'projects/userProjects'
const ADD_PROJECT = 'projects/addProject'
const EDIT_PROJECT = 'projects/editProject'
const DELETE_PROJECT = 'projects/deleteProject'

const ADD_STEP = "projects/addStep"
const EDIT_STEP = "projects/editStep"
const DELETE_STEP = "projects/deleteStep"

//action creators
const allProjects = (projects) => ({
    type: LOAD_PROJECTS,
    projects
})

const oneProject = (project) => ({
    type: LOAD_ONE,
    project
})

const usersProjects = (projects) => ({
    type: USER_PROJECTS,
    projects
})

const add = (project) => ({
    type: ADD_PROJECT,
    project
})

const edit = (projectId) => ({
    type: EDIT_PROJECT,
    projectId
})

const destroy = (projectId) => ({
    type: DELETE_PROJECT,
    projectId
})

const unstep = (stepId) => ({
    type: DELETE_STEP,
    stepId
})

//thunks
export const getAllProjects = () => async dispatch => {
    const response = await fetch(`/api/projects`);

    if (response.ok){
        const projects = await response.json()
        dispatch(allProjects(projects))
        return projects
    }
}

export const getOneProject = (projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}`);

    if (response.ok){
        const project = await response.json()
        dispatch(oneProject(project))
    }
}

export const getUserProjects = () => async dispatch => {
    const response = await fetch(`/api/projects/current`);

    if (response.ok){
        const projects = await response.json()
        dispatch(usersProjects(projects))
    }
}

export const makeProject = (newProject, newStepsArr) => async dispatch => {
    const response = await fetch(`/api/projects`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProject)
    })
    if (response.ok){
        // const createdProject = await response.json()
        for (let i = 0; i < newStepsArr.length; i++) {
            const step = newStepsArr[i]
            const response2 = await fetch(`/api/projects/${createdProject.id}/steps`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(step)
            })
            
            // if (response2.ok){
            //     dispatch(add(createdProject))
            //     return createdProject
            // }
        }
        // if (response.ok && response2.ok){
            const createdProject = await response.json()
            dispatch(add(createdProject))
            return createdProject
        // }
    }
}

export const modProject = (projectData, stepsDataArr) => async dispatch => {
    const response = await fetch(`/api/projects/${projectData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
    })
    if (response.ok){
        // const revisedProject = await response.json()
        for (let i = 0; i < stepsDataArr.length; i++){
            const step = stepsDataArr[i]
            const response2 = await fetch(`/api/steps/${step.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(step)
            })

            // if(response2.ok){
            //     const revisedProject = await response.json()
            // }
        }
        const revisedProject = await response.json()
        dispatch(oneProject(revisedProject))
        return revisedProject
    }
}

export const nukeProject = (projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const deletedProject = await response.json()
        dispatch(destroy(projectId))
        return deletedProject
    }
}

export const nukeStep = (stepId) => async dispatch => {
    const response = await fetch(`/steps/${stepId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const deletedStep = await response.json()
        dispatch(unstep(stepId))
    }
}

const initialState = { allProjects: {}, singleProject: {}, usersProjects: {} }

//reducer
const projectsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {

        case LOAD_PROJECTS:
            newState = { ...state, allProjects: {} }
            action.projects.Projects.forEach(project => {
                newState.allProjects[project.id] = project
            })
            return newState

        case LOAD_ONE:
            newState = { ...state, singleProject: {}}
            newState.singleProject = action.project
            return newState

        case USER_PROJECTS:
            newState = { ...state, usersProjects: {} }
            action.projects.Projects.forEach(project => {
                newState.usersProjects[project.id] = project
            })
            return newState

        case ADD_PROJECT:
            newState = { ...state, allProjects: { ...state.allProjects }, usersProjects: { ...state.usersProjects }}
            newState.allProjects[action.project.id] = action.project
            newState.usersProjects[action.project.id] = action.project
            return newState

        case EDIT_PROJECT:
            newState = { ...state, allProjects: { ...state.allProjects }, usersProjects: { ...state.usersProjects }}
            newState.allProjects[action.project.id] = action.project
            newState.usersProjects[action.project.id] = action.project
            return newState

        case DELETE_PROJECT:
            newState = { ...state, allProjects: { ...state.allProjects }, usersProjects: { ...state.usersProjects }}
            delete newState.allProjects[action.projectId]
            delete newState.usersProjects[action.projectId]
            return newState

        default:
            return state;
    }
}

export default projectsReducer;