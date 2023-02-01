import './SingleProject.css'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getAllProjects, getOneProject, getUserProjects } from '../../store/project';
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
    const [ activeSection, setActiveSection ] = useState("comments")

    const [ comment, setComment ] = useState("")
    const [newSrc, setNewSrc] = useState('')
    const [newCreatorSrc, setNewCreatorSrc ] = useState("")

    const [ showEdit, setShowEdit ] = useState(false)
    const [ thisComment, setThisComment ] = useState("")
    const project = useSelector(state => state.projects.singleProject)
    const allProjectsObj = useSelector(state => state.projects.allProjects)
    const commentsObj = useSelector(state => state.comments.allComments)
    const favoritesObj = useSelector(state => state.favorites.allFavorites)

    let allProjects
    let creatorProjects
    if(allProjectsObj) {
        allProjects = Object.values(allProjectsObj)
        creatorProjects = allProjects.filter(eProject => project.creatorId === eProject.creatorId && eProject.id !== project.id)
    }
    // console.log(creatorProjects)

    // let date
    // console.log(new Date(project.created_at).toLocaleDateString('en-US'))
    // if (project.create_at !== undefined){
    //     date = new Date(project.created_at)
    //     console.log("hellooooo")
    // }
    // console.log("aaaaa",date)

    const month = ["January", "February", "March", "April", "May", "June", "July", "Augst", "September", "October", "November", "December"]
    
    const [ editedComment, setEditedComment ] = useState("")
    const [ editedCommentId, setEditedCommentId ] = useState("")
    
    const closeEdit = (e) => {
        e.preventDefault();
        setShowEdit(false)
    }
    
    const [errors, setErrors] = useState([]);
    const [editErrors, setEditErrors] = useState([])
    
    useEffect(() => {
        dispatch(getOneProject(projectId))
        dispatch(getAllComments(projectId))
        dispatch(getAllFavorites(projectId))
        dispatch(getUserFavorites())
        dispatch(getAllProjects())
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
                setEditErrors(data.errors)
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

    if (!project || !commentsObj || !favoritesObj || !allProjectsObj ) return null
    if (project.stepsList.length > 0 && commentsObj && favoritesObj ) {

    return isLoaded && (
        <div className="wholething">
            <div className="single-proj-content">

            
            <div className="titlebar">{project.title}</div>
            <div className="misc-infobar">By {project.creatorInfo.username} in {project.category}<div className="favsNum"><i id="heart" class="fa-solid fa-heart"></i>{favoritesObj.total}</div></div>

            <div className="sub-titlebar">
                <div className="project-published">Published {month[new Date(project.created_at).getMonth()]} {new Date(project.created_at).getDate()}, {new Date(project.created_at).getFullYear()}</div>
                <div>

{/* ----------------------- FAVORITES BUTTON ---------------------------- */}  
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
{/* -------------------------- IMAGE  --------------------------------------- */}

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

{/* -------------------------- CREATOR BOX -------------------------------- */}
            <div className="single-proj-section">
                <div className="creator-box">
                    <div className="creator-top">
                        <div className="creator-left">
                            <div className="creator-img"><i id="creator-cat" class="fa-solid fa-cat"></i></div>
                            <div className="creator-name">By <span>{project.creatorInfo.username}</span></div>
                        </div>
                        <div className="creator-right">
                            {creatorProjects.length > 0 ? (<div className="creator-right">
                                <div className="more-by-text">More by <span>the author:</span> </div>
                                {creatorProjects.slice(0).reverse().slice(0, 3).map(project => {
                                return (
                                    <Link key={project.id} to={`/projects/${project.id}`}>
                                        <img className="creator-cover-img"
                                        onError={(e)=>{
                                            if(e.target.src !== errImage) {
                                            setNewCreatorSrc(errImage)
                                            e.target.src = errImage
                                            }
                                        }}
                                         src={project.coverImageUrl}></img>
                                    </Link>
                                )
                            })}</div>) 
                            
                            : (<div></div>)}
                            {/* More by the author: 
                             {creatorProjects.slice(0).reverse().slice(0, 3).map(project => {
                                return (
                                    <Link key={project.id} to={`/projects/${project.id}`}>
                                        <img className="creator-cover-img" src={project.coverImageUrl}></img>
                                    </Link>
                                )
                            })} */}
                        </div>
                    </div>
                    <div className="creator-bottom">About: Creator Info For Future. This is just placeholder text for now, hello, hi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div></div>
                </div>

{/* -------------------------- INTRO SECTION -------------------------------- */}
            <div className="single-proj-section">{project.intro}</div>

            <div className="interaction-section">
                <div className="interact-bar">

                    <div id="not-implemented" title="Feature coming soon." className="interact-bar-button"><i class="fa-solid fa-circle-question"></i>Ask Question</div> 

                <div className="interact-bar-button">
                    <a href="#comments"
                    onClick={(e) => {
                        e.preventDefault()
                        setActiveSection("comments")}}
                    ><i class="fa-solid fa-comments"></i> <span>Comment</span></a>
                    
                    </div>
                    </div>

                <div className="line-break"></div></div>
{/* -------------------------- SUPPLIES SECTION -------------------------------- */}
                <div className="single-step-title">Supplies</div>
                <div className="single-proj-section">{project.supplies}</div>



                <div className="interaction-section">
                <div className="interact-bar">

                    <div id="not-implemented" title="Feature coming soon." className="interact-bar-button"><i class="fa-solid fa-circle-question"></i>Ask Question</div> 

                <div className="interact-bar-button">
                    <a href="#comments"
                    onClick={(e) => {
                        e.preventDefault()
                        setActiveSection("comments")}}
                    ><i class="fa-solid fa-comments"></i><span>Comment</span></a>
                    
                    </div>
                    </div>

                <div className="line-break"></div></div>
{/* -------------------------- STEPS SECTION -------------------------------- */}
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
                    <a href="#comments"
                    onClick={(e) => {
                        e.preventDefault()
                        setActiveSection("comments")}}
                    ><i class="fa-solid fa-comments"></i><span>Comment</span></a>

                    </div>
                    </div>

                <div className="line-break"></div></div>

                
                    </div>
                )
            })}
{/* -------------------------- EDIT PROJECT BUTTON-------------------------------- */}
            {currentUser && currentUser.id === project.creatorInfo.id && (<div id="edit-float">
                <div className="admin-corner">Admin
                    <Link to={`/editor/${project.id}`} >
                    <button className="edit-button">Edit Directable</button>
                    {/* <EditProject oneProject={project} /> */}
                </Link>
                </div>
                
            </div>)}
{/* -------------------------- ACTIVE SECTION -------------------------------- */}
           <div className="active-buttons-holder">
                <button onClick={(e) => {
                    e.preventDefault()
                    setActiveSection("questions")}}
                    id={activeSection === "questions" ? "active-section" : null}
                    ><i class="fa-solid fa-circle-question"></i>Questions</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    setActiveSection("comments")}}
                    id={activeSection === "comments" ? "active-section" : null}
                    ><i class="fa-solid fa-comments"></i>Comments</button>
           </div>

