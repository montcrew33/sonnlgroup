/* Sonn Law Group Website Kit — content sections */
const { useState: useStateS, useRef: useRefS } = React;

/* ---------- PRACTICE AREAS ---------- */
function InsightIntro() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-trust-note">Confidential consultations · No fees unless we recover · Representing investors nationwide since 1994</p>
        <div className="section-head reveal" style={{ marginBottom: 40 }}>
          <h2 className="h-sec">Practice Areas</h2>
          <p className="lead">Three focused disciplines. One mission: recovering what investors have lost to fraud, misconduct, and institutional wrongdoing.</p>
        </div>
        <div className="pa-img-grid reveal">
          {/* Big left card — Investment Loss Recovery */}
          <a className="pa-img-card pa-img-big" href="contact.html" style={{backgroundImage:"url('https://i.imgur.com/k61I445.jpg')"}}>
            <div className="pa-img-overlay"></div>
            <div className="pa-img-body">
              <h3 className="pa-img-hero">Investment Loss Recovery</h3>
              <span className="pa-img-link">
                Get a Free Case Review
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="13" height="13"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </span>
            </div>
          </a>
          {/* Right stack */}
          <div className="pa-img-stack">
            <a className="pa-img-card" href="contact.html" style={{backgroundImage:"url('https://i.imgur.com/iGVo9uY.jpg')"}}>
              <div className="pa-img-overlay"></div>
              <div className="pa-img-body">
                <h3 className="pa-img-hero" style={{fontSize:'1.15rem'}}>Securities Fraud &amp; FINRA Arbitration</h3>
                <span className="pa-img-link">
                  Get a Free Case Review
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="13" height="13"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </span>
              </div>
            </a>
            <a className="pa-img-card" href="contact.html" style={{backgroundImage:"url('https://i.imgur.com/r1JuJwt.jpg')"}}>
              <div className="pa-img-overlay"></div>
              <div className="pa-img-body">
                <h3 className="pa-img-hero" style={{fontSize:'1.15rem'}}>Class Actions &amp; Whistleblower</h3>
                <span className="pa-img-link">
                  Get a Free Case Review
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="13" height="13"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- APPROACH ---------- */
function Approach() {
  const feats = [
    { i: "scale", t: "Trial-Tested Litigators" },
    { i: "search", t: "Expertise Informed by Real-World Insight" },
    { i: "handshake", t: "Contingency Fees — You Pay Nothing Up Front" },
    { i: "shield-check", t: "Trust as the Foundation of Every Case" },
  ];
  return (
    <section className="section section-grey" style={{
      backgroundImage:"url('https://i.imgur.com/XTYhrYJ.jpg')",
      backgroundSize:"cover",backgroundPosition:"center",position:"relative"
    }}>
      <div style={{position:"absolute",inset:0,background:"rgba(238,243,247,0.91)"}}></div>
      <div className="container" style={{position:"relative"}}>
        <div className="approach-grid">
          <div className="reveal">
            <h2 className="h-sec">Our Approach<br />To Investor Recovery</h2>
            <p className="lead" style={{ margin: "20px 0 28px" }}>We combine analytical rigor, courtroom experience, and genuine advocacy to navigate complexity and deliver enduring outcomes for the people we represent.</p>
            <Button>Discover More</Button>
          </div>
          <div className="feat-list reveal">
            {feats.map((f) => (
              <div className="feat-row" key={f.t}>
                <span className="feat-chip"><Icon name={f.i} /></span>
                <span className="t">{f.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="logos reveal" style={{ marginTop: 64 }}>
          <span>BankWatch</span><span>FINRA</span><span>Bloomberg Law</span><span>Reuters</span><span>The WSJ</span><span>Law360</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- NATIONWIDE INVESTOR ADVOCACY ---------- */
function Cases() {
  const [visible, setVisible] = useStateS(false);
  const ref = useRefS(null);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const bars = [
    { yr: "2020", h: 38 }, { yr: "2021", h: 52 }, { yr: "2022", h: 64 },
    { yr: "2023", h: 78 }, { yr: "2024", h: 88 }, { yr: "2025", h: 100, hi: true },
  ];
  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="cases-head reveal">
          <div>
            <h2 className="h-sec">Nationwide Investor<br /><span className="accent">Advocacy</span></h2>
          </div>
        
        </div>
        <div className="nia-grid reveal">
          <div className="nia-photo">
            <img src="https://i.imgur.com/73YooQU.jpg" alt="Sonn Law Group attorney" />
            <div className="nia-photo-overlay"></div>
            <div className="nia-float">
              <div className="nia-float-label">Our Mission</div>
              <p className="nia-float-text">To restore balance in the financial sector — holding Wall Street accountable for decades.</p>
            </div>
          </div>
          <div className="nia-stack">
            <div className="nia-tile nia-tile-light">
              <div className="nia-tile-head">Our Focus</div>
              <p className="nia-tile-body">Sonn Law Group represents investors nationwide in disputes involving financial fraud, broker misconduct, unsuitable investments, and securities-related losses. Our work is focused on helping clients understand their rights and pursue recovery through strategic legal action.</p>
              <p className="nia-tile-body" style={{ marginTop: 12 }}>We handle FINRA arbitration, federal and state litigation, and class actions — protecting our clients' futures and helping them move forward with clarity and confidence.</p>
            </div>
            <div className="nia-tile nia-tile-dark">
              <div className="nia-tile-head" style={{ color: '#fff' }}>Why Clients Choose Us</div>
              <div className="nia-trust-items" style={{flexDirection:'row',gap:0}}>
                <div className="nia-trust-item" style={{flex:1,borderRight:'1px solid rgba(255,255,255,.1)',paddingRight:24}}>
                  <div className="nia-trust-num">40+</div>
                  <div className="nia-trust-cap">Years Combined</div>
                </div>
                <div className="nia-trust-item" style={{flex:1,paddingLeft:24}}>
                  <div className="nia-google-row">
                    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    <div className="nia-google-score">4.9</div>
                    <div className="nia-stars">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} viewBox="0 0 20 20" width="14" height="14" fill={s <= 4 ? "#FBBC05" : "url(#half)"}><defs><linearGradient id="half" x1="0" x2="1" y1="0" y2="0"><stop offset="90%" stopColor="#FBBC05"/><stop offset="90%" stopColor="rgba(255,255,255,.25)"/></linearGradient></defs><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUSTED BAND ---------- */
function Trusted() {
  const cards = [
    { i: "award", t: "Decades of Courtroom Experience" },
    { i: "handshake", t: "True Alignment Through Contingency Fees" },
    { i: "message-circle", t: "Responsive, Transparent, and Discreet" },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="trusted reveal">
          <div>
            <h2 className="h-sec" style={{ marginTop: 0 }}>Trusted by Investors<br />Nationwide</h2>
            <p className="lead">We bring alignment, agility, and real courtroom experience to every matter — ensuring your recovery is built, not just promised.</p>
            <Button variant="ondark" icon="arrow-right">Get In Touch</Button>
          </div>
          <div className="trust-cards">
            {cards.map((c) => (
              <div className="trust-card" key={c.t}>
                <span className="chip"><Icon name={c.i} /></span>
                <span className="t">{c.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- LEADERSHIP ---------- */
function Leadership() {
  const team = [
    { id: "ld1", name: "Jeffrey R. Sonn, Esq.", role: "Founder of Sonn Law Group", src: "https://i.imgur.com/POqP23a.jpg" },
    { id: "ld2", name: "Adolfo J. Anzola", role: "Securities Fraud & FINRA Arbitration Attorney", src: "https://i.imgur.com/TmKq6Iz.jpg" },
    { id: "ld3", name: "Brian B. Pastor, Esq.", role: "Commercial & Securities Litigation Attorney", src: "https://i.imgur.com/HonuETU.jpg" },
  ];
  return (
    <section className="section section-grey">
      <div className="container">
        <div className="team-head reveal">
          <h2 className="h-sec">Our Leadership Team</h2>
          <div className="ctrls" style={{ display: "flex", gap: 10 }}>
            <button className="iconbtn"><Icon name="arrow-left" /></button>
            <button className="iconbtn fill"><Icon name="arrow-right" /></button>
          </div>
        </div>
        <div className="team-grid reveal">
          {team.map((m) => (
            <div className="member" key={m.id}>
              <img src={m.src} alt={m.name} style={{width:'100%',height:280,objectFit:'cover',objectPosition:'top',borderRadius:'var(--radius-lg)',display:'block'}} />
              <div className="member-row">
                <div>
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                </div>
                <span className="li-btn">in</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSIGHTS ---------- */
function Insights({ onOpen }) {
  const posts = [
    { id: "ins1", t: "SEC Charges Brokerage Over Unsuitable Bond Sales to Retirees", p: "What affected investors should know about preserving claims and recovering losses.", img: "https://i.imgur.com/PjaLctb.jpg" },
    { id: "ins2", t: "Red Flags: How to Spot an Unsuitable Investment Recommendation", p: "A plain-English guide to recognizing advisor misconduct before it costs you.", img: "https://i.imgur.com/9p9Ha76.jpg" },
    { id: "ins3", t: "FINRA Arbitration vs. Court: Which Path Fits Your Claim?", p: "Understanding the venues where investor-recovery cases are decided.", img: "https://i.imgur.com/zFWjjUg.jpg" },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="ins-head reveal">
          <h2 className="h-sec">Investor Alerts &amp; <span className="accent">Insights</span></h2>
          <Button variant="ghost" icon="arrow-right" href="blog.html">View All</Button>
        </div>
        <div className="ins-grid reveal">
          {posts.map((p) => (
            <article className="ins-card" key={p.id} onClick={onOpen}>
              <img src={p.img} alt={p.t} style={{width:'100%',height:190,objectFit:'cover',borderRadius:'var(--radius-lg)',display:'block',marginBottom:14}} />
              <h3>{p.t}</h3>
              <p>{p.p}</p>
              <div className="ins-meta">8 min read<span className="dot"></span>08 Oct 2025</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq({ onContact }) {
  const qs = [
    { q: "What types of investment losses do you handle?", a: "We represent investors in cases involving securities fraud, unsuitable recommendations, breach of fiduciary duty, Ponzi schemes, churning, and misrepresentation by brokers, advisors, and financial institutions." },
    { q: "How does the case-review process work?", a: "It starts with a free, confidential conversation. We evaluate your account statements and the circumstances of your losses, then advise whether you may have a viable claim — at no cost to you." },
    { q: "What does it cost to hire Sonn Law Group?", a: "We work on a contingency-fee basis for most matters. You pay nothing up front, and we only get paid if we recover money for you." },
    { q: "How long does a typical case take?", a: "FINRA arbitrations often resolve within 12–18 months; class actions can take longer. We give you a realistic timeline early and keep you informed throughout." },
    { q: "Do you represent investors nationwide?", a: "Yes. We handle matters across all 50 states in federal court, FINRA arbitration, and state proceedings." },
  ];
  const [open, setOpen] = useStateS(0);
  return (
    <section className="section section-grey">
      <div className="container">
        <div className="faq-grid">
          <div className="reveal">
            <h2 className="h-sec" style={{ margin: "0 0 18px" }}>Frequently Asked Questions</h2>
            <p className="lead" style={{ marginBottom: 24 }}>Quick answers about our services, process, and fees.</p>
            <Button onClick={onContact}>Ask a Question</Button>
          </div>
          <div className="faq-list reveal">
            {qs.map((item, i) => (
              <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  {item.q}<span className="pm"><Icon name="plus" /></span>
                </button>
                <div className="faq-a"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { InsightIntro, Approach, Cases, Trusted, Leadership, Insights, Faq });
