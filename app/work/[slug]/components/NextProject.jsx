import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function NextProject({ nextProject }) {
  if (!nextProject) return null;

  return (
    <Link href={`/work/${nextProject.slug}`} className="block group relative border-t border-white/10">
       <div className="min-h-[50vh] flex flex-col justify-center items-center text-center px-4 py-20 bg-neutral transition-colors duration-500 group-hover:bg-neutral-900">
          <span className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest">
             [ Next_Case_Study ]
          </span>
          <h2 className="font-serif italic text-[10vw] leading-none text-white group-hover:text-teal-400 transition-colors duration-300">
             {nextProject.title}
          </h2>
          <div className="mt-8 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
             <span className="uppercase tracking-widest text-sm">View Project</span>
             <RiArrowRightUpLine size={20} />
          </div>
       </div>
    </Link>
  );
}