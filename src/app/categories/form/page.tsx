"use client"
import { createCategories } from "@/actions/category-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NavBar from "@/components/ui/nav-bar";
import { ArrowLeft, Check, Plus } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
const initialState={
    values:{
        name:"",
        icon:","       
    }
}
export default function CategoryFormPage(){
    const[state,formAction,penden]=useActionState(createCategories,initialState)
    return(
        <>
             <NavBar active="categorias"/>
        <main className="flex justify-center items-center">
            <div className="bg-slate-900 min-w-2/3 p-6 rounded m-6">
                <h2 className="text-lg font-bold">Dashboard</h2>
                <form action={formAction} className="space-y-4">
                    <Input name="name" placeholder="nome da categoria"></Input>
                    <Input name="icon" placeholder="icone"></Input>
                    <div className="flex justify-around">
                        <Button variant="outline" asChild>
                            <Link href={"/categories"}>
                                <ArrowLeft/>
                                Cancelar
                            </Link>
                        </Button>
                        <Button>                            
                                <Check/>
                                Salvar
                        </Button>
                    </div>
                </form>
            </div>
        </main>
        </>
    )
}