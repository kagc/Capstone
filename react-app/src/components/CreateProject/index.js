import './CreateProject.css'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getOneProject, makeProject } from '../../store/project';

const CreateProject = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    const [ title, setTitle ] = useState("")
    const [category, setCategory ] = useState("")
    const [ coverImageUrl, setCoverImageUrl ] = useState("")
    const [ intro, setIntro ] = useState("")
    const [ supplies, setSupplies ] = useState("")

    const [ stepInputFields, setStepInputFields ] = useState([
        { stepNum: '',
            stepTitle: '',
            stepDescription: '',
        }
    ])

    const [errors, setErrors] = useState([]);
    const [stepErrors, setStepErrors] = useState([])

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

    const submit = async (e) => {
        e.preventDefault();

        let stepCounter = 1
        stepInputFields.forEach(step => {
            step.stepNum = stepCounter++
        })

        const newProject = {
            // creatorId: sessionUser.id,
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
                return setStepErrors(["Steps cannot be left blank. Please fill in or remove any unneeded steps."])
            }
        })
        // return console.log(stepInputFields)
        if (canCreateProject === true){
            const data = await dispatch(makeProject(newProject, stepInputFields))
        // .then(() => history.push(`/projects/${data.id}`))
        .catch(async (res) => {
            const data = await res.json()
            // return console.log(errorObj)
            // newErrors.push(errorObj.message)
            if(data && data.errors){
                setErrors(data.errors)
            }
            
        })

        if (data){
            history.push(`/projects/${data.id}`)
        }
        }
        // const data = await dispatch(makeProject(newProject, stepInputFields))
        // // .then(() => history.push(`/projects/${data.id}`))
        // .catch(async (res) => {
        //     const data = await res.json()
        //     // return console.log(errorObj)
        //     // newErrors.push(errorObj.message)
        //     if(data && data.errors){
        //         setErrors(data.errors)
        //     }
            
        // })

        // if (data){
        //     history.push(`/projects/${data.id}`)
        // }

        //   if(createdProject){
        //     history.push(`/projects/${createdProject.id}`)
        //   }

        // console.log(stepInputFields)
    }

    const returnToPage = (e) => {
        e.preventDefault()
        history.push(`/`)
    }

    if(!sessionUser) return null;

    return (
        <div className="wholething">
            <div className="content">
            <form className="project-form" onSubmit={submit}>
                <div className="topbar">
                    <div>
                        <button onClick={returnToPage} className="login-button">Cancel</button>
                    </div>
                    <div>
                        Draft
                    </div>
                    <div>
                        <button className="publish-button" 
                        // onClick={submit} 
                        type="submit">Publish</button>
                    </div>
                </div>

                {/* <ul className='errorlist'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul> */}
                <div className="error-box">
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                    {stepErrors.map((error, ind) => (
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
                placeholder='What did you make?'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
                maxlength="150"
                ></input>
                <div className='input-counter'>{title.length} / 150</div>

                <div className="input-label"> Category</div>
                <select
                // type="text"
                // className='input-line'
                name="category"
                placeholder="Select category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required>
                    <option value="" disabled>Select category</option>
                    {/* <option value="1">{allCategories[0]}</option>
                    <option value="2">{allCategories[1]}</option>
                    <option value="3">{allCategories[2]}</option>
                    <option value="4">{allCategories[3]}</option>
                    <option value="5">{allCategories[4]}</option>
                    <option value="6">{allCategories[5]}</option>
                    <option value="7">{allCategories[6]}</option> */}
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
                placeholder='https://...'
                value={coverImageUrl}
                onChange={(e) => setCoverImageUrl(e.target.value)}
                required ></input>
                
                <div className="input-label">Introduction</div> 
                {/* <input */}
                <textarea
                className='input-line-big'
                type="textarea"
                name="intro"
                placeholder='Briefly describe what you made and why. Include a photo of your finished project.'
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                required
                rows="5"
                cols="50"
                maxlength="1000"
                >
                    </textarea>
                {/* </input> */}
                </div>


                <div className="section-container">
                    <div className="section-name">Supplies</div>
                    <textarea
                className='input-line-big'
                type="textarea"
                name="supplies"
                placeholder='List any tools or materials used'
                value={supplies}
                onChange={(e) => setSupplies(e.target.value)}
                required
                rows="5"
                cols="50"
                maxlength="1000"></textarea>
                </div>

                {stepInputFields.map((input, index) => {
                    let stepNum = index + 1
                    return (
                        <div className="section-container "key={index}>
                            <div className="step-section-top"><div className='step-section-top-mid'>Step {index+1}:
                            <input
                            className='input-line-steptitle'
                            maxlength="40"
                            type="text"
                            name='stepTitle'
                            placeholder='Enter Step Title'
                            value={input.stepTitle} 
                            onChange={e => handleFormChange(index, e)}
                            required ></input>
                            </div>
                            
                            {index !== 0 && (
                                <div className="remove-step-button">
                                    <button onClick={(e) => removeFields(index, e)}>
                                    <i class="fa-solid fa-xmark"></i>
                                        </button>
                                        </div>
                            )}
                            {/* <div className="remove-step-button"><button onClick={(e) => removeFields(index, e)}>Remove</button></div> */}
                            </div>
                            {/* <input
                            name='stepNum'
                            placeholder='Step Number'
                            value={input.stepNum} 
                            onChange={e => handleFormChange(index, e)}/> */}
                            

                            <textarea
                className='input-line-big'
                type="textarea"
                            name='stepDescription'
                            placeholder='Write a detailed description of this step.'
                            value={input.stepDescription} 
                            onChange={e => handleFormChange(index, e)}
                            required 
                            rows="5"
                cols="50"
                            maxlength="1000"></textarea>

                            
                        </div>
                    )
                })}
                <div className='bottombar'><button className="steps-button" onClick={addFields}>Add New Step +</button></div>
                

                
            </form>
            </div>
        </div>
    )
}

export default CreateProject