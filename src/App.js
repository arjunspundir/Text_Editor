import TextForm from './components/TextForm';
import Navigation from './components/Navigation';
import './App.css';
import Alerts from './components/Alerts';
import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom'; // Use Routes instead of Router

let name = "Krishna";

function App() {
  const [alert, chalert] = useState("Warning: copy feature currently not working on mobiles.");
  setTimeout(() => {
    chalert(null);
  }, 3500);

  return (
    <>
      <Navigation />
      <div className="container">
        {/* <Routes> */}
          {/* <Route path='/' element={ */}
            <div className="container">
              <Alerts message={alert} /> {/* Corrected typo here: message instead of meassage */}
              <TextForm heading={name} />
            </div>
          {/* } /> */}
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
