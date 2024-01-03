
import Button from './button.jsx';
import './App.css';
import jsonData from './data.json';
import Header from './HeaderText.jsx';
import Toggle from './Components/Toggle.jsx'
import { useState } from "react";



function App() {


  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <div style={toggle ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
        <Header />
        <Toggle toggle={toggle} handleToggleChange={handleToggleChange} />
        <div className='button-frame'>
          {jsonData.quizzes.map((quiz, index) => (
            <Button key={index} buttonText={quiz.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// Take out Toggle code

