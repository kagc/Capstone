import './Home.css'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import banner from '../../images/splash_banner.jpg'
import { getAllProjects } from '../../store/project';
let errImage = 'https://previews.123rf.com/images/sonsedskaya/sonsedskaya1902/sonsedskaya190200070/118117055-portrait-of-a-builder-cat-with-tools-in-paws.jpg'

const HomePage = () => {
    const dispatch = useDispatch()
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [newSrc, setNewSrc] = useState('')
    const projectsObj = useSelector(state => state.projects.allProjects)

    useEffect(() => {
        dispatch(getAllProjects())
        .then(setIsLoaded(true))
    }, [dispatch])

    const allProjects = Object.values(projectsObj)

    if (!projectsObj) return null

    const circuits = allProjects.filter(project => project.category === "Circuits")
    const workshop = allProjects.filter(project => project.category === "Workshop")
    const craft = allProjects.filter(project => project.category === "Craft")
    const cooking = allProjects.filter(project => project.category === "Cooking")
    const living = allProjects.filter(project => project.category === "Living")
    const outside = allProjects.filter(project => project.category === "Outside")
    const teachers = allProjects.filter(project => project.category === "Teachers")
    console.log(circuits)

    return isLoaded && (
        <div>
            <div className="splash-banner" style={{backgroundImage: `url('${banner}')`, backgroundRepeat  : 'no-repeat', backgroundSize: 'cover',
        width: '100%'}}>
                <div className="banner-text">
                    <div className='banner-top-text'>YOURS FOR THE MAKING</div>
                    <div className='banner-bottom-text'>Directables is a community for people who like to make things.
                    Come explore, share, and make your next project with us!</div>
                </div>
            </div>

            <div className="splash-section1">
                <div className="splash-s1-box">
                    <div className="splash-s1-title">STEP-BY-STEP</div>
                    <div className="splash-s1-text">We make it easy to learn how to make anything, one step at a time. From the stovetop to the workshop, you are sure to be inspired by the awesome projects that are shared everyday.</div>
                </div>

                <div className="splash-s1-box">
                    <div className="splash-s1-title">MADE BY YOU</div>
                    <div className="splash-s1-text">Directables are created by you. No matter who you are, we all have secret skills to share. Come join our community of curious makers, innovators, teachers, and life long learners who love to share what they make.</div>
                </div>

                <div className="splash-s1-box">
                    <div className="splash-s1-title">A HAPPY PLACE</div>
                    <div className="splash-s1-text">Making things makes people happy. We can't prove it, but we know it to be true. Find your happy place, and join one of the friendliest online communities anywhere.</div>
                </div>

            </div>

            <div className="explore-section">
                <div className="explore-top">

                <div className="explore-title">EXPLORE PROJECTS</div>
                </div>

                <div className="category-section">
                    <div className="category-title">Circuits</div>

                    <div className="category-card-holder">
                        {circuits.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div className="preview-image"
                                        style={{ backgroundImage: `url('${project.coverImageUrl}'` }}></div>
                                </Link>

                                <div className="card-details">
                                    <div><Link className="card-title" to={`/projects/${project.id}`}>{project.title}</Link> by {project.creator.username}</div>
                                </div>

                                    </div>
                            )
                        })}
                    </div>

                </div>

                <div className="category-section">
                    <div className="category-title">Workshop</div>
                    <div className="category-card-holder">
                    {workshop.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div className="preview-image"
                                onError={(e)=>{
                                    if(e.target.src !== errImage) {
                                    setNewSrc(errImage)
                                    e.target.src = errImage
                                    }
                                }}
                                        style={{ backgroundImage: `url('${project.coverImageUrl}'` }}></div>
                                </Link>

                                <div className="card-details">
                                    <div><Link className="card-title" to={`/projects/${project.id}`}>{project.title}</Link> by {project.creator.username}</div>
                                </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title">Craft</div>
                    <div className="category-card-holder">
                    {craft.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div className="preview-image"
                                onError={(e)=>{
                                    if(e.target.src !== errImage) {
                                    setNewSrc(errImage)
                                    e.target.src = errImage
                                    }
                                }}
                                        style={{ backgroundImage: `url('${project.coverImageUrl}'` }}></div>
                                </Link>

                                <div className="card-details">
                                    <div><Link className="card-title" to={`/projects/${project.id}`}>{project.title}</Link> by {project.creator.username}</div>
                                </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title">Cooking</div>
                    <div className="category-card-holder">
                    {cooking.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div className="preview-image"
                                onError={(e)=>{
                                    if(e.target.src !== errImage) {
                                    setNewSrc(errImage)
                                    e.target.src = errImage
                                    }
                                }}
                                        style={{ backgroundImage: `url('${project.coverImageUrl}'` }}></div>
                                </Link>

                                <div className="card-details">
                                    <div><Link className="card-title" to={`/projects/${project.id}`}>{project.title}</Link> by {project.creator.username}</div>
                                </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title">Living</div>
                    <div className="category-card-holder">
                    {living.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div className="preview-image"
                                onError={(e)=>{
                                    if(e.target.src !== errImage) {
                                    setNewSrc(errImage)
                                    e.target.src = errImage
                                    }
                                }}
                                        style={{ backgroundImage: `url('${project.coverImageUrl}'` }}></div>
                                </Link>

                                <div className="card-details">
                                    <div><Link className="card-title" to={`/projects/${project.id}`}>{project.title}</Link> by {project.creator.username}</div>
                                </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title">Outside</div>
                    <div className="category-card-holder">
                    {outside.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div className="preview-image"
                                onError={(e)=>{
                                    if(e.target.src !== errImage) {
                                    setNewSrc(errImage)
                                    e.target.src = errImage
                                    }
                                }}
                                        style={{ backgroundImage: `url('${project.coverImageUrl}'` }}></div>
                                </Link>

                                <div className="card-details">
                                    <div><Link className="card-title" to={`/projects/${project.id}`}>{project.title}</Link> by {project.creator.username}</div>
                                </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title">Teachers</div>
                    <div className="category-card-holder">
                    {teachers.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div className="preview-image"
                                onError={(e)=>{
                                    if(e.target.src !== errImage) {
                                    setNewSrc(errImage)
                                    e.target.src = errImage
                                    }
                                }}
                                        style={{ backgroundImage: `url('${project.coverImageUrl}'` }}></div>
                                </Link>

                                <div className="card-details">
                                    <div><Link className="card-title" to={`/projects/${project.id}`}>{project.title}</Link> by {project.creator.username}</div>
                                </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage