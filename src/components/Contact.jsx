import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { meta } from "../data/portfolio";
import {  fadeLeft, fadeRight, staggerContainer, viewport } from "../utils/variants";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const MailIcon = () => (
  <svg className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const PinIcon = () => (
  <svg className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);


const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("sent");
        form.current.reset();
      },
      () => setStatus("error")
    );
  };

  return (
    <section id="contact" className="bg-paper py-24">
      <div className="mx-auto max-w-content px-8">
        <motion.div
          className="grid items-start gap-20 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Left */}
          <motion.div variants={fadeLeft}>
            <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">
              Contact
            </span>
            <h3 className="mb-4 font-serif text-[clamp(1.75rem,3vw,2rem)] text-ink">
              Get in touch
            </h3>
            <p className="mb-8 max-w-[380px] text-[0.95rem] leading-relaxed text-ink-soft">
              Open to Frontend Engineer and UI Developer positions. Based in Leamington Spa, UK, available for remote, hybrid, and on-site opportunities.
            </p>

            <div className="mb-4 flex items-center gap-3 text-sm text-ink-soft">
              <MailIcon />
              <a href={`mailto:${meta.email}`} className="hover:text-ink">
                {meta.email}
              </a>
            </div>
            <div className="mb-4 flex items-center gap-3 text-sm text-ink-soft">
              <PinIcon />
              {meta.location}
            </div>
            

            <div className="flex gap-6">
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink-muted underline-offset-2 hover:text-accent hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeRight}>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-[0.06em] text-ink-soft">
                  Full name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  required
                  disabled={status === "sending"}
                  className="w-full rounded-[10px] border-[1.5px] border-border bg-paper-card px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,86,58,0.1)] disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-[0.06em] text-ink-soft">
                  Email address
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  required
                  disabled={status === "sending"}
                  className="w-full rounded-[10px] border-[1.5px] border-border bg-paper-card px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,86,58,0.1)] disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-[0.06em] text-ink-soft">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Type your message here"
                  required
                  disabled={status === "sending"}
                  className="h-[130px] w-full resize-none rounded-[10px] border-[1.5px] border-border bg-paper-card px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,86,58,0.1)] disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="self-start rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-all hover:-translate-y-px hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send message →"}
              </button>

              {status === "sent" && (
                <motion.p
                  className="text-sm text-accent"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent! I&apos;ll reply soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  className="text-sm text-red-600"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;