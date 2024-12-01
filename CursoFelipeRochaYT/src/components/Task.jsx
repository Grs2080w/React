import {ChevronRight, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"


/// Componente onde são renderizadas as tarefas ///


function Task({ Task, onTaskClick, onTaskDelete }) {

    // **1. Importa o hook useNavigate para navegação:**
    const navigate = useNavigate();
  
    // **3. Verifica se há tarefas:**
    if (Task.length === 0) {
  
      return (
  
        <div className="flex bg-white rounded-lg space-y-1 p-5 max-w-md identação mt-5">
          <p style={{ display: 'block', width: '100%' }}>Não há nenhuma tarefa no momento...</p>
        </div>
  
      );
  
    } else { // **4. Se houver tarefas, renderiza a lista:**
  
      function navigateToTaskPage(Task) {
  
        // **5. Cria parâmetros de pesquisa na URL para detalhes da tarefa:**
        const query = new URLSearchParams();
        query.set('title', Task.title);
        query.set('description', Task.description);
  
        // **- Explicação:**
        //   - `URLSearchParams` é usado para criar parâmetros de pesquisa na URL.
        //   - Definimos os parâmetros de pesquisa para `title` e `description` da tarefa clicada.
  
        // **6. Navega para a página de detalhes da tarefa:**
        navigate(`/task?${query.toString()}`);
  
      }


      return (
  
        <div id="tarefas" className="p-4">
  
          {/* **7. Lista de tarefas:** */}
          <ul className="bg-white rounded-lg space-y-3 p-5 max-w-md identação shadow-2xl shadow-black">

            {Task.map((task) => (
  
              <li key={task.id} className="flex gap-3">
  
                {/* **8. Botão da tarefa:** */}
                <button
                  style={{
                    textDecorationColor: 'black',
                    textDecorationThickness: '6px',
                    opacity: task.inCompleted ? 0.5 : 1,
                  }}
                  className={`bg-slate-400 w-full text-left text-white p-2 rounded-md 
                   ${task.inCompleted ? 'line-through' : ''} hover:bg-slate-500 transition-colors`}
                  onClick={() => { onTaskClick(task.id); }}
                >
  
                  {task.title}
  
                </button>
  
                {/* **9. Botão de detalhes:** */}
                <button
                  className="bg-slate-400 text-white p-2 rounded-md hover:bg-slate-500 transition-colors"
                  onClick={() => { navigateToTaskPage(task); }}
                >
  
                  <ChevronRight />
  
                </button>
  
                {/* **10. Botão de apagar:** */}
                <button
                  className="bg-white text-white p-2 rounded-md border-2 hover:border-2 hover:border-red-500 transition-colors"
                  onClick={() => { onTaskDelete(task.id); }}
                >
  
                  <Trash2 color="red" strokeWidth={1.9} size={20} />
  
                </button>
  
              </li>
  
            ))}
  
          </ul>
        </div>
  
      );
    }
  
  }

export default Task

//gap-3 gera um espaço entre os elementos dentro de um container flex