import NavBar from "../../components/nav-bar";

export default function TransactionsPage(){
    return(
        <>
        <NavBar active="movimentações"/>
        <main className="flex justify-center items-center">
            <div className="bg-slate-900 min-w-2/3 p-6 rounded m-6">
                <h2 className="text-lg font-bold">Movimentações</h2>
            </div>
        </main>
        </>
    )
}