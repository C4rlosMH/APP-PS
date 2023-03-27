import React from 'react'
import ps_lg from '../../assets/img/ps_lg.png'
import {Boton_ingresar} from '../botones'



export function Menu() {

  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <img src={ps_lg} width='10%' alt=''/>
      <a class="navbar-brand" href="http://localhost:3000/"> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="http://localhost:3000/">Inicio
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/albercas">Albercas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/salones">Salones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/palapas">Palapas</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Acerca de</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">¿Quienes somos?</a>
              <a class="dropdown-item" href="#">¿Qué hacemos?</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Integrantes</a>
            </div>
          </li>
        </ul>
        <div>
          <Boton_ingresar/>
        </div>
      </div>
    </div>
  </nav>
  )
}