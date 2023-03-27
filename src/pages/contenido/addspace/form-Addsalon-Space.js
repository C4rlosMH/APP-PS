import React, { useState, useEffect } from "react";
import Axios from "../../../services/Axios";

import { useParams, useNavigate } from "react-router-dom";

export function Formsalones() {
const variables = {
    _id: "",
    nombre: "",
    address: "",
    duenio: "",
    precio:"",
    telefono: "",
    email: "",
    horario: "",

};

const [salones, setSalones] = useState(variables);
  //Variable para obtener los datos del parámetro especificado en admin
const params = useParams();
const navigate=useNavigate();

const onChange = (e) => {
    const { name, value } = e.target;
    setSalones({ ...salones, [name]: value });
};

const guardarDatos = (e) => {
    const formulario = document.getElementById("salones");
    const formData = new FormData(formulario);

    /*Axios.post("/persona", formData).then(() => {
      console.log("Registros guardados exitosamente");
    });*/
    console.log(formData);
  };

  const obtenerSalon = async (id) => {
    const salon = await Axios.get("/salon/" + id);
    setSalones(salon.data);
    console.log(salon);
  };

  const updateSalon=async()=>{
    await Axios.patch(`/persona/${params.id}`, salones).then(
      ()=>{
        console.log("Datos actualizados correctamente")
      }
    )
    navigate("/salones");
  }

  const Enviar = (e) => {
    e.preventDefault();
if(params._id===""){
  guardarDatos();
}else{
  updateSalon();
}
    
  };

  useEffect(() => {
    obtenerSalon(params.id);
  }, [params.id]);

  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Datos de los salones</div>
        <div class="card-body">
          <form class="row g-3 p-2" onSubmit={Enviar} id="personales">
            <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingresa el nombre"
                  value={salones.nombre}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="address" class="col-sm-2 col-form-label">
                Dirección
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="address"
                  id="address"
                  placeholder="Ingresa la dirección"
                  value={salones.address}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="duenio" class="col-sm-2 col-form-label">
                Dueño
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="duenio"
                  id="duenio"
                  placeholder="Propietario"
                  value={salones.duenio}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="precio" class="col-sm-2 col-form-label">
                Precio
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="precio"
                  id="precio"
                  placeholder="Ingresa el precio"
                  value={salones.precio}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Teléfono
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingresa tu numero de telefono"
                  value={salones.telefono}
                  onChange={onChange}
                />
              </div>
              <div class="mb-3 row">
              <label for="email" class="col-sm-2 col-form-label">
                Correo Electronico
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Ingresa tu correo electronico"
                  value={salones.email}
                  onChange={onChange}
                />
              </div>
              <div class="mb-3 row">
              <label for="horario" class="col-sm-2 col-form-label">
                Horario
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="horario"
                  id="horario"
                  placeholder="Ingresa el horario de disponibilidad"
                  value={salones.horario}
                  onChange={onChange}
                />
              </div>
            </div>
            </div>
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                {salones._id==="" ? "Guardar":"Actualizar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}