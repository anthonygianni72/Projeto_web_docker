import React from 'react';
import { Link } from 'react-router-dom';

function Main(){
    return(
        <div>
        <h1>Página Inicial</h1>
        
            <header>
            <Link to="/sobre-nos">click</Link>
            </header>
        </div>
        
    );
};

export default Main;