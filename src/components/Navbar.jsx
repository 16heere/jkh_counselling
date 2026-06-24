import { useState, useEffect } from 'react';
import './Navbar.css';

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    width="48" height="48" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet">
    <defs>
      <clipPath id="a"><path d="M 4 0 L 375 0 L 375 371 L 4 371 Z" clipRule="nonzero"/></clipPath>
      <clipPath id="b"><path d="M 189.59375 0 C 87.199219 0 4.191406 83.007812 4.191406 185.40625 C 4.191406 287.800781 87.199219 370.808594 189.59375 370.808594 C 291.992188 370.808594 375 287.800781 375 185.40625 C 375 83.007812 291.992188 0 189.59375 0 Z" clipRule="nonzero"/></clipPath>
      <clipPath id="c"><path d="M 90 66 L 248 66 L 248 359 L 90 359 Z" clipRule="nonzero"/></clipPath>
      <clipPath id="d"><path d="M 21 215 L 194 42 L 359 207 L 185 380 Z" clipRule="nonzero"/></clipPath>
    </defs>
    <g clipPath="url(#a)"><g clipPath="url(#b)">
      <path fill="#a4ebf3" d="M 4 0 L 375 0 L 375 371 L 4 371 Z" fillOpacity="1" fillRule="nonzero"/>
    </g></g>
    <g clipPath="url(#c)"><g clipPath="url(#d)">
      <path fill="#25995c" d="M 184.792969 110.09375 C 102.800781 191.347656 97.191406 273.378906 172.539062 356.226562 C 173.484375 357.265625 172.089844 358.769531 170.964844 357.925781 C 141.484375 335.722656 118.636719 311.464844 104.703125 284.449219 C 58.722656 195.285156 132.21875 104.0625 212.042969 67.007812 C 216.023438 65.160156 220.378906 68.339844 219.898438 72.703125 C 210.859375 154.828125 316.804688 248.367188 162.628906 316.089844 C 125.964844 244.765625 128.03125 175.78125 184.792969 110.09375" fillOpacity="1" fillRule="evenodd"/>
    </g></g>
  </svg>
);

const navLinks = ['Home', 'About', 'Services', "FAQ's", 'Contact'];

export default function Navbar({ onNavigate }) {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 100);
      setScrolled(y > 40);
      setLastY(y);
      if (y > lastY) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  const handleNav = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" onClick={() => handleNav('home')}>
        <Logo />
        <div className="brand-text">
          <span>JKH</span>
          <span>Counselling</span>
        </div>
      </a>

      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link} onClick={() => handleNav(link.toLowerCase().replace("'s", ''))}>
            {link}
          </li>
        ))}
      </ul>

      <button className="btn-primary nav-cta" onClick={() => handleNav('contact')}>
        Book a Consultation
      </button>

      <button className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
        <span /><span /><span />
      </button>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <div key={link} className="mobile-link" onClick={() => handleNav(link.toLowerCase().replace("'s", ''))}>
            {link}
          </div>
        ))}
        <button className="btn-primary" onClick={() => handleNav('contact')}>Book a Consultation</button>
      </div>
    </nav>
  );
}
