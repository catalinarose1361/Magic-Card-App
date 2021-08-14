import React, { useState } from 'react';

import './App.css';

// import Forecast from "./components/Forecast/Forecast";

// import Logo from './components/Logo/Logo';

const mtg = require('mtgsdk')

function App() {
  let [responseObj, setResponseObj] = useState({});
  let [card, setCard] = useState('');

  function getCards(e) {

    e.preventDefault();
    setResponseObj({});
    mtg.card.where({name: card})
      .then(results => {
    setResponseObj(results)
})
  }

  
    

    

  return (

    <>

    

      <main>
      <form onSubmit={getCards}>

<input

    type="text"
    placeholder="Enter Card Name"
    maxLength="50"
    value={card}
   
    onChange={(e) => setCard(e.target.value)}

/>





<button type="submit">Get Cards</button>

</form>

{Object.keys(responseObj).map((item, i) => (
  <li className="travelcompany-input" key={i}>
    <span className="input-label">key: {i} Name: {responseObj[i].name}</span>
  </li>
))}
        

      </main>

      <footer>

        Application Developed By <a href="http://www.hirecatalina.com">Catalina Williams</a>
            
      </footer>

    </>

  )

}

export default App;