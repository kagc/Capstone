
const LOAD_COMMENTS = 'comments/loadComments'
const USER_COMMENTS = 'comments/userComments'
const CREATE_COMMENT = 'comments/createComment'
const EDIT_COMMENT = 'comments/editComment'
const DELETE_COMMENT = 'comments/deleteComment'

const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments
})

const userComments = (comments) => ({
    type: USER_COMMENTS,
    comments
})

const addComment = (comment) => ({
    type: CREATE_COMMENT,
    comment
})

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})

const obliterateComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})

export const getAllComments = (projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}/comments`);

    if (response.ok){
        const comments = await response.json()
        dispatch(loadComments(comments))
        return comments
    }
    if (response.status >= 400){
        throw response
    }
}

export const getUserComments = () => async dispatch => {
    const response = await fetch(`/api/comments/current`);

    if(response.ok){
        const comments = await response.json()
        dispatch(userComments(comments))
        return comments
    }
    if (response.status >= 400){
        throw response
    }
}

export const makeComment = (newComment, projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}/comments`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
    })
    if (response.ok){
        const comment = await response.json()
        dispatch(addComment(comment))
        return comment
    }
    if (response.status >= 400){
        throw response
    }
}

export const modComment = (comment, commentId) => async dispatch => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    if (response.ok){
        const editedComment = await response.json()
        dispatch(addComment(editedComment))
        return editedComment
    }
    if (response.status >= 400){
        // console.log(response)
        throw response
    }
}

export const removeComment = (commentId) => async dispatch => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const deletedComment = await response.json()
        dispatch(obliterateComment(deletedComment))
        return deletedComment
    }
    if (response.status >= 400){
        throw response
    }
}

const initialState = { allComments: {}, userComments: {} }

const commentReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_COMMENTS:
            newState = { ...state, allComments: {} }
            action.comments.Comments.forEach(comment => {
                newState.allComments[comment.id] = comment
            })
            return newState

        case USER_COMMENTS:
            newState = { ...state, userComments: {} }
            action.comments.Comments.forEach(comment => {
                newState.userComments[comment.id] = comment
            })
            return newState

        case CREATE_COMMENT:
            newState = { ...state, allComments: { ...state.allComments }, userComments: { ...state.userComments }}
            newState.allComments[action.comment.id] = action.comment
            newState.userComments[action.comment.id] = action.comment
            return newState

        case DELETE_COMMENT:
            newState = { ...state, allComments: { ...state.allComments }, userComments: { ...state.userComments }}
            delete newState.allComments[action.comment.id]
            delete newState.userComments[action.comment.id]
            return newState

        default:
            return state
    }
}

export default commentReducer