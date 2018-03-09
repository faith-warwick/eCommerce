import React, {Component} from 'react';
import Glamor from 'glamorous';
import NavBar from './Navigation/Nav';


import background from '../images/background_img.jpg';
import b1 from '../images/bomb1.jpg';
import b2 from '../images/bomb2.jpeg';
import b3 from '../images/bomb3.png';


class Home extends Component {
    render() {
        return (
            <Landing>
                <NavBar />
                <div id="carouselExampleControls" className="carousel slide w-100 h-100" data-ride="carousel">
                    <div className="carousel-inner w-100 h-100">
                        <div className="carousel-item active w-100 h-100">
                            <div className="d-block w-100 h-100"><a href="#"><img src={b3} className="col-md-2" /></a></div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="d-block w-100 h-100"><a href="#"><img src={b2} className="col-md-2" /></a></div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="d-block w-100 h-100"><a href="#"><img src={b1} className="col-md-2" /></a></div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </Landing>
        );
    }
}


const Landing = Glamor.div (
    {   backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'auto 100%',
        height: '100vh',
        width: '100vw',
        overflow:'hidden',
    })



export default Home;



