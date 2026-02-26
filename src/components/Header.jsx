import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { LukeDEVSymbol } from "../assets";
import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import ContactModal from "./ContactModal";

const Header = () => {
  const pathname = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);

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

  const handleNavLinkClick = (event, url) => {
    if (url.startsWith("#") && pathname.pathname !== "/") {
      event.preventDefault();
      navigate(`/${url}`);
    }
    handleClick();
  };

  const handleLogoClick = (event) => {
    if (pathname.pathname !== "/") {
      event.preventDefault();
      navigate("/#hero");
    }
  };

  return (
    <div
      aria-description="Navigation menu displaying five links"
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <img src={LukeDEVSymbol} alt="LukeDEVS Logo" />
        <a
          className="block w-[12rem] xl:mr-8 text-2xl font-extrabold ml-2"
          href="#hero"
          onClick={handleLogoClick}
        >
          &nbsp;LukeDEVS
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-start sm:justify-center mx-auto lg:mr-32 lg:flex-row">
            {navigation.map((item) =>
              item.onlyMobile ? (
                <ContactModal
                  key={item.id}
                  source="nav"
                  trigger={
                    <button onClick={handleClick} className="block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1  px-24 py-5 mb-2 md:mb-0 md:py-8 md:px-96 lg:hidden text-center">
                      {item.title}
                    </button>
                  }
                />
              ) : (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={(event) => handleNavLinkClick(event, item.url)}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-5 mb-2 md:mb-0 md:py-8 md:px-8 lg:-mr-2.5 lg:text-sm lg:font-semibold text-center  ${
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

        <ContactModal source="nav" trigger={<Button className="hidden lg:flex">Contact</Button>} />

        {/* Legacy contact modal (kept for reference)
        <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
          <AlertDialogTrigger asChild>
            <Button
              className="hidden lg:flex"
              onClick={() => setOpenDialog(true)}
            >
              Contact
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent className=" px-6 py-4  bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-5 border border-gray-100
">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white text-shadow">
                Email Inquiry
              </AlertDialogTitle>
              <AlertDialogDescription className="text-white font-bold text-shadow">
                Pressing "Email" will open your email client and start a business inquiry email
                to LukeDEVS <br aria-label="line break"/> <br/> Would you like to continue? <br aria-label="line break"/> <br/>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="px-1 py-2 gap-2 pt-3">
              <AlertDialogCancel
                onClick={() => setOpenDialog(false)}
                className="bg-slate-800 border-2 border-transparent  hover:bg-slate-700 hover:text-white/90 px-4 py-2 rounded-md transition-colors duration-200"
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  window.location.href = mailtoLink;
                  setOpenDialog(false);
                }}
                className=" px-6 py-2 rounded-md bg-violet-700 hover:bg-violet-600 transition-colors text-white"
              >
                Email
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        */}

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

