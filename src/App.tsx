import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavgiationBar from "./Components/NavigationBar/Navgationbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavgiationBar />
      <Content />
      <Footer/>
    </>
  );
}

export default App;
