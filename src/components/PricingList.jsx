"use client";

import { useState } from "react";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
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

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap"
    aria-description="Actual pricing cards showing the price of each option, standard price, premium, and enterprise respectively.">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 
          [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
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
                  {item.price}
                </div>
              </>
            )}
          </div>

          <AlertDialog>
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
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" loading="lazy"/>
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
