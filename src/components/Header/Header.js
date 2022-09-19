import { NavLink } from "react-router-dom";

import './Header.scss'


const Header = (props) => {
    return  (
        <header>
            <div>
                <NavLink to="/home" activeStyle={{ color: "white" }} className='Link'><h3>HOME</h3></NavLink>
            </div>
        </header>
    )
};

export default Header;