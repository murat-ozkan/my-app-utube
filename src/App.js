import "./App.css";
import User from "./components/User";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  // const isAuth = false;
  return (
    <>
      <div className="App">
        <Navbar title="User App" />
        <hr />
        <User name="Murat Ozkan" department="Fullstack" salary={3000} />
        <User name="Engin Caglar" department="Fullstack" salary={5000} />

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
