import React, { useEffect, useState } from "react";
import { Footer, Header, NotFound, Hooks } from "./components";
import { Burger, Orders } from "./containers";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";

const App = () => {
  const [propData, setPropData] = useState("test");
  const [appTheme, setAppTheme] = useState(
    localStorage.getItem("theme")
  );

  useEffect(() => {
    const themeFromLocalStorage = localStorage.setItem(
      "theme",
      appTheme
    );
    if (themeFromLocalStorage === null) {
      setAppTheme("dark");
    }
  }, [appTheme]);

  const changeSystem = () => {
    // console.log(sessionStorage.setItem("blabla", true));
    if (appTheme === "dark") {
      setAppTheme("white");
    } else {
      setAppTheme("dark");
    }
  };

  return (
    <div className={`App ${appTheme}`}>
      <button onClick={() => setPropData("Ros")}>Change props</button>
      <button onClick={changeSystem}>Switch System</button>
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
            {/* ROUTE FOR HOOKS PRACTICE --- START --- */}
            <Route
              path="heroes"
              element={
                <>
                  <div>Heroes page</div>
                </>
              }
            />
            <Route
              path="heroes/:id"
              element={<div>Hero detail</div>}
            />
            <Route path="hooks" element={<Hooks data={propData} />} />{" "}
            {/* ROUTE FOR HOOKS PRACTICE --- END --- */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
