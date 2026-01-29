import { benefits } from "../constants";
import { useLayoutEffect, useRef } from "react";
import Heading from "./Heading";
import Section from "./Section";

import Arrow from "../assets/svg/Arrow";

import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(q(".js-benefits-heading > *"), {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: q(".js-benefits-heading"),
          start: "top 80%",
        },
      });

      gsap.from(q(".js-benefit-card"), {
        opacity: 0,
        y: 60,
        rotateX: 12,
        rotateY: -6,
        scale: 0.94,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: q(".js-benefits-grid"),
          start: "top 75%",
        },
        transformPerspective: 800,
      });

      gsap.to(q(".js-benefit-float"), {
        y: -8,
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      gsap.utils.toArray(q(".js-benefit-card")).forEach((card) => {
        const onEnter = () => {
          gsap.to(card, {
            scale: 1.03,
            rotateZ: 0.4,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotateZ: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => gsap.to(card, { boxShadow: "0 30px 80px rgba(120, 180, 255, 0.18)", duration: 0.6 }),
          onLeaveBack: () => gsap.to(card, { boxShadow: "none", duration: 0.4 }),
        });

        return () => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="features">
      <div
        className="container relative z-2"
        ref={sectionRef}
        aria-description="Features section with six cards describing solutions and services"
      >
        <div className="js-benefits-heading">
          <Heading
            className="md:max-w-md lg:max-w-3xl text-center"
            title="Enhancing your web presence with expert solutions"
          />
        </div>

        <div className="flex flex-wrap gap-10 mb-10 js-benefits-grid">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] js-benefit-card"
              style={{
                backgroundImage: `url(../${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none js-benefit-float">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    loading="lazy"
                  />
                  <p className="ml-auto font-code text-xs font-bold text-transparent uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt="background image overlay"
                      width={380}
                      height={362}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
