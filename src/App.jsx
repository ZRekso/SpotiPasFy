import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import Lecteur from "./pages/Lecteur";
import Reglage from "./pages/Reglage";
import Recherche from "./pages/Recherche";
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Lecteur" element={<Lecteur />} />
        <Route path="/Reglage" element={<Reglage />} />
        <Route path="/Recherche" element={<Recherche />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;