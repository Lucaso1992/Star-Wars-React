import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/homeView.jsx";
import Detail from "./views/detailView.jsx";
import Error from "./views/errorView.jsx";
import { AppProvider } from "./context/AppContext.jsx";

function App() {

  return (
    <BrowserRouter basepath="/">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:resource/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App;
