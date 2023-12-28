import {useState} from 'react'
import {TypeAnimation} from 'react-type-animation'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="site-container">
                <div className="content">
                    <div>
                        <a href="https://nanodev.tech" target="_blank">
                            <img src={viteLogo} className="logo" alt="Vite logo"/>
                        </a>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo"/>
                        </a>
                    </div>
                    <h1>Nanodev.tech</h1>

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
                </div>
                <footer className="footer">
                    <div>© {new Date().getFullYear()} NanoDev technologies. Made in 🇰🇿 with <span className="heart">❤️</span>.</div>
                </footer>
            </div>
        </>
    )
}

export default App
