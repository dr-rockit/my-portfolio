// components/WorkButton.js

export default function WorkButton() {
  return (
    <div className="fixed top-6 right-6 z-50">
      <a
        href="mailto:ianjfears@gmail.com"
        className="
          btn btn-ghost
          flex items-center gap-3
          rounded-full
          border border-white/10
          bg-white/5
          px-6 py-2
          text-sm font-medium text-white
          backdrop-blur-md
          transition-all duration-300
          hover:border-teal-600 hover:bg-white/10 hover:scale-105
        "
      >
        {/* Status Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
        </span>

        <span>Available for work</span>
      </a>
    </div>
  );
}
