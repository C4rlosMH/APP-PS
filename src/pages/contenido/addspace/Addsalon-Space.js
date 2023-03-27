import React, { useEffect, useState } from "react";
import Axios from "../../../services/Axios";
import {Link, useNavigate} from "react-router-dom";

export function Adminsalones() {
const [salones, setSalones] = useState([]);

  //usar la navegación por defecto del react-router-dom
const navigate = new useNavigate();

const consultarSalones = async () => {
    const consultar = await Axios.get("/salones");
    console.log(consultar.data)
    setSalones(consultar.data);
};


const deletesalons = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar el salón?")) {
    const eliminar = await Axios.delete("/salon/" + id);
    }
    consultarSalones();
};

useEffect(() => {
    consultarSalones();
}, []);

return (
    <div className="container-fluid">
    <div>
        <h1>Salones</h1>
    </div>
    <div class="container text-center">
        <div class="row row-cols-4">
        <div class="col-md-3">
            <button type="button" class="btn btn-primary">
            <Link class="dropdown-item" to="/formsalones">
                Agregar salón...
            </Link>
            </button>
        </div>
        </div>
        <div class="row row-cols-12">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Dueño</th>
                <th scope="col">Precio</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                <th scope="col">Horario</th>
                <th scope="col">Editar</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {salones.map((salon) => {
                return (
                <tr>
                    <th scope="row">1</th>
                    <td>{salon.curp}</td>
                    <td>{salon.nombre}</td>
                    <td>{salon.apellidos}</td>
                    <td>{salon.sexo}</td>
                    <td>{salon.telefono}</td>
                    <td>
                    <button type="button" 
                    class="btn btn-info"
                    onClick={()=>navigate(`/formsalon/${salon._id}`)}
                    >
                        Editar
                    </button>
                    </td>
                    <td>
                    <button type="button" class="btn btn-danger"
                    onClick={()=>deletesalons(salon._id)}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    </div>
    </div>
);
}