import CategoryItem from "@/components/category-item";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import NavBar from "@/components/nav-bar";
import { CircleAlert, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCategories } from "@/actions/category-actions";


//server actions



export default async function CategoriesPage() {
    const data: Array<Category> = await getCategories()

    return (
        <>
            <NavBar active="categorias" />

            <main className="flex justify-center items-center">
                <div className="bg-slate-900 min-w-2/3 p-6 rounded m-6">
                    <div className="flex justify-between mp-4">
                        <h2 className="text-lg font-bold" >Categorias</h2>
                        <Button asChild >
                            
                            <Link href={"/categories/form"}>
                                <Plus/>
                                Nova Categoria
                            </Link>             
                        </Button>

                    </div>

                    {(data.length == 0) ?
                        <Alert>
                            <CircleAlert />
                            <AlertDescription>
                                Nenhuma categoria cadastrada
                            </AlertDescription>
                        </Alert>
                        : ""
                    }

                    {data.map(category => <CategoryItem key={category.id} category={category} />)}

                </div>
            </main>
        </>
    )
}