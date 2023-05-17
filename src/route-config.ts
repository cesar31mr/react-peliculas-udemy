import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";

import CrearActores from "./Actores/CrearActores";
import EditarActores from "./Actores/EditarActores";
import IndiceActores from "./Actores/IndiceActores";

import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";

import LandingPage from "./LandingPage";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import CrearPeliculas from "./peliculas/CrearPeliculas";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import RedireccionarALanding from "./utils/RedireccionarALanding";

const rutas = [
    // Generos
    {path: '/generos', componente: IndiceGeneros, exact: true},
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero},

    // Actores
    {path: '/actores', componente: IndiceActores, exact: true},
    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/editar/:id(\\d+)', componente: EditarActores},

    // Cines
    {path: '/cines', componente: IndiceCines, exact: true},
    {path: '/cines/crear', componente: CrearCines},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCines},

    // Peliculas
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},
    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar', componente: EditarPeliculas},

    {path: '/', componente: LandingPage, exact: true},

    /*
    Este "path" se debe colocar al ultimo porque sino, nunca podremos entrar a las demas rutas
    y sirve para atrapar las rutas no encontradas
    */
    {path: '*', componente: RedireccionarALanding}
]

export default rutas;