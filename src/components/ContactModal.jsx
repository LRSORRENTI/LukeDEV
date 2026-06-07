import { useEffect, useState } from "react";
import { trackContactModalOpen } from "../utils/gtm";

import ContactForm from "./ContactForm";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "./alert-dialog";

const ContactModal = ({ trigger, source }) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (nextOpen) => {
    if (nextOpen && source) {
      trackContactModalOpen(source);
    }
    setOpen(nextOpen);
  };

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (!root || !body) return;

    const releaseScrollLock = () => {
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
    };

    if (open) {
      const scrollY = window.scrollY || 0;
      const scrollbarWidth = "0";
      body.dataset.scrollY = String(scrollY);
      root.style.setProperty("--scrollbar-compensation", `${scrollbarWidth}px`);
      root.classList.add("modal-open");
      body.classList.add("modal-open");
      body.style.position = "default";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      releaseScrollLock();
    }

    return () => releaseScrollLock();
  }, [open]);

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="w-[92vw] max-w-xl rounded-xl border border-gray-100 bg-gray-200 bg-clip-padding bg-opacity-5 px-6 py-5 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
        <div className="space-y-6">
          <AlertDialogHeader className="text-left">
            <AlertDialogTitle className="text-2xl text-white text-shadow">
              Start a project
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white/75">
              Share a few details and I'll reply within 1-2 business days.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <ContactForm
            onSuccess={() => setOpen(false)}
            cancelSlot={(
              <AlertDialogCancel
                type="button"
                className="rounded-md border-2 border-transparent bg-slate-800 px-4 py-2 transition-colors duration-200 hover:bg-slate-700 hover:text-white/90"
              >
                Cancel
              </AlertDialogCancel>
            )}
          />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactModal;
