import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { Character, Author } from '../../types';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    person(id: $id) {
      name
      birthYear
      eyeColor
      gender
      height
      homeworld {
        name
      }
      species {
        name
      }
    }
  }
`;

const CharacterDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;


const character = data?.character ?? null;

  if (!character) {
    return <p>No se encontró el personaje</p>;
  }

  const { name, birthYear, eyeColor, gender, height, homeworld, species } = character;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Cumpleaños: {character.birthYear}</p>
      <p>Color de ojos: {character.eyeColor}</p>
      <p>Género: {character.gender}</p>
      <p>Altura: {character.height} cm</p>
      <p>Planeta de nacimiento: {character.homeworld.name}</p>
      <p>Especie: {character.species.name}</p>
    </div>
  );
};

export default CharacterDetail;
