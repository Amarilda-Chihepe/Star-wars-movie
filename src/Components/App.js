import '../Assets/CSS/App.css';
import Header from './Header';
import Body from './Body';
import { useState, useEffect } from "react";

function App() {

  return (
    <div className='body'>
      <div className="container">
       <div className='row justify-content-center'>           
            <Header/>
        </div>
        <div>
            <Body/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
