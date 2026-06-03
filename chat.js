/* Sonn Law Group — AI Chat Widget */
(function() {

const css = `
  #slg-chat-btn {
    position: fixed; bottom: 28px; right: 28px; z-index: 9998;
    width: 58px; height: 58px; border-radius: 50%;
    background: #1e3f6e; border: 0; cursor: pointer;
    box-shadow: 0 8px 32px rgba(21,42,71,.32);
    display: flex; align-items: center; justify-content: center;
    transition: all .25s cubic-bezier(.22,1,.36,1);
    color: #fff;
  }
  #slg-chat-btn:hover { transform: scale(1.08); background: #24548f; }
  #slg-chat-btn svg { width: 26px; height: 26px; transition: opacity .2s, transform .2s; }
  #slg-chat-btn .ico-open { position: absolute; }
  #slg-chat-btn .ico-close { position: absolute; opacity: 0; transform: rotate(-90deg); }
  #slg-chat-btn.open .ico-open { opacity: 0; transform: rotate(90deg); }
  #slg-chat-btn.open .ico-close { opacity: 1; transform: none; }
  #slg-badge { position: absolute; top: -4px; right: -4px; width: 18px; height: 18px; border-radius: 50%; background: #e74c3c; color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; font-family: system-ui; border: 2px solid #fff; }

  #slg-chat-panel {
    position: fixed; bottom: 98px; right: 28px; z-index: 9999;
    width: 380px; height: 560px;
    background: #fff; border-radius: 24px;
    box-shadow: 0 24px 80px rgba(21,42,71,.22), 0 0 0 1px rgba(0,0,0,.06);
    display: flex; flex-direction: column; overflow: hidden;
    transform: translateY(20px) scale(.95); opacity: 0; pointer-events: none;
    transition: all .3s cubic-bezier(.22,1,.36,1);
    font-family: 'Hanken Grotesk', system-ui, sans-serif;
  }
  #slg-chat-panel.open { transform: none; opacity: 1; pointer-events: auto; }

  .slg-header {
    background: linear-gradient(135deg, #152a47, #1e3f6e);
    padding: 18px 20px 16px; flex: 0 0 auto;
    display: flex; align-items: center; gap: 12px;
  }
  .slg-avatar {
    width: 42px; height: 42px; border-radius: 50%;
    background: rgba(255,255,255,.15); flex: 0 0 auto;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; border: 2px solid rgba(255,255,255,.25);
    color: #fff;
    overflow: hidden;
  }
  .slg-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .slg-hname { font-size: 15px; font-weight: 600; color: #fff; }
  .slg-hsub { font-size: 12px; color: rgba(255,255,255,.7); display: flex; align-items: center; gap: 5px; margin-top: 2px; }
  .slg-dot { width: 6px; height: 6px; border-radius: 50%; background: #2ecc71; }

  .slg-msgs { flex: 1; overflow-y: auto; padding: 18px 16px; display: flex; flex-direction: column; gap: 12px; scroll-behavior: smooth; }
  .slg-msgs::-webkit-scrollbar { width: 4px; }
  .slg-msgs::-webkit-scrollbar-thumb { background: #d8e3ef; border-radius: 2px; }

  .slg-msg { display: flex; gap: 8px; align-items: flex-end; }
  .slg-msg.bot { align-self: flex-start; max-width: 88%; }
  .slg-msg.user { align-self: flex-end; flex-direction: row-reverse; max-width: 80%; }
  .slg-msg-av { width: 28px; height: 28px; border-radius: 50%; background: #e6eef8; flex: 0 0 auto; display: flex; align-items: center; justify-content: center; font-size: 13px; overflow: hidden; }
  .slg-msg-av img { width: 100%; height: 100%; object-fit: cover; }
  .slg-bubble { padding: 11px 14px; border-radius: 18px; font-size: 14px; line-height: 1.5; }
  .slg-msg.bot .slg-bubble { background: #f3f6fc; color: #14222f; border-bottom-left-radius: 4px; }
  .slg-msg.user .slg-bubble { background: #1e3f6e; color: #fff; border-bottom-right-radius: 4px; }

  .slg-typing { display: flex; gap: 4px; align-items: center; padding: 12px 14px; background: #f3f6fc; border-radius: 18px; border-bottom-left-radius: 4px; }
  .slg-typing span { width: 6px; height: 6px; border-radius: 50%; background: #8593a1; animation: slg-bounce .9s infinite; }
  .slg-typing span:nth-child(2) { animation-delay: .15s; }
  .slg-typing span:nth-child(3) { animation-delay: .3s; }
  @keyframes slg-bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }

  .slg-quick { padding: 0 16px 12px; display: flex; flex-wrap: wrap; gap: 7px; flex: 0 0 auto; }
  .slg-qbtn {
    background: #fff; border: 1.5px solid #d8e3ef; border-radius: 999px;
    padding: 7px 14px; font-size: 12.5px; font-weight: 500; color: #1e3f6e;
    cursor: pointer; font-family: inherit; transition: all .18s;
    white-space: nowrap;
  }
  .slg-qbtn:hover { background: #e6eef8; border-color: #1e3f6e; }

  .slg-input-row {
    border-top: 1px solid #e6eef8; padding: 12px 16px;
    display: flex; gap: 10px; align-items: center; flex: 0 0 auto;
  }
  .slg-input {
    flex: 1; border: 1.5px solid #d8e3ef; border-radius: 999px;
    padding: 9px 16px; font-size: 14px; font-family: inherit; color: #14222f;
    background: #f9fbfe; outline: none; transition: border .2s;
  }
  .slg-input:focus { border-color: #1e3f6e; background: #fff; }
  .slg-send {
    width: 38px; height: 38px; border-radius: 50%; background: #1e3f6e;
    border: 0; cursor: pointer; display: flex; align-items: center; justify-content: center;
    color: #fff; flex: 0 0 auto; transition: background .2s;
  }
  .slg-send:hover { background: #24548f; }
  .slg-send svg { width: 16px; height: 16px; }

  .slg-cta-card {
    margin: 4px 0; background: linear-gradient(135deg, #152a47, #1e3f6e);
    border-radius: 16px; padding: 16px; color: #fff;
  }
  .slg-cta-card p { font-size: 13px; color: rgba(255,255,255,.82); margin-bottom: 10px; line-height: 1.5; }
  .slg-cta-card a {
    display: inline-flex; align-items: center; gap: 7px;
    background: #fff; color: #1e3f6e; border-radius: 999px;
    padding: 8px 18px; font-size: 13px; font-weight: 600;
    text-decoration: none; transition: background .2s;
  }
  .slg-cta-card a:hover { background: #f3f6fc; }
`;

const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

// Build HTML
const btnEl = document.createElement('button');
btnEl.id = 'slg-chat-btn';
btnEl.setAttribute('aria-label', 'Chat with us');
btnEl.innerHTML = `
  <span id="slg-badge">1</span>
  <svg class="ico-open" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>
  <svg class="ico-close" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`;

const panelEl = document.createElement('div');
panelEl.id = 'slg-chat-panel';
panelEl.innerHTML = `
  <div class="slg-header">
    <div class="slg-avatar"><img src="https://i.imgur.com/pvMonzy.jpg" alt="Jeffrey Sonn" onerror="this.style.display='none';this.parentElement.innerHTML='⚖️'"></div>
    <div>
      <div class="slg-hname">Sonn Law AI</div>
      <div class="slg-hsub"><span class="slg-dot"></span> Online · Typically replies in minutes</div>
    </div>
  </div>
  <div class="slg-msgs" id="slg-msgs"></div>
  <div class="slg-quick" id="slg-quick"></div>
  <div class="slg-input-row">
    <input class="slg-input" id="slg-input" type="text" placeholder="Ask about your case…" autocomplete="off" />
    <button class="slg-send" id="slg-send">
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>
    </button>
  </div>`;

document.body.appendChild(btnEl);
document.body.appendChild(panelEl);

// State
let open = false;
const msgs = document.getElementById('slg-msgs');
const quickEl = document.getElementById('slg-quick');
const inputEl = document.getElementById('slg-input');

const flows = {
  'I lost money with a broker': [
    "I'm sorry to hear that. Broker misconduct and unsuitable investment recommendations are unfortunately common — and recoverable.",
    "Sonn Law Group handles FINRA arbitration claims against brokers and brokerage firms nationwide. Many cases settle before a hearing.",
    { cta: true, text: "Would you like to speak with an attorney? A free case review takes about 15 minutes and there's no obligation.", link: "contact.html", linkText: "Request Free Case Review" }
  ],
  'I suspect fraud or a Ponzi scheme': [
    "Ponzi scheme victims often don't know they have options beyond the criminal case. You may be able to recover directly from the promoters — or from third parties like banks and brokers who enabled the scheme.",
    { cta: true, text: "Our attorneys have recovered millions for Ponzi scheme victims. Want to discuss your situation?", link: "contact.html", linkText: "Talk to an Attorney" }
  ],
  'What is FINRA arbitration?': [
    "FINRA arbitration is the primary forum for resolving disputes between investors and their brokers or brokerage firms. It's typically faster and less expensive than federal court litigation.",
    "Most investor claims against brokers must go through FINRA arbitration — it's written into your brokerage agreement. Cases typically resolve within 12–18 months.",
    { cta: true, text: "Want to know if FINRA arbitration is right for your situation?", link: "contact.html", linkText: "Free Case Evaluation" }
  ],
  'How much does it cost?': [
    "Sonn Law Group works on a contingency fee basis for most investor recovery matters.",
    "That means you pay nothing up front. Our fee comes only from the recovery we obtain for you — if we don't recover, you don't pay.",
    { cta: true, text: "Ready to find out if you have a claim?", link: "contact.html", linkText: "Request Free Review" }
  ],
  'I want to report misconduct': [
    "Whistleblowers play a critical role in protecting investors. The SEC and CFTC both have programs that can reward you for reporting fraud — and provide legal protections.",
    { cta: true, text: "Our attorneys represent whistleblowers confidentially. Want to discuss your situation?", link: "contact.html", linkText: "Speak Confidentially" }
  ]
};

const quickReplies = Object.keys(flows);

function addMsg(text, role, delay = 0) {
  return new Promise(resolve => setTimeout(() => {
    const wrap = document.createElement('div');
    wrap.className = `slg-msg ${role}`;
    if (role === 'bot') {
      wrap.innerHTML = `<div class="slg-msg-av"><img src="https://i.imgur.com/pvMonzy.jpg" onerror="this.style.display='none';this.parentElement.textContent='⚖️'"></div><div class="slg-bubble">${text}</div>`;
    } else {
      wrap.innerHTML = `<div class="slg-bubble">${text}</div>`;
    }
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
    resolve();
  }, delay));
}

function addCta(text, link, linkText) {
  const wrap = document.createElement('div');
  wrap.className = 'slg-msg bot';
  wrap.innerHTML = `<div class="slg-msg-av"><img src="https://i.imgur.com/pvMonzy.jpg" onerror="this.style.display='none';this.parentElement.textContent='⚖️'"></div>
  <div class="slg-cta-card"><p>${text}</p><a href="${link}">📋 ${linkText}</a></div>`;
  msgs.appendChild(wrap);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const t = document.createElement('div');
  t.className = 'slg-msg bot'; t.id = 'slg-typing-ind';
  t.innerHTML = `<div class="slg-msg-av">⚖️</div><div class="slg-typing"><span></span><span></span><span></span></div>`;
  msgs.appendChild(t); msgs.scrollTop = msgs.scrollHeight;
  return t;
}

function removeTyping() {
  const t = document.getElementById('slg-typing-ind');
  if (t) t.remove();
}

function setQuickReplies(replies) {
  quickEl.innerHTML = '';
  replies.forEach(r => {
    const btn = document.createElement('button');
    btn.className = 'slg-qbtn'; btn.textContent = r;
    btn.onclick = () => handleQuick(r);
    quickEl.appendChild(btn);
  });
}

async function handleQuick(key) {
  quickEl.innerHTML = '';
  await addMsg(key, 'user');
  const flow = flows[key];
  if (!flow) return;
  const typing = showTyping();
  for (let i = 0; i < flow.length; i++) {
    await new Promise(r => setTimeout(r, 900 + i * 400));
    removeTyping();
    const item = flow[i];
    if (item.cta) {
      addCta(item.text, item.link, item.linkText);
    } else {
      await addMsg(item, 'bot');
    }
    if (i < flow.length - 1) showTyping();
  }
  setTimeout(() => setQuickReplies(['Tell me more', 'How much does it cost?', 'Talk to an attorney →']), 600);
}

async function handleSend() {
  const val = inputEl.value.trim(); if (!val) return;
  inputEl.value = '';
  await addMsg(val, 'user');
  quickEl.innerHTML = '';
  showTyping();
  await new Promise(r => setTimeout(r, 1200));
  removeTyping();
  await addMsg("Thanks for reaching out. For specific legal questions, one of our attorneys can give you a proper answer in a free consultation.", 'bot');
  addCta("Ready to speak with a Sonn Law attorney? It's free, confidential, and takes about 15 minutes.", 'contact.html', 'Schedule Free Consultation');
}

function toggleChat() {
  open = !open;
  btnEl.classList.toggle('open', open);
  panelEl.classList.toggle('open', open);
  const badge = document.getElementById('slg-badge');
  if (badge) badge.remove();
  if (open && msgs.children.length === 0) initChat();
}

async function initChat() {
  showTyping();
  await new Promise(r => setTimeout(r, 800));
  removeTyping();
  await addMsg("👋 Hi! I'm the Sonn Law AI assistant. I can help you understand your options if you've suffered investment losses.", 'bot');
  showTyping();
  await new Promise(r => setTimeout(r, 700));
  removeTyping();
  await addMsg("What brings you here today?", 'bot');
  setQuickReplies(quickReplies.slice(0,4));
}

btnEl.addEventListener('click', toggleChat);
document.getElementById('slg-send').addEventListener('click', handleSend);
inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

})();
