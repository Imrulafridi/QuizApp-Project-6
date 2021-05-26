import React, { useContext, useState } from 'react'
import {QuizQuestions} from "../services/Types"
import {QuizContext, Contextprops} from "../context/GlobalContext"

const QuizCard = () => {

  const { QuizData, Loading} = useContext<Contextprops>(QuizContext)
  const [number, setnumber] = useState<number>(0)
  
  if (!QuizData) {
    return (
      <h1> Loading... </h1> 
      )
  }
  
  
  
    return (
      <div>
        {QuizData.map((question) => {
          return (
            <h1>{question.question}</h1>
          )
        })}
      </div>
    )
  

}

export default QuizCard
