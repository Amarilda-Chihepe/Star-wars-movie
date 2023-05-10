//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../Assets/CSS/Style.css";
import Star from "../Assets/img/Star.png";
import Wars from "../Assets/img/wars.png";

function Header(){

    return(
        <div className='col-auto header d-flex'>
            <img src={Star} alt="Star" className="logo"/>
            <img src={Wars} alt="wars" className="logo"/>
        </div>
    )
}

export default Header;