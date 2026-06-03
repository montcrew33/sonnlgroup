/* Sonn Law Group Website Kit — content sections */
const { useState: useStateS, useRef: useRefS } = React;

/* ---------- INSIGHT INTRO (every case begins with insight) ---------- */
function InsightIntro() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-sec">Every Case Begins<br /><span className="accent">With Insight</span></h2>
          <p className="lead">Our attorneys bring decades of securities-litigation experience, a nationwide footprint, and a shared commitment to making harmed investors whole.</p>
        </div>
        <div className="insight-grid reveal">
          <div className="photo-card">
            <img src="https://i.imgur.com/dBqPzg7.jpg"
              alt="Attorneys in conference room"
              style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',position:'absolute',inset:0,borderRadius:'var(--radius-xl)'}} />
            <div className="float-stat">
              <div className="ttl">Recovered For Clients</div>
              <div className="nums">
                <div><div className="num">$340M</div><div className="sub">FINRA arbitrations</div></div>
                <div><div className="num">$1.9B</div><div className="sub">Class actions</div></div>
              </div>
            </div>
          </div>
          <div className="stack">
            <div className="tile">
              <h3>Nationwide Reach</h3>
              <p>Licensed and litigating coast to coast. We represent investors in federal court, FINRA arbitration, and state proceedings across all 50 states.</p>
              <div style={{ display: "flex", gap: 40, marginTop: 22 }}>
                <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 30, color: "var(--blue-700)" }}>50</div><div style={{ fontSize: 12, color: "var(--ink-400)" }}>states</div></div>
                <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 30, color: "var(--blue-700)" }}>40+</div><div style={{ fontSize: 12, color: "var(--ink-400)" }}>years combined</div></div>
                <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 30, color: "var(--blue-700)" }}>3,000+</div><div style={{ fontSize: 12, color: "var(--ink-400)" }}>investors</div></div>
              </div>
            </div>
            <div className="tile">
              <h3>A Disciplined Process</h3>
              <p>A steady, research-driven approach focused on maximizing recovery while protecting our clients through every stage of litigation.</p>
              <div className="minibars">
                {[{ y: "'22", h: 42 }, { y: "'23", h: 58 }, { y: "'24", h: 74 }, { y: "'25", h: 95, hi: true }].map((b) => (
                  <div key={b.y} className={`bar${b.hi ? " hi" : ""}`} style={{ height: b.h + "%" }}><span className="yr">{b.y}</span></div>
                ))}
              </div>
            </div>
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

/* ---------- CASES CAROUSEL ---------- */
function Cases() {
  const track = useRefS(null);
  const scroll = (dir) => { if (track.current) track.current.scrollBy({ left: dir * 460, behavior: "smooth" }); };
  return (
    <section className="section">
      <div className="container">
        <div className="cases-head reveal">
          <div>
            <h2 className="h-sec">Representative<br />Results &amp; Recoveries</h2>
          </div>
          <p className="lead" style={{ maxWidth: 320 }}>Our record reflects a disciplined focus on complex financial misconduct — where insight meets accountability.</p>
        </div>
        <div className="cases-track" ref={track}>
          <div className="case-card tint">
            <div className="case-brand"><Icon name="building-2" />Brokerage Fraud</div>
            <div className="ttl">$48M FINRA Award</div>
            <p>Recovered for a group of retirees sold unsuitable, high-commission structured products by a national brokerage firm.</p>
          </div>
          <div className="case-card media">
            <image-slot id="case-photo-1" shape="rect" fit="cover" placeholder="Drop a corporate / skyline image"></image-slot>
          </div>
          <div className="case-card dark">
            <div className="case-brand">Class Action</div>
            <div className="ttl">$210M Settlement</div>
            <p>Lead counsel for a class of shareholders alleging material misrepresentations in public filings ahead of a collapse.</p>
          </div>
          <div className="case-card tint">
            <div className="case-brand"><Icon name="trending-down" />Ponzi Recovery</div>
            <div className="ttl">$76M Returned</div>
            <p>Pursued third-party financial institutions that enabled a multi-year investment fraud scheme.</p>
          </div>
        </div>
        <div className="cases-foot reveal">
          <div className="progress"><i></i></div>
          <div className="ctrls">
            <button className="iconbtn" onClick={() => scroll(-1)}><Icon name="arrow-left" /></button>
            <button className="iconbtn fill" onClick={() => scroll(1)}><Icon name="arrow-right" /></button>
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
    { id: "ld1", name: "Jeffrey R. Sonn, Esq.", role: "Founder of Sonn Law Group", src: "https://i.imgur.com/pvMonzy.jpg" },
    { id: "ld2", name: "Adolfo J. Anzola", role: "Securities Fraud & FINRA Arbitration Attorney", src: "https://i.imgur.com/oiPTlVP.jpg" },
    { id: "ld3", name: "Brian B. Pastor, Esq.", role: "Commercial & Securities Litigation Attorney", src: "https://i.imgur.com/hGf5daa.jpg" },
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
    { id: "ins1", t: "SEC Charges Brokerage Over Unsuitable Bond Sales to Retirees", p: "What affected investors should know about preserving claims and recovering losses." },
    { id: "ins2", t: "Red Flags: How to Spot an Unsuitable Investment Recommendation", p: "A plain-English guide to recognizing advisor misconduct before it costs you." },
    { id: "ins3", t: "FINRA Arbitration vs. Court: Which Path Fits Your Claim?", p: "Understanding the venues where investor-recovery cases are decided." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="ins-head reveal">
          <h2 className="h-sec">Investor Alerts &amp; Insights</h2>
          <Button variant="ghost" icon="arrow-right">View All</Button>
        </div>
        <div className="ins-grid reveal">
          {posts.map((p) => (
            <article className="ins-card" key={p.id} onClick={onOpen}>
              <image-slot id={p.id} shape="rounded" radius="22" fit="cover" placeholder="Drop article image"></image-slot>
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
