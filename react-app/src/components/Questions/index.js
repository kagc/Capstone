import './Questions.css'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getAllProjects, getOneProject, getUserProjects } from '../../store/project';
import { getAllQuestions, askQuestion, modQuestion, removeQuestion, createAnswer, editAnswer, unAnswer } from '../../store/question';
import commentReducer from '../../store/comment';

const Questions = ({project}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const questionsObj = useSelector(state => state.questions.allQuestions)
    // console.log(project)
    const [ isLoaded, setIsLoaded ] = useState(false)

    const [ question, setQuestion ] = useState("")
    const [ answer, setAnswer ] = useState("")
    const [ questionId, setQuestionId ] = useState("")

    const [ showEdit, setShowEdit ] = useState(false)
    const [ showAnswerForm, setShowAnswerForm ] = useState(false)
    const [ showAnswerEdit, setShowAnswerEdit ] = useState(false)

    const [ thisQuestion, setThisQuestion ] = useState("")
    const [ thisAnswer, setThisAnswer ] = useState("")

    const [ editedQuestion, setEditedQuestion ] = useState("")
    const [ editedQuestionId, setEditedQuestionId ] = useState("")

    const [ editedAnswer, setEditedAnswer ] = useState("")
    const [ editedAnswerId, setEditedAnswerId ] = useState("")

    const [ errors, setErrors ] = useState([]);
    const [ editErrors, setEditErrors ] = useState([])
    const [ answerErrors, setAnswerErrors ] = useState([])
    const [ editAnswerErrors, setEditAnswerErrors ] = useState([])
    // const [ deletedQ, setDeletedQ ] = useState(false)

    const closeEdit = (e) => {
        e.preventDefault();
        setShowEdit(false)
    }

    const closeAnswerForm = (e) => {
        e.preventDefault()
        setShowAnswerForm(false)
    }

    const closeAnswerEdit = (e) => {
        e.preventDefault()
        setShowAnswerEdit(false)
    }

    useEffect(() => {
        dispatch(getAllQuestions(project.id))
        .then(setIsLoaded(true))
        // setDeletedQ(false)
    }, [dispatch, project.id
        // , deletedQ
    ])

    const questions = Object.values(questionsObj)

    console.log(questions)

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

    const submitAnswer = async (e) => {
        e.preventDefault()

        const newAnswer = {
            answer
        }

        const data = await dispatch(createAnswer(newAnswer, questionId))

        .catch(async (res) =>{
            const data = await res.json()
            if (data && data.errors) {
                setAnswerErrors(data.errors)
            }
        })

        if (data) {
            setShowAnswerForm(false)
            setAnswer("")
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

    const submitEditedAnswer = async (e) => {
        e.preventDefault()

        const newEditedAnswer = {
            answer: editedAnswer
        }

        const data = await dispatch(editAnswer(newEditedAnswer, editedAnswerId))
        .catch(async (res) => {
            const data = await res.json()
            if (data && data.errors) {
                setEditAnswerErrors(data.errors)
            }
        })

        if (data) {
            setShowAnswerEdit(false)
        }
    }
    
    if (!questionsObj) return null

    return isLoaded && (
        <div className="whole-active-section">
            <div className="comment-section">
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

                                    <div className="question-tag">Question</div>

                                    <div className="comments-posted-time">
                                    {day > 1 ? (<>{day} Day{day > 1 ? 's' : null} ago</>) : ('Today')}
                                    </div>
                                    </div>

                                    <div className="one-comment-top-right">
                                        {currentUser && currentUser.id === question.userId ? (
                                            <div>

                                                <button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setEditedQuestion(question.question)
                                                    setThisQuestion(question.id)
                                                    setShowEdit(true)
                                                    // console.log("OPENS THE EDIT BOX")
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
                                        ) : (<div>

                                                    {currentUser === null ? (
                                                        <button
                                                        className="no-question-answer-button"
                                                        disabled
                                                        title="Must be logged in to answer"
                                                        >Answer</button>
                                                    ): (
                                                        <button
                                            className="question-answer-button"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setThisQuestion(question.id)
                                                setShowAnswerForm(true)
                                            }}
                                            >Answer</button>
                                                    )}
                                            {/* <button
                                            className="question-answer-button"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setThisQuestion(question.id)
                                                setShowAnswerForm(true)
                                            }}
                                            >Answer</button> */}
                                        </div>)}
                                    </div>
                                </div>

                                <div className="one-comment-text">{question.question}</div>
    {/* ----------------------------EDIT QUESTION BOX --------------------------- */}
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
    {/* ------------------------------ANSWER FORM BOX------------------------------- */}
    {question.id === thisQuestion && showAnswerForm && (

<div className="comment-input-box-container">
    <form onSubmit={submitAnswer}
    className="comment-input">
        {/* <div className="comment-input"> */}
            <div className="comment-input-top">
            <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>

            <textarea
            className="comment-text-input"
            input="textarea"
            placeholder='Answer this question'
            name="answer"
            value={answer}
            onChange={(e) => {
                setAnswer(e.target.value)
                setQuestionId(question.id)
            }}
            required
            rows="5"
            cols="50"
            maxlength="1000"
            ></textarea>
            </div>

            <div className="error-box">
            {answerErrors.map((error, ind) => (
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
                    onClick={closeAnswerForm}>Cancel</button>
                    <button onSubmit={submitAnswer} type="submit">Answer</button>
                </div>
            </div>

        {/* </div> */}
    </form>
</div>
)}
    {/* ---------------------A SECOND EDIT QUESTION BOX??--------------------------- */}
  {/* {question.id === thisQuestion && showEdit && (

                                    <div className="comment-input-box-container">
                                        <form onSubmit={submitEditedQuestion}
                                        className="comment-input">
                                          
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

                                            
                                        </form>
                                    </div>
                                )} */}
                              
    {/* ----------------------------ANSWERS MAPPED --------------------------- */}
                            {question.answers.length > 0 && (
                                question.answers.map(answer => {
                                    let day = Math.ceil(Math.abs(new Date() - new Date(question.created_at))/ (1000 * 60 * 60 * 24))
                                    return (

                                        <div className="answers-container">
                                            <div className="one-answer-top">
                                                <div className="one-comment-top-left">
                                                <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>
                                                <div className="commenter-info">
                                                    {answer.userInfo.username}
                                                    {answer.userId === project.creatorId && (
                                                        <div className="author-tag"> (author)</div>
                                                    )}
                                                    
                                                    <div className="answer-tag"
                                                    >
                                                        Answer
                                                        {/* <i class="fa-regular fa-lightbulb"></i> */}
                                                        </div>

                                                    <div className="comments-posted-time">
                                                    {day > 1 ? (<>{day} Day{day > 1 ? 's' : null} ago</>) : ('Today')}
                                                    </div>
                                                </div>
                                                </div>

                                                <div className="one-comment-top-right">
                                                    {currentUser && currentUser.id === answer.userId ? (
                                                        <div>
                                                            <button onClick={(e) => {
                                                                e.preventDefault()
                                                                setEditedAnswer(answer.answer)
                                                                setThisAnswer(answer.id)
                                                                setShowAnswerEdit(true)
                                                            }}
                                                            className="ud-comment-buttons">Edit</button>
                                                            <button onClick={async (e) => {
                                                                e.preventDefault()
                                                                const data = await dispatch(unAnswer(answer.id))
                                                            }}
                                                            className="ud-comment-buttons">Delete</button>
                                                        </div>
                                                    ) : (<div></div>)}
                                                </div>
                                                
                                            </div>
                                            <div className="one-answer-text">
                                            {answer.answer}
                                            </div>

                                            {answer.id === thisAnswer && showAnswerEdit && (
                                                <div className="comment-input-box-container">
                                                    <form onSubmit={submitEditedAnswer}
                                                    className="comment-input">
                                                        <div className="comment-input-top">
                                                            <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>

                                                            <textarea
                                                            className="comment-text-input"
                                                            input="textarea"
                                                            name="answer"
                                                            value={editedAnswer}
                                                            onChange={(e) => {
                                                                setEditedAnswer(e.target.value)
                                                                setEditedAnswerId(answer.id)
                                                            }}
                                                            required
                                                            rows="5"
                                                            cols="50"
                                                            maxlength="1000"></textarea>
                                                        </div>

                                                        <div className="error-box">
                                                            {editAnswerErrors.map((error, ind) => (
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
                                                        onClick={closeAnswerEdit}>Cancel</button>
                                                        <button onSubmit={submitEditedAnswer} type="submit">Save</button>
                                                    </div>
                                                </div>
                                                    </form>
                                                </div>
                                            )}
                                            </div>
                                    )
                                })
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