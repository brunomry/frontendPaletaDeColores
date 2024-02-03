import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TituloPrincipal from "./components/TituloPrincipal";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <TituloPrincipal></TituloPrincipal>
      </Container>
      <Footer/>
    </>
  );
}

export default App
