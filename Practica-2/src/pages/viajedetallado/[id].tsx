import Link from 'next/link';
import { destinations } from '@/data/data';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const {id} =router.query;
  const destinos= destinations.find((destination) => destination.id === id);

  return (
    <div className="container-destination">
      <div className="destination-container">
      <img src={destinos?.imagen_larga} alt={destinos?.destino} className="destination-image2" />
      <div className="destination-info-destination">
        <h1 className="destination-destino">{destinos?.destino}</h1>
        <p  className="destination-description">{destinos?.descripcion_larga}</p>
        </div>
        <div className='volver'>
        <Link href="/">
        <button className="btn">VOLVER</button>
      </Link>
        </div>
      </div>
    </div>

  )

}

export default Post;


