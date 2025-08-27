// app/contact/page.tsx  (or: pages/contact.tsx)
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaEnvelope, FaPhoneAlt, FaRegClock } from "react-icons/fa";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // TODO: replace with real endpoint or email service (e.g., API route, Resend, SendGrid)
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-gray-900">
        {/* Intro copy */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
          <p className="text-center text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Fill out the <strong>REQUIRED</strong> fields in the response box below. Once all fields are filled, click the ‘Send Email’ button at the bottom of the page. A thank you note will display on the screen to confirm that the message is successfully sent. (All fields with * are required)
          </p>
        </section>

        {/* Form */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <form
            onSubmit={handleSubmit}
            className="grid gap-6"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={8}
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-4">
              <p className="text-sm text-gray-700">
                Click on the button to the right to confirm and send us your message.
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "SUBMIT"}
              </button>
            </div>

            <p className="text-xs text-gray-600">
              NOTE: If a successful confirmation page is not received after clicking the ‘Send’ button, please double check that all fields above are filled out properly.
            </p>

            {status === "sent" && (
              <div
                role="status"
                className="rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3"
              >
                Thank you! The message has been sent successfully.
              </div>
            )}
            {status === "error" && (
              <div
                role="alert"
                className="rounded-md bg-red-50 border border-red-200 text-red-700 px-4 py-3"
              >
                Something went wrong while sending. Please try again.
              </div>
            )}
          </form>
        </section>

        {/* Snail mail / phone section */}
        
<section className="bg-gray-50 py-14">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10">
      You can also send us a message by snail mail or by phone.
    </h2>
    
    <span
  aria-hidden="true"
  className="block h-1 w-24 mx-auto mt-6 mb-8 rounded bg-emerald-500"
></span>
<br />
    {/* Icon defaults via inline utility classes */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      {/* Mailing Address */}
      <div className="space-y-3">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <FaEnvelope className="h-6 w-6" aria-hidden />
        </div>
        <p className="font-semibold text-emerald-700">
          Ray’s Healthy Living<br />Mailing Address
        </p>
        <p className="text-sm">
          70 Solomons Island Rd S Prince<br />
          Frederick MD 20678, United States
        </p>
      </div>

      {/* Toll-Free Phone Order Line */}
      <div className="space-y-3">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <FaPhoneAlt className="h-6 w-6" aria-hidden />
        </div>
        <p className="font-semibold text-emerald-700">
          Ray’s Healthy Living<br />Toll-Free Phone Order Line
        </p>
        <p className="text-sm">+1 (443) 432-3295</p>
      </div>

      {/* Normal Business Hours */}
      <div className="space-y-3">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <FaRegClock className="h-6 w-6" aria-hidden />
        </div>
        <p className="font-semibold text-emerald-700">
          Ray’s Healthy Living<br />Normal Business Hours
        </p>
        <p className="text-sm text-gray-600">
          If unavailable, please leave a detailed message and the call will be returned on the next business day during regular operating hours.
        </p>
      </div>
    </div>

    <p className="mt-8 text-center text-sm text-gray-700">
      For the quickest response for all questions on Ray’s Healthy Living products or status of existing orders, please use the online Contact Us form.
    </p>
  </div>
</section>
      </main>

      <Footer />
    </>
  );
}
