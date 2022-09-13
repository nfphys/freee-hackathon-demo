import { useState } from 'react'; 
import { Problem } from './components/Problem';
import './App.css';


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
