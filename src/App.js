import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Only import Routes and Route
import { HelmetProvider, Helmet } from "react-helmet-async"; // ✅ Import Helmet
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
import RecruitmentPage from "./pages/RecruitmentPage"; // Import the new page

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>株式会社HOMIES - 安心・高品質・誠実なものづくり</title>
                  <meta
                    name="description"
                    content="株式会社HOMIESは、革新的な建設技術を活用し、高品質な建設サービスを提供する会社です。"
                  />
                </Helmet>
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
          <Route path="/recruitment" element={<RecruitmentPage />} />{" "}
          {/* New Route */}
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
