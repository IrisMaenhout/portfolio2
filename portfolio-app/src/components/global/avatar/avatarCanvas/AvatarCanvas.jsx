import { Environment, Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { AvatarThreeJs } from '../avatarThreeJs/AvatarThreeJs';
import styles from "./avatarCanvas.module.css";

function AvatarCanvas(props) {
    // const [isHovered, setIsHovered] = useState(false);
    const [playingAnimation, setPlayingAnimation] = useState("Standing");

    function wave() {
        setPlayingAnimation("Greeting");

        const backToInitialPose = setTimeout(() => {
            setPlayingAnimation("Standing");
        }, "4000");

        return () => clearTimeout(backToInitialPose);
    }

    return (
        <div id="canvas-container" className={styles.canvas3DAvatar}>

            <div className={styles.sayHiBtn}>
                <button disabled={playingAnimation === "Greeting"} onClick={wave}><i className="fi fi-rr-hand-wave"></i> <span className={styles.btnText}>Zeg hallo!</span></button>
            </div>

            <Canvas shadows>
                <Suspense>
                    <Environment preset='sunset' />
                    <group position={[0, -0.8, 3.5]}>
                        <AvatarThreeJs animation={playingAnimation}/>
                    </group>
                </Suspense>
            </Canvas>

            <Loader/>


        </div>
    );
}

export default AvatarCanvas;