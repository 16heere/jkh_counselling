import './Hero.css';

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-circle hero-circle--1" />
        <div className="hero-circle hero-circle--2" />
        <div className="hero-leaf">
          <LeafMark />
        </div>
      </div>

      <div className="hero-content">
        <span className="section-label">Person-Centred Counselling</span>
        <h1 className="hero-title">
          Empowering Change,<br />
          <em>Embracing Growth</em>
        </h1>
        <p className="hero-sub">
          A warm, confidential space to explore what's on your mind — 
          at your own pace, without judgement.
        </p>
        <div className="hero-actions">
          <button className="btn-primary hero-btn" onClick={() => onNavigate('contact')}>
            Book a Free Consultation
          </button>
          <button className="btn-ghost" onClick={() => onNavigate('about')}>
            Learn More
          </button>
        </div>
        <div className="hero-meta">
          <div className="hero-badge">
            <span className="badge-icon">✦</span>
            <span>BACP Member</span>
          </div>
          <div className="hero-badge">
            <span className="badge-icon">✦</span>
            <span>Level 4 Qualified</span>
          </div>
          <div className="hero-badge">
            <span className="badge-icon">✦</span>
            <span>Online &amp; In-Person</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" onClick={() => onNavigate('about')}>
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

function LeafMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 375" width="100%" height="100%">
      <defs>
        <clipPath id="hc"><path d="M 189.59375 0 C 87.199219 0 4.191406 83.007812 4.191406 185.40625 C 4.191406 287.800781 87.199219 370.808594 189.59375 370.808594 C 291.992188 370.808594 375 287.800781 375 185.40625 C 375 83.007812 291.992188 0 189.59375 0 Z" clipRule="nonzero"/></clipPath>
        <clipPath id="hd"><path d="M 21 215 L 194 42 L 359 207 L 185 380 Z" clipRule="nonzero"/></clipPath>
      </defs>
      <g clipPath="url(#hc)">
        <path fill="#a4ebf3" fillOpacity="0.15" d="M 4 0 L 375 0 L 375 371 L 4 371 Z"/>
      </g>
      <g clipPath="url(#hd)">
        <path fill="#25995c" fillOpacity="0.12" d="M 184.792969 110.09375 C 102.800781 191.347656 97.191406 273.378906 172.539062 356.226562 C 173.484375 357.265625 172.089844 358.769531 170.964844 357.925781 C 141.484375 335.722656 118.636719 311.464844 104.703125 284.449219 C 58.722656 195.285156 132.21875 104.0625 212.042969 67.007812 C 216.023438 65.160156 220.378906 68.339844 219.898438 72.703125 C 210.859375 154.828125 316.804688 248.367188 162.628906 316.089844 C 125.964844 244.765625 128.03125 175.78125 184.792969 110.09375" fillRule="evenodd"/>
      </g>
    </svg>
  );
}
