import { Html, useProgress } from "@react-three/drei";
import { useSnapshot } from "valtio";

import state from "../store";

const Loader = () => {
  const { progress } = useProgress();
  const snap = useSnapshot(state);

  return (
    <>
    <Html>
      <span className="canvas-load"></span>
      <p className="flex items-center justify-center h-screen w-screen" 
        style={{fontSize: 14, color: snap.logoColor, fontWeight: 800}}>
        {progress.toFixed(2)}%
      </p>
    </Html>
    </>
  )
}

export default Loader