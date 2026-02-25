import Image from "next/image";

export default function GallerySection({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="px-4 md:px-8 mb-32">
      <div className="max-w-350 mx-auto">
         <div className="flex items-center gap-4 mb-12">
           <span className="text-sm font-mono text-teal-400">[ VISUAL_DATA ]</span>
           <div className="h-px bg-white/10 grow"></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {images.map((img, index) => (
             <div 
               key={index}
               className={`relative w-full aspect-video ${
                 (index + 1) % 3 === 0 ? "md:col-span-2" : ""
               }`}
             >
               <Image
                 src={img}
                 alt={`Gallery ${index}`}
                 fill
                 className="object-cover md:grayscale md:hover:grayscale-0 transition-all duration-700 ease-out"
               />
               <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-2 py-1 border border-white/10">
                  <span className="text-[10px] font-mono text-teal-400">
                    FIG_0{index + 1}
                  </span>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}