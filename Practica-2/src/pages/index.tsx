import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'


import Link from 'next/link';
import { destinations } from '@/data/data';

export default function Index() {
  return (
    <div className="container">
      {destinations.map((destination) => (
        <Link href={`/viajedetallado/${destination.id}`} key={destination.id}>
          <div className="destination">
            <img src={destination.imagen_corta} alt={destination.destino} className="destination-image" />
            <div className="destination-info">
              <h2 className="destination-destino">{destination.destino}</h2>
              <p className="destination-description">{destination.descripcion_corta}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}


