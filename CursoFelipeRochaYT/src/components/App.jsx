import { useState } from "react"
import AddTask from "./AddTask"
import Task from "./Task"
import {v4} from 'uuid'


/// Página principal ///

function App() { // Função principal do componente

  // Estado para armazenar as tarefas (array vazio inicialmente)

  const [Tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('Tasks')) || []
  );

  // Função para lidar com o clique em uma tarefa
  function onTaskClick(id) {
    // Cria um novo array de tarefas mapeando o array original

    let tasksFromLocalStorage = JSON.parse(localStorage.getItem('Tasks'));
    
    const newTasks = tasksFromLocalStorage.map((Task) => {

      // Verifica se a tarefa atual é a que foi clicada
      if (Task.id === id) {
        // Inverte o estado de conclusão da tarefa
        return { ...Task, inCompleted: !Task.inCompleted };
      } else {
        // Mantém a tarefa original
        return Task;
      }
    });

    // Atualiza o estado local (localStorage) com as tarefas modificadas
    localStorage.setItem('Tasks', JSON.stringify(newTasks));

    // Atualiza o estado interno do componente com as tarefas modificadas
    setTasks(JSON.parse(localStorage.getItem('Tasks')));
  }


  // Função para lidar com a exclusão de uma tarefa
  function onTaskDelete(id) {
    // Filtra o array de tarefas, removendo a que possui o ID especificado
    let tasksFromLocalStorage = JSON.parse(localStorage.getItem('Tasks')) ?? [];

    let newTasksAfterDelete = tasksFromLocalStorage.filter((Task) => Task.id !== id);

    // Atualiza o estado local (localStorage) com as tarefas filtradas
    localStorage.setItem('Tasks', JSON.stringify(newTasksAfterDelete));

    // Atualiza o estado interno do componente com as tarefas filtradas
    setTasks(JSON.parse(localStorage.getItem('Tasks')));
  }


  // Função para adicionar uma nova tarefa
  function onTaskAdd(title, description) {
    // Cria um objeto para a nova tarefa com ID único, título, descrição e estado de conclusão inicial (não concluída)
    const TaskNew = { id: v4(), title: title, description: description, inCompleted: false };

    // Cria um novo array de tarefas, concatenando a nova tarefa com o array existente
    let localJsonStorage = JSON.parse(localStorage.getItem('Tasks')) ?? [];

    let Tasks2 = [...localJsonStorage, TaskNew];

    // Atualiza o estado local (localStorage) com o array de tarefas atualizado
    localStorage.setItem('Tasks', JSON.stringify(Tasks2));

    // Atualiza o estado interno do componente com o array de tarefas atualizado
    setTasks(JSON.parse(localStorage.getItem('Tasks')));
  }


  // Retorno do componente, renderizando a interface
  return (
    <div className="w-screen h-screen bg-slate-800 flex justify-center p-6 overflow-auto">

      <div className="w-[500px] space-y-4">

        <h1 className="text-3xl text-slate-100 font-bold text-center mb-7">Gerenciador de Tarefas</h1>

        {/* Componente 'AddTask' para adicionar novas tarefas */}
        <AddTask Task={Tasks} onTaskAdicionar={onTaskAdd} />

        {/* Componente 'Task' para exibir e gerenciar as tarefas existentes */}
        <Task Task={Tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />

      </div>

    </div>
  );
}

export default App;