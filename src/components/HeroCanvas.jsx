import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Float,
  Environment
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Model() {
  const model = useGLTF("/models/laptop.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={1.5}
      position={[0, -1, 0]}
    />
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>

      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />
      <pointLight position={[-2, -2, -2]} intensity={1} />

      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Model />
        </Float>
        <Environment preset="city" />
      </Suspense>

      <OrbitControls enableZoom={false} />

    </Canvas>
  );
}