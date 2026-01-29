"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./alert-dialog";

const emailAddress = "luke-sorrenti@outlook.com";
const subject = "Website Development Inquiry";
const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;

const PricingList = () => {
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (!root || !body) return;

    if (open) {
      const scrollY = window.scrollY || 0;
      const scrollbarWidth = window.innerWidth - root.clientWidth;
      body.dataset.scrollY = String(scrollY);
      root.style.setProperty("--scrollbar-compensation", `${scrollbarWidth}px`);
      root.classList.add("modal-open");
      body.classList.add("modal-open");
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      root.classList.remove("modal-open");
      body.classList.remove("modal-open");
      root.style.removeProperty("--scrollbar-compensation");
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.paddingRight = "";
      const restoreY = parseInt(body.dataset.scrollY || "0", 10);
      delete body.dataset.scrollY;
      if (restoreY) window.scrollTo(0, restoreY);
    }
  }, [open]);

  useLayoutEffect(() => {
    if (!listRef.current) return;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(q(".js-pricing-card"), {
        opacity: 0,
        y: 50,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 75%",
        },
      });

      gsap.utils.toArray(q(".js-price-value")).forEach((el) => {
        const value = parseInt(el.dataset.price || "0", 10);
        if (!value) return;
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: value,
            duration: 1.2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      const hoverCleanups = [];

      gsap.utils.toArray(q(".js-pricing-card")).forEach((card) => {
        gsap.from(card.querySelectorAll(".js-pricing-feature"), {
          opacity: 0,
          x: -16,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });

        gsap.from(card.querySelectorAll(".js-pricing-check"), {
          scale: 0.2,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.06,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });

        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(
          card,
          {
            scale: 1.02,
            boxShadow: "0 25px 80px rgba(120, 200, 255, 0.22)",
            duration: 0.35,
            ease: "power2.out",
          },
          0
        );

        const onEnter = () => hoverTl.play();
        const onLeave = () => hoverTl.reverse();
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        hoverCleanups.push(() => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => hoverCleanups.forEach((fn) => fn());
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex gap-[1rem] max-lg:flex-wrap"
      ref={listRef}
      aria-description="Actual pricing cards showing the price of each option, standard price, premium, and enterprise respectively."
    >
      {pricing.map((item) => (
        <div
          key={item.id}
          className={`w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 js-pricing-card ${
            item.id === "1" ? "js-pricing-highlight" : ""
          } [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3`}
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  <span className="js-price-value" data-price={item.price}>
                    {item.price}
                  </span>
                </div>
              </>
            )}
          </div>

          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              <Button
                className="w-full mb-6"
                white={!!item.price}
                onClick={() => setOpen(true)}
              >
                {item.price ? "Get started" : "Contact for pricing"}
              </Button>
            </AlertDialogTrigger>

            {open && (
              <AlertDialogContent className="px-6 py-4  bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-5 border border-gray-100">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-shadow">Email Inquiry</AlertDialogTitle>
                  <AlertDialogDescription className="text-white font-bold text-shadow">
                    Pressing "Email" will open your email client and start a business inquiry email
                    to <strong>LukeDEVS</strong> <br aria-label="line break"/> <br/> Would you like to continue? <br aria-label="line break"/> <br/>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="px-1 py-2 gap-2 pt-3">
                  <AlertDialogCancel onClick={() => setOpen(false)} className="bg-slate-800 border-2 border-transparent  hover:bg-slate-700 hover:text-white/90 px-4 py-2 rounded-md transition-colors duration-200">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      window.location.href = mailtoLink;
                      setOpen(false);
                    }}
                    className=" px-6 py-2 rounded-md bg-violet-700 hover:bg-violet-600 transition-colors text-white"
                  >
                    Email
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialog>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6 js-pricing-feature"
              >
                <img
                  src={check}
                  width={24}
                  height={24}
                  alt="Check"
                  loading="lazy"
                  className="js-pricing-check"
                />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
