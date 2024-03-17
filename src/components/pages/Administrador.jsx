import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TarjetaColor from "./color/TarjetaColor.jsx";
import { useState, useEffect } from "react";
import { leerColoresAPI } from "../../helpers/queries.js";

const Administrador = () => {
  const [colores, setColores] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerColoresAPI();
      setColores(respuesta.colores);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="container mainPage py-5">
        <div className="d-flex flex-column gap-2 flex-sm-row justify-content-around align-items-center ">
          <h1>Paleta de colores</h1>
          <Button
            className="btn btn-primary"
            title="Agregar color"
            to="/crear"
            as={Link}
          >
            <i className="bi bi-file-earmark-plus fs-5"></i>
          </Button>
        </div>
        <article className="d-flex containerCards justify-content-center flex-wrap gap-3 mx-auto mt-5">
          {colores.map((color) => (
            <TarjetaColor
              key={color._id}
              color={color}
              setColores={setColores}
            />
          ))}
        </article>
      </section>
    </>
  );
};

export default Administrador;
