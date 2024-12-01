

/// Componente de adicionar tarefa ///

function AddTask({ onTaskAdicionar }) {


    return (
        <div>{/* Formulario de adicionar tarefa */}
            <div className="bg-white rounded-lg space-y-3 p-5 w-full max-w-md identação shadow-2xl shadow-black">

            {/* Inputs de adicionar titulo da tarefa */}
            <input type="text" name="" id="title" placeholder="Titulo da tarefa" className="bg-slate-300 p-2 rounded-md w-full " autoComplete="off"/>

            {/* Inputs de adicionar descrição da tarefa */}
            <input type="text" name="" id="description" placeholder="Descrição da tarefa" className="bg-slate-300 p-2 rounded-md w-full" autoComplete="off"/>

            {/* Botão de adicionar tarefa */}
            <button 
            className="bg-slate-400 text-white p-2 rounded-md w-full hover:bg-slate-500 transition-colors"
            onClick={() => {
                
                {/* Verifica se o input de titulo estiver vazio */}
                if (document.getElementById('title').value === '') {
                    alert('Preencha o Título')

                } else {
                    
                    onTaskAdicionar(document.getElementById('title').value, document.getElementById('description').value)

                    document.getElementById('title').value = ''
                    document.getElementById('description').value = ''
                }
                
            
            }}> Adicionar </button>

            </div>
        </div>
        
    )
}

export default AddTask;
