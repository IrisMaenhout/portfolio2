import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

function PreloadModel() {
  useEffect(() => {
    // Preload the GLB model
    useGLTF.preload("/models/iris_character.glb");
  }, []);

  return null; // No need to render anything
}

export default PreloadModel;
