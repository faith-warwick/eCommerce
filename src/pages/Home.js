import React, {Component} from 'react';
import Glamor from 'glamorous';
import NavBar from './Navigation/Nav';


import background from '../images/background_img.jpg';


class Home extends Component {
    render() {
        return (
            <Landing>
                <NavBar />
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



