import { NavLink } from "react-router-dom";

function Nav(){
    return (
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/usuario">Usuário</NavLink></li>
          <li><NavLink to="/treino">Treino</NavLink></li>
          <li><NavLink to="/exercicio">Exercício</NavLink></li>
          <li><NavLink to="/aparelho">Aparelho</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;