{/* -------------------------- COMMENT INPUT BOX -------------------------------- */}
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
                            <button disabled={currentUser === null ? true : null } onSubmit={submitComment} id={currentUser === null ? `loggedout-comment-button` : null} title={currentUser === null ? `Must be logged in to leave a comment` : null} type="submit">Post</button>
                        </div>
                        </div>
                            </form>
                    </div>
                </div>
{/* -------------------------- COMMENT SECTION -------------------------------- */}
            {comments.length > 0 && (
                <div className="comments-list">
                    <div className="num-comments">{comments.length} Comment{comments.length > 1 ? "s" : null}</div>
                    
                    {comments.slice(0).reverse().map(comment => {
                        let day = Math.ceil(Math.abs(new Date() - new Date(comment.created_at))/ (1000 * 60 * 60 * 24))
                        console.log(day)
                        return (

                            <div className="one-comment">
                                <div className="one-comment-top">
                                    <div className="one-comment-top-left">
                                        <div className="user-img"><i id="cat" class="fa-solid fa-cat"></i></div>
                                        <div className="commenter-info">{comment.userInfo.username} {comment.userId === project.creatorId && (
                                            <div className="author-tag"> (author)</div>
                                        )}</div>

                                        <div className="comments-posted-time">
                                            {day > 1 ? (<>{day} Day{day > 1 ? 's' : null} ago</>) : ('Today')}
                                             {/* {day} Day{day > 1 ? 's' : null} ago */}
                                            </div>
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
{/* -------------------------- 404 -------------------------------- */}
                } else {
                    return (
                        <div><NotFound /></div>
                    )
                }
}

export default SingleProject