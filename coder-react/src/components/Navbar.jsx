import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary " >
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">FEX</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link"  to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/store">Store</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
      
      </ul>
    </div>
        <a class="navbar-brand" href="#">
            <img src="https://cdn-icons-png.flaticon.com/128/6713/6713723.png" alt="Bootstrap" width="30" height="30" />
        </a>
  </div>
</nav>
    )
}

export default NavBar