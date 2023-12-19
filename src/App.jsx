import { useSnapshot } from "valtio";

import ConvasModel from "./canvas/index.jsx";
import { Home, Customizer } from "./pages";
import state from "./store";

function App() {
  const snap = useSnapshot(state);

  return (
    <main className={`app transition-all ease-in 
      bg-[${snap.color === "#000000" ? "" : "#3f3f3f"}]`}>
      <Home/>
      <ConvasModel/>
      <Customizer/>
    </main>
  )
}

export default App
