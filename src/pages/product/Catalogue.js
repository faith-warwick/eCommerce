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
                    <div className="card-deck">
                        <div className="card">
                        <img  className="card-img-top" key={product.id} src={product.image} />
                        <div className="card-body">
                            <h5 className="card-title" key={product.id}>{product.name}</h5>
                            <p className="card-text" key={product.id}>Price: {product.price}</p>
                            <div className="card-footer">
                                    <button  className="btn btn-primary btn-lg active" aria-pressed="true" onClick={e=>onAddToCart(product, 1)}>Add to Cart</button>
                            </div>
                        </div>
                        </div>
                    </div>
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