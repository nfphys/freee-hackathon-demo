import { useState } from 'react'; 
import { Problem } from './Problem';
import { ExplanationModal } from './ExplanationModal';

export const DailyQuiz = (props) => {
  const { problems } = props;

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