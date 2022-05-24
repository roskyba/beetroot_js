import React from "react";
import { Footer, Header, NotFound } from "./components";
import { Burger, Orders } from "./containers";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Burger />} />
          <Route
            path="/blabla"
            element={
              <div>
                <h1>Hello from blabla page</h1>
              </div>
            }
          />
          <Route
            path="/faq"
            element={
              <div>
                <h1>Hello from FAQ page</h1>
              </div>
            }
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
