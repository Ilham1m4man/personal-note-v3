import React from "react";
import { homePath } from "../utils/path-name";
import { Link } from "react-router-dom";

function PageNotFound404() {
    return (
        <div className="page-not-found">
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <h1>UH OH! You're lost.</h1>
            <p className="zoom-area">The <b>page</b> you are looking for does not exist.
                How you got here is a mystery. But you can click the button below
                to go back to the homepage.  </p>
            <div className="link-container">
                <Link to={homePath} className="more-link">Home</Link>
            </div>
        </div>
    )
}

export default PageNotFound404;