import { Vehicle } from '@/types';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

const GET_VEHICLES = gql`
  query GetVehicles {
    allVehicles {
      vehicles {
        id
        name
        model
        costInCredits
        length
        passengers
        cargoCapacity
      }
    }
  }
`;

interface VehicleItemProps {
  vehicle: Vehicle
}

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle }) => {
  return (
    <VehicleContainer>
      <Cost>{vehicle.costInCredits}</Cost>
      <VehicleInfo>
        <strong>{vehicle.name}</strong>
        <p>Modelo: {vehicle.model}</p>
        <p>Longitud: {vehicle.length}</p>
        <p>Pasajeros: {vehicle.passengers}</p>
        <p>Capacidad: {vehicle.cargoCapacity}</p>
      </VehicleInfo>
    </VehicleContainer>
  );
};

const Vehicles = () => {
  const { loading, error, data } = useQuery(GET_VEHICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const vehicles = data.allVehicles.vehicles;

  return (
    <div>
      <h1>Vehículos</h1>
      <VehicleList>
        {vehicles.map((vehicle: Vehicle ) => (
          <VehicleItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </VehicleList>
    </div>
  );
};

export default Vehicles;

const VehicleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const VehicleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
`;

const Cost = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const VehicleInfo = styled.div`
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
