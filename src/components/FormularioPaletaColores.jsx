import React from "react";
import { Button, Form } from "react-bootstrap";

const FormularioPaletaColores = () => {
  return (
    <section className="sectionForm mx-auto pt-5 pb-2 rounded-3 shadow bg-white">
      <h2 className="text-center mb-5">Administrar colores</h2>
      <Form className="mb-5 d-flex flex-column">
        <Form.Group className="mb-4 formGroup d-flex flex-column gap-5 flex-md-row justify-content-center align-items-center py-5 px-2">
          <div className="bg-danger containerColor border border-2 border-dark"></div>
          <Form.Control
            type="text"
            placeholder="Ingrese un color. Ej: green"
            className="inputColor align-content-start py-3"
            minLength={3}
            maxLength={50}
          />
        </Form.Group>
        <Button className="px-5 py-3 shadow btnGuardar border-0 ms-auto me-5 shadow" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioPaletaColores;
