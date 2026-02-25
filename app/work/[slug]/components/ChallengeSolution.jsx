export default function ChallengeSolution({ challenge, solution }) {
  return (
    <section className="px-4 md:px-8 max-w-350 mx-auto mb-32 space-y-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
         <div className="md:col-span-4">
            <div className="sticky top-32">
               <h2 className="text-sm font-mono text-teal-400 mb-4 tracking-widest uppercase">
                 01 / The Challenge
               </h2>
               <div className="h-px w-12 bg-white/20"></div>
            </div>
         </div>
         <div className="md:col-span-8">
            <p className="text-xl md:text-3xl font-serif leading-relaxed text-gray-200">
              <span className="float-left text-6xl md:text-7xl font-serif text-teal-400 mr-2 mt-4 leading-[0.8]">
                {challenge.charAt(0)}
              </span>
              {challenge.slice(1)}
            </p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
         <div className="md:col-span-4">
            <div className="sticky top-32">
               <h2 className="text-sm font-mono text-teal-400 mb-4 tracking-widest uppercase">
                 02 / The Solution
               </h2>
               <div className="h-px w-12 bg-white/20"></div>
            </div>
         </div>
         <div className="md:col-span-8">
            <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-gray-400">
              {solution}
            </p>
         </div>
      </div>
    </section>
  );
}