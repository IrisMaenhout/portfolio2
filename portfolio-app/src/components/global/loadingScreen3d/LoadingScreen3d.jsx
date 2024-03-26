import { useProgress } from '@react-three/drei';
import React, { useEffect } from 'react';
import styles from './loadingScreen3d.module.css';

function LoadingScreen3d(props) {
    const { started, setStarted } = props;
    const { progress, total, loaded, item } = useProgress();

    useEffect(() => {
        if (progress === 100) {
        setTimeout(() => {
            setStarted(true);
        }, 500);
        }
    }, [progress, total, loaded, item]);

  return (
    <div
      className={`${styles.container}`}
      style={started ? {opacity: 0} : {opacity: 100}}
    >
      <div className={styles.name}>
        <div
          className={styles.progressName}
          style={{
            width: `${progress}%`,
          }}
        >
          Iris Maenhout
        </div>
        <div className={styles.lowerOpacityName}>Iris Maenhout</div>
      </div>
    </div>
  )
}

export default LoadingScreen3d;