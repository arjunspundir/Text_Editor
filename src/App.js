import TextForm from './components/TextForm';
import Navigation from './components/Navigation';
import './App.css';
import Alerts from './components/Alerts';
import { useState } from 'react';
let name="Krishna" ;
function App() {
  const [alert ,chalert]=useState("Warning : copy feature currently not working on mobiles.");
  setTimeout(()=>{
    chalert(null);
  },3500);
  return (
    <>
   <Navigation/>
   <Alerts meassage={alert}/>
   <div className="container">
   <TextForm heading={name}/>
   </div>
    </>
  );
}

export default App;
