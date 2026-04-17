import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email.";
    }
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid md:grid-cols-[2fr,1fr] gap-10"
    >
      <div>
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-300 mb-6">
          Have a project, collaboration, or question? Send a message and I’ll
          get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-2 bg-slate-900 border border-slate-700 rounded"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full p-2 bg-slate-900 border border-slate-700 rounded"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows="4"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full p-2 bg-slate-900 border border-slate-700 rounded"
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-400 text-sm mt-2">
              Message sent! (Demo only)
            </p>
          )}
        </form>
      </div>

      <div className="space-y-3 text-sm text-slate-300">
        <h3 className="text-lg font-semibold">Connect</h3>
        <p>Email: youremail@knights.ucf.edu</p>
        <p>Location: Orlando, FL</p>

        <div className="flex flex-col gap-1">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/your-handle"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </motion.section>
  );
}
