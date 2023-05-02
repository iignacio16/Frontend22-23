import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useQuery, gql, ApolloProvider } from '@apollo/client';
import { Movie } from '../../types';
import styled from 'styled-components';
import { toRoman } from '@/utils/utils';

interface MoviesProps {
  movies: Movie[];
}

const GET_MOVIES = gql`
  query GetMovies {
    allFilms {
      films {
        id
        title
      }
    }
  }`;

const Movies = ({ movies }: MoviesProps) => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const films = data.allFilms.films;

  return (
      <MoviesStyles>
      <h1>Películas</h1>
      <ul className="movieList">
        {films.map((movie: Movie, index: number) => (
          <li key={index + 1 } className="movieItem">
                <h2>{toRoman(index+1)}</h2>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    
    </MoviesStyles>
  );
};

export default Movies;



const MoviesStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: b;

  h1 {
    margin-bottom: 2rem;
  }
  h2{
    font-size: 50px;
  }

  .movieList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .movieItem {
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
  }
`;
