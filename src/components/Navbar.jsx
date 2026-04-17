import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 bg-slate-900/80 backdrop-blur border-b border-slate-800 z-50">
      <nav className="max-w-5xl mx-auto h-16 flex items-center justify-between px-4">
        <h1 className="font-bold text-lg">Caleb Hill</h1>

        <div className="flex gap-3">
          <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
          <NavLink to="/about" className="hover:text-blue-400">About</NavLink>
          <NavLink to="/projects" className="hover:text-blue-400">Projects</NavLink>
          <NavLink to="/contact" className="hover:text-blue-400">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
