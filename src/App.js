import "./App.css";

import Forms from "./components/Forms";

function App() {
  const arrays = ["name", "email", "age"];
  return (
    <>
      <div className="app">
        <form action="">
          <h1>Forms-Validation</h1>
          <Forms placeholder="FirstName" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;