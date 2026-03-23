import { useState } from "react";
import Checkmark from "./Checkmark";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzddeqyj", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl">
          {/* Background accents */}
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-indigo-400/20 blur-3xl" />

          <div className="relative z-10 p-8 md:p-12">
            {!submitted ? (
              <>
                <div className="text-center">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                    Contact
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Let’s Get in Touch
                  </h2>

                  <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-8 text-slate-600">
                    I’d love to hear about job opportunities, collaborations, or
                    new project ideas. Feel free to send a message and I’ll get
                    back to you as soon as I can.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-6 text-left">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                      placeholder="Tell me a little about your opportunity or project..."
                    />
                  </div>

                  {error && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-3 text-base md:text-lg font-medium text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="flex justify-center">
                  <Checkmark />
                </div>

                <p className="mt-6 mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Message Sent
                </p>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  Thanks for reaching out
                </h3>

                <p className="mt-4 text-base md:text-lg text-slate-600">
                  I appreciate the message and will get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;