import './Results.css';

const Results = ({score,onRestart}) => {
  return (
    <div className='result-wrap'>
      <p>〈퀴즈종료〉</p>
        <p>최종점수는?</p>
        <div className='score'>
        <img src='./images/confetii.png'/>
        {score}점
        <img src='./images/confetii.png'/>
        </div>
      <button onClick={onRestart}>다시 시작하기
        <img src='./images/pig1.png'/>
      </button>
    </div>
  );
};

export default Results;