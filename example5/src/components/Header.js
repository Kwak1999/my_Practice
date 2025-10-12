import React, {useState} from 'react';
import '../styles/Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">MyPage</div>

        {/*    메뉴 버튼(모바일)  */}
            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#service">Service</a>
                <a href="#contact">Contact</a>
            </nav>

        </header>
    );
};

export default Header;