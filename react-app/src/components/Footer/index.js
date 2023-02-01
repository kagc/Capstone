import './Footer.css'
import logo from '../../images/directablesLogoFooter.png'

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
                        <div id="not-implemented" className="footer-cat-column">
                            <span><i class="fa-solid fa-microchip"></i> Circuits</span>
                            <span><i class="fa-solid fa-wrench"></i> Workshop</span>
                            <span><i class="fa-solid fa-scissors"></i> Craft</span>
                            <span><i class="fa-solid fa-utensils"></i> Cooking</span>
                        </div>
                        <div id="not-implemented" className="footer-cat-column">
                        <span><i class="fa-solid fa-house"></i> Living</span>
                        <span><i class="fa-solid fa-bicycle"></i> Outside</span>
                        <span><i class="fa-solid fa-book"></i> Teachers</span>
                        </div>

                    </div>
                </div>
                <div className="footer-link-section">
                    <span className="footer-links-labels">About Us</span>
                    <div id="not-implemented" className="footer-link-box">
                        <span>Not a Link Yet</span>
                        <span>Also not a Link</span>
                        <span>I think cats are neat</span>
                    </div>
                </div>
                <div className="footer-link-section">
                    <span className="footer-links-labels">Resources</span>
                    <div className="footer-link-box">
                        <a target="_blank" href="https://appacademy.io">App Academy</a>
                    </div>
                </div>
                <div className="footer-link-section">
                    <span className="footer-links-labels">Find Us</span>
                    <div className="footer-git-link">
                            <a target="_blank" title="Github" href="https://github.com/kagc">
                        <i class="fa-brands fa-github-alt">

                            </i>
                            </a>

                            <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/kirin-agcaoili-a84a10187/">
                            <i class="fa-brands fa-linkedin-in"></i>
                            </a>
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
                <div>2023 App Academy</div>
                <div id="not-implemented">Placeholder not-Links | To Hold this Space | Hi Hope You're Having a Good Day</div>
                <div className="footer-bottom-right"><i class="fa-solid fa-dragon"></i> AUTOCAT</div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Footer;