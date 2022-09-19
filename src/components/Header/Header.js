import { NavLink } from "react-router-dom";

import './Header.scss'


const Header = (props) => {
    return  (
        <header>
            <div className="headerTitle">
                <h2>MurphyMt</h2>
            </div>
            <div className="links">
                <NavLink to="/home"><h3>HOME</h3></NavLink>
                <NavLink to="/about"><h3>ABOUT</h3></NavLink>
                <NavLink to="/contact"><h3>CONTACT</h3></NavLink>
            </div>
        </header>
    )
};

export default Header;