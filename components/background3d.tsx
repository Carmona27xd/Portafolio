"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Shape({ type, initialPosition, scale }: { type: string, initialPosition: [number, number, number], scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Reducimos un poco la velocidad para que el movimiento sea más relajante
  const velocity = useMemo(() => new THREE.Vector3(
    (Math.random() - 0.5) * 1.5, 
    (Math.random() - 0.5) * 1.5, 
    (Math.random() - 0.5) * 0.8  
  ), []);

  const randomColor = useMemo(() => {
    const color = new THREE.Color();
    color.setHSL(Math.random(), 0.8, 0.5); 
    return color;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.3;

      meshRef.current.position.x += velocity.x * delta;
      meshRef.current.position.y += velocity.y * delta;
      meshRef.current.position.z += velocity.z * delta;

      // CAJA DE REBOTE ESTRICTA (Evita que se escapen de la pantalla)
      // Límites en X (Izquierda/Derecha)
      if (meshRef.current.position.x > 8) {
        meshRef.current.position.x = 8;
        velocity.x *= -1;
      } else if (meshRef.current.position.x < -8) {
        meshRef.current.position.x = -8;
        velocity.x *= -1;
      }

      // Límites en Y (Arriba/Abajo)
      if (meshRef.current.position.y > 5) {
        meshRef.current.position.y = 5;
        velocity.y *= -1;
      } else if (meshRef.current.position.y < -5) {
        meshRef.current.position.y = -5;
        velocity.y *= -1;
      }

      // Límites en Z (Profundidad: evita que se hagan muy chicas o muy grandes)
      if (meshRef.current.position.z > 1) { // No tan cerca de la cámara
        meshRef.current.position.z = 1;
        velocity.z *= -1;
      } else if (meshRef.current.position.z < -4) { // No tan lejos en el fondo
        meshRef.current.position.z = -4;
        velocity.z *= -1;
      }
    }
  });

  const material = (
    <meshStandardMaterial 
      color={randomColor} 
      roughness={0.2} 
      metalness={0.8} 
      transparent 
      opacity={0.6} 
    />
  );

  return (
    <mesh ref={meshRef} position={initialPosition} scale={scale}>
      {type === 'tetrahedron' && <tetrahedronGeometry args={[1, 0]} />}
      {type === 'cube' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
      {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
      {type === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}
      {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
      {material}
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        
        {/* ESCALAS REDUCIDAS A LA MITAD Y POSICIONES INICIALES MÁS CERRADAS */}
        <Shape type="tetrahedron" initialPosition={[-4, 3, 0]} scale={0.7} />
        <Shape type="cube" initialPosition={[5, 1, -2]} scale={0.6} />
        <Shape type="octahedron" initialPosition={[-3, -3, -1]} scale={0.65} />
        <Shape type="dodecahedron" initialPosition={[4, 4, -3]} scale={0.8} />
        <Shape type="icosahedron" initialPosition={[-5, 0, -2]} scale={0.75} />
      </Canvas>
    </div>
  );
}