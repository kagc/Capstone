import './SingleProject.css'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getOneProject } from '../../store/project';
import EditProject from '../EditProject';
import NotFound from '../404';
import { getAllComments, makeComment, modComment, removeComment } from '../../store/comment';
import { getAllFavorites, makeFavorite, removeFavorite, getUserFavorites } from '../../store/favorite';
let errImage = 'https://previews.123rf.com/images/sonsedskaya/sonsedskaya1902/sonsedskaya190200070/118117055-portrait-of-a-builder-cat-with-tools-in-paws.jpg'

const SingleProject = () => {
    const { projectId } = useParams()
    const dispatch = useDispatch()
    const ulRef = useRef();
    const currentUser = useSelector(state => state.session.user)

    const [ isLoaded, setIsLoaded ] = useState(false)

    const [ comment, setComment ] = useState("")
    const [newSrc, setNewSrc] = useState('')

    const [ showEdit, setShowEdit ] = useState(false)
    const [ thisComment, setThisComment ] = useState("")
    const project = useSelector(state => state.projects.singleProject)
    const commentsObj = useSelector(state => state.comments.allComments)
    const favoritesObj = useSelector(state => state.favorites.allFavorites)
    console.log(project)
    
    const [ editedComment, setEditedComment ] = useState("")
    const [ editedCommentId, setEditedCommentId ] = useState("")
    
    const closeEdit = (e) => {
        e.preventDefault();
        setShowEdit(false)
    }
    
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        dispatch(getOneProject(projectId))
        dispatch(getAllComments(projectId))
        dispatch(getAllFavorites(projectId))
        dispatch(getUserFavorites())
        .then(setIsLoaded(true))
    }, [dispatch, projectId])
    // console.log("anything?",project.stepsList)
    const comments = Object.values(commentsObj)
    const favorites = Object.values(favoritesObj)

    let userFaved = []
    if (currentUser && favorites.length > 0) {
        userFaved = favorites.filter(fav => fav.userId === currentUser.id)
    }
    // console.log(userFaved)

    const submitComment = async (e) => {
        e.preventDefault()

        const newComment = {
            comment
        }

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

    const submitFavorite = async (e) => {
        e.preventDefault()

        const favorite = {
            projectId
        }
        // return console.log(favorite)

        const data = await dispatch(makeFavorite(favorite, projectId))
        .catch(async (res) =>{
            const data = await res.json()
            if (data && data.errors) {
                setErrors(data.errors)
            }
        })
    }

    if (!project || !commentsObj || !favoritesObj ) return null
    if (project.stepsList.length > 0 && commentsObj && favoritesObj ) {

    return isLoaded && (
        <div className="wholething">
            <div className="single-proj-content">

            
            <div className="titlebar">{project.title}</div>
            <div className="misc-infobar">By {project.creatorInfo.username} in {project.category}<div className="favsNum"><i id="heart" class="fa-solid fa-heart"></i>{favoritesObj.total}</div></div>

            <div className="sub-titlebar">
                <div>Publish Date</div>
                <div>
                    {currentUser === null ? (<button id="loggedout-fave-button" disabled={true} className="loggedout-fav-button"  title="Must be logged in to add to Favorites"><i id="unfaved-heart" class="fa-solid fa-heart"></i><span className="loggedout-fav-text">Favorite</span></button>) : 
                    
                    (userFaved.length > 0 ? (
                        <button onClick={async (e) => {
                            e.preventDefault()
                            const data = await dispatch(removeFavorite(userFaved[0].id))
                        }} id="faved" className="fav-button"><i id="heart" class="fa-solid fa-heart"></i>Favorited</button>
                    ) : (
                        <button id="unfaved-button" onClick={submitFavorite} className="fav-button"><i id="unfaved-heart" class="fa-solid fa-heart"></i><span className="unfaved-text">Favorite</span></button>
                    ))}
                    {/* {userFaved.length > 0 ? (
                        <button onClick={async (e) => {
                            e.preventDefault()
                            const data = await dispatch(removeFavorite(userFaved[0].id))
                        }} id="faved" className="fav-button"><i id="heart" class="fa-solid fa-heart"></i>Favorited</button>
                    ) : (
                        <button id="unfaved-button" onClick={submitFavorite} className="fav-button"><i id="unfaved-heart" class="fa-solid fa-heart"></i><span className="unfaved-text">Favorite</span></button>
                    )} */}
                    
                    
                    </div>
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

                    <div id="not-implemented" title="Feature coming soon." className="interact-bar-button"><i class="fa-solid fa-circle-question"></i>Ask Question</div> 

                <div className="interact-bar-button">
                    <a href="#comments"><i class="fa-solid fa-comments"></i> Comment</a>
                    
                    </div>
                    </div>

                <div className="line-break"></div></div>

                <div className="single-step-title">Supplies</div>
                <div className="single-proj-section">{project.supplies}</div>



                <div className="interaction-section">
                <div className="interact-bar">

                    <div id="not-implemented" title="Feature coming soon." className="interact-bar-button"><i class="fa-solid fa-circle-question"></i>Ask Question</div> 

                <div className="interact-bar-button">
                    <a href="#comments"><i class="fa-solid fa-comments"></i> Comment</a>
                    
                    </div>
                    </div>

                <div className="line-break"></div></div>

            {project.stepsList.map(step => {
                return (
                    <div key={step.id}>
                        <div className="single-step-title">Step {step.stepNum}: {step.stepTitle}</div>
                    <div className="single-proj-section">
                        <div>{step.stepDescription}</div>
                    </div>



                    <div className="interaction-section">
                    <div className="interact-bar">

                    <div id="not-implemented" title="Feature coming soon." className="interact-bar-button"><i class="fa-solid fa-circle-question"></i>Ask Question</div> 

                    <div className="interact-bar-button">
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
                        <div className="main-comment-buttons">
                            <button disabled={currentUser === null ? true : null } onSubmit={submitComment} id={currentUser === null ? `loggedout-comment-button` : null} title={currentUser === null ? `Must be logged in to leave a comment` : null} type="submit">Post</button>
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

                } else {
                    return (
                        <div><NotFound /></div>
                    )
                }
}

export default SingleProject