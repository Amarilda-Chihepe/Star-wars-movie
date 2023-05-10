import { useState, useEffect } from 'react';
import '../Assets/CSS/Style.css';

function Vehicles(props){
    const [er, setEr] = useState(null)
    const [data, setData] = useState(null);
    
useEffect (() => {

    fetch(props.url)
        .then((response) => {
            if(!response.ok){
                throw new er ( 'This is an HTTP error: The status is : $(response.status)');
            }
            return response.json();                
        })               
        .then((data) => {              
            setData(data);
        })
        .catch((error) => {
            setEr(error.message);             
        })

}, []);

return (
    <div className='row'>
        <ul className='col-md-4 d-flex'>       
            {data && <li>{data['name']}</li> }
        </ul> 
    </div>
    
)        
}

export default Vehicles;
