import { useSnapshot } from "valtio";

import ConvasModel from "./canvas/index.jsx";
import { getContrastingColor } from "./config/helpers.js";
import { Home, Customizer } from "./pages";
import state from "./store";

function App() {
  const snap = useSnapshot(state);

  return (
    <main className={`app transition-all ease-in bg-[${getContrastingColor(snap.color)}]`}>
      <Home/>
      <ConvasModel/>
      <Customizer/>
    </main>
  )
}

export default App
