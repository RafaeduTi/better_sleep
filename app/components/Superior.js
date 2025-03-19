import Image from "next/image";
import "./geral.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faBars } from "@fortawesome/free-solid-svg-icons";


export default function Superior() {
  return (
    <div>
      <div id="menusuperior">
        <button className="botaolateral">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <h1>Better Sleep</h1>

        <button>
          Login/Cadastro
        </button>
      </div>

      
    </div>
  );
}
