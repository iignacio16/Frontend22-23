import { LoadingSpinner } from "@/components/LoadingSpinner";
import { elixirsAPI } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ElixirDetails = () => {
    const router = useRouter();
    const {id} = router.query;

    const [elixir, setElixir] = useState<elixirsAPI | undefined>(undefined);

    useEffect(()=>{
        if(id){

            const fetchElixir = async () => {
                try{
                    const res = await fetch(`https://wizard-world-api.herokuapp.com/Elixirs/${id}`);
                    const data: elixirsAPI = await res.json();
                    setElixir(data);
                }catch(error: any){
                    if(error.status === 404){
                        alert('Elixir not found');
                        router.push('/');
                }
            }
        }
        fetchElixir();
        }
    }, [id])

    if(!elixir) return <LoadingSpinner/>

    return(
        <div>
        <h1>{elixir.name}</h1>
        <p>Effect: {elixir.effect}</p>
        <p>Side Effect: {elixir.sideEffects}</p>
        <p>Characteristic: {elixir.characteristics}</p>
        <p>Time: {elixir.time}</p>
        <p>Side Effect: {elixir.difficulty}</p>
        <p>Ingredients:</p>
        <ul>
            {elixir?.ingredients?.map((ingredient) => (
                <li key={ingredient.name}>
                    {ingredient.name}
                </li>
            ))}
        </ul>
        <p>Inventors: </p>
        <ul>
            {elixir?.inventors?.map((inventor) => (
                <li key={inventor.firstName}>
                    {inventor.firstName} {inventor.lastName}
                </li>
            ))}
        </ul>
        <p>Manufacter: {elixir.manufacturer}</p>
    </div>
    )
}

export default ElixirDetails;