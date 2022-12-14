import { ChoiceButton } from './ChoiceButton';

const problemStyle = {
	margin: "auto",
	marginTop: "20px",
	width: "670px",
	border: "6px solid white",
	borderRadius: "5px",
}

const problemHeaderStyle = {
	backgroundColor: "white",
	padding: "4px",
}

const dailyQuizTitleStyle = {
	margin: "0",
	fontSize: "18px",
}

const dailyQuizThemeStyle = {
	margin: "0",
	fontSize: "11px",
	color: "#3264DC",
}

const problemLevelStyle = {
	border: "2px solid #2864F0",
	borderRadius: "10px",
	color: "#2864F0",
	width: "80px",
	margin: "auto",
	marginTop: "15px",
}

const problemContentStyle = {
	fontSize: "15px",
	fontWeight: "600",
};

export const Problem = (props) => {
	const { problem, onClickChoice } = props

	return (
		<>
			<div className="problem" style={problemStyle}>
				<div className="problemHeader" style={problemHeaderStyle}>
					<h2 className="dailyQuizTheme" style={dailyQuizThemeStyle}>
						〜freeeと一緒に学ぼう〜
					</h2>
					<h1 className="dailyQuizTitle" style={dailyQuizTitleStyle}>
						デイリークイズ
					</h1>
				</div>
				<div className="problemBody">
					<p className="problemLevel" style={problemLevelStyle}>
						Level {problem.level}
					</p>
					<p className="problemContent" style={problemContentStyle}>{problem.text}</p>
					<ChoiceButton value="o" onClick={onClickChoice} /> 
					<ChoiceButton value="x" onClick={onClickChoice} />
				</div>
			</div>
		</>
	);
};

