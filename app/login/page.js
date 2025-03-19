'use client'
import React from 'react';
import { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faChartSimple, faMagnifyingGlass, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {

const notify = () => toast("acesso autorizado");
const notify2 = () => toast("acesso negado");
const[Email, alteraEmail]=useState ("")
const[Senha, alteraSenha]=useState ("")
const[MostraSucesso, alteraMostraSucesso]=useState("")
const[MostraErro, alteraMostraErro]= useState("")
  
function validarLogin(){
     
  if (Email=="Rafael" && Senha=="1234"){
          alteraMostraErro(false)
          alteraMostraSucesso(true)

  }else{
          alteraMostraErro(true)
          alteraMostraSucesso(false)

  }

  
  if(MostraErro==(true) && MostraSucesso==(false))
    {
      notify2()

}
else{
  notify()
}
}


return (
    <div id="container">
      {/* Menu Superior */}
      <div id="menusuperior">
        <button className="botaolateral">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Better Sleep</h1>
        <button className="semborda">Login/Cadastro</button>
      </div>
      
      {/* Conteúdo Principal */}
      <div id="menugeral">
        {/* Menu Lateral */}
        <div id="menulateral">
          <ul>
            <li><FontAwesomeIcon icon={faHouse} className="icones" /> Início</li>
            <li><FontAwesomeIcon icon={faChartSimple} className="icones" /> Formulário</li>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} className="icones" /> Análise</li>
            <li><FontAwesomeIcon icon={faPeopleGroup} className="icones" /> Sobre nós</li>
          </ul>
        </div>

        {/* Formulário de Login */}
        <div className="cadastro">
          <h2><strong>Login</strong></h2>
          <ul>
            <p><strong>Email:</strong> <input  onChange={(e)=> alteraEmail (e.target.value) }type="email" name="email" placeholder="Escreva aqui.."  /></p>
            <p><strong>Senha:</strong> <input  onChange={(e)=> alteraSenha (e.target.value) }type="password" name="senha" placeholder="Escreva aqui.." /></p>
          </ul>
          <div className="botoesCadastros">
            <button className="botaoLogar" onClick={()=>validarLogin()}><strong>Logar-se</strong></button>
            <button className="botaoCadastrar"><strong>Cadastre-se</strong></button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}  