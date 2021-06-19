import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";

class MenuBar extends Component {
  _handleRedireciona(caminho) {}
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Link to="/cadastroLivro" className="link_menuBar">
              <Button color="inherit">Cadastro Livros</Button>
            </Link>
            <Link to="/cadastroUsuario" className="link_menuBar">
              <Button color="inherit">Cadastro Usuario</Button>
            </Link>
            <Link to="/livro" className="link_menuBar">
              <Button color="inherit">Listagem Livros</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default MenuBar;
