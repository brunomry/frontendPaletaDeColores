import { Button, Form, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const FormularioPaletaColores = ({
  titulo,
  verDetalle,
  botonAgregar,
  boton,
  deshabilitado,
  ocultar,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <section className="container mainPage sectionForm mx-md-auto rounded-3 shadow bg-white my-5 px-2">
        <h1 className="text-center my-4">{titulo}</h1>
        <Form className="d-flex flex-column">
          <Form.Group className="mb-5 formGroup d-flex flex-column gap-3 justify-content-center align-items-center py-5 px-2">
            <div className="bg-danger containerColor border border-2 border-dark"></div>
            <Form.Control
              type="text"
              placeholder="Ingrese un color. Ej: green"
              className="inputColor align-content-start py-3"
              disabled={deshabilitado}
              {...register("nombreColor", {
                required: "El nombre del color es obligatorio",
                minLength: {
                  value: 3,
                  message:
                    "El nombre del color debe tener como mínimo 3 caracteres",
                },
                maxLength: {
                  value: 15,
                  message:
                    "El nombre del color debe tener como máximo 15 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger fw-medium">
              {errors.nombreColor?.message}
            </Form.Text>
            <FormLabel>También puede seleccionar un color: </FormLabel>
            <Form.Control
              type="color"
              placeholder="Ingrese un color. Ej: green"
              className="inputColor align-content-start py-3"
              disabled={deshabilitado}
              {...register("codigoHexadecimal")}
            />
          </Form.Group>
          <div className="text-end d-flex gap-2 justify-content-end flex-wrap">
            <Link
              type="submit"
              className={`px-4 py-2 rounded-2 text-decoration-none text-white ${
                ocultar ? "d-none" : "btnGuardar px-4"
              }`}
              disabled={deshabilitado}
            >
              {botonAgregar}
            </Link>
            <Link
              className={`px-3 py-2 rounded-2 text-decoration-none text-white ${
                verDetalle ? "btn btn-secondary px-5" : "btnBorrar"
              }`}
              as={Link}
              to="/"
            >
              {boton}
            </Link>
          </div>
        </Form>
      </section>
    </>
  );
};

export default FormularioPaletaColores;
