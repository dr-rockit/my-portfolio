import Image from "next/image";

export default function ProcessSection({ project }) {
  if (!project.processSections && !project.processImage) return null;

  const sections = project.processSections || [
    {
      image: project.processImage,
      title: project.processTitle,
      text: project.processText,
      sectionTitle: project.processSectionTitle
    }
  ];

  return (
    <section className="px-4 md:px-8 max-w-350 mx-auto mb-32">
       <div className="flex items-center gap-4 mb-16">
           <span className="text-sm font-mono text-teal-400">[ PROCESS_LOG ]</span>
           <div className="h-px bg-white/10 grow"></div>
       </div>

       {project.videos?.map((vid, i) => (
         <div key={i} className="mb-24">
            <div className="relative w-full aspect-video border border-white/10 bg-black">
               <iframe
                 src={vid}
                 className="absolute inset-0 w-full h-full"
                 allowFullScreen
               />
            </div>
         </div>
       ))}

       {sections.map((proc, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
             <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                {proc.image && (
                  <div className="relative aspect-video border border-white/5">
                    <Image src={proc.image} alt="Process" fill className="object-cover" />
                  </div>
                )}
             </div>
             <div className="space-y-6">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                   {proc.sectionTitle || "Process"}
                </span>
                <h3 className="text-3xl font-serif italic text-white">
                   {proc.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                   {proc.text}
                </p>
             </div>
          </div>
       ))}
    </section>
  );
}