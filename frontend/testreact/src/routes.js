//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Main from './pages/Main';
import SobreNos from './pages/SobreNos';
// import Contato from './pages/Contato';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/sobre-nos" component={SobreNos} />
               
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;