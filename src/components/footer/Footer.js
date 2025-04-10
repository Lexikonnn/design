import x from "../../assets/x.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import "./styles.css";



const Footer = () => {
    return ( 
        <footer>
            <div className="social-wrapper">
                <img className="icon" src={x} alt="Twitter" />
                <img className="icon" src={instagram} alt="Instagram" />
                <img className="icon" src={linkedin} alt="Linkedin" />
            </div>
            <div className="author-wrapper">
                <h2>Jan Skrzeczek</h2>
            </div>
        </footer>
     );
}
 
export default Footer;