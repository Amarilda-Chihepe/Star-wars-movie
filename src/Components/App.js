import '../Assets/CSS/App.css';
import Header from './Header';
import Body from './Body';
import ReadMore from './ReadMore';
import { Route, Routes, useParams  } from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {
  const {id} = useParams();
  return (
    <div className='body'>
      <div className="container">
       <div className='row justify-content-center'>           
            <Header/>
        </div>
        <div>
          <Routes>
            <Route path='/' element = {<Body/>}/>
            <Route path='/readMore/:id' element = {<ReadMore/>}/>
          </Routes>
            
        </div>
      </div>
    </div>
    
  );
}

export default App;
