import { useState, useEffect } from "react";
import { landingPageDTO } from "./peliculas/peliculas.module";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
    const timerId = setTimeout(() => {
        setPeliculas({
        enCartelera: [
            {
            id: 1, 
            titulo: "Spiderman Far From Home",
            poster: "https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UY426_.jpg 319w, https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UY640_.jpg 480w, https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX540_.jpg 540w, https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UY720_.jpg 540w"
            }
            , {
            id: 2, 
            titulo: "Moana",
            poster: "https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_FMjpg_UY533_.jpg 319w, https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_FMjpg_UY800_.jpg 480w, https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_FMjpg_UX480_.jpg 480w, https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_FMjpg_UY800_.jpg 480w"
            }
        ],
        proximosEstreons: [
            {
            id: 3, 
            titulo: "Soul",
            poster: "https://m.media-amazon.com/images/M/MV5BNDIyNjc1MjgtY2ViNS00N2EwLThmNWQtZDJlYjBiYmI5MTg0XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg"
            }
        ]
        })
    }, 500);

    return () => clearTimeout(timerId);
    });

    return (
      <>
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />

        <h3>Próximos Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstreons} />
      </>
    );
};
