import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import RequestPage from "./pages/Request";
import SuportPage from "./pages/Suport";
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter basename="/century-v1">
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<SuportPage />} path="/suporte" />
        <Route element={<RequestPage />} path="/solicitacoes" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
