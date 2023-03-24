import { LoadingSpinner } from "@/components/LoadingSpinner";
import { wizardAPI } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const WizardDetails = () => {
    const router = useRouter();
    const {id} = router.query;

    const[wizards,setWizards] = useState<wizardAPI | null>(null);

    useEffect(()=>{
        if(id){
            const fetchWizards = async () => {
                try{
                    const res = await fetch(`https://wizard-world-api.herokuapp.com/Wizards/${id}`);
                    const data: wizardAPI = await res.json();
                    setWizards(data);
                }catch(error: any){
                    if(error.status === 404){
                    alert('Wizard not found');
                    router.push('/');
                }
            }
        };
        fetchWizards();
        }
    }, [id]);

    if(!wizards) return <LoadingSpinner/>;

    return (
        <div>
            <h1>{wizards.firstName} {wizards.lastName}</h1>
                <ul>
                {wizards?.elixirs?.map((elixir)=>{
                    return(
                        <li key={elixir.id}>
                            <Link href={`/elixirs/${elixir.id}`}> {elixir.name}</Link>
                        </li>
                    )
                })}
                </ul>
        </div>
    );

}

export default WizardDetails;