import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { borrarColorAPI, leerColoresAPI } from '../../../helpers/queries.js';
import Swal from 'sweetalert2';

const TarjetaColor = ({color, setColores}) => {

  const estilo = {
    background: color.nombreColor
  }

  const borrarColor = () => {
    Swal.fire({
      title: 'Estás seguro de eliminar el color?',
      text: 'No se puede revertir este proceso',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarColorAPI(color.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: 'Color eliminado!',
            text: `El color "${color.nombreColor}" fue eliminado correctamente.`,
            icon: 'success',
          });
          const listaColores = await leerColoresAPI();
          setColores(listaColores);
        } else {
          Swal.fire({
            title: 'Ocurrió un error!',
            text: `El color "${color.nombreColor}" no fue eliminado. Vuelva a intentarlo.`,
            icon: 'error',
          });
        }
      }
    });
  }

  return (
    <Card className='cardColor text-center'>
      <Card.Body className='px-0'>
        <Card.Title className='mb-3 fw-bold'>{color.nombreColor}</Card.Title>
        <Card.Text className='formGroup d-flex flex-column gap-5 flex-md-row justify-content-center align-items-center py-4 px-2'>
          <span className="containerCardColor border border-2 border-dark" style={estilo}></span>
        </Card.Text>
        <div className='d-flex'>
        <Button variant="secondary" className='border-0 mx-auto' title="Ver más" as={Link} to={`/verDetalle/${color.id}`}><i className="bi bi-eye-fill fs-4"></i></Button>
        <Button variant="warning" className='border-0 mx-auto' title="Editar color"  as={Link} to={`/editar/${color.id}`}><i className="bi bi-pencil-square fs-4"></i></Button>
        <Button variant="danger" className='border-0 mx-auto' title="Borrar color" onClick={borrarColor}><i className="bi bi-trash fs-4"></i></Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TarjetaColor;