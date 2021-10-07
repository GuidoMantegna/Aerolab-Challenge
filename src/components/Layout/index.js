import React from 'react';
import './styles.scss';

const Layout = ({ children }) => {
    return (
        <>
        <header></header>
        {children}
        </>
    );
};

export default Layout;