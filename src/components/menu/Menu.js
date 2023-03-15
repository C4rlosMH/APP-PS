import React from 'react'

export function Menu() {

  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">IMG-Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Inicio
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Albercas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Salones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Palapas</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Acerca de</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">¿Quienes somos?</a>
              <a class="dropdown-item" href="#">¿Qué hacemos?</a>
              <a class="dropdown-item" href="#">Contactanos</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Integrantes</a>
            </div>
          </li>
        </ul>
        <div>
          <button type="button" class="btn btn-dark disabled">Ingresar</button>
        </div>
      </div>
    </div>
  </nav>
  )
}