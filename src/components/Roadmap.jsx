import { useLayoutEffect, useRef } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(q(".js-roadmap-heading > *"), {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: q(".js-roadmap-heading"),
          start: "top 80%",
        },
      });

      gsap.utils.toArray(q(".js-roadmap-card")).forEach((card, index) => {
        const fromX = index % 2 === 0 ? -60 : 60;

        gsap.from(card, {
          x: fromX,
          opacity: 0,
          rotateY: index % 2 === 0 ? -8 : 8,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          transformPerspective: 900,
        });

        gsap.from(card.querySelectorAll(".js-roadmap-tagline"), {
          clipPath: "inset(0 100% 0 0)",
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });

        const image = card.querySelector(".js-roadmap-image");
        if (image) {
          gsap.to(image, {
            y: -8,
            duration: 3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });

          gsap.to(image, {
            yPercent: index % 2 === 0 ? -4 : 4,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        }

        const gridLayer = card.querySelector(".js-roadmap-grid");
        if (gridLayer) {
          gsap.fromTo(
            gridLayer,
            { xPercent: -8, opacity: 0.4 },
            {
              xPercent: 8,
              opacity: 0.9,
              duration: 1.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
            }
          );
        }

        const statusBadge = card.querySelector(".js-roadmap-status");
        if (statusBadge) {
          if (statusBadge.dataset.status === "progress") {
            gsap.to(statusBadge, {
              boxShadow: "0 0 18px rgba(120, 200, 255, 0.35)",
              scale: 1.04,
              duration: 1.6,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          } else {
            gsap.from(statusBadge, {
              scale: 0.8,
              opacity: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div
        className="container md:pb-10"
        ref={sectionRef}
        aria-description="Section displaying four main cards, each either ongoing or complete workflows"
      >
        <div className="js-roadmap-heading">
          <Heading tag="Our current direction" title="What we're working on" />
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 js-roadmap-card"
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full js-roadmap-grid">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline className="js-roadmap-tagline">{item.date}</Tagline>

                      <div
                        className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8 js-roadmap-status"
                        data-status={item.status}
                      >
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                          loading="lazy"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 mt-5 m-auto">
                      <img
                        className="w-[30rem] js-roadmap-image"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="#hero">Home</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
