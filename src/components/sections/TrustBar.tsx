export default function TrustBar() {
  return (
    <section className="flex flex-col items-center gap-lg border-y border-white/5 py-lg my-md">
      <h2 className="font-mono-tag text-mono-tag text-zinc-600 uppercase tracking-[0.2em] text-[10px]">POWERED BY AN ELITE TECH ECOSYSTEM</h2>
      {/* Note: Ensure file extensions (.svg vs .png) and exact casing match your
          public/assets/ folder perfectly, as GitHub Pages is case-sensitive. */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-2xl opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Flutter */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface justify-center">
          <img src="/Usama-Protfolio/assets/pngwing.com.png" alt="Flutter" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Flutter
        </div>
        {/* Dart */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface justify-center">
          <img src="/Usama-Protfolio/assets/dart.png" alt="Dart" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Dart
        </div>
        {/* JavaScript */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface justify-center">
          <img src="/Usama-Protfolio/assets/javascript-svgrepo-com.svg" alt="JavaScript" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          JavaScript
        </div>
        {/* Node.js */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface justify-center">
          <img src="/Usama-Protfolio/assets/nodejs-alt.png" alt="Node.js" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Node.js
        </div>
        {/* Firebase */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface justify-center">
          <img src="/Usama-Protfolio/assets/firebase.png" alt="Firebase" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Firebase
        </div>
        {/* Supabase */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface justify-center">
          <img src="/Usama-Protfolio/assets/supabase.png" alt="Supabase" className="w-5 h-5 object-contain grayscale brightness-0 invert opacity-50" />
          Supabase
        </div>
        {/* AI Tooling — no asset, keep Material Symbol */}
        <div className="flex items-center gap-2 font-['Inter'] text-sm font-medium text-on-surface justify-center">
          <span className="material-symbols-outlined text-xl">auto_awesome</span>
          AI Tooling
        </div>
      </div>
    </section>
  );
}
