import ConvasModel from "./canvas/index.jsx"
import { Home, Customizer } from "./pages"

function App() {
  return (
    <main className="app transition-all ease-in bg-[#3f3f3f]">
      <Home/>
      <ConvasModel/>
      <Customizer/>
    </main>
  )
}

export default App
