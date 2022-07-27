import data from '../data'
import React, { useState } from 'react'
import Question from './Question'

function Questions() {
    const [questions , setQuestions] = useState(data)
  return (
    <div className='question-list'>
        {questions.map((question)=>{
            return(
                <Question question = {question}/>
            )
            
        })}
    </div>
  )
}

export default Questions