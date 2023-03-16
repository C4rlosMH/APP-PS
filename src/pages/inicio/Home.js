import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";

export function Home() {
  const [Arrendadores, setArrendadores] = useState([]);
  const consultarArrendadores = async () => {
    const consultar = await Axios.get("/arrendadores");
    console.log(consultar.data);
    setArrendadores(consultar.data);
  };

  useEffect(() => {
    consultarArrendadores();
  }, []);
}