import React from "react";
import { Link } from "react-router-dom";
function Footer(props){
    return(<div>
         <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li ><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Dewlahland,Near ISBT<br />
		              Imphal ,Manpur<br />
		               795001 <br />
		              <i className="fa fa-phone fa-lg " ></i>: +987654321<br />
		              <i className="fa fa-fax fa-lg " ></i>: +987654321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="feedback@RRsaloon.com">
                         feedback@RRsaloon.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="bi bi-google"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="bi bi-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="bi bi-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="bi bi-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="bi bi-youtube"></i></a>
    
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2022 RR Saloon</p>
                </div>
            </div>
        </div>
    </div>
    </div>);

}
export default Footer;