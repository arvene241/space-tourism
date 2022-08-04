import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="/home" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
