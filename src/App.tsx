import React from 'react';
import QuizCard from './components/QuizCard'
import { QuizContextProvider } from "./context/GlobalContext"

function App() {

  return (
    <QuizContextProvider>
      <div className="App">
        <h1>QUIZ APP</h1>
        <QuizCard />
      </div>
    </QuizContextProvider>
  );
}

export default App;
