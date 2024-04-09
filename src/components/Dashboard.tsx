
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";


export function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-center h-14 px-4 border-b gap-2 sm:h-16 sm:px-6 ">
        <h1 className="text-2xl font-semibold">Starcatcher</h1>
      </header>
      <div className="flex flex-1">
       <Sidebar/>
        <Main/>
      </div>
    </div>
  )
}


