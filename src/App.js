import React from "react";
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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <News />
      <Projects />
      <CEOMessage /> {/* CEO Message Section */}
      <About />
      <Services />
      <Careers />
      <Contact />
      <Footer />
      <footer className="text-center py-4 bg-gray-800 text-white">
        &copy; 2025 株式会社HOMIES. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
