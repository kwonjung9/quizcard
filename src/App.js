import { useState } from 'react';
import quizData from './data/quizData';
import CategorySelection from './components/CategorySelection';
import QuizPage from './components/QuizPage';
import Results from './components/Results';
const App = () => {
  const [category,setCategory] = useState('');
  const [finished,setFinished] = useState(false);
  const [score,setScore] = useState(0);
  const handleCategorySelect = (select) => {
    setCategory(select);
  }
  const handleFinish = (score)=>{
    setFinished(true);
    setScore(score);
  }
  const handleRestart = ()=>{
    setCategory(null);
    setFinished(false);
  }
  console.log(category);
  return (
    <div className='app'>
      {
        !category && !finished && <CategorySelection categories={quizData.categories} onCategorySelect={handleCategorySelect}/>
      }
      {
        category && !finished && <QuizPage category={category} quizData={quizData.quizzes} onFinished={handleFinish} onRestart={handleRestart}/>
      }
      {
        finished && <Results score={score} onRestart={handleRestart}/>
      }
    </div>
  );
};

export default App;