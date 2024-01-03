import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { Suspense } from "react";

import { Backdrop, CameraRig, Shirt } from "../canvas";
import CanvasLoader from "../components/Loader";

const ConvasModel = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0], fov: 25 }} gl={{ preserveDrawingBuffer: true }} 
      className="w-full max-w-full h-full trasition-all ease-in">
      <Suspense fallback={<CanvasLoader/>}>
        <ambientLight intensity={0.5}/>
        <Environment preset="city"/>
        <CameraRig>
          <Backdrop/>
          <Center>
            <Shirt/>
          </Center>
        </CameraRig>
      </Suspense>
    </Canvas>
  )
}

export default ConvasModel
