export default function TrustBar() {
  return (
    <section className="flex flex-col items-center gap-4 border-y border-white/5 py-6 md:py-lg my-4 md:my-md">
      <h2 className="font-mono-tag text-mono-tag text-zinc-600 uppercase tracking-[0.2em] text-[10px]">POWERED BY AN ELITE TECH ECOSYSTEM</h2>
      {/* Note: Ensure file extensions (.svg vs .png) and exact casing match your
          public/assets/ folder perfectly, as GitHub Pages is case-sensitive. */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-12 mt-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Flutter */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface">
          <img src="/Usama-Protfolio/assets/pngwing.com.png" alt="Flutter" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Flutter
        </div>
        {/* Dart */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface">
          <img src="/Usama-Protfolio/assets/dart2.svg" alt="Dart" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Dart
        </div>
        {/* JavaScript */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface">
          <img src="/Usama-Protfolio/assets/js2.svg" alt="JavaScript" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          JavaScript
        </div>
        {/* Node.js */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface">
          <img src="/Usama-Protfolio/assets/nodejs-alt.png" alt="Node.js" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Node.js
        </div>
        {/* Firebase */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface">
          <img src="/Usama-Protfolio/assets/firebase.png" alt="Firebase" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Firebase
        </div>
        {/* Supabase */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface">
          <img src="/Usama-Protfolio/assets/supabase.png" alt="Supabase" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Supabase
        </div>
        {/* AI Tooling — no asset, keep Material Symbol */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface">
          <span className="material-symbols-outlined text-xl">auto_awesome</span>
          AI Tooling
        </div>
      </div>
    </section>
  );
}

