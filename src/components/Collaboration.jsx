import { useLayoutEffect, useRef } from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { LukeDEVSymbol, check } from "../assets";

import Button from "../components/Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collaboration = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(q(".js-collab-left > *"), {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: q(".js-collab-left"),
          start: "top 75%",
        },
      });

      gsap.from(q(".js-collab-item"), {
        opacity: 0,
        y: 18,
        filter: "blur(6px)",
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: q(".js-collab-list"),
          start: "top 75%",
        },
      });

      gsap.from(q(".js-collab-right"), {
        opacity: 0,
        scale: 0.9,
        rotate: -8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: q(".js-collab-right"),
          start: "top 75%",
        },
      });

      gsap.to(q(".js-collab-orbit"), {
        rotate: 360,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      gsap.to(q(".js-collab-core"), {
        boxShadow: "0 0 40px rgba(120, 200, 255, 0.45)",
        scale: 1.05,
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.utils.toArray(q(".js-collab-icon")).forEach((icon, index) => {
        gsap.to(icon, {
          y: -6,
          duration: 2.4 + index * 0.15,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section crosses id="howItWorks">
      <div
        className="container lg:flex mx-auto"
        ref={sectionRef}
        aria-description="Section explaining how the workflow phases are constructed from first meeting with the client until the finished build and maintenance phase "
      >
        <div className="max-w-[25rem] js-collab-left">
          <h2 className="h2 mb-4 md:mb-8 sm:ml-12">
            How it works
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14 sm:ml-12 js-collab-list">
            {collabContent.map((item) => (
              <li className="mb-3 py-3 js-collab-item" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" loading="lazy"/>
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button className="sm:ml-12" href="#price">Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4 js-collab-right">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto rounded-full" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[6rem] aspect-square p-[0.2rem] bg-conic-gradient js-collab-core rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={LukeDEVSymbol}
                    width={48}
                    height={48}
                    alt="LukeDEV symbol"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <ul className="absolute inset-0 js-collab-orbit">
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-2/5 mt-9 sm:mt-0 sm:h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                    }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                      }`}
                  >
                    <img
                      className="m-auto js-collab-icon"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                      loading="lazy"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
          <p className="body-2 md:mt-20 text-n-4 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
