import { motion } from "framer-motion";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

export default function Projects() {
  const projects = [
    {
      title: "DIY Mechanics App",
      description:
        "A React app that recommends car repair videos based on user input.",
      image: project1,
      link: "https://github.com/your-username/diy-mechanics",
    },
    {
      title: "Quiz App",
      description:
        "A React Native quiz app with animations and multi-answer logic.",
      image: project2,
      link: "https://github.com/your-username/quiz-app",
    },
    {
      title: "CMS Review System",
      description:
        "A PHP/MySQL review system with full CRUD and validation.",
      image: project3,
      link: "https://github.com/your-username/cms-review-system",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="text-slate-300 text-sm">
        A selection of my development and media work.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{p.description}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 text-sm mt-3 inline-block hover:text-blue-300"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
