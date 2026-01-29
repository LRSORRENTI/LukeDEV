import React, { useLayoutEffect, useRef } from 'react';
import Section from "./Section";
import Heading from "./Heading";

import { brightAquarium, photographerImg, boltiImg, madisonImg, nexaBankImg, restaurantImg, airTourImg, futureWaveImg, creativeDesignImg, architectImg, hotelImg, jobSearchImg, pupPastries, rustlingOaks, seoWebsite, badgerOil, nightPulse, tracyPsych, eliteTech, steeleConstr, portfolioTwo } from '../assets';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ image, title, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block relative overflow-hidden rounded-lg group cursor-pointer js-service-card"
  >
    <img
      src={image}
      alt={`${title} - ${description}`} // Combined title and description for more descriptive alt text
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 js-service-image"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 js-service-overlay">
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-xl font-bold mb-2 js-service-title">{title}</h3>
        <p className="text-white text-sm js-service-desc">{description}</p>
      </div>
    </div>
    <div className="service-sweep js-service-sweep" aria-hidden="true" />
  </a>
);

const Services = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const splitWords = (el) => {
        if (!el || el.dataset.split === "true") return;
        const words = el.textContent.trim().split(" ");
        el.innerHTML = words
          .map((word) => `<span class="js-service-word inline-block">${word}</span>`)
          .join(" ");
        el.dataset.split = "true";
      };

      const heading = q(".js-services-heading")[0];
      if (heading) {
        splitWords(heading.querySelector("h2"));
        splitWords(heading.querySelector("p"));
      }

      gsap.from(q(".js-service-word"), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: q(".js-services-heading"),
          start: "top 80%",
        },
      });

      gsap.from(q(".js-service-card"), {
        opacity: 0,
        y: 50,
        rotateZ: () => gsap.utils.random(-2.5, 2.5),
        filter: "blur(6px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: q(".js-services-grid"),
          start: "top 75%",
        },
      });

      const hoverCleanups = [];

      gsap.utils.toArray(q(".js-service-card")).forEach((card, index) => {
        gsap.to(card, {
          yPercent: index % 2 === 0 ? -3 : 3,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        const image = card.querySelector(".js-service-image");
        const overlay = card.querySelector(".js-service-overlay");
        const title = card.querySelector(".js-service-title");
        const desc = card.querySelector(".js-service-desc");
        const sweep = card.querySelector(".js-service-sweep");

        const tl = gsap.timeline({ paused: true });
        tl.to(image, { scale: 1.08, duration: 0.45, ease: "power2.out" }, 0)
          .to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" }, 0.05)
          .fromTo(title, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }, 0.1)
          .fromTo(desc, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }, 0.15)
          .fromTo(sweep, { xPercent: -120, opacity: 0 }, { xPercent: 120, opacity: 0.8, duration: 0.8, ease: "power2.out" }, 0);

        const onEnter = () => tl.play();
        const onLeave = () => tl.reverse();
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        hoverCleanups.push(() => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => hoverCleanups.forEach((fn) => fn());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    { image: brightAquarium, title: "Bright Aquarium", description: "Aquarium website built using Next.js and Framer Motion", link: "https://bright-aquarium.vercel.app/" },
    { image: eliteTech, title: "Elite Technologies", description: "Vibrant and eye-catching website built with HTML, Tailwind CSS, and JavaScript", link: "https://elite-tech.luke-sorrenti.workers.dev/" },
    { image: portfolioTwo, title: "Tech Portfolio", description: "Interactive and dynamic website built with Next.js", link: "https://modern-portfolio-rose.vercel.app/" },
    { image: rustlingOaks, title: "Rustling Oaks", description: "Modern and sleek Golf website with Next.js and Framer Motion", link: "https://rustling-oaks-golf-course.vercel.app/" },
    { image: nightPulse, title: "Nightclub Website", description: "Eye-catching Night CLub and Bar website with Next.js and Framer Motion", link: "https://night-pulse.vercel.app/" },
    { image: seoWebsite, title: "SEO Website", description: "Eye-catching SEO website with Next.js and Framer Motion", link: "https://improve-seo-ai.vercel.app/" },
    { image: badgerOil, title: "Oil Equipment Website", description: "HTML, CSS, and JavaScript website built for an oil equipment  distribution and  repair company", link: "https://badger-oil.netlify.app/" },
    { image: restaurantImg, title: "Fine Dining Website", description: "Custom-built website with online menu and reservation system", link: "https://trois-champs-elysees.netlify.app/" },
    { image: nexaBankImg, title: "NexaBank Platform", description: "Modern user-friendly online banking interface", link: "https://luke-nexabank.netlify.app/" },
    { image: tracyPsych, title: "Psychiatrist Website", description: "Modern, minimalist HTML, CSS, and JavaScript website made for a New York, and California based Psychiatrist", link: "https://tracyjonespsychiatrist.vercel.app/" },
    { image: futureWaveImg, title: "FutureWave Capital", description: "Innovative product showcase for a cutting-edge tech capital company", link: "https://future-wave.netlify.app/" },
    { image: creativeDesignImg, title: "Creative Design Agency", description: "Visually stunning portfolio for a graphic design agency", link: "https://creative-design-luke.netlify.app/" },
    { image: airTourImg, title: "AirTour Booking System", description: "Comprehensive travel booking platform for air balloon tours", link: "https://luke-airtour.netlify.app/" },
    { image: architectImg, title: "Architect Showcase", description: "Elegant portfolio website for a renowned architecture firm", link: "https://luke-architect.netlify.app/" },
    { image: photographerImg, title: "Photographer Website", description: "Visually striking photographer portfolio website", link: "https://dante-photographer.netlify.app/" },
    { image: boltiImg, title: "E-Scooter Rental Website", description: "Vibrant and dynamic website advertising E-Scooters", link: "https://luke-bolti.netlify.app/" },
    { image: steeleConstr, title: "Construction Website", description: "Sleek and dynamic website advertising a construction company", link: "https://steele-construction.netlify.app/" },    
    { image: madisonImg, title: "Public Library Website", description: "Aesthetically clean and simple website built for a public library", link: "https://madison-public-lbrary.netlify.app/" },
    { image: pupPastries, title: "Bakery Website", description: "Elegant and modern bakery website", link: "https://pup-pastries-future.netlify.app/"},
    { image: hotelImg, title: "Hotel Website", description: "Minimalist and modern hotel website", link: "https://hotel-manhattan.netlify.app/" },
    { image: jobSearchImg, title: "Job Search Website", description: "Clean and colorful job search platform website", link: "https://lukejobsearch.netlify.app" },
  ];

  return (
    <Section id="client-projects">
      <div
        className="container mx-auto px-4"
        ref={sectionRef}
        aria-description="Section displaying successful client projects, each project card has a corresponding image, ie bakery website shows an image of the hero section of that project"
      >
        <div className="js-services-heading">
          <Heading
            className="text-center"
            title="Client Success Stories"
            text="Explore our portfolio of standout projects, demonstrating the powerful solutions we've crafted alongside our satisfied clients."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 js-services-grid">
          {projects.map((project, index) => (
            <div key={index} className={`${index === 2.5 || index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
