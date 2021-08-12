import Card from "./components/Card";
function App() {
  return (
    <div className="App p-3">
      <header className="App-header">
        <div>
          <p className="font-sans  text-blue-002 font-extrabold text-2xl">
            Heya!
          </p>
          <span className="font-sans text-medium-01 ">
            Contacts. Made easy.
          </span>
        </div>
      </header>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
