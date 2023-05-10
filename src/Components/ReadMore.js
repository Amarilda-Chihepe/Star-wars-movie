import '../Assets/CSS/MoreInfo.css';
import '../Assets/CSS/Style.css';
//import {useFetch} from './useFetch';
import Vehicles from './Vehicles';
import Loading from "../Assets/img/loading.png";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ReadMore(){

    const [filme, setFilme] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredFilme, setFilteredFilme] = useState(null)
    const {id} = useParams();
    console.log(id);

    useEffect (() => {
        fetch('https://swapi.dev/api/films')
       .then((response) => {
            if(!response.ok){
                throw new error ( 'This is an HTTP error: The status is : $(response.status)');
            }
            return response.json();
           
       })       
        .then((data) => {          
            setFilme(data);
        })

        .catch((error) => {
            setError(error.message);          
        })

        .finally(() => {
            setLoading(false);
        })

    }, []);

    //console.log(filme);
   //const filter = filme['results'].filter((film) => film.episode_id = id)
    //setFilteredFilme(filter);

    return(
        <div className="div-more-info">
            {loading && <div className='loaderr'><img src={Loading} alt='loader' className='loader'/></div>}
            
            {filme && filme['results'].filter((film) => film.episode_id == Number(id)).map((filterFilme) => {
                return(

                <div>
                    <div className="ps-5 py-4 color-grey">
                        <Link to='/'><BiArrowBack/> Back to List</Link>
                    </div>
                    <div className='ps-5 d-flex flex-column align-items-center'>
                        <h1 style={{fontSize: 50 }}>{filterFilme.title}</h1>
                            <p style={{fontSize: 18 }}>Director: {filterFilme.director}</p>
                        <p style={{fontSize: 18 }}>Producer: {filterFilme.producer}</p>
               
                    </div>

                    <div className='mx-5 mt-4 div'>
                        <h5 className='back-arrow'>Description</h5>
                        <p className=''>{filterFilme.opening_crawl}</p>
                    </div>

                    <div className='mx-5 div mt-5'>
                        <h5 className='back-arrow'>Characters</h5>
                    
                            {filterFilme.characters.map((char) => { 
                                return <Vehicles url = {char} />   

                                     
                                { /*useFetch(char)['name']*/ }
                            })}
                        
                        
                    </div>

                    <div className='mx-5 div mt-5'>
                        <h5 className='back-arrow'>Vehicles</h5>
                        
                        {filterFilme.vehicles.map((vehicles) => {     
                                return <Vehicles url = {vehicles}/>               
                                { /*UseFetch(char)['name']*/ }
                            })}
                        
                    </div>

                    <div className='mx-5 div mt-5'>
                        <h5 className='back-arrow'>Planets</h5>
                        
                        {filterFilme.planets.map((planets) => {     
                                return <Vehicles url = {planets}/>              
                                { /*UseFetch(char)['name']*/ }
                            })}
                        
                    </div>

                    <div className='mx-5 div mt-5'>
                        <h5 className='back-arrow'>Starships</h5>
                        
                        {filterFilme.starships.map((starships) => {     
                                return <Vehicles url = {starships}/>                
                                { /*UseFetch(char)['name']*/ }
                            })}
                        
                    </div>

                    <div className='mx-5 div mt-5'>
                        <h5 className='back-arrow'>Species</h5>
                        
                            {filterFilme.species.map((species) => {     
                                return <Vehicles url = {species}/>               
                                { /*UseFetch(char)['name']*/ }
                            })}
                        
                    </div>
                </div>)
            })}
            
        </div>
    )

}

export default ReadMore;