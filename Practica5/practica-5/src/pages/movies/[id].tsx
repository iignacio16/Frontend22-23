import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Character, FilmDetails } from "../../types";
import apolloClient from "@/utils/apolloClient";
import styled from "styled-components";
import Link from "next/link";
import { toRoman } from "@/utils/utils";
import { Movie } from "../../types";

const GET_FILM = gql`
  query GetFilm($id: ID) {
    film(id: $id) {
      title
      director
      releaseDate
      characterConnection {
        characters {
          id
          name
        }
      }
    }
  }
`;

interface MovieDetailProps {
  movieId: string;
}

const MovieDetail = ({ movieId }: MovieDetailProps) => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_FILM, {
    variables: { id: movieId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const film: FilmDetails = data.film;
  console.log(film.characterConnection);
  return (
    <MovieDetailStyles>
      <p>
        <span className="label">Numero Pelicula: </span>
        {toRoman(1)}
      </p>
      <p>
        <span className="label">Director: </span>
        {film.director}
      </p>
      <p>
        <span className="label">Titulo: </span>
        {film.title}
      </p>
      <p>
        <span className="label">Fecha de lanzamiento: </span>
        {film.releaseDate}
      </p>
      <div className="characters">
        <p>Personajes</p>
        {Array.isArray(film.characterConnection.characters) && (
          <ul>
            {film.characterConnection.characters.map((character: Character) => {
              return (
                <li key={character.id} className="character">
                  <Link href={`/autor/${character.id}`}>
                    <p>{character.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </MovieDetailStyles>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query GetMovies {
        allFilms {
          films {
            id
          }
        }
      }
    `,
  });

  const paths = data.allFilms.films.map((movie: Movie) => ({
    params: { id: movie.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const movieId = context.params.id as string;

  return {
    props: {
      movieId,
    },
    revalidate: 60,
  };
};

export default MovieDetail;

const MovieDetailStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
background-color: #f3f3f3;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
cursor: pointer;
transition: transform 0.2s ease;

&:hover {
  transform: translateY(-4px);
}

h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #0B6666
}

p {
  font-size: 1rem;
  color: #0B6666
}
`;

