
import Button from './button.jsx';
import './App.css';
import jsonData from './data.json';


function App() {
  return (
    <div className="App">
     <div className='button-frame'>
       {jsonData.quizzes.map((quiz, index) => (
         <Button key={index} buttonText={quiz.title} />
       ))}
     </div>
  </div>
  );
}

export default App;



