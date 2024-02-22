import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/shared/header/Header";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Footer from "./pages/shared/Footer";
import About from "./pages/shared/About";
import AboutSection from "./pages/about/AboutSection";
import Therapists from "./pages/home/Therapists";
import Services from "./pages/services/Services";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}>
          <Route index element={<AboutSection />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
