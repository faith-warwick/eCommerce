import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Glamor from 'glamorous';


const Nav = Glamor.div (
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:'20px 30px 30px 20px',
        color: '#BADDE8',

    }
)

const Links = Glamor.div (
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexGrow: '3'
    }
)
const Icons = Glamor.div (
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexGrow: '1'
    }
)


const LinkOver =  Glamor.div (
    {
        color: '#BADDE8 !important',
        textDecoration: 'none !important',
        fontSize: '160%'

    }
)


class NavBar extends Component {
    render() {
        return (
    <Nav>
        <Links>
            <Link to='/Catalogue'><LinkOver>Catalogue</LinkOver></Link>
            <Link to='/AboutUs'><LinkOver>About</LinkOver></Link>
            <Link to ='/ContactUs'><LinkOver>Contact</LinkOver></Link>
            <Link to ='/Sets'><LinkOver>Sets</LinkOver></Link>
        </Links>
        <Icons>
            <Link to='/ShoppingCart'><LinkOver>
               li
            </LinkOver></Link>
        </Icons>
    </Nav>
        );
    }
}


export default NavBar;
