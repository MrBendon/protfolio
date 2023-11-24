/* eslint-disable react/no-unknown-property */
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import ModelLoader from "../components/ModelLoader";

const ComputerCanvas = () => {
  const ObjectRef = useRef(null);
  const [cameraPosition, setCameraPosition] = useState([0, 2, 10]);
  const [isMobile, setIsMobile] = useState(false);
  const PCmodel = useGLTF("./desktop_pc/scene.gltf");
  function ChangeCameraPosition() {
    setCameraPosition([2, 5, 50]);
  }

  useEffect(() => {
    const mediaQueryResult = window.matchMedia("(max-width:767px)");
    // console.log(mediaQueryResult);
    setIsMobile(mediaQueryResult.matches);

    const handleMediaQueryChange = (e) => {
      // console.log(e);
      setIsMobile(e.matches);
    };
    mediaQueryResult.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryResult.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      camera={{ fov: 60, aspect: 1, near: 0.1, far: 1000, position: isMobile ? [5, 5, 10] : cameraPosition }}

      //   gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<ModelLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.5} minPolarAngle={Math.PI / 2.5} />
        <hemisphereLight intensity={2.15} groundColor="black" />
        <ambientLight intensity={3} />
        <pointLight intensity={2} />
        {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <mesh ref={ObjectRef} scale={0.5} rotation={[0, -1.6, 0]}> */}
        <primitive
          onClick={() => ChangeCameraPosition()}
          object={PCmodel.scene}
          ref={ObjectRef}
          position={isMobile ? [0.8, 3, 0] : [0.8, 0, 0]}
          scale={isMobile ? 0.4 : 0.7}
          rotation={[0, -1.6, 0]}
        ></primitive>
        {/* </mesh> */}
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
