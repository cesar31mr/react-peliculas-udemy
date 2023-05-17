import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { generoDTO } from './generos.model';
import { urlGeneros } from "../utils/endpoints";

export default function IndiceGeneros() {

    useEffect(() => {
        console.log('urlGeneros', urlGeneros);
        axios.get(urlGeneros)
        .then((respuesta: AxiosResponse<generoDTO[]>) => {
            console.log(respuesta.data);
        })
    }, [])
    return(
        <>
            <h3>Géneros</h3>
            <Link className="btn btn-primary" to='generos/crear'>Crear Genero</Link>
        </>
    )
};
