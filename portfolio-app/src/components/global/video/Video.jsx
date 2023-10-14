import React from 'react';
import styles from './video.module.css';

function Video({videoPath, className}) {
    return (
        <video controls muted className={`${styles.videoStyle} ${className}`}>
            <source src={videoPath} type="video/mp4" />
                This browser doesn't support video or mp4 files.
        </video>
    );
}

export default Video;