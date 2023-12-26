
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

// Read more about the map function and ask chatGPT to explain this code
// Questions for ChatGPT: Could you explain rhe various ES6 version of javascript functions and methods are and for what uses cases they would be good for? 
// https://www.w3schools.com/js/js_es6.asp 