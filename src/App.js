import React, { useEffect } from 'react';
import './App.css';
import "./Fact.css"
import axios from "axios";

const App = () => { 
  const [species, setSpecies] = React.useState("");
  const [fact, setFact] = React.useState(""); 

  const acnhAPI = async () => {
    let arrayOfFacts = []; 
    try {
      const data = await axios.get("https://acnhapi.com/v1a/bugs/");
      arrayOfFacts = data.data;
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
      <div className="title"><p>Blathers Bug Facts</p></div>
      <div className="factBox">
        <div className="container">
          <div className="factButton"><button onClick={acnhAPI}>GIMME FACT BOI</button></div>
          <div className="species">{species}</div>
          <div className="fact">{fact}</div>
        </div>
      </div>
      <div className="disclaimer"><p>Disclaimer: BlathersFacts is a fan made website and claims no ownership over Nintendo or Animal Crossing</p></div>
    </div>
  );
}; 

export default App;
