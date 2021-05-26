import { Quiz, QuizQuestions } from "../services/Types"

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5)



export const FetchQuizData = async (amount: number, level: string): Promise<QuizQuestions[]> => {
  const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`)
  const data = await res.json()
  const { results } = data;
  const quiz: QuizQuestions[] = results.map((quizdata: Quiz) => {
    return {
      question: quizdata.question,
      correct_answer: quizdata.correct_answer,
      option: shuffleArray([quizdata.correct_answer, ...quizdata.incorrect_answers])
    }
  })
  return quiz;
}