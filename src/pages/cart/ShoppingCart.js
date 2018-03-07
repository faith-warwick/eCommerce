import React from 'react'
import { connect } from 'react-redux'
import NavBar from '../Navigation/Nav'


const calculateNumberOfItems = (cart = []) => cart.map(c => c.quantity).reduce((prev, current) => prev + current, 0)
const calculateSubtotal = (cart = []) => cart.map(c => c.quantity * c.price).reduce((prev, current) => prev + current, 0)


const Cart = ({ cart = [], items, subtotal }) => (
    <div>
        <NavBar/>
        <h1>Shopping Cart</h1>
        <div>Items: {items}</div>
        <div>Subtotal: {subtotal}</div>
    </div>
);

const mapStateToProps = ({ cart }) => ({
    cart,
    items: calculateNumberOfItems(cart),
    subtotal: calculateSubtotal(cart)
});

export default connect(mapStateToProps)(Cart)