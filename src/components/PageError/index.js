import React from 'react';
import './styles.scss';

const PageError = ({msg}) => {
    return (
        <div className="page-error">
            <h2>Oops! something went wrong... 🕵️‍♂️</h2>
            <p>{msg}</p>
        </div>
    );
};

export default PageError;