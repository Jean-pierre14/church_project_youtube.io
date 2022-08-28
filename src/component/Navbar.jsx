import './navbar.css';
import Logo from '../images/logo.png';
import {links} from '../data.js';
import {Link, NavLink } from 'react-router-dom';
import {GoThreeBars} from 'react-icons/go';


const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link className='logo' to="/">
                <img src={Logo} alt="Nav Logo" />
            </Link> 
            <ul className='nav_links'>
                {
                    links.map(({name, path})=>{
                        return(
                            <li>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn">
                <GoThreeBars/>
            </button>
        </div>    
    </nav>
  )
}

export default Navbar