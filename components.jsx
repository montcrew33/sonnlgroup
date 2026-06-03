/* Sonn Law Group Website Kit — shared + chrome components */
const { useState, useEffect, useRef } = React;

/* ---------- Icon (Lucide) ---------- */
function Icon({ name, ...rest }) {
  return <i data-lucide={name} {...rest}></i>;
}
function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

/* ---------- Button ---------- */
function Button({ variant = "primary", children, icon = "arrow-right", onClick, href }) {
  const cls = `btn btn-${variant}`;
  const inner = <>{children}{icon && <Icon name={icon} />}</>;
  if (href) return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
}

function Eyebrow({ children, dark }) {
  return <span className={`eyebrow${dark ? " on-dark" : ""}`}>{children}</span>;
}

/* ---------- scroll reveal ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- NAV ---------- */
function Nav({ onContact }) {
  const links = ["Home", "About", "Practice Areas", "Insights"];
  const [active, setActive] = useState("Home");
  return (
    <nav className="nav">
      <a className="nav-brand" href="#top">
        <img src="./assets/sonn-law-logo-white.png" alt="Sonn Law Group" />
      </a>
      <div className="nav-pill">
        {links.map((l) => (
          <a key={l} className={active === l ? "active" : ""} onClick={() => setActive(l)}>{l}</a>
        ))}
      </div>
      <div className="nav-cta">
        <Button onClick={onContact}>Get In Touch</Button>
      </div>
    </nav>
  );
}

/* ---------- HERO ---------- */
function Hero({ onContact }) {
  return (
    <header className="hero" id="top">
      <div className="hero-bg" style={{
        backgroundImage: "url('https://i.imgur.com/uVN0MfJ.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        inset: 0
      }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-blue-sheet"></div>
      <div className="hero-grad-bottom"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="h-display">Recovering What's Yours<br /><span className="accent">When Trust Is Broken</span></h1>
          <p className="hero-sub">We pursue the banks, brokerages, and advisors who put their interests ahead of yours — and we don't get paid unless you do.</p>
          <div className="hero-cta">
            <Button onClick={onContact}>Request a Free Case Review</Button>
            <Button variant="ondark" icon={null}>Our Practice Areas</Button>
          </div>
        </div>
        <div className="stat-glass">
          <div className="num">$2.3B+</div>
          <div className="cap">recovered for harmed investors</div>
        </div>
      </div>
      <div className="scroll-hint">Scroll to Explore <Icon name="arrow-down" /></div>
    </header>
  );
}

/* ---------- CTA BAND ---------- */
function CtaBand({ onContact }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band reveal">
          <h2 className="h-sec" style={{ marginTop: 0 }}>Think You May Have a Claim<br />For Your Investment Losses?</h2>
          <Button onClick={onContact}>Request a Free Case Review</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer({ onContact }) {
  const cols = [
    { h: "Firm", items: ["About Us", "Our Team", "Results", "Careers"] },
    { h: "Practice Areas", items: ["Securities Fraud", "Investment Loss", "Fiduciary Duty", "Class Actions"] },
    { h: "Resources", items: ["Investor Alerts", "Insights", "FAQ", "Contact"] },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="./assets/sonn-law-logo-white.png" alt="Sonn Law Group" />
            <p>A nationwide securities-fraud and investment-loss recovery firm. We represent harmed investors against major financial institutions.</p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4>{c.h}</h4>
              <ul>{c.items.map((i) => <li key={i}><a onClick={onContact}>{i}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bot">
          <span>© 2026 Sonn Law Group. Attorney advertising. Prior results do not guarantee a similar outcome.</span>
          <span>Privacy · Terms · Disclaimer</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- CASE REVIEW MODAL ---------- */
function CaseModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  useEffect(() => { if (open) { setSent(false); refreshIcons(); } }, [open]);
  return (
    <div className={`modal-overlay${open ? " show" : ""}`} onClick={onClose}>
      <div className="modal modal-wrap" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><Icon name="x" /></button>
        {sent ? (
          <div className="modal-success">
            <div className="ok"><Icon name="check" /></div>
            <h3>Request Received</h3>
            <p className="sub">A member of our team will reach out within one business day. All inquiries are confidential.</p>
            <Button onClick={onClose} icon={null}>Close</Button>
          </div>
        ) : (
          <>
            <h3>Request a Free Case Review</h3>
            <p className="sub">Confidential and no obligation. Tell us what happened and we'll evaluate your potential claim.</p>
            <div className="field"><label>Full name</label><input placeholder="Jane Investor" /></div>
            <div className="field"><label>Email</label><input placeholder="jane@email.com" /></div>
            <div className="field"><label>What happened?</label><textarea rows="3" placeholder="Briefly describe your investment losses…"></textarea></div>
            <Button onClick={() => setSent(true)}>Submit Confidentially</Button>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Icon, refreshIcons, Button, Eyebrow, useReveal, Nav, Hero, CtaBand, Footer, CaseModal });
