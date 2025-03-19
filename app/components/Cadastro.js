import Image from "next/image";
import "./geral.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faBars } from "@fortawesome/free-solid-svg-icons";


export default function Cadastro() {
  return (
    <div className="cadastro"> 
          <h2><strong>Cadastro</strong></h2>
          <form>
            <div className="input-group">
              <label htmlFor="nome"> Nome:</label>
              <input type="text" id="nome" required placeholder="Escreva aqui..." />
            </div>

            <div className="input-group">
              <label htmlFor="idade"> Idade:</label>
              <input type="number" id="idade" required placeholder="Escreva aqui..." />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required placeholder="Escreva aqui..." />
            </div>

            <div className="input-group">
              <label htmlFor="senha"> Senha:</label>
              <input type="password" id="senha" required placeholder="Escreva aqui..." />
            </div>

            <button className="botaoCadastrar" type="submit"><strong>Cadastrar</strong></button>
          </form>
        </div>
      

  );
}
