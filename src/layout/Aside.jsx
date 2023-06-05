import { NavLink } from "react-router-dom";

function Aside(){
    return (
        <aside className="menu-lateral">
          <ul>
            <li>
              <NavLink to="/cadastros">Áreas</NavLink>
            </li>
            <li>
              <NavLink to="/atitudes">Atitudes</NavLink>
            </li>
          </ul>
        </aside>
      );
    
}

export default Aside;