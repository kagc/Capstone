import './Questions.css'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getAllProjects, getOneProject, getUserProjects } from '../../store/project';
import { getAllQuestions, askQuestion, modQuestion, removeQuestion } from '../../store/question';

const Questions = ({project}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const questionsObj = useSelector(state => state.questions.allQuestions)
    console.log(project)
    const [ isLoaded, setIsLoaded ] = useState(false)

    const [ question, setQuestion ] = useState("")

    const [ showEdit, setShowEdit ] = useState(false)
    const [ thisQuestion, setThisQuestion ] = useState("")

    const [ editedQuestion, setEditedQuestion ] = useState("")
    const [ editedQuestionId, setEditedQuestionId ] = useState("")

    const [errors, setErrors] = useState([]);
    const [editErrors, setEditErrors] = useState([])

    const closeEdit = (e) => {
        e.preventDefault();
        setShowEdit(false)
    }

    useEffect(() => {
        dispatch(getAllQuestions(project.id))
        .then(setIsLoaded(true))
    }, [dispatch])

    const questions = Object.values(questionsObj)

    const submitQuestion = async (e) => {
        e.preventDefault()

        const newQuestion = {
            question
        }

        const data = await dispatch(askQuestion(newQuestion, project.id))
        .catch(async (res) =>{
            const data = await res.json()
            if (data && data.errors) {
                setErrors(data.errors)
            }
        })

        if (data) {
            setQuestion("")
        }
    }

    const submitEditedQuestion = async (e) => {
        e.preventDefault()

        const newEditedQuestion = {
            question: editedQuestion
        }

        const data = await dispatch(modQuestion(newEditedQuestion, editedQuestionId))
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
    
    if (!questionsObj) return null

    return isLoaded && (
        <div>
            AAAAAAAAAAA
        </div>
    )
}

export default Questions