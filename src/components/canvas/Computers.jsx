import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF('../rocket/scene.gltf');

  const initialPosition = isMobile ? [0, -5, 0] : [0, -5, 0]; // Ajuster la position sur l'axe X pour déplacer vers la droite
  const initialScale = isMobile ? 2 : 2; // Réduire la taille en diminuant la valeur de scale

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={initialScale}
        position={initialPosition}
        rotation={[0, 0, 0]} // Rotation initiale définie à [0, 0, 0]
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add media query listener to detect mobile devices
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    
    // Add event listener to detect changes in media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    // Add event listener to media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // Remove event listener on cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 1, 5], fov: 40 }} // Ajustez la position de la caméra si nécessaire
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
