import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Only import Routes and Route
import Header from "./components/1.Header/Header";
import Hero from "./components/2.Hero/Hero";
import News from "./components/3.News/News";
import Projects from "./components/4.Projects/Projects";
import CEOMessage from "./components/5.CEOMessage/CEOMessage";
import About from "./components/6.About/About";
import Services from "./components/7.Services/Services";
import Careers from "./components/8.Careers/Careers";
import Contact from "./components/9.Contact/Contact";
import Footer from "./components/10.Footer/Footer";
import PhilosophyPage from "./pages/PhilosophyPage"; // Import Philosophy Page

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <Hero />
                <News />
                <Projects />
                <CEOMessage />
                <About />
                <Services />
                <Careers />
                <Contact />
              </main>
            </>
          }
        />
        <Route path="/philosophy" element={<PhilosophyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
