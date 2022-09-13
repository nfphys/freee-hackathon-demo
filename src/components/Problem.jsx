import { useState } from 'react'; 
import { ChoiceButton } from './ChoiceButton';
import { Explanation } from './Explanation';

export const Problem = (props) => {
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

