import { bubble as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Menu>
                <a className="navbar-item">
                    <Link to="home" spy={true} smooth={true}>Home</Link></a>
                <a className="navbar-item">
                    <Link to="about" spy={true} smooth={true}>About</Link></a>
                <a className="navbar-item">
                    <Link to="timeline" spy={true} smooth={true}>Timeline</Link></a>
                <a className="navbar-item">
                    <Link to="skills" spy={true} smooth={true}>Skills</Link></a>
                <a className="navbar-item">
                    <Link to="contact" spy={true} smooth={true}>Contact Me</Link></a>
            </Menu>            
        </div>
    )
}

export default Navbar
