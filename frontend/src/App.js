import { useState } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import LiveDashBoard from './components/LiveDashBoard';

function App() {
  const [buttonText, setButtonText] = useState("Show Live")
  const [showLiveDash, setShowLiveDash] = useState(false);

  const handleButton = () => {
    if(showLiveDash) {
      setShowLiveDash(false);
      setButtonText("Show Live")
    }else {
      setShowLiveDash(true);
      setButtonText("Show Raw");
    }
  }
  return (
    <div className="App">
      <h1>Apex Charts!!!</h1>
      <button className='button' onClick={handleButton}>{buttonText}</button>
      {!showLiveDash ? <Dashboard />: <LiveDashBoard />}
    </div>
  );
}

export default App;
