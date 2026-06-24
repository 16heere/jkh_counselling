import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'What is counselling?',
    a: 'Counselling is a collaborative process where you work with a trained therapist to explore your thoughts, emotions, and behaviours. It provides a safe and confidential space to address a wide range of challenges — from mental health concerns to personal growth goals. It\'s not about being told what to do, but about being supported to find your own way forward.',
  },
  {
    q: 'What can I expect in a first session?',
    a: 'Before we begin regular sessions, we start with a free 20-minute phone consultation. This is an informal conversation to discuss what\'s brought you to counselling, your goals, and to see whether we feel like a good fit for each other. There\'s no pressure — it\'s simply a chance to get comfortable.',
  },
  {
    q: 'How does confidentiality work?',
    a: 'Confidentiality is a cornerstone of the therapeutic relationship. Everything you share with me remains private and protected. I am legally and ethically bound to keep your information confidential — the only exceptions are specific situations where there is a serious risk of harm to yourself or others. These limits will always be clearly explained at the start of our work together.',
  },
  {
    q: 'How often do we meet, and for how long?',
    a: 'Sessions are typically 50 minutes and happen weekly, though the frequency can be adjusted to suit your needs and circumstances. There is no set number of sessions — some people find a few sessions helpful, while others benefit from longer-term support. We\'ll review how things are going together.',
  },
  {
    q: 'Do I need to know what I want to work on before I start?',
    a: 'Not at all. You don\'t need to have everything figured out. Sometimes the only thing you know is that something doesn\'t feel right — and that is enough. We can explore what\'s going on together, gently and at your pace.',
  },
  {
    q: 'Are online sessions as effective as in-person?',
    a: 'Yes. Research consistently shows that online therapy can be just as effective as face-to-face sessions for most people. Zoom sessions offer flexibility and privacy, and many clients find it easier to open up from the comfort of their own home.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <div className="faq-header">
          <span className="section-label">FAQ's</span>
          <h2 className="section-title">Common Questions</h2>
          <div className="divider" />
          <p className="faq-sub">
            If you have a question that isn't answered here, please don't hesitate to get in touch.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`} onClick={() => toggle(i)}>
              <div className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
