import Link from "next/link";
import styled from "styled-components" 


export default function Home() {
  return (
    <>
   <HomeStyles>
      <h1>Star Wars Graph</h1>
      <div className="buttonContainer">
        <Link href="/movies">
          <button className="button">Películas</button>
        </Link>
        <Link href="/planetas">
          <button className="button">Planetas</button>
        </Link>
        <Link href="/vehiculos">
          <button className="button">Vehículos</button>
        </Link>
      </div>
    </HomeStyles>
    </>
  )
}

// src/components/styles/HomeStyles.ts

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    margin-bottom: 2rem;
  }

  .buttonContainer {
    display: flex;
    gap: 1rem;
  }

  .button {
    background-color: #0070f3;
    border: none;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0366d6;
    }
  }
`;
