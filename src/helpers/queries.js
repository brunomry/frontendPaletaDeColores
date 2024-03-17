const URL_Colores = import.meta.env.VITE_API_COLORES;

export const leerColoresAPI = async()=>{
  try {
    const respuesta = await fetch(URL_Colores);
    const listaColores = await respuesta.json();
    return listaColores;
  } catch (error) {
    console.log(error);
  }
}