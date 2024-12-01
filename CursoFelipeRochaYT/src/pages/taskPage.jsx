import { useNavigate, useSearchParams } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react"


/// Página de detalhes da tarefa ///


function TaskPage(){

    const navigate = useNavigate()

    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    let description = searchParams.get('description')


    {if (description.length === 0){
        description = 'Nenhuma descrição disponível...'
    } else {
        description
    }}



    return (
        <div className="w-screen h-screen bg-slate-800 flex justify-center p-6">

            <div className="w-[500px] space-y-8">
        
                <h1 className="text-3xl text-slate-100 font-bold text-center mb-7">Detalhes da Tarefa</h1>

                <div style={{margin:'0 auto'}} className="bg-slate-500 max-w-[80%] w-screen h-[fit-content] rounded-xl p-6 shadow-2xl shadow-black">

                    <ul>
                        <li>
                            <h1 className="inline-block text-2xl text-slate-200 text-left mb-7 w-[fit-content] rounded-md font-mono ">{title}</h1> 

                            <button className="bg-slate-700 hover:bg-slate-600 transition-colors p-2 rounded-md float-end"
                            onClick={() => navigate(-1)}>
                                <ChevronLeftIcon color="white"/>
                            </button>
                        </li>
                    </ul>

                    

                    <p style={{wordWrap: 'break-word'}} className="text-sm font-mono text-white max-w-[500px] wrap">{description}</p>

                </div>

                
      
            </div>
      
        </div>
    )
}

export default TaskPage