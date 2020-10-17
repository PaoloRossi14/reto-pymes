import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import Services from "./components/pages/Services/Services";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./components/pages/Products/Products";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
