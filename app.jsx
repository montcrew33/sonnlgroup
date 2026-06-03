/* Sonn Law Group Website Kit — app composition */
function App() {
  const [modal, setModal] = React.useState(false);
  const open = () => { window.location.href = 'contact.html'; };
  useReveal();
  React.useEffect(() => { refreshIcons(); });
  return (
    <>
      <main className="page">
        <Nav onContact={open} />
        <Hero onContact={open} />
        <InsightIntro />
        <Approach />
        <Cases />
        <Trusted />
        <Leadership />
        <Insights onOpen={open} />
        <Faq onContact={open} />
        <CtaBand onContact={open} />
      </main>
      <Footer onContact={open} />
      <CaseModal open={modal} onClose={() => setModal(false)} />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
