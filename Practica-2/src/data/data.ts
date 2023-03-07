export type Destination = {
    id: string;
    destino: string;
    descripcion_corta: string;
    descripcion_larga: string;
    imagen_corta: string;
    imagen_larga: string;
}

export const destinations: Destination[] = [
    {
        id: "1",
        destino: "Buenos Aires",
        descripcion_corta: "Buenos Aires es la capital de Argentina y la ciudad más poblada del país. Es conocida por su arquitectura europea, sus cafés y su vida nocturna. En el centro de la ciudad, la Plaza de Mayo es el hogar de la Casa Rosada, sede del gobierno, y la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango.",
        descripcion_larga: "Buenos Aires es la capital de Argentina y la ciudad más poblada del país. Es conocida por su arquitectura europea, sus cafés y su vida nocturna. En el centro de la ciudad, la Plaza de Mayo es el hogar de la Casa Rosada, sede del gobierno, y la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango. El barrio de San Telmo, con sus calles adoquinadas, es el hogar de la Feria de San Telmo, un mercado de antigüedades y artesanías que se celebra los domingos. El barrio de Palermo es conocido por sus parques y restaurantes. El barrio de Recoleta es el hogar del cementerio de Recoleta, que alberga tumbas de personalidades argentinas, como Eva Perón.",
        imagen_corta: "https://media.istockphoto.com/id/973274388/es/foto/vista-aérea-de-la-ciudad-de-buenos-aires-con-obelisco-y-avenida-9-de-julio-en-la-noche-buenos.jpg?s=1024x1024&w=is&k=20&c=cuoUXmg1D3dH0cS_nZdNsuWNA8m0U4w5yefIJB5FcWA=",
        imagen_larga: "https://media.istockphoto.com/id/1288749183/es/foto/arquitectura-del-paisaje-urbano-de-la-ciudad-de-nanchang-provincia-de-jiangxi-china.jpg?s=1024x1024&w=is&k=20&c=YbNsAGq87h059bZetuCx5USc-0Qs7G00QgGyeFgxAKA="
    },
    {
        id: "2",
        destino: "Córdoba",
        descripcion_corta: "Córdoba es una ciudad argentina, capital de la provincia homónima. Es conocida por su arquitectura colonial, sus museos y su vida nocturna. En el centro de la ciudad, la Plaza San Martín es el hogar de la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango.",
        descripcion_larga: "Córdoba es una ciudad argentina, capital de la provincia homónima. Es conocida por su arquitectura colonial, sus museos y su vida nocturna. En el centro de la ciudad, la Plaza San Martín es el hogar de la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango. El barrio de San Telmo, con sus calles adoquinadas, es el hogar de la Feria de San Telmo, un mercado de antigüedades y artesanías que se celebra los domingos. El barrio de Palermo es conocido por sus parques y restaurantes. El barrio de Recoleta es el hogar del cementerio de Recoleta, que alberga tumbas de personalidades argentinas, como Eva Perón.",
        imagen_corta: "https://images-ext-2.discordapp.net/external/1Cf495t12Vpkvg-l_zEkAurhxx0GfoE4TcviHVU3il8/https/www.turismoviajar.com/wp-content/uploads/2020/05/cordoba-argentina.jpg?width=1414&height=1060",
        imagen_larga: "https://imgs.search.brave.com/7_ZWCS_GoBcX3lMyNdSg8pGjlxJIivQ0gy_HvwfZ4xM/rs:fit:1200:628:1/g:ce/aHR0cHM6Ly9jZG4u/ZWx2aWFqZXJvZmlz/Z29uLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wOS9j/b3Jkb2JhLXBvcnRh/ZGEuanBn"
    },
    {
        id: "3",
        destino: "Mendoza",
        descripcion_corta: "Mendoza es una ciudad argentina, capital de la provincia homónima. Es conocida por su arquitectura colonial, sus museos y su vida nocturna. En el centro de la ciudad, la Plaza San Martín es el hogar de la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango.",
        descripcion_larga: "Mendoza es una ciudad argentina, capital de la provincia homónima. Es conocida por su arquitectura colonial, sus museos y su vida nocturna. En el centro de la ciudad, la Plaza San Martín es el hogar de la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango. El barrio de San Telmo, con sus calles adoquinadas, es el hogar de la Feria de San Telmo, un mercado de antigüedades y artesanías que se celebra los domingos. El barrio de Palermo es conocido por sus parques y restaurantes. El barrio de Recoleta es el hogar del cementerio de Recoleta, que alberga tumbas de personalidades argentinas, como Eva Perón.",
        imagen_corta: "https://imgs.search.brave.com/bPwEFLXxWIHNdAUJHCax9kkev0ceoYV_c0U5ehorlE4/rs:fit:1170:630:1/g:ce/aHR0cHM6Ly9jaXVk/YWRkZW1lbmRvemEu/Z29iLmFyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE2LzEyLzQz/NTRfY3AtMTE3MHg2/MzAuanBn",
        imagen_larga: "https://media.istockphoto.com/id/1201517509/es/foto/vista-aerea-de-la-ciudad-de-mendoza.jpg?s=1024x1024&w=is&k=20&c=I8ndZASIOsQBzlaSkYPjJZRlp0BhyVsy0n0qK6pjRjY="
    },
    {
        id: "4",
        destino: "Bariloche",
        descripcion_corta: "Bariloche es una ciudad argentina, capital de la provincia homónima. Es conocida por su arquitectura colonial, sus museos y su vida nocturna. En el centro de la ciudad, la Plaza San Martín es el hogar de la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango.",
        descripcion_larga: "Bariloche es una ciudad argentina, capital de la provincia homónima. Es conocida por su arquitectura colonial, sus museos y su vida nocturna. En el centro de la ciudad, la Plaza San Martín es el hogar de la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango. El barrio de San Telmo, con sus calles adoquinadas, es el hogar de la Feria de San Telmo, un mercado de antigüedades y artesanías que se celebra los domingos. El barrio de Palermo es conocido por sus parques y restaurantes. El barrio de Recoleta es el hogar del cementerio de Recoleta, que alberga tumbas de personalidades argentinas, como Eva Perón.",
        imagen_corta: "https://media.istockphoto.com/id/843649036/es/foto/el-centro-c%C3%ADvico-de-bariloche.jpg?s=1024x1024&w=is&k=20&c=dVwiDDISl_hHc1U_n1eRwf123zfo3bFieKw_EeSvUlg=",
        imagen_larga: "https://media.istockphoto.com/id/482706182/es/foto/villa-catedral-complejo-tur%C3%ADstico-de-esqu%C3%AD.jpg?s=1024x1024&w=is&k=20&c=YBfiW11rpUqC2e7luV_Fdjuf7laObKXtfoeF7Y6BUmM=",
        
    },
    {
        id: "5",
        destino: "Salta",
        descripcion_corta: "Salta es una ciudad argentina, capital de la provincia homónima. Es conocida por su arquitectura colonial, sus museos y su vida nocturna. En el centro de la ciudad, la Plaza San Martín es el hogar de la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango.",
        descripcion_larga: "Salta es una ciudad argentina, capital de la provincia homónima. Es conocida por su arquitectura colonial, sus museos y su vida nocturna. En el centro de la ciudad, la Plaza San Martín es el hogar de la Catedral Metropolitana, con su icónica aguja blanca. El barrio de La Boca, con sus casas coloridas, es el hogar del tango. El barrio de San Telmo, con sus calles adoquinadas, es el hogar de la Feria de San Telmo, un mercado de antigüedades y artesanías que se celebra los domingos. El barrio de Palermo es conocido por sus parques y restaurantes. El barrio de Recoleta es el hogar del cementerio de Recoleta, que alberga tumbas de personalidades argentinas, como Eva Perón.",
        imagen_corta: "https://media.istockphoto.com/id/1011396564/es/foto/cabildo-de-salta-salta-argentina.jpg?s=1024x1024&w=is&k=20&c=eBWfB_hv4HOMWd751Fz_Hqz0fNTgPWywVeojX-tp3EQ=",
        imagen_larga: "https://media.istockphoto.com/id/1309949732/es/foto/salta-argentina-9-de-abril-de-2015-vista-aérea-de-salta-desde-teleferico-argentina.jpg?s=1024x1024&w=is&k=20&c=-SVpLrmwTxTgFH2Pq4bdBlHrZuF0t8nJwtHPUZ4vkMM="
    }
]

export default destinations