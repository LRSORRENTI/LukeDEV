import React from 'react';
import Section from "./Section";
import Heading from "./Heading";

import { photographerImg, boltiImg, madisonImg, nexaBankImg, restaurantImg, airTourImg, futureWaveImg, creativeDesignImg, architectImg, hotelImg, jobSearchImg, pupPastries } from '../assets';

const ProjectCard = ({ image, title, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block relative overflow-hidden rounded-lg group cursor-pointer"
  >
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  </a>
);

const Services = () => {
  const projects = [
    { image: restaurantImg, title: "Fine Dining Website", description: "Custom-built website with online menu and reservation system", link: "https://trois-champs-elysees.netlify.app/" },
    { image: nexaBankImg, title: "NexaBank Platform", description: "Modern user-friendly online banking interface", link: "https://luke-nexabank.netlify.app/" },
    { image: futureWaveImg, title: "FutureWave Capital", description: "Innovative product showcase for a cutting-edge tech capital company", link: "https://future-wave.netlify.app/" },
    { image: creativeDesignImg, title: "Creative Design Agency", description: "Visually stunning portfolio for a graphic design agency", link: "https://creative-design-luke.netlify.app/" },
    { image: airTourImg, title: "AirTour Booking System", description: "Comprehensive travel booking platform for air balloon tours", link: "https://luke-airtour.netlify.app/" },
    { image: architectImg, title: "Architect Showcase", description: "Elegant portfolio website for a renowned architecture firm", link: "https://luke-architect.netlify.app/" },
    { image: photographerImg, title: "Photographer Website", description: "Visually striking photographer portfolio website", link: "https://luke-photographer.netlify.app/" },
    { image: boltiImg, title: "E-Scooter Rental Website", description: "Vibrant and dynamic website advertising E-Scooters", link: "https://luke-bolti.netlify.app/" },
    { image: madisonImg, title: "Public Library Website", description: "Aesthetically clean and simple website built for a public library", link: "https://madison-public-lbrary.netlify.app/" },
    { image: pupPastries, title: "Bakery Website", description: "Elegant and modern bakery website", link: "https://pup-pastries-future.netlify.app/"},
    { image: hotelImg, title: "Hotel Website", description: "Minimalist and modern hotel website", link: "https://hotel-manhattan.netlify.app/" },
    { image: jobSearchImg, title: "Job Search Website", description: "Clean and colorful job search platform website", link: "https://lukejobsearch.netlify.app" },
  ];

  return (
    <Section id="client-projects">
      <div className="container mx-auto px-4">
        <Heading className="text-center"
          title="Client Success Stories"
          text="Explore our portfolio of standout projects, demonstrating the powerful solutions we've crafted alongside our satisfied clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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