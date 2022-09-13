export const ChoiceButton = (props) => {
	const { value, onClick, disabled } = props
	return (
			<button className="choiceButton" onClick={onClick} disabled={disabled}>
			{value}
			</button>
	);
};