import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { AvatarThreeJs } from '../avatarThreeJs/AvatarThreeJs';
import styles from "./avatarCanvas.module.css";

function AvatarCanvas(props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div id="canvas-container" className={styles.canvas3DAvatar} onMouseOver={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}>
            <Canvas shadows>
                {/* <OrbitControls /> */}
                <ambientLight intensity={1} />
                <group position={[0, -1, 3.5]}>
                    <AvatarThreeJs isHovered={isHovered}/>

                </group>
            </Canvas>

            {/* <button>Zeg hallo</button> */}
        </div>
    );
}

export default AvatarCanvas;