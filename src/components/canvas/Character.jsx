import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Character = ({ isMobile }) => {
    const character = useGLTF("./character/scene.gltf")
    return (
        <mesh>
            <hemisphereLight intensity={10} groundColor='black' />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={character.scene}
                scale={5}
                position={[0, 0, 0]}
                rotation-y={0}
            >

            </primitive>
        </mesh>
    )
};

const CharacterCanvas = () => {
    return (
        <Canvas
            shadows
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            </Suspense>
            <Character />
        </Canvas>
    )
};

export default CharacterCanvas;