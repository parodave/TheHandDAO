'use client';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useMemo } from 'react';

function Hand() {
  // Primitive low‑poly placeholder: a smooth box suggesting a hand volume
  const geom = useMemo(() => new THREE.BoxGeometry(1.2, 0.6, 0.4), []);
  return (
    <mesh geometry={geom} rotation={[0.2, 0.6, 0]}>
      <meshStandardMaterial color="#E5E5E5" roughness={1} metalness={0} />
    </mesh>
  );
}

export default function HeroHand() {
  return (
    <div className="w-full h-[360px] md:h-[420px] border">
      <Canvas dpr={[1, 2]} camera={{ position: [2, 1.2, 2.5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <Suspense fallback={null}>
          <Hand />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
