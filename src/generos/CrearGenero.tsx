import { useHistory } from "react-router-dom";
import { urlGeneros } from "../utils/endpoints";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./generos.model";
import axios from 'axios';
import MostrarErrores from "../utils/MostrarErrores";
import { useState } from "react";

export default function CrearGenero() {
  const history = useHistory();
  const [errores, setErrores] = useState<string[]>([]);

  async function crear(genero: generoCreacionDTO){
    try{
      await axios.post(urlGeneros, genero);
      history.push('/generos');
    }catch(error){
      console.error(error);
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <h3>Crear Generos</h3>
      <MostrarErrores errores={errores} />
      <FormularioGeneros modelo={{nombre: ''}}
      onSubmit={async valores => {
        await crear(valores);
      }}
      />
    </>
  );
}
