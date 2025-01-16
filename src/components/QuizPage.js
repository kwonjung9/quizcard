import { useState } from "react";
import './QuizPage.css';

const QuizPage = ({category,quizData,onFinished,onRestart}) => {
  const [currentIdx,setCurrentIdx] = useState(0);
  const [score,setScore] = useState(0);
  const quizArr = quizData.filter((data)=>{
    return data.category === category;
  });

  const currentQuiz = quizArr[currentIdx];

  /***이전버튼 눌렀을 때 */
  const handleback = ()=>{
    const result = score-10;
    if(currentIdx-1 >= 0){
      setScore(result);
      setCurrentIdx(currentIdx-1);
    }else{
     //되돌아가기
      onRestart();
    }
  }

  /***정답 눌렀을 때 */
  const handleAnswer = (answer)=>{
    // setCurrentIdx(currentIdx+1);
    // if(answer === currentQuiz.correct){
    //   setScore(score+10);
    // }
    const result = (answer === currentQuiz.correct) ? score+10 : score;
    if(currentIdx+1 < quizArr.length){
      setScore(result);
      setCurrentIdx(currentIdx+1);
    }else{
      //종료상태
      onFinished(result);
    }
  }
    return (
    <div className="quiz-page">
      <h2>〈{category} 퀴즈〉</h2>
      <div className="circle"><p>{currentIdx+1}</p></div>
      {/* 1번째 p태그로 문제 제출 , 4지선다를 div > button으로 구성*/}
      <p>{currentQuiz.question}</p>
      <div className="choices">
        {
          currentQuiz.choices.map((txt,idx)=>{
            return <button key={idx} onClick={()=>{handleAnswer(txt)}}>{txt}</button>
          })
        }
      </div>
      <button onClick={()=>{handleback(null)}}>
        이전
        <img src="./images/back.png" alt="이전아이콘"/>
      </button>
    </div>
  );
};

export default QuizPage;