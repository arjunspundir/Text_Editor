import TextForm from './components/TextForm';
import Navigation from './components/Navigation';
import './App.css';
let name="Krishna" ;

function App() {
  return (
    <>
   <Navigation/>
   <div className="container">
   <TextForm heading={name}/>
   </div>
    </>
  );
}

export default App;
