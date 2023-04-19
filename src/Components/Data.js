import { useState, useEffect } from "react";
import axios from "axios";

function Data(){

    const [dataa, setData] = useState(null);
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
    
   /* useEffect(() => {
        const getData = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/films');
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
        };
            getData();
        }, []);
*/

    return(
        <div>
            {loading && <div>Loading....</div>}
            {error && (
                <div>{'There is a problem fetching the post data - ${error}'}</div>
            )}

            <ul>               
                {dataa && dataa['results'].map((movie) => {
                    return <li key={movie.episode_id}><p>{movie.episode_id}: {movie.title}</p></li>
                })}
            </ul>
        </div>
    );
} 

export default Data;