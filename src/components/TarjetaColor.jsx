import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

const TarjetaColor = () => {
  return (
    <Card className='cardColor text-center'>
      <Card.Body className='px-0'>
        <Card.Title className='mb-3 fw-bold'>Green</Card.Title>
        <Card.Text className='formGroup d-flex flex-column gap-5 flex-md-row justify-content-center align-items-center py-4 px-2'>
          <div className="bg-success containerCardColor border border-2 border-dark"></div>
        </Card.Text>
        <Button className='btnBorrar border-0 px-5 py-3 mx-auto'>Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default TarjetaColor;