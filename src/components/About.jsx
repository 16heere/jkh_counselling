import { useState } from "react";
import "./About.css";

const tabs = [
    { id: "who", label: "Who I Am" },
    { id: "approach", label: "My Approach" },
    { id: "help", label: "What I Help With" },
    { id: "quals", label: "Qualifications" },
];

const helpAreas = [
    "Anxiety, stress & overwhelm",
    "Low mood, sadness or depression",
    "Self-esteem & confidence",
    "Relationship & family difficulties",
    "Cultural identity & belonging",
    "Grief, loss & life transitions",
    "Work, education & financial pressures",
    "Feeling stuck or lost",
    "Anger, guilt, shame & overthinking",
    "Personal growth & self-awareness",
    "Trauma & difficult past experiences",
    "Intergenerational & cultural pressures",
];

const quals = [
    { title: "Level 2 Certificate in Counselling Skills", abbr: "CSK-L2" },
    { title: "Level 3 Certificate in Counselling Studies", abbr: "CST-L3" },
    {
        title: "Level 4 Diploma in Therapeutic Counselling",
        abbr: "TC-L4 · BACP Approved",
    },
    {
        title: "Level 5 Certificate — Working Therapeutically with Children & Young People in Schools",
        abbr: "",
    },
    {
        title: "Counselling & Play Therapy for Children & Young People",
        abbr: "CPD",
    },
    { title: "Introduction to Cognitive Behavioural Therapy", abbr: "CPD" },
    { title: "Dialectical Behaviour Therapy", abbr: "CPD" },
    { title: "Introduction to Couples Counselling", abbr: "" },
    { title: "Safeguarding for Children — Level 1", abbr: "" },
    { title: "Safeguarding for Adults — Level 1", abbr: "" },
];
const experience = [
    "Person-Centred, CBT & DBT approaches",
    "Working with adults and children",
    "Mental Health Charity sector",
    "Face to face, Online, and telephone sessions",
    "Clients from diverse cultural backgrounds",
];

export default function About() {
    const [active, setActive] = useState("who");

    return (
        <section id="about" className="about-section">
            <div className="about-inner">
                <div className="about-header">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Hi, I'm Jessi</h2>
                    <div className="divider" />
                </div>

                <div className="about-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${active === tab.id ? "active" : ""}`}
                            onClick={() => setActive(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="tab-content">
                    {active === "who" && (
                        <div className="tab-panel fade-in">
                            <blockquote className="tab-quote">
                                <p>
                                    "There is no greater agony than bearing an
                                    untold story inside you."
                                </p>
                                <cite>
                                    — Maya Angelou,{" "}
                                    <em>I Know Why the Caged Bird Sings</em>
                                </cite>
                            </blockquote>
                            <div className="two-col">
                                <div>
                                    <p>
                                        I am a qualified person-centred
                                        counsellor and a member of the BACP. My
                                        sessions are client-led — a space for
                                        you to bring whatever you choose, at
                                        whatever pace feels right.
                                    </p>
                                    <br />
                                    <p>
                                        I believe counselling should offer a
                                        space where you feel truly listened to,
                                        accepted, and safe to speak openly
                                        without judgement. I welcome clients
                                        from all walks of life, having supported
                                        people from diverse socio-economic
                                        backgrounds and cultures.
                                    </p>
                                    <br />
                                    <p>
                                        I recognise that family dynamics,
                                        identity, expectations, culture, and
                                        life circumstances can deeply shape how
                                        we experience ourselves and the world.
                                        These are not details — they are central
                                        to who you are.
                                    </p>
                                </div>
                                <div className="who-aside">
                                    <div className="commitment-card">
                                        <h4>My Commitment to You</h4>
                                        <p>
                                            To ensure I continue to offer safe
                                            and effective support, I am
                                            committed to regular supervision,
                                            reflective practice, and Continuing
                                            Professional Development. This keeps
                                            my practice informed, ethical, and
                                            genuinely supportive.
                                        </p>
                                    </div>
                                    <div className="bacp-note">
                                        <span className="bacp-icon">✦</span>
                                        <span>
                                            Registered member of the British
                                            Association for Counselling and
                                            Psychotherapy
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {active === "approach" && (
                        <div className="tab-panel fade-in">
                            <blockquote className="tab-quote">
                                <p>
                                    "The good life is a process, not a state of
                                    being. It is a direction, not a
                                    destination."
                                </p>
                                <cite>
                                    — Carl Rogers, <em>On Becoming a Person</em>
                                </cite>
                            </blockquote>
                            <div className="approach-grid">
                                <div className="approach-card">
                                    <div className="approach-num">01</div>
                                    <h4>Person-Centred Foundation</h4>
                                    <p>
                                        My work is rooted in person-centred
                                        therapy — creating a warm, empathetic,
                                        non-judgemental space where you feel
                                        heard, accepted, and understood. You are
                                        the expert on your own life. It is not
                                        for me to tell you what to do, but to
                                        walk alongside you as you gain clarity.
                                    </p>
                                </div>
                                <div className="approach-card">
                                    <div className="approach-num">02</div>
                                    <h4>Integrative Working</h4>
                                    <p>
                                        While my foundation is person-centred, I
                                        also work integratively — drawing on
                                        different therapeutic approaches
                                        depending on your individual needs,
                                        goals, and circumstances. This makes our
                                        work flexible, collaborative, and truly
                                        tailored to you.
                                    </p>
                                </div>
                                <div className="approach-card">
                                    <div className="approach-num">03</div>
                                    <h4>Empowerment at the Core</h4>
                                    <p>
                                        I aim to create a therapeutic
                                        relationship where you feel valued,
                                        respected, and empowered. By working
                                        through challenges together, you will
                                        build lasting self-belief and
                                        confidence, helping you to create inner
                                        peace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {active === "help" && (
                        <div className="tab-panel fade-in">
                            <p className="help-intro">
                                Counselling can support you through a wide range
                                of emotional, personal, and life challenges. You
                                don't need to have it all figured out before you
                                begin — sometimes you simply know that something
                                doesn't feel right.
                            </p>
                            <div className="help-grid">
                                {helpAreas.map((area, i) => (
                                    <div key={i} className="help-item">
                                        <span className="help-dot" />
                                        <span>{area}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="help-footer">
                                Together, we can explore what's going on for you
                                at your own pace and work towards greater
                                clarity, healing, and emotional wellbeing.
                            </p>
                        </div>
                    )}

                    {active === "quals" && (
                        <div className="tab-panel fade-in">
                            <div className="quals-two-col">
                                <div>
                                    <h4 className="quals-subheading">
                                        Qualifications
                                    </h4>
                                    <div className="quals-list">
                                        {quals.map((q, i) => (
                                            <div key={i} className="qual-item">
                                                <div className="qual-title">
                                                    {q.title}
                                                </div>
                                                {q.abbr && (
                                                    <div className="qual-abbr">
                                                        {q.abbr}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="quals-subheading">
                                        Experience
                                    </h4>
                                    <div className="quals-list">
                                        {experience.map((e, i) => (
                                            <div key={i} className="qual-item">
                                                <div className="qual-title">
                                                    {e}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
