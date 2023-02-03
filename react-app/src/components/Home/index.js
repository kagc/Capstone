import './Home.css'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import banner from '../../images/splash_banner.jpg'
import banner2 from '../../images/catputer.jpg'
import banner3 from '../../images/cooking.jpg'
import { getAllProjects } from '../../store/project';
let errImage = 'https://previews.123rf.com/images/sonsedskaya/sonsedskaya1902/sonsedskaya190200070/118117055-portrait-of-a-builder-cat-with-tools-in-paws.jpg'
// let errImage = 'https://github.com/kagc/Capstone/raw/main/react-app/src/images/cat.jpg'

const imageArray = [banner, banner2, banner3];

const HomePage = () => {
    const dispatch = useDispatch()
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [newSrc, setNewSrc] = useState('')
    const projectsObj = useSelector(state => state.projects.allProjects)

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
        setCount((count) => count + 1);
        }, 5000);

        return () => clearInterval(timerId);
    }, []);

  const image = imageArray[count % imageArray.length];

    useEffect(() => {
        dispatch(getAllProjects())
        .then(() => setIsLoaded(true))
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
    // console.log(circuits)

    if(isLoaded === false) {
        return (
            <div className="load"><img className="loading" src="https://miro.medium.com/max/1400/1*pN5YHNX03fem8HWxnInQ3g.gif"></img></div>
        )
    }

    return isLoaded && (
        <div>
            <div className="splash-banner" 
            style={{
                // backgroundImage: `url('${image}')`, 
            backgroundRepeat  : 'no-repeat', backgroundSize: 'cover',
        width: '100%'}}>

  <img id="f1" class="background-image img3" src={banner3}></img>
  <img id="f2" class="background-image img2" src={banner2}></img>
<img id="f3" class="background-image img1" src={banner}></img>

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
                    <div className="category-title"><Link className="home-cat-link" to="/circuits">Circuits<i class="fa-solid fa-greater-than"></i></Link></div>

                    <div className="category-card-holder">
                        {circuits.slice(0).reverse().slice(0, 5).map(project => {

                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div 
                                className="preview-image-container"
                                //         style={{ backgroundImage: `url('${project.coverImageUrl}'` }}
                                        >

                                        <img 
                                        className="preview-image" 
                                        onError={(e)=>{
                                            if(e.target.src !== errImage) {
                                            setNewSrc(errImage)
                                            e.target.src = errImage
                                            }
                                        }}
                                    src={`${project.coverImageUrl}`}></img>
                                        </div>
                                </Link>

                                <div className="scard-details">
                                        <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> 
                                        <div className="scard-mid">by {project.creator.username} in <Link className="scard-cat-link" to={`/${project.category.toLowerCase()}`}>{project.category}</Link></div>
                                        </div>
                                    </div>

                                    </div>
                            )
                        })}
                    </div>

                </div>

                <div className="category-section">
                    <div className="category-title"><Link className="home-cat-link" to="/workshop">Workshop<i class="fa-solid fa-greater-than"></i></Link></div>
                    <div className="category-card-holder">
                    {workshop.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div 
                                className="preview-image-container"
                                //         style={{ backgroundImage: `url('${project.coverImageUrl}'` }}
                                        >

                                        <img 
                                        className="preview-image" 
                                        onError={(e)=>{
                                            if(e.target.src !== errImage) {
                                            setNewSrc(errImage)
                                            e.target.src = errImage
                                            }
                                        }}
                                    src={`${project.coverImageUrl}`}></img>
                                        </div>
                                </Link>

                                <div className="scard-details">
                                        <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> 
                                        <div className="scard-mid">by {project.creator.username} in <Link className="scard-cat-link" to={`/${project.category.toLowerCase()}`}>{project.category}</Link></div>
                                        </div>
                                    </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title"><Link className="home-cat-link" to="/craft">Craft<i class="fa-solid fa-greater-than"></i></Link></div>
                    <div className="category-card-holder">
                    {craft.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div 
                                className="preview-image-container"
                                //         style={{ backgroundImage: `url('${project.coverImageUrl}'` }}
                                        >

                                        <img 
                                        className="preview-image" 
                                        onError={(e)=>{
                                            if(e.target.src !== errImage) {
                                            setNewSrc(errImage)
                                            e.target.src = errImage
                                            }
                                        }}
                                    src={`${project.coverImageUrl}`}></img>
                                        </div>
                                </Link>

                                <div className="scard-details">
                                        <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> 
                                        <div className="scard-mid">by {project.creator.username} in <Link className="scard-cat-link" to={`/${project.category.toLowerCase()}`}>{project.category}</Link></div>
                                        </div>
                                    </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title"><Link className="home-cat-link" to="/cooking">Cooking<i class="fa-solid fa-greater-than"></i></Link></div>
                    <div className="category-card-holder">
                    {cooking.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div 
                                className="preview-image-container"
                                //         style={{ backgroundImage: `url('${project.coverImageUrl}'` }}
                                        >

                                        <img 
                                        className="preview-image" 
                                        onError={(e)=>{
                                            if(e.target.src !== errImage) {
                                            setNewSrc(errImage)
                                            e.target.src = errImage
                                            }
                                        }}
                                    src={`${project.coverImageUrl}`}></img>
                                        </div>
                                </Link>

                                <div className="scard-details">
                                        <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> 
                                        <div className="scard-mid">by {project.creator.username} in <Link className="scard-cat-link" to={`/${project.category.toLowerCase()}`}>{project.category}</Link></div>
                                        </div>
                                    </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title"><Link className="home-cat-link" to="/living">Living<i class="fa-solid fa-greater-than"></i></Link></div>
                    <div className="category-card-holder">
                    {living.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div 
                                className="preview-image-container"
                                //         style={{ backgroundImage: `url('${project.coverImageUrl}'` }}
                                        >

                                        <img 
                                        className="preview-image" 
                                        onError={(e)=>{
                                            if(e.target.src !== errImage) {
                                            setNewSrc(errImage)
                                            e.target.src = errImage
                                            }
                                        }}
                                    src={`${project.coverImageUrl}`}></img>
                                        </div>
                                </Link>

                                <div className="scard-details">
                                        <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> 
                                        <div className="scard-mid">by {project.creator.username} in <Link className="scard-cat-link" to={`/${project.category.toLowerCase()}`}>{project.category}</Link></div>
                                        </div>
                                    </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title"><Link className="home-cat-link" to="/outside">Outside<i class="fa-solid fa-greater-than"></i></Link></div>
                    <div className="category-card-holder">
                    {outside.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div 
                                className="preview-image-container"
                                //         style={{ backgroundImage: `url('${project.coverImageUrl}'` }}
                                        >

                                        <img 
                                        className="preview-image" 
                                        onError={(e)=>{
                                            if(e.target.src !== errImage) {
                                            setNewSrc(errImage)
                                            e.target.src = errImage
                                            }
                                        }}
                                    src={`${project.coverImageUrl}`}></img>
                                        </div>
                                </Link>

                                <div className="scard-details">
                                        <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> 
                                        <div className="scard-mid">by {project.creator.username} in <Link className="scard-cat-link" to={`/${project.category.toLowerCase()}`}>{project.category}</Link></div>
                                        </div>
                                    </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>

                <div className="category-section">
                    <div className="category-title"><Link className="home-cat-link" to="/teachers">Teachers<i class="fa-solid fa-greater-than"></i></Link></div>
                    <div className="category-card-holder">
                    {teachers.slice(0).reverse().slice(0, 5).map(project => {
                            return (
                                <div key={project.id}  className="card-holder">
                                <Link to={`/projects/${project.id}`}>
                                <div 
                                className="preview-image-container"
                                //         style={{ backgroundImage: `url('${project.coverImageUrl}'` }}
                                        >

                                        <img 
                                        className="preview-image" 
                                        onError={(e)=>{
                                            if(e.target.src !== errImage) {
                                            setNewSrc(errImage)
                                            e.target.src = errImage
                                            }
                                        }}
                                    src={`${project.coverImageUrl}`}></img>
                                        </div>
                                </Link>

                                <div className="scard-details">
                                        <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> 
                                        <div className="scard-mid">by {project.creator.username} in <Link className="scard-cat-link" to={`/${project.category.toLowerCase()}`}>{project.category}</Link></div>
                                        </div>
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