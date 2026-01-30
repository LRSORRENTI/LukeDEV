import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";

const ThanksPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Section>
          <div className="container relative z-2">
            <div className="mx-auto max-w-xl rounded-xl border border-gray-100 bg-gray-200 bg-clip-padding bg-opacity-5 px-6 py-8 text-center backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <h1 className="h3 text-white text-shadow">Thanks!</h1>
              <p className="body-2 mt-2 text-white/70">
                Thanks, I'll get back to you shortly.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/" className="px-8">
                  Back home
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default ThanksPage;
