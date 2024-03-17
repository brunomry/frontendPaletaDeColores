import React from "react";
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import TarjetaColor from "./pages/color/TarjetaColor";

const Administrador = () => {
  return (
    <>
      <section className="container mainPage py-5">
        <div className="d-flex flex-column gap-2 flex-sm-row justify-content-around align-items-center my-md-5 ">
          <h1 className="">Paleta de colores</h1>
          <Button
            className="btn btn-primary"
            title="Agregar tarea"
            to="/crear"
            as={Link}
          >
            <i className="bi bi-file-earmark-plus fs-5"></i>
          </Button>
        </div>
        <article className="d-flex containerCards justify-content-center flex-wrap gap-3 mx-auto mt-5">
          <TarjetaColor></TarjetaColor>
          <TarjetaColor></TarjetaColor>
          <TarjetaColor></TarjetaColor>
          <TarjetaColor></TarjetaColor>
          <TarjetaColor></TarjetaColor>
          <TarjetaColor></TarjetaColor>
          <TarjetaColor></TarjetaColor>
          <TarjetaColor></TarjetaColor>
          <TarjetaColor></TarjetaColor>
        </article>
      </section>
    </>
  );
};

export default Administrador;
