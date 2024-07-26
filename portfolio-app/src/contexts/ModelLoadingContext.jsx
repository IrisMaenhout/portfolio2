import React, { createContext, useState } from 'react';

const ModelLoadingContext = createContext();

export const ModelLoadingProvider = ({ children }) => {
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const [isModelAnimationStarted, setIsModelAnimationStarted] = useState(false);

    return (
        <ModelLoadingContext.Provider value={{ isModelLoaded, setIsModelLoaded, isModelAnimationStarted, setIsModelAnimationStarted }}>
            {children}
        </ModelLoadingContext.Provider>
    );
};

export default ModelLoadingContext;
