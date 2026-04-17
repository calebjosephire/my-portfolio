import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">Hey, I'm Caleb.</h1>
        <p className="mt-4 text-slate-300">
          Media producer & digital media student at UCF.
        </p>
      </motion.div>

      <motion.img
        src={hero}
        alt="hero"
        className="rounded-xl border border-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </section>
  );
}
