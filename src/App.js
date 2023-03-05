import "./App.css";
import Navbars from "./component/Nav/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer/Footer";
import Login from "./component/user/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AskQustion from "./component/AskQuastion/AskQustion";
import { ClassNames } from "@emotion/react";
import Answer from "./component/Answer/Answer";
import ListQuastion from "./component/ListQuastion/ListQuastion";
import Signin from "./component/user/Signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbars />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/AskQustion"
            element={
              <>
                <Navbars />
                <AskQustion />
              </>
            }
          />{" "}
          <Route
            path="/Answer"
            element={
              <>
                <Navbars />
                <Answer />
              </>
            }
          />
          <Route
            path="/ListQuastion"
            element={
              <>
                <Navbars />
                <ListQuastion />
              </>
            }
          />
          <Route
            path="/Signin"
            element={
              <>
                <Navbars />
                <Signin />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
