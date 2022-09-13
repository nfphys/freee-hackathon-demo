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

const closeButtonStyle = {
	fontSize: "20px",
	margin: "10px",
	float: "left",
	border: "0px",
	backgroundColor: "white",
	cursor: "pointer",
}

const nextProblemButtonStyle = {
	fontSize: "20px",
	margin: "10px",
	float: "right",
	backgroundColor: "white",
	fontWeight: "600",
	fontSize: "14px",
	border: "1px solid #E9E7E7",
	borderRadius: "6.4px",
	cursor: "pointer",
}

const resultStyle = {
	margin: "0",
	clear: "both",
}

const resultSymbolStyle = {
	color: "#2864F0", 
	fontSize: "100px",
	margin: "0",
}

const explanationBodyStyle = {
	background: "lightgray",
	margin: "0",
	padding: "10px",
	borderRadius: "0px 0px 10px 10px",
}

const explanationContentStyle = {
	fontSize: "14px",
	margin: "20px",
	fontWeight: "600",
}

export const Explanation = (props) => {
  const { problem, result, showFlag, onClickClose, onClickNextProblem } = props;

  return (
    <>
      {showFlag ? (
        <div style={overlay}>
          <div className="explanation" style={explanationContent} >
            <button className="closeButton" onClick={onClickClose} style={closeButtonStyle}>
              X 
            </button>
            <button className="nextProblemButton" onClick={onClickNextProblem} style={nextProblemButtonStyle}>
              次のクイズへ
            </button>
            <h2 className="result" style={resultStyle}>
							{result}
						</h2>
            <h1 className="resultSymbol" style={resultSymbolStyle}>
              {result === "正解" ? "○" : "×" }
            </h1>
            <div className="explanationBody" style={explanationBodyStyle}>
              <h3>解説</h3>
              <p className="explanationContent" style={explanationContentStyle}>
								{problem.explanation}
							</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};