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

export const Explanation = (props) => {
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