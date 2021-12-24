import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="Footer-Area">
        <div className="Footer">
          <div>
            <Link to="/" style={{textDecoration : "none", color: "white"}}>
              <h2>Blogger</h2>
            </Link>
          </div>
          <div>
            <ul className="Social-Footer-li">
              <li>
                <a href="http://github.com/0xdevsachin">
                  <i className="fab fa-github Footer-icons"></i>
                </a>
              </li>
              <li>
                <a href="http://linkedin.com/in/0xsachin">
                  <i className="fab fa-linkedin-in Footer-icons"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/0xsachin">
                  <i className="fab fa-twitter Footer-icons"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-hr">
          <hr />
          <p style={{ textAlign: "center", color: "white", margin: "12px 0" }}>
            &#169;2021. All rights Reserved
          </p>
          <p style={{ textAlign: "center", color: "white", margin: "12px 0" }}>
            Made with 💖 by{"   "}
            <a
              rel="noreferrer"
              href="https://github.com/0xdevsachin"
              style={{ color: "white" }}
              target="_blank"
            >
              Dev Sachin
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
