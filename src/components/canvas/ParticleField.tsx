import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = ({ count = 2000 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      const speed = 0.01 + Math.random() * 0.02;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particles.forEach((particle, i) => {
      const { x, y, z, speed } = particle;
      dummy.position.set(
        x + Math.sin(time * speed + i) * 0.1,
        y + Math.cos(time * speed + i) * 0.1,
        z + Math.sin(time * speed + i) * 0.1
      );
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    if (meshRef.current) meshRef.current.instanceMatrix.needsUpdate = true;

    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time * 0.5) * 3;
      lightRef.current.position.y = Math.cos(time * 0.5) * 3;
    }
  });

  return (
    <>
      <pointLight ref={lightRef} distance={20} intensity={2} color="#915eff" />
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.01, 8, 8]} />
        <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={0.5} />
      </instancedMesh>
    </>
  );
};

export default ParticleField;
