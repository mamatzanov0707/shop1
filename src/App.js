import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useThemeHook} from "./GlobalComponents/ThemeProvider";
import Header from "./conponents/Header";
import {Router} from "@reach/router";
// Pages
import Home from "./Pages/Home";
import Card from "./Pages/Card";

function App() {
  const [theme] = useThemeHook()

  return (
    <main className={theme ? 'bg-black' : 'bg-light-2'} style={{height:'100vh', overflowY:'auto'}}>
      <Header/>
        <Router>
            <Home path='/'/>
            <Card path='/card'/>
        </Router>
    </main>
  );
}

export default App;
