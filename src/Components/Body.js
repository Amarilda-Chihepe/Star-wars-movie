import '../Assets/CSS/Style.css';
import { useState, useEffect } from "react";
import Loading from "../Assets/img/loading.png";

function Body(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect (() => {

        fetch('https://swapi.dev/api/films')
       .then((response) => {
        //console.log(response);
            if(!response.ok){
                throw new error ( 'This is an HTTP error: The status is : $(response.status)');
            }
         console.log('vbvjh'+response.status);
            return response.json();
           
       })
        
        .then((data) => {
            
            setData(data);
            setError(null);
           // console.log(data);
           // console.log(dataa);
        })

        .catch((error) => {
            setError(error.message);
            setData(null);
            
        })

        .finally(() => {
            setLoading(false);
        })

    }, []);

    return(
        <div className="row row-content">
            {loading && <div className='loaderr'><img src={Loading} alt='loader' className='loader'/></div>}

            {error && (
                <div>{'There is a problem fetching the post data - ${error}'}</div>
            )}

            {data && data['results'].map((movie) => {
                return(
                    <div className="film-card mb-4 me-4" key={movie.episode_id}>
                        <h4>{movie.title}</h4>
                        <p style={{color: 'gray'}}>{movie.release_data}</p>

                        <p className='opening-craw'>{movie.opening_crawl}</p>

                        <div className='more-info'>
                            <a href="">More info</a>
                        </div>       
                    </div>
                )
                })}

        </div> 
    )

          
    
}

export default Body;