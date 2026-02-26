export function trackContactModalOpen(source) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "contact_modal_open",
    contact_source: source,
  });
}
