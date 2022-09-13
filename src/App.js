import { useState } from 'react'; 
import './App.css';

const ChoiceButton = (props) => {
  const { value, onClick, disabled } = props
  return (
    <button className="choiceButton" onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const explanationContent = {
  background: "white",
  padding: "0px",
  borderRadius: "10px",
  width: "800px",
}

const Explanation = (props) => {
  const { result, text, showFlag, onClickClose, onClickNextProblem } = props;

  return (
    <>
      {showFlag ? (
        <div style={overlay}>
          <div className="explanation" style={explanationContent} >
            <button className="closeButton" onClick={onClickClose}>
              X 
            </button>
            <button className="nextProblemButton" onClick={onClickNextProblem}>
              次のクイズへ
            </button>
            <h2>{result}</h2>
            <h1 className="ox">
              {result === "正解" ? "○" : "×" }
            </h1>
            <div className="explanation-main">
              <h3>解説</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const Problem = (props) => {
  const { problem, onClickNextProblem, result, setResult, showExplanation, setShowExplanation } = props

  const [isAnswered, setIsAnswered] = useState(false);

  const onClickChoice = (event) => {
    const choice = event.target.textContent;
    console.log(`click ${choice}`);

    const isCorrect = choice === problem.answer
    console.log(`isCorrect: ${isCorrect}`)

    if (isCorrect) {
      setResult("正解");
    } else {
      setResult("不正解")
    }

    // setIsAnswered(true);
    setShowExplanation(true);
  }

  const onClickClose = () => {
    console.log(`click close`);
    
    setResult('');
    setShowExplanation(false);
  };

  return (
    <>
      <div className="problem">
        <div className="problem-header">
          <h2>〜freeeと一緒に学ぼう〜</h2>
          <h1>デイリークイズ</h1>
        </div>
        <div className="problem-main">
          <p className="problem-level">レベル１</p>
          <p>{problem.text}</p>
          <ChoiceButton value="o" onClick={onClickChoice} disabled={isAnswered} /> 
          <ChoiceButton value="x" onClick={onClickChoice} disabled={isAnswered} />
        </div>
      </div>
      <Explanation 
        result={result} 
        text={problem.explanation} 
        showFlag={showExplanation}
        onClickClose={onClickClose}
        onClickNextProblem={onClickNextProblem}
      />
    </>
  );
};

function App() {
  const problems = [
    {
      text: "仕事できるスーツは経費にできるでしょうか？",
      answer: "x",
      explanation: `
        フリーランスの場合は経費で落とせます。
        ただし、仕事で使う割合に応じて経費にできる割合が決まります。
        ただし度を超えて高額すぎるものはNGの場合もあります。
      `,
    },
    {
      text: "家族の夕飯の買い出しは経費にしてもいいでしょうか？",
      answer: "x",
      explanation: "作成中...",
    },
    {
      text: "クレジットカードの明細があればレシートは捨てても良い！",
      answer: "x",
      explanation: "作成中...",
    }
  ];

  const [currentProblemId, setCurrentProblemId] = useState(0);

  const [result, setResult] = useState("");

  const [showExplanation, setShowExplanation] = useState(false);

  const onClickNextProblem = () => {
    console.log("click next problem");

    setResult('');
    setShowExplanation(false);
    setCurrentProblemId(prev => (prev + 1) % problems.length);
  };

  return (
    <div className="App">
      <Problem  
        problem={problems[currentProblemId]}
        onClickNextProblem={onClickNextProblem}
        result={result}
        setResult={setResult}
        showExplanation={showExplanation}
        setShowExplanation={setShowExplanation}
      />
    </div>
  );
}

export default App;
