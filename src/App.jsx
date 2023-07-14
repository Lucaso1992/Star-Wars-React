import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/homeView.jsx";
import Detail from "./views/detailView.jsx";
import Error from "./views/errorView.jsx";
import "./App.css";

function App() {

  return (
    <BrowserRouter basepath="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:resource/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
