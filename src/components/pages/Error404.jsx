import { Button } from "react-bootstrap";
import error from "../../assets/error-404.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="mainPage text-center pb-5">
      <img src={error} alt="error 404" />
      <div>
        <Button variant="success" as={Link} to="/">Volver a la página principal</Button>
      </div>
    </section>
  );
};

export default Error404;
