import "./styles.css";
import Button from "../button/Button";

const About = () => {
    return (
        <div>
            <div className="cards-box">
                <div className="card-container card-small"></div>

                <div className="card-container card-main">
                    <div className="card-wrapper">
                        <p>we are ready</p>
                        <h4>FOR EVERY ADVENTURE</h4>
                        <p>with you</p>
                    </div>
                </div>

                <div className="card-container card-small card-blur"></div>
            </div>
            <div className="about-heading">
                <h3>KEEP FOCUSED</h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae interdum risus. Nunc sed est a mauris mollis suscipit eget quis nisl. Etiam et.<br />Consectetur adipiscing elit. Proin vitae interdum risus.</p>
                <div className="btn-wrapper"><Button>Explore</Button></div>
            </div>
        </div>
    );
}

export default About;