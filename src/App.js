import React, { useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from "axios";

const App = () => { 
  const [species, setSpecies] = React.useState("");
  const [fact, setFact] = React.useState(""); 

  const acnhAPI = async () => {
    let arrayOfFacts = []; 
    try {
      const data = await axios.get("https://acnhapi.com/v1a/fish/");
      arrayOfFacts = data.data;
      console.log(arrayOfFacts); 
    } catch (error) {
      console.log(error)
    }

    try {
      var min = Math.ceil(0); 
      var max = Math.floor(79);
      var rand = Math.floor(Math.random() * (max - min)) + min; 
      setSpecies(arrayOfFacts[rand]["file-name"]);
      setFact(arrayOfFacts[rand]["museum-phrase"]); 
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    acnhAPI(); 
  }, []);

  return (
    <div className="App">
      {species}
      {fact}
      <button onClick={acnhAPI}>GIMME FACT BOI</button>
    </div>
  );
}; 


export default App;
