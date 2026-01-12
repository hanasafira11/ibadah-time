import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import PrayerTracker from "./pages/PrayerTracker.jsx";
import Ensyclopedia from "./pages/Ensyclopedia.jsx";
import Recommendation from "./pages/Recommendation.jsx";
import Reflection from "./pages/Reflection.jsx";
import Resources from "./pages/Resources.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<PrayerTracker />} />
        <Route path="/ensyclopedia" element={<Ensyclopedia />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
