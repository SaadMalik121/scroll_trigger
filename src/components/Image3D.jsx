import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

function Image3D({ image }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, image);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Use boxGeometry to make sure the texture is applied correctly */}
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default Image3D;
