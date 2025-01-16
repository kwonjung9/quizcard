import './CategorySelection.css';


const CategorySelection = ({categories,onCategorySelect}) => {
  return (
    <div className="catrgory-selection">
      <img src="./images/happypig.png" alt="돼지이미지"/>
      <h1>퀴즈 카테고리를<br/> 선택해 주세요</h1>
      {/* 1. 카테고리를 button으로 작성 >> 요소를 만들 땐 map */}
      {
        categories.map((txt,idx)=>{
          return <button key={idx} onClick={()=>{onCategorySelect(txt)}}>{txt}
          <span>▶</span></button>
        })
      }
    </div>
  );
};

export default CategorySelection;