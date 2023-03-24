import { LoadingSpinner } from "@/components/LoadingSpinner";
import { wizards } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const WizardList = () => {
    
    const router  = useRouter();
    const[wizards,setWizards] = useState<wizards[] | undefined>(undefined);

    useEffect(()=>{
        const fetchWizards = async () => {
            try{
                const res = await fetch(`https://wizard-world-api.herokuapp.com/Wizards`);
                const data: wizards[] = await res.json();
                setWizards(data);
            }catch(error: any){
                if(error.status === 404){
                    alert('Wizards not found');
                    router.push('/');
                }
            }
        };
        fetchWizards();
    }, []);
    
    if(!wizards) return <LoadingSpinner/>;

    return (
        <div>
            <h1>Wizard List</h1>
            <ul>
                {wizards.map((wizard)=>{
                    return(
                        <li key={wizard.firstName}>
                        <Link href={`/wizard/${wizard.id}`}>
                          {wizard.firstName} {wizard.lastName}
                        </Link>
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default WizardList;