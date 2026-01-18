import { useState } from "react";
import Checkmark from "./Checkmark";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mzddeqyj", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section className="max-w-4xl mx-auto w-full px-4 py-20">
      <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-md text-center">
        
        {!submitted ? (
          <>
            <h2 className="text-3xl font-semibold mb-3">Let’s Get in Touch</h2>
            <p className="text-gray-700 max-w-xl mx-auto mb-8">
              I’d love to hear about job opportunities or collaborations on new project ideas.
              Feel free to reach out!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="py-12">
            <Checkmark />

            <h3 className="text-3xl font-semibold mb-3">
              Thanks for reaching out!
            </h3>
            <p className="text-gray-700 text-lg">
              I’ll be in touch with you soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
