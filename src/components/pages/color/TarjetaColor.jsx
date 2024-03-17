import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const TarjetaColor = () => {
  return (
    <Card className='cardColor text-center'>
      <Card.Body className='px-0'>
        <Card.Title className='mb-3 fw-bold'>Lavenderblush</Card.Title>
        <Card.Text className='formGroup d-flex flex-column gap-5 flex-md-row justify-content-center align-items-center py-4 px-2'>
          <span className="containerCardColor border border-2 border-dark"></span>
        </Card.Text>
        <div className='d-flex'>
        <Button variant="secondary" className='border-0 mx-auto' title="Ver más" as={Link} to={`/verDetalle/:id`}><i className="bi bi-eye-fill fs-4"></i></Button>
        <Button variant="warning" className='border-0 mx-auto' title="Editar color"  as={Link} to={`/editar/:id`}><i className="bi bi-pencil-square fs-4"></i></Button>
        <Button variant="danger" className='border-0 mx-auto' title="Borrar color"><i className="bi bi-trash fs-4"></i></Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TarjetaColor;