import Button from "../button/Button";
import "./styles.css";

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="content-container">
                <h3 id="contact">CONTACT</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis facilisis purus. Sed non purus ut metus elementum tincidunt at vel turpis. Integer nec leo ut felis malesuada elementum eu eu ipsum. Maecenas sit amet eros vitae lorem sollicitudin feugiat.
                </p>
                <div className="sub-div">
                    <h4>EMAIL</h4>
                    <p>loremipsum@example.com</p>
                </div>
                <div className="sub-div">
                    <h4>PHONE</h4>
                    <p>430 735 645</p>
                </div>
                <div className="sub-div">
                    <h4>ADRESS</h4>
                    <p>Lorem Main Street 45.</p>
                </div>
            </div>
            <div className="content-container">
                <div className="contact-card">
                    <h3>GET IN TOUCH</h3>
                    <form method="get">
                        <div className="input-group">
                            <input type="email" id="email" required placeholder=" " />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-group">
                            <input type="text" id="name" required placeholder=" " />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-group">
                            <input type="tel" id="phone" required minLength={9} maxLength={9} placeholder=" " />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div>
                            <Button>Send Offer</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;