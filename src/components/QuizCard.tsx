import React, { useContext, useState } from 'react'
import {QuizQuestions} from "../services/Types"
import {QuizContext, Contextprops} from "../context/GlobalContext"

const QuizCard = () => {

  let { QuizData, Loading } = useContext<Contextprops>(QuizContext)
  const [enable, setenable] = useState(false)
  let [step, setstep] = useState(0)

  let handlequestion = () => {
    setenable(true)
  }

  let nextQ = () => {
    setstep(++step)
    setenable(false)
  }
  
  if (!QuizData.length) {
    return (
      <h1> Loading... </h1> 
      )
  }
  
    return (
      <div>
        <h3>
        {QuizData[step].question}
        </h3>
        <p>
          {QuizData[step].option.map((opt: string, ind: number) => {
            return (
              <div key={ind}>
                <button onClick={handlequestion} type="submit" value={opt} disabled={enable ? true : false}>{ opt }</button>
              </div>
            )
          })}
        </p>
        {
        <button onClick={nextQ} >Next</button>
        }
      </div>
    )
  

}

export default QuizCard
