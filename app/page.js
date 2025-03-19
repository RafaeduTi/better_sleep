'use client'
import { useState } from "react";
import "./cadastro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faChartSimple, faMagnifyingGlass, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";


export default function Cadastro() {

  
  const[Nome, alteraNome]=useState ("")
  const[Idade, alteraIdade]=useState ("")
  const[Email, alteraEmail]=useState ("")
  const[Senha, alteraSenha]=useState ("")



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

        {/* Formulário de Cadastro */}
        <div className="cadastro">
          <h2><strong>Cadastro</strong></h2>
          <ul>
            <p><strong>Nome:</strong> <input onChange={(e)=> alteraNome (e.target.value)} type="text" name="nome" placeholder="Escreva aqui.."  /></p>
            <p><strong>Idade:</strong> <input onChange={(e)=> alteraIdade (e.target.value)} type="number" name="idade" placeholder="Escreva aqui.." /></p>
            <p><strong>Email:</strong> <input onChange={(e)=> alteraEmail (e.target.value)} type="email" name="email" placeholder="Escreva aqui.." /></p>
            <p><strong>Senha:</strong> <input onChange={(e)=> alteraSenha (e.target.value)} type="password" name="senha" placeholder="Escreva aqui.." /></p>
            <button className="botaoCadastrar"><strong>Cadastrar</strong></button>
          </ul>
        </div>
      </div>
    </div>
  );
}
