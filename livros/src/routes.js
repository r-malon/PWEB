import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Teste from "./paginas/teste/index";
import HelloMessage from "./components/HelloMessage";
import Livros from "./paginas/Livro/index";
import CadastroLivro from "./components/FormularioCadastroLivro";
import CadastroUsuario from "./components/FormularioCadastroUsuario";
import MenuBar from "./components/MenuBar";

function Routes() {
  return (
    <BrowserRouter>
    <MenuBar/>
      <Switch>
        <Route path="/" exact={true} component={HelloMessage} />
        <Route path="/teste" component={Teste} />
        <Route path="/livro" component={Livros} />
        <Route path="/cadastroLivro" component={CadastroLivro} />
        <Route path="/cadastroUsuario" component={CadastroUsuario} />        
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
