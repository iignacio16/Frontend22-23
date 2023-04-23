import { Houses } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

const HouseList = () => {

    const router = useRouter();
    const [houses, setHouses] = useState<Houses[] | undefined>(undefined);

    useEffect(()=>{
        const fetchHouses = async () => {
            try{
                const res = await fetch(`https://wizard-world-api.herokuapp.com/Houses`);
                const data: Houses[] = await res.json();
                setHouses(data);
            }catch(error: any){
                if(error.status === 404){
                    alert('Houses not found');
                    router.push('/');
                }
            }
        };
        fetchHouses();
    }, []);

    if(!houses) return <LoadingSpinner/>;

    return (
        <div>
          <h1>Houses</h1>
          <ul>
            {houses.map((house) => (
              <li key={house.name}>
                <h2>{house.name}</h2>
                <p>Founder: {house.founder}</p>
                <p>Room: {house.commonRoom}</p>
                <p>Traits:</p>
                <ul>
                  {house.traits.map((trait, index) => (
                    <li key={index}>{trait.name}</li>
                  ))}
                </ul>
                <p>Director Wizards:</p>
                <ul>
                  {house.heads.map((head) => (
                    <li key={head.firstName}>
                     {head.firstName}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );

}

export default HouseList;