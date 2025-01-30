import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { LukeDEVSymbol } from "../assets";
import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

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
const mailtoLink = `mailto:${emailAddress}?subject=Website%20Development%20Inquiry`;

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <img src={LukeDEVSymbol} alt="" />
        <a
          className="block w-[12rem] xl:mr-8 text-2xl font-extrabold ml-2"
          href="#hero"
        >
          &nbsp;LukeDEVS
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center lg:mr-32 lg:flex-row">
            {navigation.map((item) =>
              item.onlyMobile ? (
                <AlertDialog key={item.id} open={openDialog} onOpenChange={setOpenDialog}>
                  <AlertDialogTrigger asChild>
                    <button
                      onClick={() => setOpenDialog(true)}
                      className="block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-24 py-5 mb-2 md:mb-0 md:py-8 md:px-96 lg:hidden text-center"
                    >
                      {item.title}
                    </button>
                  </AlertDialogTrigger>

                  <AlertDialogContent className="bg-slate-950 px-6 py-4 rounded-lg">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-white">
                        Email Inquiry
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-white">
                        Clicking "Email" will open your email client and start
                        an email to <strong>{emailAddress}</strong>. Would you
                        like to continue?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="px-1 py-2 gap-2 pt-3">
                      <AlertDialogCancel
                        onClick={() => setOpenDialog(false)}
                        className="bg-red-300 border-2 border-transparent hover:border-red-300 hover:text-black/80 px-4 py-2 rounded-md transition-all duration-200"
                      >
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          window.location.href = mailtoLink;
                          setOpenDialog(false);
                        }}
                        className="border-2 border-green-400 bg-white px-6 py-2 rounded-md text-black/90 hover:text-white hover:bg-green-400 transition-all duration-200"
                      >
                        Email
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-24 py-5 mb-2 md:mb-0 md:py-8 md:px-96 lg:-mr-2.5 lg:text-sm lg:font-semibold text-center ${
                    item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-white xl:px-12`}
                >
                  {item.title}
                </a>
              )
            )}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Contact Button with Alert Dialog (Desktop) */}
        <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
          <AlertDialogTrigger asChild>
            <Button
              className="hidden lg:flex"
              onClick={() => setOpenDialog(true)}
            >
              Contact
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent className="bg-slate-950 px-6 py-4 rounded-lg">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">
                Email Inquiry
              </AlertDialogTitle>
              <AlertDialogDescription className="text-white">
                Clicking "Email" will open your email client and start a business inquiry email
                to <strong>{emailAddress}</strong>. Would you like to continue?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="px-1 py-2 gap-2 pt-3">
              <AlertDialogCancel
                onClick={() => setOpenDialog(false)}
                className="bg-red-300 border-2 border-transparent hover:border-red-300 hover:text-black/80 px-4 py-2 rounded-md transition-all duration-200"
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  window.location.href = mailtoLink;
                  setOpenDialog(false);
                }}
                className="border-2 border-green-400 bg-white px-6 py-2 rounded-md text-black/90 hover:text-white hover:bg-green-400 transition-all duration-200"
              >
                Email
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
