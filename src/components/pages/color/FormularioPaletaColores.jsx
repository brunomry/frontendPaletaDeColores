import { Button, Form, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  crearColorAPI,
  editarColorAPI,
  obtenerColorAPI,
} from "../../../helpers/queries.js";

const FormularioPaletaColores = ({
  titulo,
  editar,  
  verDetalle,
  boton,
  deshabilitado,
  ocultar,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();
  const [color, setColor] = useState("");

  const colorId = id ?? "";

  useEffect(() => {
    if (colorId != "") {
      cargarDatosColor();
    }
  }, [colorId]);

  const cargarDatosColor = async () => {
    try {
      const respuesta = await obtenerColorAPI(id);

      if (respuesta.status === 200) {
        const colorEncontrado = await respuesta.json();
        setValue("nombreColor", colorEncontrado.nombreColor);
        setColor(colorEncontrado);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const colorValidado = async (color) => {
    if (editar) {
      const respuesta = await editarColorAPI(color, id);

      if (respuesta.status === 200) {
        Swal.fire({
          title: "Color modificado!",
          text: `El color "${color.nombreColor}" fue modificado exitosamente`,
          icon: "success",
        });
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrió un error!",
          text: `El color "${color.nombreColor}" no pudo ser modificado. Intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearColorAPI(color);

      if (respuesta.status === 201) {
        Swal.fire({
          title: "Color registrado!",
          text: `El color "${color.nombreColor}" fue registrado exitosamente`,
          icon: "success",
        });
        reset();
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrió un error!",
          text: `El color "${color.nombreColor}" no pudo ser registrado. Intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    }
  };

  let estilo
  if(editar || verDetalle){
    estilo = {
      background: color.nombreColor
    }
  }
 
  return (
    <>
      <div className="mainPage container">
      <section className={`sectionForm mx-md-auto rounded-3 shadow bg-white my-5 px-2 px-md-4 ${(editar || verDetalle) ? "py-4" : "py-5"} `}>
        <h1 className="text-center my-4">{titulo}</h1>
        <Form
          className="d-flex flex-column"
          onSubmit={handleSubmit(colorValidado)}
        >
          <div className="mb-5 formGroup d-flex flex-column gap-3 justify-content-center align-items-center py-5 px-2">
            <div className={`border containerColor border-2 border-dark ${(editar || verDetalle) ? "" : "d-none"}`} style={estilo}></div>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Ej: green, #000000, rgb(0,0,0), rgba(0,0,0,0)"
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
                    value: 21,
                    message:
                      "El nombre del color debe tener como máximo 21 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger fw-medium">
                {errors.nombreColor?.message}
              </Form.Text>
            </Form.Group>
          </div>
          <div className="text-end d-flex gap-2 justify-content-end flex-wrap pb-3">
            <Button
              type="submit"
              variant="primary"
              className={`${ocultar ? "d-none" : "px-4"}`}
              disabled={deshabilitado}
            >
              Agregar
            </Button>
            <Button
              className={`btn ${
                verDetalle ? "btn-secondary px-5" : "btn-danger"
              }`}
              as={Link}
              to="/"
            >
              {boton}
            </Button>
          </div>
        </Form>
      </section>
      </div>
     
    </>
  );
};

export default FormularioPaletaColores;
