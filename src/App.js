import "./App.css";
import GKQuiz from "./container/GKQuiz";
import Home from "./container/Home";
import Learn from "./container/Learn";
import Practice from "./container/Practice";
import Error from "./container/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animals from "./container/things/Animals";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Practice" element={<Practice />} />
          <Route path="/GKQuiz" element={<GKQuiz />} />
          <Route path="/Animals" element={<Animals />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
