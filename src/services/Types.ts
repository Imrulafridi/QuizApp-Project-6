import React from "react"

export type Quiz = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string
}

export type QuizQuestions = {
  question: string,
  option: string[]
  correct_answer: string,
}

export type QuizQuestionProps = {
  question: string,
  option: string[],
  click: Boolean,
  callback: (e:React.MouseEvent, answer:string) => void
}

export  type Contextprops = {
  Loading: Boolean,
  QuizData: QuizQuestions[] 
}
