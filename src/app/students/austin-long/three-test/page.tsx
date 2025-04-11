"use client";
import { Canvas } from "@react-three/fiber";
import { Model } from "../models/cyber-cubes/scene";

export default function Page() {
  return (
    <div className="aspect-video" id="canvas-container">
      <Canvas camera={{ position: [10, 10, 20] }}>
        <Model />
        <ambientLight position={[5, 5, 5]} color="white" />
        <directionalLight position={[5, 5, 5]} color="white" />
      </Canvas>
    </div>
  );
}
