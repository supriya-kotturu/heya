import ContactForm from "./components/ContactForm";
function App() {
  return (
    <div className="py-3">
      <div className="mx-auto text-center">
        <p className=" text-blue-002 font-extrabold text-2xl">Heyaa!</p>
        <span className="text-medium-01">Contacts. Made easy.</span>
      </div>
      <ContactForm />
      <div className="main-container"></div>
    </div>
  );
}

export default App;
