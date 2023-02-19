import "./App.css";
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {
  const isAuth = false;
  return (
    <>
      <div className="App">
        <Navbar title="User App 2" baslik="Bu bir baslik" />
        <hr />
        <User name="Murat Ozkan" department="Fullstack" salary="3000$" />

        {/* <h1 className="container">Merhaba React</h1>
        <h4 style={{ color: "blue", fontSize: 30 }}>Clarusway</h4>
        <p className="paragraf">
          Lorem ipsum dolor sit amet consectetur.
        </p> */}
      </div>
    </>
  );
}

export default App;
