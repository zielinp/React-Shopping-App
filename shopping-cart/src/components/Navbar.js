import React from 'react';
import { Link } from 'react-router-dom'

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper rgb(182,213,225)" >
                <div className="container">
                    <Link to="/" className="brand-logo left">Modern Shop</Link>

                    <ul className="right">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;
