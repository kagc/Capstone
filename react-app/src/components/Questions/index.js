import './Questions.css'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getAllProjects, getOneProject, getUserProjects } from '../../store/project';
import { getAllQuestions, askQuestion, modQuestion, removeQuestion } from '../../store/question';
import commentReducer from '../../store/comment';

const Questions = ({project}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const questionsObj = useSelector(state => state.questions.allQuestions)
    // console.log(project)
    const [ isLoaded, setIsLoaded ] = useState(false)

    const [ question, setQuestion ] = useState("")

    const [ showEdit, setShowEdit ] = useState(false)
    const [ thisQuestion, setThisQuestion ] = useState("")

    const [ editedQuestion, setEditedQuestion ] = useState("")
    const [ editedQuestionId, setEditedQuestionId ] = useState("")

    const [ errors, setErrors ] = useState([]);
    const [ editErrors, setEditErrors ] = useState([])
    // const [ deletedQ, setDeletedQ ] = useState(false)

    const closeEdit = (e) => {
        e.preventDefault();
        setShowEdit(false)
    }

    useEffect(() => {
        dispatch(getAllQuestions(project.id))
        .then(setIsLoaded(true))
        // setDeletedQ(false)
    }, [dispatch
        // , deletedQ
    ])

    const questions = Object.values(questionsObj)

    const submitQuestion = async (e) => {
        e.preventDefault()

        const newQuestion = {
            question
        }

        const data = await dispatch(askQuestion(newQuestion, project.id))
        .catch(async (res) =>{
            const data = await res.json()
            if (data && data.errors) {
                setErrors(data.errors)
            }
        })

        if (data) {
            setQuestion("")
        }
    }

    const submitEditedQuestion = async (e) => {
        e.preventDefault()

        const newEditedQuestion = {
            question: editedQuestion
        }

        const data = await dispatch(modQuestion(newEditedQuestion, editedQuestionId))
        .catch(async (res) => {
            const data = await res.json()
            if (data && data.errors) {
                setEditErrors(data.errors)
            }
        })

        if (data) {
            setShowEdit(false)
        }
    }
    
    if (!questionsObj) return null

    return isLoaded && (
        <div className="whole-active-section">
            <div id="questions" className="comment-section">
                <div className="comment-input-box-container">
                    <form onSubmit={submitQuestion} className="comment-input">
                        <div className="comment-input-top">
                            <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>

                            <textarea
                            readOnly={currentUser === null ? true : false}
                            placeholder={currentUser === null ? "Must be logged in to ask a question." : "Ask a question" }
                            className="comment-text-input"
                            input="textarea"
                            name="question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                            rows="5"
                            cols="50"
                            maxlength="1000"></textarea>
                        </div>
                        <div className="error-box">
        {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
        ))}
    </div>
                <div className="comment-input-bottom">
                    <div className="comment-msg">
                    <div>We have a <span className="be-nice">be nice</span> policy.</div>
                <div>Please be positive and constructive.</div>
                    </div>
                    <div className="main-comment-buttons">
                        <button disabled={currentUser === null ? true : null}
                        onSubmit={submitQuestion}
                        id={currentUser === null ? `loggedout-comment-button` : null}
                        title={currentUser === null ? `Must be logged in to ask a question.` : null}
                        type='submit'>Ask</button>
                    </div>
                </div>
                    </form>
                </div>
            </div>

            {questions.length > 0 && (
                <div className="comments-list">
                    <div className="num-comments">{questions.length} Question{questions.length > 1 ? "s" : null}</div>

                    {questions.slice(0).reverse().map(question => {
                        let day = Math.ceil(Math.abs(new Date() - new Date(question.created_at))/ (1000 * 60 * 60 * 24))
                        // console.log(day)

                        return (
                            <div className="one-comment">
                                <div className="one-comment-top">
                                    <div className="one-comment-top-left">
                                    <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>
                                    <div className="commenter-info">{question.userInfo.username} {question.userId === project.creatorId && (
                                        <div className="author-tag"> (author)</div>
                                    )}</div>

                                    <div className="comments-posted-time">
                                    {day > 1 ? (<>{day} Day{day > 1 ? 's' : null} ago</>) : ('Today')}
                                    </div>
                                    </div>

                                    <div className="one-comment-top-right">
                                        {currentUser && currentUser.id === question.userId && (
                                            <div>

                                                <button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setEditedQuestion(question.question)
                                                    setThisQuestion(question.id)
                                                    setShowEdit(true)
                                                }}
                                                className="ud-comment-buttons"
                                                >Edit</button>
                                                <button onClick={async (e) => {
                                                    e.preventDefault()
                                                    const data = await dispatch(removeQuestion(question.id))
                                                    // if (data) {
                                                    //     setDeletedQ(true)
                                                    // }
                                                }} className="ud-comment-buttons">Delete</button>

                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="one-comment-text">{question.question}</div>

                                {question.id === thisQuestion && showEdit && (

                                    <div className="comment-input-box-container">
                                        <form onSubmit={submitEditedQuestion}
                                        className="comment-input">
                                            {/* <div className="comment-input"> */}
                                                <div className="comment-input-top">
                                                <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>

                                                <textarea
                                                className="comment-text-input"
                                                input="textarea"
                                                name="question"
                                                value={editedQuestion}
                                                onChange={(e) => {
                                                    setEditedQuestion(e.target.value)
                                                    setEditedQuestionId(question.id)
                                                }}
                                                required
                                                rows="5"
                                                cols="50"
                                                maxlength="1000"
                                                ></textarea>
                                                </div>

                                                <div className="error-box">
                                                {editErrors.map((error, ind) => (
                                                    <div key={ind}>{error}</div>
                                                ))}
                                                </div>

                                                <div className="comment-input-bottom">
                                                    <div className="comment-msg">
                                                    <div>We have a <span className="be-nice">be nice</span> policy.</div>
                <div>Please be positive and constructive.</div>
                                                    </div>

                                                    <div className="comment-buttons">
                                                        <button id="close-edit-button"
                                                        onClick={closeEdit}>Cancel</button>
                                                        <button onSubmit={submitEditedQuestion} type="submit">Save</button>
                                                    </div>
                                                </div>

                                            {/* </div> */}
                                        </form>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Questions