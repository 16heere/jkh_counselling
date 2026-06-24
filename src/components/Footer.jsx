import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="footer-name">JKH Counselling</span>
                    <span className="footer-tagline">
                        Person-centred support for every step of your journey.
                    </span>
                </div>
                <div className="footer-legal">
                    <span>© {year} JKH Counselling</span>
                    <span className="footer-sep">·</span>
                    <span>BACP Member</span>
                    <span className="footer-sep">·</span>
                    <span>Registered in England</span>
                    <span className="footer-sep">·</span>
                    <a
                        href={`/privacy-policy.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}
