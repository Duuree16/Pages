import { Link } from 'react-router-dom'
import './review2.css'
export const Header = (props) => {
    return (
        <header className={props.noOuters ? "yes" : "outers"}>
            <Link to="/">
                <div className='Logo'></div>
            </Link>
            <div className="contain">
                <Link to="/products">
                    <h2 className="head">Products</h2>
                </Link>
                <Link to="/services">
                    <h2 className="head">Services</h2>
                </Link>
                <Link to="/contact">
                    <h2 className="head">Contact</h2>
                </Link>
                <Link to="/log">
                    <h2 className="head">Log in</h2>
                </Link>
                <h2 className="headSpecial">Get Access</h2>
            </div>
        </header>
    )
}