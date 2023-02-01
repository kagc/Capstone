const LOAD_QUESTIONS = 'comments/loadQuestions'
const USER_QUESTIONS = 'comments/userQuestions'
const CREATE_QUESTION = 'comments/createQuestion'
const EDIT_QUESTION = 'comments/editQuestion'
const DELETE_QUESTION = 'comments/deleteQuestion'

const loadQuestions = (questions) => ({
    type: LOAD_QUESTIONS,
    questions
})

const userQuestions = (questions) => ({
    type: USER_QUESTIONS,
    questions
})

const addQuestion = (question) => ({
    type: CREATE_QUESTION,
    question
})

const editQuestion = (question) => ({
    type: EDIT_QUESTION,
    question
})

const expungeQuestion = (question) => ({
    type: DELETE_QUESTION,
    question
})

export const getAllQuestions = (projectId) => async dispatch => {
    const response = await fetch(`api/projects/${projectId}/questions`)

    if(response.ok){
        const questions = await response.json()
        dispatch(loadQuestions(questions))
        return questions
    }
    if (response.status >= 400){
        throw response
    }
}

export const getUserQuestions = () => async dispatch => {
    const response = await fetch(`/api/questions/current`)

    if(response.ok) {
        const questions = await response.json()
        dispatch(userQuestions(questions))
        return questions
    }
    if (response.status >= 400){
        throw response
    }
}

export const askQuestion = (newQuestion, projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}/questions`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newQuestion)
    })
    if(response.ok){
        const question = await response.json()
        dispatch(addQuestion(question))
        return question
    }
    if (response.status >= 400){
        throw response
    }
}

export const modQuestion = (question, questionId) => async dispatch => {
    const response = await fetch(`/api/questions/${questionId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(question)
    })
    if (response.ok) {
        const editedQuestion = await response.json()
        dispatch(addQuestion(editedQuestion))
        return editedQuestion
    }
    if (response.status >= 400){
        throw response
    }
}

export const removeQuestion = (questionId) => async dispatch => {
    const response = await fetch(`/api/questions/${questionId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        const deletedQuestion = await response.json()
        dispatch(expungeQuestion(deletedQuestion))
        return deletedQuestion
    }
    if (response.status >= 400){
        throw response
    }
}

const initialState = { allQuestions: {}, userQuestions: {} }

const questionReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_QUESTIONS:
            newState = { ...state, allQuestions: {} }
            action.questions.Questions.forEach(question => {
                newState.allQuestions[question.id] = question
            })
            return newState

        case USER_QUESTIONS:
            newState = { ...state, userQuestions: {} }
            action.questions.Questions.forEach(question => {
                newState.userQuestions[question.id] = question
            })
            return newState

        case CREATE_QUESTION:
            newState = { ...state, allQuestions: { ...state.allQuestions }, userQuestions: { ...state.userQuestions } }
            newState.allQuestions[action.question.id] = action.question
            newState.userQuestions[action.question.id] = action.question
            return newState

        case DELETE_QUESTION:
            newState = { ...state, allQuestions: { ...state.allQuestions }, userQuestions: { ...state.userQuestions } }
            delete newState.allQuestions[action.question.id]
            delete newState.userQuestions[action.question.id]

        default:
            return state
    }
}

export default questionReducer