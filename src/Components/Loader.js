import '../Assets/CSS/App.css';
import Loading from "../Assets/img/loading.png";
 
function Loader(){
    return(
        <div className='body'>
            <img src={Loading} alt='loader' className='loader'/>
        </div>
    )
}

export default Loader;