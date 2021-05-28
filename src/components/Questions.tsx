import React, { useState } from 'react'
import { QuizQuestionProps } from "../services/Types"

const Questions: React.FC<QuizQuestionProps> = ({ question, option, callback, click }) => {

  const [answer, setanswer] = useState('')

  let answerSelect = (e: any) => {
    let ans = e.target.value;
    setanswer(ans)
  }

  return (
    <div>
      <h3 className="question">
        {question}
      </h3>

      {option.map((opt: string, ind: number) => {
        return (
          <div key={ind}>
            <button
              onClick={(e) => callback(e, answer)}
              type="submit"
              value={opt}
              onChange={answerSelect}
              disabled={click ? true : false}
            >
              {opt}
            </button>
          </div>
        )
      })}

    </div>












  )
}

export default Questions
