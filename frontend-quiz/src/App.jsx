
import Button from './button.jsx';
import './App.css';
import jsonData from './data.json';
import Header from './HeaderText.jsx'


function App() {
  return (
    <div className="App">
    <div><Header /></div>
     <div className='button-frame'>
       {jsonData.quizzes.map((quiz, index) => (
         <Button key={index} buttonText={quiz.title} />
       ))}
     </div>
  </div>
  );
}

export default App;



