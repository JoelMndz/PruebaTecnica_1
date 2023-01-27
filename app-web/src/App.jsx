import Formulario from  './components/Formulario'
import Listado from "./components/Listado";

function App() {
  return (
    <main className='bg-white h-screen'>
      <div className="container mx-auto p-5">
        <Formulario/>
        <Listado/>
      </div>
    </main>
  )
}

export default App
