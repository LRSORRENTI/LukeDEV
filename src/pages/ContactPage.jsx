import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Section>
          <div className="container relative z-2">
            <div className="mx-auto max-w-2xl rounded-xl border border-gray-100 bg-gray-200 bg-clip-padding bg-opacity-5 px-6 py-6 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <h1 className="h3 text-white text-shadow">Contact</h1>
              <p className="body-2 mt-2 text-white/70">
                Tell me about your project and I will get back to you shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
