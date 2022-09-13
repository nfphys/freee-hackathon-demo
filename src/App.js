import { DailyQuiz } from "./components/DailyQuiz";
import './App.css';

function App() {
  const problems = [
    {
      level: 1,
      text: "仕事で着るスーツは経費にできるでしょうか？",
      answer: "o",
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

  return (
    <div className="App">
      <DailyQuiz problems={problems} />
    </div>
  );
}

export default App;
