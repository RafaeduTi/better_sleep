import Image from "next/image";
import "./geral.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faBars, faChartSimple, faHouse, faMagnifyingGlass, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";


export default function Lateral() {
    return (
        
        <div id="menugeral">

            

            <div id="menulateral">
                <ul>

                     <li><FontAwesomeIcon icon={faChartSimple} className="icones" /> inicio </li>
                    <li> <FontAwesomeIcon icon={faHouse} className="icones" /> formulário </li>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass}className="icones" />analise </li>
                    <li><FontAwesomeIcon icon={faPeopleGroup}className="icones" /> sobre nós </li>


                </ul>
            </div>
        </div>

    );
}
