import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <footer style={{textDecoration:"none"}}>
            <div class="container-fluid">
            <div class="row p-5 bg-dark text-white">
              <div class="col-xs-12 col-lg-4">
                <p class="h2">FEX</p>
                <p class="h6">ROPA UNDERGROUND</p>
              </div>
              <div class="col-xs-12 col-lg-4 ">
                <p class="h5 mb-3">Paginas</p>
                <div class="mb-2 ">
                <li class="navbar-nav">
                    <Link  class="nav-link text-secondary"  to="/">Home</Link>
                </li>
                </div>
                <div class="mb-2">
                <li class="navbar-nav">
                    <Link class="nav-link text-secondary" to="/store">Store</Link>
                </li>
                  </div>
                <div class="mb-2">
                    <li class="navbar-nav">
                     <Link class="nav-link text-secondary" to="/contact">Contact</Link>
                    </li>
                </div>
                    
              </div>
              <div class="col-xs-12 col-lg-4">
                <p class="h5 mb-3"> <Link class="nav-link" to="/contact">Contactos</Link></p>
                <div class="mb-2">
                  <p class="text-secondary text-decoration-none" href="#">Instagram</p>
                </div>
                <div class="mb-2">
                  <p class="text-secondary text-decoration-none" href="#">FEXuy@gmail.com</p>
                </div>
                <div class="mb-2">
                  <p class="text-secondary text-decoration-none" href="#">099301343</p>
                </div>
                <div class="mb-2">
                  <p class="text-secondary text-decoration-none" href="#">Av.Italia 1214</p>
                </div>
                </div>
              </div>
            </div>
            </footer>
       
    );
};

export default Footer;