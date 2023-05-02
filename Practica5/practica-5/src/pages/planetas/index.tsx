import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { Planet } from '../../types';


interface PlanetItemProps {
    planet: Planet;
  }

const GET_PLANETS = gql`
  query GetPlanets {
    allPlanets {
      planets {
        id
        name
        population
        gravity
      }
    }
  }
`;
const PlanetItem: React.FC<PlanetItemProps> = ({ planet }) => {
    const getCircleColor = (population: number) => {
      if (population >= 0 && population <= 6000000) {
        return 'red';
      } else if (population > 6000000 && population <= 4500000000) {
        return 'green';
      } else {
        return 'purple';
      }
    };
  
    return (
        <PlanetContainer>
        <Circle style={{ backgroundColor: getCircleColor(planet.population) }} />
        <PlanetInfo>
      <strong>{planet.name}</strong>
      <p>Población: {planet.population}</p>
      <p>Gravedad: {planet.gravity}</p>
        </PlanetInfo>
      </PlanetContainer>
    );
  };

  const Planets = () => {
    const { loading, error, data } = useQuery(GET_PLANETS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    const planets = data.allPlanets.planets;
  
    return (
        <div>
            <h1>Planetas</h1>
            <PlanetList> 
            <p>Número total de planetas: {planets.length}</p>
            {planets.map((planet: Planet) => (
            <PlanetItem key={planet.id} planet={planet} />

            ))}
          </PlanetList>
          
        </div>
      );
  };

  export default Planets;


const PlanetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PlanetContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const PlanetInfo = styled.div`
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