import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/// Pages
import App from './components/App.jsx'
import TaskPage from './pages/taskPage.jsx'
///
import './index.css'


/// Rotas ///


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/task",
    element: <TaskPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} /> 
    
  </StrictMode>,
)


// Os componentes começam sempre com a primeira letra maiuscula