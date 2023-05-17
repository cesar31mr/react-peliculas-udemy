import { actorPeliculaDTO } from "../Actores/actores.model";
import { cineDTO } from "../cines/cines.module";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {

    const generosNoSeleccionados: generoDTO[] = [
        {id: 2, nombre: 'Drama'}
    ];

    const generosSeleccionados: generoDTO[] = [
        {id: 1, nombre: 'Acción'},
        {id: 3, nombre: 'Comedia'}
    ];

    const cinesNoSeleccionados: cineDTO[] = [
        {id: 2, nombre: 'Sambil'}
    ];

    const cinesSeleccionados: cineDTO[] = [
        {id: 1, nombre: 'Agora'}
    ];

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1,
            nombre: "Felipe",
            personaje: "",
            foto: "https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg",
          }
    ]

    return (
        <>
            <h3>Editar Pelicula</h3>
            <FormularioPeliculas
                actoresSeleccionados={actoresSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                modelo={{titulo: 'Spider-Man', enCines: true, trailer: 'url', fechaLanzamiento: new Date('2019-01-01T00:00:00')}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
};
