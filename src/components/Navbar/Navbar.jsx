// eslint-disable-next-line
import logo from '../../images/emolu.png'
import Vector from '../../images/Vector.svg'
import styles from '../../utils/styles'



const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <img style={styles.navLogo} src={logo} alt="" />
            <img style={styles.navAccountIcon} src={Vector} alt="pfp" />

        </nav>
    );
}


export default Navbar;