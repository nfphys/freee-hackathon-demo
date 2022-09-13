const style = {
	width: "133px",
	height: "51px",
	backgroundColor: "white",
	color: "#2864F0",
	fontSize: "33px",
	border: "0",
	boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.3)",
	borderRadius: "4px",
	margin: "10px",
	cursor: "pointer",
}

export const ChoiceButton = (props) => {
	const { value, onClick, disabled } = props
	return (
		<button 
			className="choiceButton" 
			onClick={onClick} 
			disabled={disabled}
			style={style}
		>
			{value}
		</button>
	);
};