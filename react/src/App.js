import React from "react";
import { Footer, Header, NotFound, Hooks } from "./components";
import { Burger, Orders } from "./containers";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main">
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
            <Route path="/orders" element={<Orders />}>
              <Route
                path="go-facebook"
                element={<Dummy data={{ a: 1, b: 2 }} />}
              />
              <Route
                path="go-inst"
                element={<Dummy data={{ abbbDDD: 12, bDDD: 255 }} />}
              />

              <Route
                path="go-tel"
                element={<Dummy data={{ abbb: 12, b: 255 }} />}
              />
              <Route
                path="*"
                element={<div>Not found just for Orders</div>}
              />
            </Route>
            <Route path="hooks" element={<Hooks />} />{" "}
            {/* ROUTE FOR HOOKS PRACTICE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
