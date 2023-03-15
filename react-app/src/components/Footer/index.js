import './Footer.css'
import logo from '../../images/directablesLogoFooter.png'
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className="main-container">

        <div className='content-container-row'>

        <div className="footer-container">
            <div className="footer-links">

            <div className="footer-link-section1">
                    {/* <span className="footer-links-labels">ABOUT</span> */}
                    <img className="footer-logo" src={logo}></img>
                </div>

                <div className="footer-link-section">
                    <span className="footer-links-labels">Categories</span>
                    <div className="footer-cat-holder">
                        <div className="footer-cat-column">
                            <Link to="/circuits"><span><i class="fa-solid fa-microchip"></i> Circuits</span></Link>
                            <Link to="/workshop"><span><i class="fa-solid fa-wrench"></i> Workshop</span></Link>
                            <Link to="/craft"><span><i class="fa-solid fa-scissors"></i> Craft</span></Link>
                            <Link to="/cooking"><span><i class="fa-solid fa-utensils"></i> Cooking</span></Link>
                        </div>
                        <div className="footer-cat-column">
                        <Link to="/living"><span><i class="fa-solid fa-house"></i> Living</span></Link>
                        <Link to="/outside"><span><i class="fa-solid fa-bicycle"></i> Outside</span></Link>
                        <Link to="/teachers"><span><i class="fa-solid fa-book"></i> Teachers</span></Link>
                        </div>

                    </div>
                </div>
                <div className="footer-link-section">
                    <span className="footer-links-labels">Other Projects</span>
                    <div id="not-implemented" className="footer-link-box">
                    <a target="_blank" href="https://firestarter.onrender.com">Firestarter</a>
                    <a target="_blank" href="https://spare-bnb.onrender.com">SpareBNB</a>
                    </div>
                </div>
                <div className="footer-link-section">
                    <span className="footer-links-labels">Resources</span>
                    <div className="footer-link-box">
                        <a target="_blank" href="https://appacademy.io">App Academy</a>
                    </div>
                </div>
                <div className="footer-link-section-last">
                    <span className="footer-links-labels">About Me</span>
                    <div className="footer-git-link">
                        <a target="_blank" title="Portfolio" href="https://kagc.github.io">
                        <i class="fa-solid fa-folder-closed"></i>
                        </a>


                            <a target="_blank" title="Github" href="https://github.com/kagc/Capstone">
                        <i class="fa-brands fa-github-alt">

                            </i>
                            </a>

                            <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/kirin-agcaoili-a84a10187/">
                            <i class="fa-brands fa-linkedin-in"></i>
                            </a>

                            <a target="_blank" title="AngelList" href="https://angel.co/u/kirin-agcaoili">
                                <i class="fa-brands fa-angellist"></i></a>
                            </div>
                </div>
            </div>
            {/* <div className="footer-social-media">
                <div className="footer-copywrite">Clonestarter, 2023</div>
                <div className="footer-social-media-icons">
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Insta</span>
                </div>
            </div> */}
            <div className="footer-break"></div>
            <div className="footer-legal-links">
                <div>
                    {/* <i class="fa-solid fa-splotch"></i> */}
                    <i class="fa-solid fa-face-laugh-beam"></i> 2023 Agcaoili, K.</div>
                <div id="not-implemented">Placeholder not-Links | To Hold this Space | Hi Hope You're Having a Good Day</div>
                <div className="footer-bottom-right"><i class="fa-solid fa-shield-cat"></i> AUTOCAT</div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Footer;