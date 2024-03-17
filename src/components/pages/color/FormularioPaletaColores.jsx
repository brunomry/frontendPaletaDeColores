import { Button, Form, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
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

  useEffect(() => {
      cargarDatosColor();
    }, []);

  const cargarDatosColor = async () => {
    try {
      const respuesta = await obtenerColorAPI(id);

      if (respuesta.status === 200) {
        const colorEncontrado = await respuesta.json();
        setValue("nombreColor", colorEncontrado.nombreColor);
        // setValue("codigoHexadecimal", colorEncontrado.codigoHexadecimal);
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

  // const [color, setColor] = useState("");
  // const [selectedColor, setSelectedColor] = useState("#000000");

  // const handleColorChange = (e) => {
  //   setSelectedColor(e.target.value);
  //   setColor(e.target.value);
  // };

  return (
    <>
      <section className="container mainPage sectionForm mx-md-auto rounded-3 shadow bg-white my-5 px-2">
        <h1 className="text-center my-4">{titulo}</h1>
        <Form
          className="d-flex flex-column"
          onSubmit={handleSubmit(colorValidado)}
        >
          <div className="mb-5 formGroup d-flex flex-column gap-3 justify-content-center align-items-center py-5 px-2">
            <div className="bg-danger containerColor border border-2 border-dark "></div>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Ingrese un color. Ej: green"
                className="inputColor align-content-start py-3"
                disabled={deshabilitado}
                // value={color}
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
            </Form.Group>

            {/* <Form.Group>
              <FormLabel>También puede seleccionar un color: </FormLabel>
              <Form.Control
                type="color"
                placeholder="Ingrese un color. Ej: green"
                className="inputColor align-content-start py-3"
                disabled={deshabilitado}
                // value={selectedColor} 
                // onChange={handleColorChange} 
                {...register("codigoHexadecimal")}
              />
            </Form.Group> */}
          </div>
          <div className="text-end d-flex gap-2 justify-content-end flex-wrap">
            <Button
              type="submit"
              as={Link}
              className={`px-4 py-2 rounded-2 text-decoration-none text-white ${
                ocultar ? "d-none" : "btnGuardar px-4"
              }`}
            >
              Agregar
            </Button>
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
