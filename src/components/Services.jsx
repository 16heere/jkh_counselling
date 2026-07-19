import "./Services.css";

const services = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a7 7 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a5 5 0 0 0 .268-.148 7 7 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
                <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
            </svg>
        ),
        title: "Online Session",
        price: "£50",
        desc: "I offer online counselling sessions via Online for clients across the UK. This provides a flexible and accessible way to receive support from the comfort of your own home, particularly if you live outside the local area or are unable to attend in person. Sessions are arranged by appointment and should take place in a quiet, private space where you feel safe and comfortable.",
        highlight: "Most popular",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982" />
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
        ),
        title: "Home Visit",
        price: "£60",
        desc: "I understand that attending counselling in person may not always be easy, so I offer home visits across selected areas of Kent - including Northfleet, Ebbsfleet, Swanscombe, Greenhithe, Gravesend, Southfleet, Istead Rise, Meopham, Higham, Shorne, Chalk, and New Barn, as well as surrounding areas across North, West, South, and East Kent.",
        highlight: null,
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
            </svg>
        ),
        title: "Walk & Talk",
        price: "£60",
        desc: "Therapy in motion — walking in nature can ease conversation and reduce the pressure of a traditional face-to-face setting. I offer walk and talk sessions across the local area, including Shorne Country Park, Gravesend Promenade, Gravesend Woodlands Park, Cyclopark, Jeskyns Community Woodland, Bluewater Nature Trail, as well as other local green spaces across Kent.",
        highlight: null,
    },
];

const steps = [
    {
        n: "1",
        title: "Get in touch",
        desc: "Fill in the contact form below or send me a message.",
    },
    {
        n: "2",
        title: "Free phone consultation",
        desc: "A 20-minute call to discuss your needs and see if we're the right fit.",
    },
    {
        n: "3",
        title: "Begin your sessions",
        desc: "Start weekly (or less frequent) therapy at a pace that suits you.",
    },
];

export default function Services({ onNavigate }) {
    return (
        <section id="services" className="services-section">
            <div className="services-inner">
                <div className="services-header">
                    <span className="section-label">How We Work</span>
                    <h2 className="section-title">
                        Services &amp; Availability
                    </h2>
                    <div className="divider" />
                    <p className="services-sub">
                        Sessions are available Monday–Thursday, with evening
                        slots available. All formats offer the same quality of
                        care — choose whatever feels right for you.
                    </p>
                </div>

                <div className="service-cards">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className={`service-card ${s.highlight ? "featured" : ""}`}
                        >
                            {s.highlight && (
                                <div className="feature-tag">{s.highlight}</div>
                            )}
                            <div className="service-icon">{s.icon}</div>
                            <div className="service-title-row">
                                <h3>{s.title}</h3>
                                <span className="service-price">{s.price}</span>
                            </div>
                            <p className="service-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="process-block">
                    <h3 className="process-heading">How It Works</h3>
                    <div className="process-steps">
                        {steps.map((step, i) => (
                            <div key={i} className="process-step">
                                <div className="process-n">{step.n}</div>
                                <div>
                                    <div className="process-title">
                                        {step.title}
                                    </div>
                                    <div className="process-desc">
                                        {step.desc}
                                    </div>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="process-connector" />
                                )}
                            </div>
                        ))}
                    </div>
                    <button
                        className="btn-primary process-cta"
                        onClick={() => onNavigate("contact")}
                    >
                        Start with a Free Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
