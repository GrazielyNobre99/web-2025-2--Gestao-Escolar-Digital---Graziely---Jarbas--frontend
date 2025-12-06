import React from "react";
import "./Login.css";
import demoLogo from "../../assets/demo-logo.png";

export default function Login() {
  return (
    <div className="login-container">

      <div className="login-card">
        <img src={demoLogo} alt="Logo" className="login-logo" />

        <h2 className="login-title">Acessar Sistema</h2>

        <div className="campo">
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" placeholder="Digite seu login" />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Digite sua senha" />
        </div>

        <button className="login-btn">Acessar</button>
      </div>

    </div>
  );
}
