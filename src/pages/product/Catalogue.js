import React from 'react';
import NavBar from '../Navigation/Nav';
import { connect } from 'react-redux';
import { addToCart} from "../../actions";
import './product.css';


const Catalogue = ({ products, onAddToCart }) => (
            <body>
                <NavBar/>
                <productdiv>
                    {products.map(product => (
                        <indProducts>
                                <div key={product.id}>{product.name}</div>
                                <image key={product.id}><img src={product.image} className='CatalogueImg'/></image>
                            <div>
                                <div key={product.id}>Price: {product.price}</div>
                                <button onClick={e=>onAddToCart(product, 1)}>Add to cart</button>
                            </div>
                        </indProducts>
                        ))}
                </productdiv>
            </body>
        );

const mapStateToProps = ({ products = [] }) => ({
    products
});

const mapDispatchToProps = dispatch => ({
    onAddToCart(product = {}, quantity = 1) {
        return dispatch(addToCart(product, quantity))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)