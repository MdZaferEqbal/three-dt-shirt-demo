import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import { Backdrop, CameraRig, Shirt } from "../canvas";

const ConvasModel = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0], fov: 25 }} gl={{ preserveDrawingBuffer: true }} 
      className="w-full max-w-full h-full trasition-all ease-in">
      <ambientLight intensity={0.5}/>
      <Environment preset="city"/>
      <CameraRig>
        <Backdrop/>
        <Center>
          <Shirt/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default ConvasModel
