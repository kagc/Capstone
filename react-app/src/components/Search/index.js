import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Search.css'
import { Link, useHistory, useParams, useLocation } from "react-router-dom";
import { getAllProjects } from '../../store/project';
import SearchNotFound from "./SearchNotFound";
let errImage = 'https://previews.123rf.com/images/sonsedskaya/sonsedskaya1902/sonsedskaya190200070/118117055-portrait-of-a-builder-cat-with-tools-in-paws.jpg'

function SearchResultPage() {
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    let { pathname } = useLocation()
    const [ isLoaded, setIsLoaded ] = useState(false)
    
    const [newSrc, setNewSrc] = useState('')

    let { category, searchTerm } = params
    const [searchCriteria, setSearchCriteria ] = useState(searchTerm)

    const projectsObj = useSelector(state => state.projects.allProjects)

    useEffect(() => {
        dispatch(getAllProjects())
        .then(() => setIsLoaded(true))

        // if (searchTerm !== sear)
    }, [dispatch, pathname])

    const projects = Object.values(projectsObj)
    // console.log("aaaaa", projects)
    const projectsDupe = Object.values(projectsObj)

    const submitSearch = async (e) => {
        e.preventDefault()
        history.push(`/search/projects/all/q=${searchCriteria}`)
        setSearchCriteria(searchTerm)
        setIsLoaded(false)
        // alert("Sorry, that function hasn't been implemented yet.")
      }

    
    let results = []
    let currentIndex = 0
    if (category === 'all') {
        if(projects.length) {
            projects.forEach((project) => {
                delete project.creator.email
                delete project.creator.id
                delete project.steps
                for (let key in project) { 
                    // ignore these columns
                    if (key !== 'creatorId' && key !== 'coverImageUrl' && key !== 'id' && key !== 'created_at'){
                        // searches username only
                        if(typeof project[key] === 'object'){
                            if(project[key].username !== undefined && project[key].username.toLowerCase().includes(searchTerm.toLowerCase())){
                                results.push(projectsDupe[currentIndex])
                            }
                        }
                    }

                    if(project[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                        results.push(projectsDupe[currentIndex])
                    }
                }
                currentIndex++
            })
        }
    }

    let filteredResults = results.filter((result, index) => results.indexOf(result) === index);

    // console.log(filteredResults)

    
    if(isLoaded === false) {
        return (
            <div className="load"><img className="loading" src="https://miro.medium.com/max/1400/1*pN5YHNX03fem8HWxnInQ3g.gif"></img></div>
            )
        }
        
    if (!projectsObj) return null

    return isLoaded && (
        <div className="search-container">
            <div className="second-search-bar">
                <span>Search results: </span>
                <form onSubmit={submitSearch} className="second-searchform">
                        <input
                        className="search-input2"
                        type="text"
                        // disabled="true"
                        value={searchCriteria}
                        onChange={(e) => {
                            setSearchCriteria(e.target.value)
                        }}
                        title="Searchbar"
                        placeholder="Type your search here"
                        minLength="3"></input>
                        
                        <button hidden
                         className="search-button"><i class="fa-solid fa-magnifying-glass" ></i></button>
                        </form>
            </div>

            <div className="categories-bar">
                <Link id={category === "all" ? "search-underline" : null} to={`/search/projects/all/q=${searchTerm}`}>
                    All
                </Link>
                <Link id={category === "circuits" ? "search-underline" : null} to={`/search/projects/circuits/q=${searchTerm}`}>
                    Circuits
                </Link>
                <Link id={category === "workshop" ? "search-underline" : null} to={`/search/projects/workshop/q=${searchTerm}`}>
                    Workshop
                </Link>
                <Link id={category === "craft" ? "search-underline" : null} to={`/search/projects/craft/q=${searchTerm}`}>
                    Craft
                </Link>
                <Link id={category === "cooking" ? "search-underline" : null} to={`/search/projects/cooking/q=${searchTerm}`}>
                    Cooking
                </Link>
                <Link id={category === "living" ? "search-underline" : null} to={`/search/projects/living/q=${searchTerm}`}>
                    Living
                </Link>
                <Link id={category === "outside" ? "search-underline" : null} to={`/search/projects/outside/q=${searchTerm}`}>
                    Outside
                </Link>
                <Link id={category === "teachers" ? "search-underline" : null} to={`/search/projects/teachers/q=${searchTerm}`}>
                    Teachers
                </Link>
            </div>

            <div className="results-num-bar">
                {filteredResults.length} results
            </div>

            <div className="search-card-holder">
            <div className="category-section">
                    {/* <div className="category-title">Circuits<i class="fa-solid fa-greater-than"></i></div> */}

                        {filteredResults.length > 0 ? (
                            <div className="scategory-card-holder">
                            {filteredResults.map(project => {
    
                                return (
                                    <div key={project.id}  className="scard-holder">
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
                                        <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> by {project.creator.username}</div>
                                    </div>
    
                                        </div>
                                )
                            })}
                        </div>
                        ) : (
                            <SearchNotFound />
                        )}
                    {/* <div className="scategory-card-holder">
                        {filteredResults.map(project => {

                            return (
                                <div key={project.id}  className="scard-holder">
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
                                    <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> by {project.creator.username}</div>
                                </div>

                                    </div>
                            )
                        })}
                    </div> */}

                </div>
            </div>

        </div>
    )
}

export default SearchResultPage;