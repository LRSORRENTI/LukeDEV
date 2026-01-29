import React, { useLayoutEffect, useRef } from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";

import { LeftLine, RightLine } from "./design/Pricing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(q(".js-pricing-heading > *"), {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: q(".js-pricing-heading"),
          start: "top 80%",
        },
      });

      gsap.to(q(".js-pricing-sphere"), {
        rotate: 360,
        duration: 24,
        ease: "none",
        repeat: -1,
      });

      gsap.to(q(".js-pricing-sphere"), {
        y: -10,
        filter: "drop-shadow(0 0 28px rgba(120, 200, 255, 0.45))",
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(q(".js-pricing-stars"), {
        xPercent: -6,
        yPercent: 4,
        scale: 1.04,
        duration: 18,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="overflow-hidden">
      <div
        className="container relative z-2"
        ref={sectionRef}
        aria-description="Pricing section showing three pricing options"
      >
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1 js-pricing-sphere"
            width={255}
            height={255}
            alt="Sphere"
            loading="lazy"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full js-pricing-stars"
              width={950}
              height={400}
              alt="Stars"
              loading="lazy"
            />
          </div>
        </div>
        <div id="price" aria-description="pricing section"></div>
        <div className="js-pricing-heading">
          <Heading
            tag="Custom web solutions platform"
            title="Get started with LukeDEVS"
          />
        </div>

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div> */}
      </div>
    </Section>
  );
};

export default Pricing;
