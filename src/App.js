import { useState } from 'react'; 
import { Problem } from './components/Problem';
import { ExplanationModal } from './components/ExplanationModal';
import './App.css';

function App() {
  const problems = [
    {
      level: 1,
      text: "仕事できるスーツは経費にできるでしょうか？",
      answer: "x",
      explanation: `
        フリーランスの場合は経費で落とせます。
        ただし、仕事で使う割合に応じて経費にできる割合が決まります。
        ただし度を超えて高額すぎるものはNGの場合もあります。
      `,
    },
    {
      level: 2,
      text: "家族の夕飯の買い出しは経費にしてもいいでしょうか？",
      answer: "x",
      explanation: "作成中...",
    },
    {
      level: 2,
      text: "クレジットカードの明細があればレシートは捨てても良い！",
      answer: "x",
      explanation: "作成中...",
    }
  ];

  const [currentProblemId, setCurrentProblemId] = useState(0);

  const currentProblem = problems[currentProblemId];

  const [result, setResult] = useState("");

  const [showExplanation, setShowExplanation] = useState(false);


	const onClickChoice = (event) => {
		const choice = event.target.textContent;
		console.log(`click ${choice}`);

		const isCorrect = choice === currentProblem.answer
		console.log(`isCorrect: ${isCorrect}`)

		if (isCorrect) {
			setResult("正解");
		} else {
			setResult("不正解")
		}

		setShowExplanation(true);
	}

  const onClickClose = () => {
		console.log(`click close`);
		
		setResult('');
		setShowExplanation(false);
	};

  const onClickNextProblem = () => {
    console.log("click next problem");

    setResult('');
    setShowExplanation(false);
    setCurrentProblemId(prev => (prev + 1) % problems.length);
  };

  return (
    <div className="App">
      <Problem  
        problem={currentProblem}
        onClickChoice={onClickChoice}
      />
      <ExplanationModal 
        problem={currentProblem}
				result={result} 
				showFlag={showExplanation}
				onClickClose={onClickClose}
				onClickNextProblem={onClickNextProblem}
			/>
    </div>
  );
}

export default App;
