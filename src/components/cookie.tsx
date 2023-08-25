import React from "react"
import { Link } from "gatsby";

interface Props {
    onChange: React.MouseEventHandler
}

const CookieBox = ({ onChange}: Props) => {
    return (
        <div className="cookie-div">
            <div className="cookie-inner-div">
                <p className="cookie-p">This website uses cookies to ensure you get the best experience on our website.</p>
                <Link to="/privacy-policy" className="cookie-link">Privacy policy</Link>
            </div>
            <button className="cookie-btn" onClick={onChange}>Accept</button>
        </div>
    )
}

export default CookieBox;
