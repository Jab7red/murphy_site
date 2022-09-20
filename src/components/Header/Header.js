import { NavLink } from "react-router-dom";

import './Header.scss'


const Header = (props) => {
    return  (
        <header>
            <div className="headerTitle">
                <h2>MurphyMt (will have image)</h2>
            </div>
            <div className="link">
                <NavLink to="/home" activeStyle={{color: "blue"}} style={{textDecoration: "none", color: "black"}}><h3>HOME</h3></NavLink>
                <NavLink to="/about" activeStyle={{color: "blue"}} style={{textDecoration: "none", color: "black"}}><h3>ABOUT</h3></NavLink>
                <NavLink to="/contact" activeStyle={{color: "blue"}} style={{textDecoration: "none", color: "black"}}><h3>CONTACT</h3></NavLink>
            </div>
        </header>
    )
};

export default Header;