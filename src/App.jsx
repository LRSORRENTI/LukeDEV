import React from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import FadeInSection from "./components/FadeInSection";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <Benefits />
        </FadeInSection>
        <FadeInSection>
          <Collaboration />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <Pricing />
        </FadeInSection>
        <FadeInSection>
          <Roadmap />
        </FadeInSection>
        <FadeInSection>
          <Footer />
        </FadeInSection>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;