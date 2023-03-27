import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios"

export function Home() {
  const [salones, setSalones] = useState([]);
  const consultarSalones = async () => {
    const consultar = await Axios.get("/salones");
    console.log(consultar.data);
    setSalones(consultar.data);
  };

  useEffect(() => {
    consultarSalones();
  }, []);
  return (
    <div className="row">
      {salones.map((salones) => {
        return (
          <div className="col-4 p-2">
            <div class="card mb-3" style={{}}>
              <div class="row g-0">
                <div class="col-md-4">
                 {/* <img src={Darkrai} width='25%' class="img-fluid rounded-start" alt="..."/>*/}
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{salones.nombre}</h5>
                    <p class="card-text">
                      {salones.duenio}
                      {salones.telefono}
                      {salones.email}
                    </p>
                    <p class="card-text">
                      <small class="text-muted">{salones.address}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-info">Ver...</button>

          </div>
        );
      })}
    </div>
  )
}
