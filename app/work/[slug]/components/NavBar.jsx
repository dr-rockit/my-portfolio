import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";

export default function NavBar({ slug }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-4 md:px-8 py-6 flex justify-between items-center mix-blend-difference">
      <Link 
        href="/" 
        className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-teal-400 transition-colors"
      >
        <RiArrowLeftLine className="group-hover:-translate-x-1 transition-transform" />
        [ Back_To_Archive ]
      </Link>
      <span className="hidden md:block text-xs font-mono text-white/30">
        CASE_ID: {slug?.toUpperCase()}
      </span>
    </nav>
  );
}