// eslint-disable-next-line
import logo from '../../images/emolu.png'
import Vector from '../../images/Vector.svg'



const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="" />
            <img src={Vector} alt="pfp" />

        </nav>
    );
}


export default Navbar;