import './SingleProject.css'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getOneProject } from '../../store/project';
import EditProject from '../EditProject';
import { getAllComments, makeComment, modComment, removeComment } from '../../store/comment';
let errImage = 'https://previews.123rf.com/images/sonsedskaya/sonsedskaya1902/sonsedskaya190200070/118117055-portrait-of-a-builder-cat-with-tools-in-paws.jpg'

const SingleProject = () => {
    const { projectId } = useParams()
    const dispatch = useDispatch()
    const ulRef = useRef();
    const currentUser = useSelector(state => state.session.user)

    const [ comment, setComment ] = useState("")
    const [newSrc, setNewSrc] = useState('')

    const [ showEdit, setShowEdit ] = useState(false)
    const [ thisComment, setThisComment ] = useState("")
    const project = useSelector(state => state.projects.singleProject)
    const commentsObj = useSelector(state => state.comments.allComments)
    const comments = Object.values(commentsObj)
    // console.log(comments)

    
    const [ editedComment, setEditedComment ] = useState("")
    const [ editedCommentId, setEditedCommentId ] = useState("")
    // const openEdit = (e) => {
    //     e.preventDefault();
    //     if(showEdit) return
    //     setEditedComment(comment)
    //     setShowEdit(true)
    // };
    // useEffect(() => {
    //     if(!showEdit) return

    //     const closeEdit = (e) => {
    //         if(!ulRef.current.container(e.target)) {
    //             setShowEdit(false)
    //         }
    //     }

    //     document.addEventListener('click', closeEdit);
    //     return () => document.removeEventListener('click', closeEdit)
    // }, [showEdit])
    const closeEdit = (e) => {
        e.preventDefault();
        setShowEdit(false)
    }


    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        dispatch(getOneProject(projectId))
        dispatch(getAllComments(projectId))
    }, [dispatch, projectId])
    // console.log("anything?",project.stepsList)

    const submitComment = async (e) => {
        e.preventDefault()

        const newComment = {
            comment
        }

        // console.log(newComment)

        const data = await dispatch(makeComment(newComment, projectId))
        .catch(async (res) =>{
            const data = await res.json()
            if (data && data.errors) {
                setErrors(data.errors)
            }
        })

        if (data) {
            setComment("")
        }
    }

    const submitEditedComment = async (e) => {
        e.preventDefault();

        const newEditedComment = {
            comment: editedComment
        }

        // return console.log(newEditedComment)

        const data = await dispatch(modComment(newEditedComment, editedCommentId))
        .catch(async (res) => {
            const data = await res.json()
            if (data && data.errors) {
                setErrors(data.errors)
            }
        })

        if (data) {
            setShowEdit(false)
        }
    }

    // const deleteComment = async (e) => {
    //     e.preventDefault()

    //     const data = await dispatch(removeComment())
    // }

    // const openEditComment = (e) => {
    //     e.preventDefault()

    // }


    if (!project || !commentsObj ) return null

    return (
        <div className="wholething">
            <div className="single-proj-content">

            
            <div className="titlebar">{project.title}</div>
            <div className="misc-infobar">By {project.creatorInfo.username} in {project.category}<div className="favsNum"><i class="fa-solid fa-heart"></i>(#Favs)</div></div>

            <div className="sub-titlebar">
                <div>Publish Date</div>
                <div><button className="fav-button"><i class="fa-solid fa-heart"></i>Favorite</button></div>
            </div>


            <div className="image-container">
                <img 
                className="img" 
                onError={(e)=>{
                    if(e.target.src !== errImage) {
                    setNewSrc(errImage)
                    e.target.src = errImage
                    }
                }}
            src={`${project.coverImageUrl}`}></img></div>

            {/* <div className="single-proj-section">Creator Info For Future</div> */}


            <div className="single-proj-section">{project.intro}</div>

            <div className="interaction-section">
                <div className="interact-bar">

                    <div><i class="fa-solid fa-circle-question"></i>Ask Question</div> 

                <div>
                    <a href="#comments"><i class="fa-solid fa-comments"></i> Comment</a>
                    
                    </div>
                    </div>

                <div className="line-break"></div></div>

                <div className="single-step-title">Supplies</div>
                <div className="single-proj-section">{project.supplies}</div>



                <div className="interaction-section">
                <div className="interact-bar">

                    <div><i class="fa-solid fa-circle-question"></i>Ask Question</div> 

                <div>
                    <a href="#comments"><i class="fa-solid fa-comments"></i> Comment</a>
                    
                    </div>
                    </div>

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

                    <div>
                    <a href="#comments"><i class="fa-solid fa-comments"></i> Comment</a>

                    </div>
                    </div>

                <div className="line-break"></div></div>

                
                    </div>
                )
            })}

            {currentUser && currentUser.id === project.creatorInfo.id && (<div id="edit-float">
                <div className="admin-corner">Admin
                    <Link to={`/editor/${project.id}`} >
                    <button className="edit-button">Edit Directable</button>
                    {/* <EditProject oneProject={project} /> */}
                </Link>
                </div>
                
            </div>)}


            <div id="comments" className="comment-section">
                <div className="comment-input-box-container">
                            <form onSubmit={submitComment} className="comment-input">
                    <div className="comment-input-top">
                        <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>
                        {/* <div className="comment-input"> */}
                                <textarea
                                readOnly={currentUser === null ? true : false}
                                placeholder={currentUser === null ? "Must be logged in to leave a comment." : null }
                                className="comment-text-input"
                                input="textarea"
                                name="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                                rows="5"
                                cols="50"
                                maxlength="1000"></textarea>
                        {/* </div> */}
                    </div>
                    <div className="comment-input-bottom">
                        <div className="comment-msg">
                            <div>We have a be nice policy.</div>
                            <div>Please be positive and constructive.</div>
                        </div>
                        <div className="comment-buttons">
                            <button disabled={currentUser === null ? true : null } onSubmit={submitComment} type="submit">Post</button>
                        </div>
                        </div>
                            </form>
                    </div>
                </div>

            {comments.length > 0 && (
                <div className="comments-list">
                    <div className="num-comments">{comments.length} Comment{comments.length > 1 ? "s" : null}</div>
                    
                    {comments.slice(0).reverse().map(comment => {
                        return (

                            <div className="one-comment">
                                <div className="one-comment-top">
                                    <div className="one-comment-top-left">
                                        <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>
                                        <div className="commenter-info">{comment.userInfo.username} {comment.userId === project.creatorId && (
                                            <div> (Author)</div>
                                        )}</div>

                                        <div>X Days ago</div>
                                        </div>

                                    <div className="one-comment-top-right">
                                        {currentUser && currentUser.id === comment.userId && (
                                            <div>

                                                <button 
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setEditedComment(comment.comment)
                                                    setThisComment(comment.id)
                                                    setShowEdit(true)
                                                }}
                                                className="ud-comment-buttons">Edit</button>
                                                <button onClick={async (e) => {
                                                    e.preventDefault()
                                                    const data = await dispatch(removeComment(comment.id))
                                                }} className="ud-comment-buttons">Delete</button>
                                            </div>
                                        )}
                                    </div>
                                    
                                </div>

                                <div className="one-comment-text">{comment.comment}</div>

                                {comment.id === thisComment && showEdit && (

                                <div className="comment-input-box-container">
                                    <form onSubmit={submitEditedComment} className="comment-input">
                                    <div className="comment-input-top">
                        <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>
                        {/* <div className="comment-input"> */}
                                <textarea
                                // placeholder={comment.comment}
                                className="comment-text-input"
                                input="textarea"
                                name="comment"
                                value={editedComment}
                                onChange={(e) => {
                                    setEditedComment(e.target.value)
                                    setEditedCommentId(comment.id)}}
                                required
                                rows="5"
                                cols="50"
                                maxlength="1000"></textarea>
                        {/* </div> */}
                    </div>
                    <div className="comment-input-bottom">
                        <div className="comment-msg">
                            <div>We have a be nice policy.</div>
                            <div>Please be positive and constructive.</div>
                        </div>
                        <div className="comment-buttons">
                            <button id="close-edit-button" onClick={closeEdit}>Cancel</button>
                            <button onSubmit={submitEditedComment} type="submit">Save</button>
                        </div>
                        </div>

                                    </form>
                                </div>
                                )}
                            </div>
                        )
                    })}
               
                    
                    
                    </div>
                   ) }

            </div>

        </div>
        // </div>
    )
}

export default SingleProject