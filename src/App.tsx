import {TypeAnimation} from 'react-type-animation'
import nanoDevTechLogo from '/nanodevtech.svg'
import {SocialLinks} from "./components";
import './App.css'

function App() {
    return (
        <>
            <div className="site-container">
                <div className="content">
                    <div>
                        <a href="https://nanodev.tech" target="_blank">
                            <img src={nanoDevTechLogo} className="logo" alt="NanoDevTech logo"/>
                        </a>
                    </div>
                    <h1 className={'gradient-text'}>Nanodev.tech</h1>

                    <TypeAnimation
                        sequence={[
                            'We develop solutions for Startups',
                            1000,
                            'We develop solutions for E-commerce',
                            1000,
                            'We develop solutions for Mobile Apps',
                            1000,
                            'We develop solutions for Enterprise Systems',
                            1000,
                            'We develop solutions for Ed-tech',
                            1000,
                        ]}
                        wrapper="span"
                        className="read-the-docs"
                        speed={60}
                        repeat={Infinity}
                    />
                    <br/>
                    <SocialLinks/>
                </div>
                <footer className="footer">
                    <div>© {new Date().getFullYear()} NanoDev technologies. Made in 🇰🇿 with <span className="heart">❤️</span>.</div>
                </footer>
            </div>
        </>
    )
}

export default App
