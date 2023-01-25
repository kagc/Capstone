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
            <form onSubmit={submit}>
                <div className="topbar">
                    <div>
                        <button onClick={returnToPage} className="login-button">Cancel</button>
                    </div>
                    <div>
                        Draft
                    </div>
                    <div>
                        <button className="signup-button" onClick={submit} type="submit">Publish</button>
                    </div>
                </div>

                {/* <ul className='errorlist'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul> */}
                <div>
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
                placeholder='What did you make?'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                ></input>

<div className="input-label"> Category</div>
                <select
                // type="text"
                className='input-line'
                name="category"
                placeholder="Category"
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
                placeholder='Cover Image Url'
                value={coverImageUrl}
                onChange={(e) => setCoverImageUrl(e.target.value)}
                required ></input>
                
                <div className="input-label">Introduction</div> 
                <input
                className='input-line'
                type="textarea"
                name="intro"
                placeholder='Briefly describe what you made and why. Include a photo of your finished project.'
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
                placeholder='List any tools or materials used'
                value={supplies}
                onChange={(e) => setSupplies(e.target.value)}
                required></input>
                </div>

                {stepInputFields.map((input, index) => {
                    let stepNum = index + 1
                    return (
                        <div className="section-container "key={index}>
                            <div className="step-section-top"><div className='step-section-top-mid'>Step {index+1}:
                            <input
                            className='input-line'
                            type="text"
                            name='stepTitle'
                            placeholder='Enter Step Title'
                            value={input.stepTitle} 
                            onChange={e => handleFormChange(index, e)}
                            required ></input>
                            </div>
                            
                            <div className="remove-step-button"><button onClick={(e) => removeFields(index, e)}>Remove</button></div>
                            </div>
                            {/* <input
                            name='stepNum'
                            placeholder='Step Number'
                            value={input.stepNum} 
                            onChange={e => handleFormChange(index, e)}/> */}
                            

                            <input
                            className='input-line'
                            type="text"
                            name='stepDescription'
                            placeholder='Write a detailed description of this step.'
                            value={input.stepDescription} 
                            onChange={e => handleFormChange(index, e)}
                            required ></input>

                            
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