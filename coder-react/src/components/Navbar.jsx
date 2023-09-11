import React from 'react';

const NavBar = () => {
    return (
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary " >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FEX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="../pages/Inicio.jsx">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../pages/Store.jsx">Indumentaria</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../pages/Contacto.jsx">Contacto</a>
        </li>
        <li class="ms-1 container-fluid">
        <a class="navbar-brand" href="#">
            <img src="https://cdn-icons-png.flaticon.com/128/6713/6713723.png" alt="Bootstrap" width="30" height="30" />
        </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar