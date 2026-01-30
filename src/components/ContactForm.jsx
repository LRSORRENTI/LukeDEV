import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const encode = (data) => new URLSearchParams(data).toString();

const ContactForm = ({ onSuccess, submitLabel = "Send message", cancelSlot, className }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const isSubmitting = status.type === "submitting";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type === "error") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    setStatus({ type: "submitting", message: "" });

    const payload = {
      "form-name": "contact",
      ...trimmed,
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      const allowDevFallback =
        typeof import.meta !== "undefined" &&
        import.meta.env &&
        import.meta.env.DEV &&
        response.status === 404;

      if (!response.ok && !allowDevFallback) {
        throw new Error("Form submission failed.");
      }

      if (onSuccess) {
        onSuccess();
      }

      navigate("/thanks");
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      action="/thanks"
      data-netlify="true"
      onSubmit={handleSubmit}
      className={`space-y-4 ${className || ""}`}
    >
      <input type="hidden" name="form-name" value="contact" />

      <label className="block text-sm font-semibold text-white/80">
        Name
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          placeholder="Your name"
        />
      </label>

      <label className="block text-sm font-semibold text-white/80">
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          placeholder="you@example.com"
        />
      </label>

      <label className="block text-sm font-semibold text-white/80">
        Message
        <textarea
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="mt-2 w-full resize-none rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          placeholder="Tell me about your project."
        />
      </label>

      {status.type === "error" && (
        <p className="text-sm text-red-200" role="alert">
          {status.message}
        </p>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
        {cancelSlot}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`rounded-md bg-violet-700 px-6 py-2 text-white transition-colors hover:bg-violet-600 ${
            isSubmitting ? "cursor-not-allowed opacity-60" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : submitLabel}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
