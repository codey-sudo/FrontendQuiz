
import Button from './button.jsx';
import './App.css';
import jsonData from './data.json';


function App() {
  return (
    <div className="App">
    {jsonData.quizzes.map((quiz, index) => (
      <Button key={index} title={quiz.title} />
    ))}
  </div>
  );
}

export default App;
