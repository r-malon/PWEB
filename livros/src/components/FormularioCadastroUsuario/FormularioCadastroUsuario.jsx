import React, { Component } from "react";
import api from "../../paginas/services/api";
import TextField from "@material-ui/core/TextField";
import "../../assets/style.css";
import BotaoSubmit from "../BotaoSubmit";

class FormularioCadastroUsuario extends Component {
  constructor() {
    super();
    this.nome = "";
    this.email = "";
    this.senha = "";
    this.telefone = "";
  }
  _handleAlterouNome(e) {
    e.stopPropagation();
    this.nome = e.target.value;
  }
  _handleAlterouEmail(e) {
    e.stopPropagation();
    this.email = e.target.value;
  }
  _handleAlterouSenha(e) {
    e.stopPropagation();
    this.senha = e.target.value;
  }
  _handleAlterouTelefone(e) {
    e.stopPropagation();
    this.telefone = e.target.value;
  }
  _handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      api.post(`user`, {
        Nome: this.nome,
        Email: this.email,
        Senha: this.senha,
        Telefone: this.telefone,
      });
      alert("Registro inserido com sucesso!");
    } catch (e) {
      alert(e);
    }
  }
  render() {
    return (
      <div>
        <h1>Cadastro de usuários</h1>
        <form className="form_cadastro" onClick={this._handleSubmit.bind(this)}>
          <TextField
            label="Nome do usuário"
            onChange={this._handleAlterouNome.bind(this)}
            required
          />
          <TextField
            type="email"
            label="Email"
            onChange={this._handleAlterouEmail.bind(this)}
            required
          />
          <TextField
            type="password"
            label="Senha"
            onChange={this._handleAlterouSenha.bind(this)}
            required
          />
          <TextField
            label="Telefone"
            onChange={this._handleAlterouTelefone.bind(this)}
            required
          />
          <BotaoSubmit />
        </form>
      </div>
    );
  }
}

export default FormularioCadastroUsuario;
