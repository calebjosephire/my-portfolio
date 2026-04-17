import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "React & JavaScript",
    "Tailwind CSS",
    "UI/UX & Responsive Design",
    "Photography & Videography",
    "Adobe Premiere / Lightroom",
    "Italian (Beginner)",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold mb-3">About Me</h2>
        <p className="text-slate-300 leading-relaxed">
          I’m a Digital Media student at UCF and a full‑time media producer at
          Family Christian Academy. I create branded, audience‑focused content
          across web, photography, and video. I enjoy building clean, modern
          interfaces and crafting visual stories that connect with people.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Interests</h3>
        <p className="text-slate-300 leading-relaxed">
          I love building practical, user‑focused apps and refining visual
          design. I’m also passionate about storytelling through video,
          photography, and motion — and I’m learning Italian as part of my
          cultural and creative growth.
        </p>
      </div>
    </motion.section>
  );
}
