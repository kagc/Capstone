import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Search.css'
import { Link, useHistory, useParams, useLocation } from "react-router-dom";
import { getAllProjects } from '../../store/project';
import SearchNotFound from "./SearchNotFound";
import { everyFavorite, getAllFavorites } from "../../store/favorite";
let errImage = 'https://previews.123rf.com/images/sonsedskaya/sonsedskaya1902/sonsedskaya190200070/118117055-portrait-of-a-builder-cat-with-tools-in-paws.jpg'

function Categories() {
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    let { pathname } = useLocation()
    const [ isLoaded, setIsLoaded ] = useState(false)
    console.log("aaaaaa0", pathname)
    const [newSrc, setNewSrc] = useState('')

    let { category, searchTerm } = params
    const [searchCriteria, setSearchCriteria ] = useState(searchTerm)

    const projectsObj = useSelector(state => state.projects.allProjects)
    const everyFavObj = useSelector(state => state.favorites.everyFavorite)

    useEffect(() => {
        dispatch(getAllProjects())
        .then(() => setIsLoaded(true))

        dispatch(everyFavorite())

        if (searchTerm !== searchCriteria){
            setSearchCriteria(searchTerm)
        }
    }, [dispatch, pathname])

    const projects = Object.values(projectsObj)
    // console.log("aaaaa", projects)
    const projectsDupe = Object.values(projectsObj)

    const allFavs = Object.values(everyFavObj)
    // console.log("xxxxx", allFavs)

    // const submitSecondSearch = async (e) => {
    //     e.preventDefault()
    //     setSearchCriteria(searchCriteria)
    //     history.push(`/search/projects/all/q=${searchCriteria}`)
    //     setIsLoaded(false)
    //     // alert("Sorry, that function hasn't been implemented yet.")
    //   }

    
    // let results = []
    // let currentIndex = 0
    // if (category === 'all') {
    //     if(projects.length) {
    //         projects.forEach((project) => {
    //             delete project.creator.email
    //             delete project.creator.id
    //             delete project.steps
    //             for (let key in project) { 
    //                 // ignore these columns
    //                 if (key !== 'creatorId' && key !== 'coverImageUrl' && key !== 'id' && key !== 'created_at'){
    //                     // searches username only
    //                     if(typeof project[key] === 'object'){
    //                         if(project[key].username !== undefined && project[key].username.toLowerCase().includes(searchTerm.toLowerCase())){
    //                             results.push(projectsDupe[currentIndex])
    //                         }
    //                     }
                        
    //                     if(project[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
    //                         results.push(projectsDupe[currentIndex])
    //                     }
    //                 }
    //             }
    //             currentIndex++
    //         })
    //     }
    // }
    const circuits = projects.filter(project => project.category === "Circuits")
    const workshop = projects.filter(project => project.category === "Workshop")
    const craft = projects.filter(project => project.category === "Craft")
    const cooking = projects.filter(project => project.category === "Cooking")
    const living = projects.filter(project => project.category === "Living")
    const outside = projects.filter(project => project.category === "Outside")
    const teachers = projects.filter(project => project.category === "Teachers")

    // if (category === 'circuits') {
    //     if(projects.length) {
    //         const categorizedProjects = projects.filter(project => project.category === 'Circuits')
    //         // console.log("aaaaa", categorizedProjects, circuits)
    //         categorizedProjects.forEach((project) => {
    //             delete project.creator.email
    //             delete project.creator.id
    //             delete project.steps
    //             for (let key in project) { 
    //                 // ignore these columns
    //                 if (key !== 'creatorId' && key !== 'coverImageUrl' && key !== 'id' && key !== 'created_at'){
    //                     // searches username only
    //                     if(typeof project[key] === 'object'){
    //                         if(project[key].username !== undefined && project[key].username.toLowerCase().includes(searchTerm.toLowerCase())){
    //                             results.push(circuits[currentIndex])
    //                         }
    //                     }
                        
    //                     if(project[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
    //                         results.push(circuits[currentIndex])
    //                     }
    //                 }
    //             }
    //             currentIndex++
    //         })
    //     }
    // }

    // if (category === 'workshop') {
    //     if(projects.length) {
    //         const categorizedProjects = projects.filter(project => project.category === 'Workshop')
    //         // console.log("aaaaa", categorizedProjects, circuits)
    //         categorizedProjects.forEach((project) => {
    //             delete project.creator.email
    //             delete project.creator.id
    //             delete project.steps
    //             for (let key in project) { 
    //                 // ignore these columns
    //                 if (key !== 'creatorId' && key !== 'coverImageUrl' && key !== 'id' && key !== 'created_at'){
    //                     // searches username only
    //                     if(typeof project[key] === 'object'){
    //                         if(project[key].username !== undefined && project[key].username.toLowerCase().includes(searchTerm.toLowerCase())){
    //                             results.push(workshop[currentIndex])
    //                         }
    //                     }
                        
    //                     if(project[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
    //                         results.push(workshop[currentIndex])
    //                     }
    //                 }
    //             }
    //             currentIndex++
    //         })
    //     }
    // }

    // if (category === 'craft') {
    //     if(projects.length) {
    //         const categorizedProjects = projects.filter(project => project.category === 'Craft')
    //         // console.log("aaaaa", categorizedProjects, circuits)
    //         categorizedProjects.forEach((project) => {
    //             delete project.creator.email
    //             delete project.creator.id
    //             delete project.steps
    //             for (let key in project) { 
    //                 // ignore these columns
    //                 if (key !== 'creatorId' && key !== 'coverImageUrl' && key !== 'id' && key !== 'created_at'){
    //                     // searches username only
    //                     if(typeof project[key] === 'object'){
    //                         if(project[key].username !== undefined && project[key].username.toLowerCase().includes(searchTerm.toLowerCase())){
    //                             results.push(craft[currentIndex])
    //                         }
    //                     }
                        
    //                     if(project[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
    //                         results.push(craft[currentIndex])
    //                     }
    //                 }
    //             }
    //             currentIndex++
    //         })
    //     }
    // }

    // if (category === 'cooking') {
    //     if(projects.length) {
    //         const categorizedProjects = projects.filter(project => project.category === 'Cooking')
    //         // console.log("aaaaa", categorizedProjects, circuits)
    //         categorizedProjects.forEach((project) => {
    //             delete project.creator.email
    //             delete project.creator.id
    //             delete project.steps
    //             for (let key in project) { 
    //                 // ignore these columns
    //                 if (key !== 'creatorId' && key !== 'coverImageUrl' && key !== 'id' && key !== 'created_at'){
    //                     // searches username only
    //                     if(typeof project[key] === 'object'){
    //                         if(project[key].username !== undefined && project[key].username.toLowerCase().includes(searchTerm.toLowerCase())){
    //                             results.push(cooking[currentIndex])
    //                         }
    //                     }
                        
    //                     if(project[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
    //                         results.push(cooking[currentIndex])
    //                     }
    //                 }
    //             }
    //             currentIndex++
    //         })
    //     }
    // }

    // if (category === 'living') {
    //     if(projects.length) {
    //         const categorizedProjects = projects.filter(project => project.category === 'Living')
    //         // console.log("aaaaa", categorizedProjects, circuits)
    //         categorizedProjects.forEach((project) => {
    //             delete project.creator.email
    //             delete project.creator.id
    //             delete project.steps
    //             for (let key in project) { 
    //                 // ignore these columns
    //                 if (key !== 'creatorId' && key !== 'coverImageUrl' && key !== 'id' && key !== 'created_at'){
    //                     // searches username only
    //                     if(typeof project[key] === 'object'){
    //                         if(project[key].username !== undefined && project[key].username.toLowerCase().includes(searchTerm.toLowerCase())){
    //                             results.push(living[currentIndex])
    //                         }
    //                     }
                        
    //                     if(project[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
    //                         results.push(living[currentIndex])
    //                     }
    //                 }
    //             }
    //             currentIndex++
    //         })
    //     }
    // }

    // if (category === 'outside') {
    //     if(projects.length) {
    //         const categorizedProjects = projects.filter(project => project.category === 'Outside')
    //         // console.log("aaaaa", categorizedProjects, circuits)
    //         categorizedProjects.forEach((project) => {
    //             delete project.creator.email
    //             delete project.creator.id
    //             delete project.steps
    //             for (let key in project) { 
    //                 // ignore these columns
    //                 if (key !== 'creatorId' && key !== 'coverImageUrl' && key !== 'id' && key !== 'created_at'){
    //                     // searches username only
    //                     if(typeof project[key] === 'object'){
    //                         if(project[key].username !== undefined && project[key].username.toLowerCase().includes(searchTerm.toLowerCase())){
    //                             results.push(outside[currentIndex])
    //                         }
    //                     }
                        
    //                     if(project[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
    //                         results.push(outside[currentIndex])
    //                     }
    //                 }
    //             }
    //             currentIndex++
    //         })
    //     }
    // }

    // if (category === 'teachers') {
    //     if(projects.length) {
    //         const categorizedProjects = projects.filter(project => project.category === 'Teachers')
    //         // console.log("aaaaa", categorizedProjects, circuits)
    //         categorizedProjects.forEach((project) => {
    //             delete project.creator.email
    //             delete project.creator.id
    //             delete project.steps
    //             for (let key in project) { 
    //                 // ignore these columns
    //                 if (key !== 'creatorId' && key !== 'coverImageUrl' && key !== 'id' && key !== 'created_at'){
    //                     // searches username only
    //                     if(typeof project[key] === 'object'){
    //                         if(project[key].username !== undefined && project[key].username.toLowerCase().includes(searchTerm.toLowerCase())){
    //                             results.push(teachers[currentIndex])
    //                         }
    //                     }
                        
    //                     if(project[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
    //                         results.push(teachers[currentIndex])
    //                     }
    //                 }
    //             }
    //             currentIndex++
    //         })
    //     }
    // }
    // console.log(results)

    // let filteredResults = results.filter((result, index) => results.indexOf(result) === index);
    let filteredResults = []
    if (pathname.toLowerCase() === '/projects') filteredResults = projects
    if (pathname.toLowerCase() === '/circuits') filteredResults = circuits
    if (pathname.toLowerCase() === '/workshop') filteredResults = workshop
    if (pathname.toLowerCase() === '/craft') filteredResults = craft
    if (pathname.toLowerCase() === '/cooking') filteredResults = cooking
    if (pathname.toLowerCase() === '/living') filteredResults = living
    if (pathname.toLowerCase() === '/outside') filteredResults = outside
    if (pathname.toLowerCase() === '/teachers') filteredResults = teachers

    if(filteredResults.length > 0){
        filteredResults.forEach(result => {
            result.total = 0
            allFavs.forEach(fav => {
                if(fav.projectId === result.id){
                    result.total += 1
                    // console.log(result.total)
                }
            })
        })
    }

    // console.log(filteredResults)

    
    if(isLoaded === false) {
        return (
            <div className="load"><img className="loading" src="https://miro.medium.com/max/1400/1*pN5YHNX03fem8HWxnInQ3g.gif"></img></div>
            )
        }
        
    if (!projectsObj || ! everyFavObj) return null

    return isLoaded && (
        <div className="search-container">
            {/* <div className="second-search-bar">
                <span className="search-results">Search results: </span>
                <form onSubmit={submitSecondSearch} className="second-searchform">
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
            </div> */}

            <div className="categories-bar">
                <Link id={pathname.toLowerCase() === '/projects' ? "search-underline" : null} to={`/projects`}>
                    All
                </Link>
                <Link id={pathname.toLowerCase() === '/circuits' ? "search-underline" : null} to={`/circuits`}>
                    Circuits
                </Link>
                <Link id={pathname.toLowerCase() === '/workshop' ? "search-underline" : null} to={`/workshop`}>
                    Workshop
                </Link>
                <Link id={pathname.toLowerCase() === '/craft' ? "search-underline" : null} to={`/craft`}>
                    Craft
                </Link>
                <Link id={pathname.toLowerCase() === '/cooking' ? "search-underline" : null} to={`/cooking`}>
                    Cooking
                </Link>
                <Link id={pathname.toLowerCase() === '/living' ? "search-underline" : null} to={`/living`}>
                    Living
                </Link>
                <Link id={pathname.toLowerCase() === '/outside' ? "search-underline" : null} to={`/outside`}>
                    Outside
                </Link>
                <Link id={pathname.toLowerCase() === '/teachers' ? "search-underline" : null} to={`/teachers`}>
                    Teachers
                </Link>
            </div>

            <div className="results-num-bar">
                {filteredResults.length} result{filteredResults.length > 1 ? 's' : null}
            </div>

            <div className="search-card-holder">
            <div className="scategory-section">
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
                                        <div><Link className="scard-title" to={`/projects/${project.id}`}>{project.title}</Link> 
                                        <div className="scard-mid">by {project.creator.username} in <Link className="scard-cat-link" to={`/${project.category.toLowerCase()}`}>{project.category}</Link></div>
                                        </div>
                                    </div>

                                    <div className="scard-bottom">
                                        <i id="sheart" class="fa-solid fa-heart"></i> {project.total}</div>
                                            
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

export default Categories;