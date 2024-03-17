import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer.jsx";
import Menu from "./components/common/Menu.jsx";
import Administrador from "./components/pages/Administrador.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioPaletaColores from "./components/pages/color/FormularioPaletaColores.jsx";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Error404 from "./components/pages/Error404.jsx";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route
          path="/crear"
          element={
            <FormularioPaletaColores
              editar={false}
              deshabilitado={false}
              botonAgregar="Agregar"
              boton="Cancelar"
              ocultar={false}
              titulo="Nuevo color"
            ></FormularioPaletaColores>
          }
        ></Route>
        <Route
          path="/editar/:id"
          element={
            <FormularioPaletaColores
              editar={true}
              botonAgregar="Guardar"
              boton="Cancelar"
              ocultar={false}
              titulo="Editar color"
            ></FormularioPaletaColores>
          }
        ></Route>
        <Route
          path="/verDetalle/:d"
          element={
            <FormularioPaletaColores
              deshabilitado={true}
              boton="Volver"
              ocultar={true}
              titulo="Detalle del color"
              verDetalle={true}
            ></FormularioPaletaColores>
          }
        ></Route>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
