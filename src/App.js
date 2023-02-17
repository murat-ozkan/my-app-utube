import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {
  const isAuth = false;
  return (
    <>
      <div className="App">
        <Navbar />
        <h1 className="container">Merhaba React</h1>
        <h4 style={{ color: "blue", fontSize: 30 }}>Clarusway</h4>
        <p className="paragraf">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, nihil!
        </p>
        <User />
      </div>
    </>
  );
}

export default App;
