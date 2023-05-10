import '../Assets/CSS/MoreInfo.css';
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';

function ReadMore(){
    return(
        <div className="div-more-info">
            <div className="ps-5 py-4 color-grey">
                <Link to='/'><BiArrowBack/> Back to List</Link>
            </div>

            <div className='ps-5 d-flex flex-column align-items-center'>
                    <h1 style={{fontSize: 50 }}>xxxxxxxxxxxxxxx</h1>
                    <p style={{fontSize: 18 }}>Director:</p>
                    <p style={{fontSize: 18 }}>Productor:</p>
               
            </div>

            <div className='mx-5 mt-4 div'>
                <h5 className='back-arrow'>Description</h5>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, neque quis hendrerit porttitor, ante elit vehicula ex, eu pellentesque dolor nulla scelerisque leo. Ut faucibus risus ante, eget hendrerit arcu dictum at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi id vehicula odio. Cras pharetra at erat a dignissim. Mauris egestas erat bibendum, sodales sem non, rutrum felis. Phasellus condimentum, est in sagittis pellentesque, arcu sapien feugiat arcu, vitae cursus urna neque eget lectus. Suspendisse vel orci et enim tincidunt volutpat non et augue. Proin sit amet libero quis turpis semper laoreet sed non purus. Proin interdum rutrum erat, quis interdum elit.</p>
            </div>

            <div className='mx-5 div mt-5'>
                <h5 className='back-arrow'>Characters</h5>
                <ul>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                </ul>
            </div>

            <div className='mx-5 div mt-5'>
                <h5 className='back-arrow'>Characters</h5>
                <ul>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                </ul>
            </div>

            <div className='mx-5 div mt-5'>
                <h5 className='back-arrow'>Characters</h5>
                <ul>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                </ul>
            </div>

            <div className='mx-5 div mt-5'>
                <h5 className='back-arrow'>Characters</h5>
                <ul>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                </ul>
            </div>

            <div className='mx-5 div mt-5'>
                <h5 className='back-arrow'>Characters</h5>
                <ul>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                    <li>aaaaaaaaaa</li>
                </ul>
            </div>
        </div>
    )

}

export default ReadMore;