import { curve, heroBackground, hero4 } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useLayoutEffect, useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const parallaxRef = useRef(null);
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const headlineText = "Need a website that actually grows your business?";
  const brandText = "Use LukeDEVS";

  const renderWords = (text) =>
    text.split(" ").map((word, wordIndex) => (
      <span key={`${text}-word-${wordIndex}`} className="inline-block">
        {word.split("").map((char, charIndex) => (
          <span
            key={`${text}-char-${wordIndex}-${charIndex}`}
            className="js-hero-char inline-block"
          >
            {char}
          </span>
        ))}
        {wordIndex < text.split(" ").length - 1 ? "\u00A0" : ""}
      </span>
    ));

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(q(".js-hero-intro > *:not(.js-hero-title)"), {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.from(q(".js-hero-char"), {
        opacity: 0,
        y: 24,
        rotateX: 80,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.015,
        delay: 0.1,
        transformOrigin: "50% 100%",
      });

      gsap.from(q(".js-hero-card"), {
        opacity: 0,
        y: 50,
        rotate: -3,
        scale: 0.96,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.15,
      });

      gsap.to(q(".js-hero-float"), {
        y: -10,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      gsap.to(q(".js-hero-bg"), {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, heroRef);

    const tiltTarget = cardRef.current;
    if (tiltTarget) {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!prefersReduced) {
        const handleMove = (event) => {
          const rect = tiltTarget.getBoundingClientRect();
          const relX = (event.clientX - rect.left) / rect.width - 0.5;
          const relY = (event.clientY - rect.top) / rect.height - 0.5;
          const rotateY = relX * 8;
          const rotateX = -relY * 8;
          gsap.to(tiltTarget, {
            rotateX,
            rotateY,
            scale: 1.015,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 800,
            transformOrigin: "center",
          });
        };

        const handleLeave = () => {
          gsap.to(tiltTarget, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        };

        tiltTarget.addEventListener("mousemove", handleMove);
        tiltTarget.addEventListener("mouseleave", handleLeave);

        return () => {
          tiltTarget.removeEventListener("mousemove", handleMove);
          tiltTarget.removeEventListener("mouseleave", handleLeave);
          ctx.revert();
        };
      }
    }

    return () => ctx.revert();
  }, []);

  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        className="container relative"
        ref={(node) => {
          parallaxRef.current = node;
          heroRef.current = node;
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="relative z-1 lg:col-span-6 js-hero-intro">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-n-7/80 text-n-1/70 text-xs tracking-[0.2em] uppercase">
              Web studio for growth
            </div>
            <h1 className="h1 mt-6 mb-6 text-left js-hero-title" aria-label={`${headlineText} ${brandText}`}>
              <span className="sr-only">{headlineText} {brandText}</span>
              <span aria-hidden="true">{renderWords(headlineText)}&nbsp;</span>
              <span className="inline-block relative" aria-hidden="true">
                {renderWords(brandText)}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="text-lg text-n-2 max-w-[34rem]">
              We build custom websites designed to convert visitors into paying customers
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#price" white>
                Get started
              </Button>
              <a
                href="#howItWorks"
                className="text-sm font-semibold text-n-1/70 hover:text-n-1 transition-colors"
              >
                View process
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-2xl font-semibold text-n-1">2-4</div>
                <div className="text-xs text-n-3 uppercase tracking-[0.2em]">Weeks</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-n-1">100%</div>
                <div className="text-xs text-n-3 uppercase tracking-[0.2em]">Responsive</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-n-1">SEO</div>
                <div className="text-xs text-n-3 uppercase tracking-[0.2em]">Ready</div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div
              className="relative max-w-[23rem] mx-auto md:max-w-5xl js-hero-card js-hero-tilt"
              ref={cardRef}
            >
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[0.8rem] bg-transparent rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-3xl rounded-t-3xl overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={hero4}
                  className="w-full scale-[1.7] md:scale-[1.1] translate-y-[50%] md:translate-y-[8%] lg:-translate-y-[13%] rounded-2xl"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 js-hero-float" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] py-1 px-1 bg-n-9/40 backdrop-blur bordeer border-n-1/10 rounded-2xl xl:flex js-hero-float">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex js-hero-float"
                    title="Web Solutions"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[60%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[96%] pointer-events-none js-hero-bg">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
          </div>
        </div>
      </div>

      <BottomLine />
      <h5 className="tagline mt-8 mb-6 text-center text-n-1/50 relative z-10">
        Helping people create beautiful web content
      </h5>
    </Section>

  );
};

export default Hero;
