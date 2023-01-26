// import '../CreateProject/CreateProject.css'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getOneProject, modProject, nukeProject } from '../../store/project';

const EditProject = () => {
    const { projectId } = useParams()
    // console.log("did it pass", oneProject)

    // .push the deleted step IDs to bulk delete on submit
    const deletedSteps = []

    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    const project = useSelector(state => state.projects.singleProject)
    const steps = useSelector(state => state.projects.singleProject.stepsList)
    
    steps.forEach(step => deletedSteps.push(step))
    console.log("!!!!!!!!!!!!!!!!!deletedSteps ",deletedSteps)
    

    const [ title, setTitle ] = useState(project.title)
    const [category, setCategory ] = useState(project.category)
    const [ coverImageUrl, setCoverImageUrl ] = useState(project.coverImageUrl)
    const [ intro, setIntro ] = useState(project.intro)
    const [ supplies, setSupplies ] = useState(project.supplies)
    const [ stepInputFields, setStepInputFields ] = useState(steps)

    console.log("!!!!!!!!!!!!stepinputfield",stepInputFields)
    // setStepInputFields(steps)
    
    useEffect(() => {
        dispatch(getOneProject(projectId))
        setStepInputFields(steps)
    }, [dispatch])
    
    const [errors, setErrors] = useState([]);
    
    const allCategories = ["Circuits", "Workshop", "Craft", "Cooking", "Living", "Outside", "Teachers"]
    
    
    const handleFormChange = (index, e) => {
        let data = [ ...stepInputFields ]
        // data[index].stepNum = index + 1
        // console.log("what is data",data[index].stepNum)
        data[index][e.target.name] = e.target.value
        setStepInputFields(data)
    }

    const addFields = (e) => {
        e.preventDefault()
        let newField = { 
            stepNum: '',
            stepTitle: '',
            stepDescription: '',
        }
        setStepInputFields([ ...stepInputFields, newField ])
    }

    const removeFields = (index, e) => {
        e.preventDefault()
        if (index === 0){
            return alert('cannot remove step 1')
        }
        let data = [...stepInputFields];
        // console.log(data[index].stepNum)
        // data[index].stepNum = index + 1
        data.splice(index, 1)
        setStepInputFields(data)
    }

    const unpublish = async (e) => {
        e.preventDefault()

        const data = await dispatch(nukeProject(project.id))
        if (data){
            history.push('/')
        }
    }

    const submit = async (e) => {
        e.preventDefault();

        let stepCounter = 1
        stepInputFields.forEach(step => {
            step.stepNum = stepCounter++
        })

        const updatedProject = {
            // creatorId: sessionUser.id,
            projectId: projectId,
            title,
            category,
            coverImageUrl,
            intro,
            supplies
        }

        let canCreateProject = true
        stepInputFields.forEach(step => {
            if (step.stepTitle === "" || step.stepDescription === ""){
                canCreateProject = false
                return setErrors(["Steps cannot be left blank. Please fill in or remove that step."])
            }
        })
        
        if (canCreateProject === true){
        const data = await dispatch(modProject(updatedProject, deletedSteps, stepInputFields))

        .catch(async (res) => {
            const data = await res.json()
            if(data && data.errors){
                setErrors(data.errors)
            }
            
        })

        if (data){
            history.push(`/projects/${data.id}`)
        }

    }
}

    const returnToPage = (e) => {
        e.preventDefault()
        history.push(`/projects/${projectId}`)
    }

    if( !project || !steps ) return null;

    return (
        <div className="wholething">
            <div className="content">
            <form onSubmit={submit}>

            <div className="topbar">
                    <div>
                        <button onClick={returnToPage} className="login-button">Cancel</button>
                    </div>
                    <div className="draft-text">
                        Draft
                    </div>
                    <div>
                        <button className="unpublish-button" onClick={unpublish}>Unpublish</button>
                        <button className="signup-button" onClick={submit} type="submit">Publish</button>
                    </div>
                </div>


<div className="error-box">
    {errors.map((error, ind) => (
        <div key={ind}>{error}</div>
    ))}
</div>

<div className="section-container">
                    <div className="section-name">Project Basics</div>

                       <div className="input-label">Project Title</div> 
<input
className='input-line'
type="text"
name="title"
placeholder={title}
value={title}
onChange={(e) => setTitle(e.target.value)}
required
></input>

<div className="input-label"> Category</div>
<select
// className='input-line'
name="category"
placeholder={category}
value={category}
onChange={(e) => setCategory(e.target.value)}
required>
    {allCategories.map(category => (
        <option key={category}
        value={category}>{category}</option>
    ))}
</select>
</div>

<div className="section-container">
                    <div className="section-name">Introduction</div>

                    <div className="input-label">Cover Image Url</div> 
<input
className='input-line'
type="text"
name="coverImageUrl"
placeholder={coverImageUrl}
value={coverImageUrl}
onChange={(e) => setCoverImageUrl(e.target.value)}
required ></input>

<div className="input-label">Introduction</div> 
<input
className='input-line'
type="textarea"
name="intro"
placeholder={intro}
value={intro}
onChange={(e) => setIntro(e.target.value)}
required
></input>
</div>

<div className="section-container">
                    <div className="section-name">Supplies</div>
<input
className='input-line'
type="text"
name="supplies"
placeholder={supplies}
value={supplies}
onChange={(e) => setSupplies(e.target.value)}
required></input>
</div>

{stepInputFields !== undefined && stepInputFields.map((input, index) => {
    let stepNum = index + 1
    return (
        <div className="section-container "key={index}>
                            <div className="step-section-top"><div className='step-section-top-mid'>Step {index+1}:
            <input
            className='input-line'
            type="text"
            name='stepTitle'
            placeholder='Step Title'
            value={input.stepTitle} 
            onChange={e => handleFormChange(index, e)}
            required ></input>
            </div>

            <div className="remove-step-button"><button onClick={(e) => removeFields(index, e)}>Remove</button></div>
                            </div>

            <input
            className='input-line'
            type="text"
            name='stepDescription'
            placeholder='Step Description'
            value={input.stepDescription} 
            onChange={e => handleFormChange(index, e)}
            required ></input>

        </div>
    )
})}
<div className='bottombar'><button className="steps-button" onClick={addFields}>Add New Step +</button></div>

{/* <button onClick={submit} type="submit">Submit</button> */}

</form>

</div>
        </div>
    )
}

export default EditProject