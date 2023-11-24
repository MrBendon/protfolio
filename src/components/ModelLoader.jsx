import { Html, useProgress } from "@react-three/drei";

const ModelLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-white text-2xl">
      Loading... {progress} % Loaded
    </Html>
  );
};

export default ModelLoader;
