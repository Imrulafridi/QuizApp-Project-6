import React, { createContext, useEffect, useState } from 'react';
import { QuizQuestions} from "../services/Types"
import {FetchQuizData} from "./API"

export  type Contextprops = {
  Loading: Boolean,
  QuizData: QuizQuestions[] 
}

export const QuizContext= createContext<Contextprops>({} as Contextprops)

export const QuizContextProvider: React.FC = ({ children}) => {
const [Loading, setLoading] = useState(false)
  const [QuizData, setQuizData] = useState<QuizQuestions[]>([])

  useEffect( () => {
    async function FetchData() {
      setLoading(true)
      const results: QuizQuestions[] = await FetchQuizData(10, "easy");
      setQuizData(results);
      setLoading(false)
    }
    FetchData()
  },[])
  

  

  return (
    <QuizContext.Provider value={{Loading, QuizData }}>
      {children} 
    </QuizContext.Provider>
  )
}

