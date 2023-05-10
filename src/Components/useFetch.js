import { useState} from 'react';

 function useFetch(url){

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
   

    //useEffect (() => {

        fetch(url)
            .then((response) => {
                if(!response.ok){
                    throw new error ( 'This is an HTTP error: The status is : $(response.status)');
                }
                return response.json();                
            })               
            .then((data) => {              
                setData(data);
            })
            .catch((error) => {
                setError(error.message);             
            })

   // }, []);

    return data;

}

export default useFetch;

//export {error};