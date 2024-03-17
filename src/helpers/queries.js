const URL_Colores = import.meta.env.VITE_API_COLORES;

export const leerColoresAPI = async () => {
  try {
    const respuesta = await fetch(URL_Colores);
    const listaColores = await respuesta.json();
    return listaColores;
  } catch (error) {
    console.log(error);
  }
};

export const crearColorAPI = async (colorNuevo) => {
  try {
    const respuesta = await fetch(URL_Colores, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(colorNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
