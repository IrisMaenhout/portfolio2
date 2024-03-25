import React from 'react';
import style from "./pageNotFound.module.css";

function PageNotFound(props) {
    return (
        <div className='container'>
            <div className={style.positionCenter}>
                <h1 className={`gradientText`}>404 error</h1>
                <p>Deze pagina is niet beschikbaar. Probeer een andere zoekterm.</p>
            </div>
        </div>
    );
}

export default PageNotFound;