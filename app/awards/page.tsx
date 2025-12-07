import Link from 'next/link';
import { 
  Trophy, 
  Award, 
  ShieldCheck, 
  FileBadge, 
  Star, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function AwardsPage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      
      {/* 1. HERO SECTION: Hall of Fame */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Golden Glow Background */}
        <div className="absolute top-0 center w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-yellow-600/20 via-slate-950 to-slate-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 rounded-full text-yellow-500 text-sm font-mono tracking-widest uppercase mb-8">
            <Trophy size={16} /> Recognition of Excellence
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
            HALL OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700">
              ACHIEVEMENT
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Honored by global leaders for our commitment to Quality, Delivery, and Engineering Precision.
          </p>
        </div>
      </section>

      {/* 2. FEATURED AWARD: VESTAS (Hero Card) */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
           <div className="relative bg-gradient-to-br from-slate-900 to-black border border-yellow-500/50 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-[0_0_100px_rgba(234,179,8,0.15)] group hover:scale-[1.01] transition-transform duration-500">
              
              {/* Decorative Ribbon */}
              <div className="absolute top-0 right-0 bg-yellow-600 text-black font-bold px-12 py-2 rotate-45 translate-x-12 translate-y-8 shadow-lg">
                 WINNER
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <div className="flex items-center gap-4 mb-6">
                        <Award size={64} className="text-yellow-500" />
                        <div className="h-px flex-grow bg-yellow-500/30"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Certificate of Excellence</h2>
                    <p className="text-xl text-yellow-500 font-mono mb-6">Awarded by M/s. Vestas Wind Technology</p>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                       Presented during the Vendor Meet for meritorious performance in heavy fabrication. This award stands as a testament to our partnership with the world's leading wind energy company[cite: 231, 239].
                    </p>
                    <div className="flex flex-wrap gap-4">
                       <Badge text="Meritorious Performance" />
                       <Badge text="Supply Chain Excellence" />
                    </div>
                 </div>
                 
                 {/* Visual Representation of Certificate */}
                 <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm relative rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="border-4 border-double border-yellow-600/30 h-full p-8 flex flex-col items-center justify-center text-center bg-slate-900/50">
                       <Trophy size={48} className="text-yellow-600 mb-4" />
                       <h3 className="font-serif text-2xl text-yellow-500 mb-2">Trimaax Technologies</h3>
                       <div className="h-px w-20 bg-yellow-600 my-4"></div>
                       <p className="text-lg text-white font-bold mb-2">"For Meritorious Performance"</p>
                       <p className="text-sm text-slate-400">Vendor Meet 2007</p>
                       <p className="text-xs text-slate-500 mt-8 uppercase tracking-widest">Signed: Managing Director, Vestas India</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. CERTIFICATIONS GRID (ISO & SSI) */}
      <section className="py-24 px-6 bg-slate-900 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-200">Corporate Accreditations</h2>
            <div className="grid md:grid-cols-2 gap-8 perspective-1000">
               
               {/* ISO CARD */}
               <div className="group relative bg-slate-950 border border-slate-800 p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-8">
                     <div className="p-4 bg-blue-900/20 rounded-2xl text-blue-500">
                        <ShieldCheck size={40} />
                     </div>
                     <span className="text-5xl font-black text-slate-800 group-hover:text-blue-900/50 transition-colors">ISO</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">ISO 9001:2015</h3>
                  <p className="text-blue-400 text-sm font-mono mb-6 uppercase">BMQR Certified • No: AB09IS183850/R1</p>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                     Certified for the scope of Manufacture and Supply of Heavy Metal Fabrication, Wind Mill Tower Internals, Blade Accessories, and Pressure Vessels [cite: 193-194].
                  </p>
                  <ul className="space-y-3">
                     <CheckItem text="BMQR Accredited" />
                     <CheckItem text="Quality Management System" />
                     <CheckItem text="International Standard" />
                  </ul>
               </div>

               {/* SSI CARD */}
               <div className="group relative bg-slate-950 border border-slate-800 p-10 rounded-3xl hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-8">
                     <div className="p-4 bg-green-900/20 rounded-2xl text-green-500">
                        <FileBadge size={40} />
                     </div>
                     <span className="text-5xl font-black text-slate-800 group-hover:text-green-900/50 transition-colors">GOV</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">SSI / MSME Registered</h3>
                  <p className="text-green-400 text-sm font-mono mb-6 uppercase">Govt of Tamil Nadu • Reg: 330291370</p>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                     Permanently registered as a Small Scale Industry (SSI) for General Engineering Fabrication and Windmill Accessories[cite: 268, 296].
                  </p>
                  <ul className="space-y-3">
                     <CheckItem text="Directorate of Industries Recognized" />
                     <CheckItem text="UDYAM Registered" />
                     <CheckItem text="Official Fabrication Unit" />
                  </ul>
               </div>

            </div>
         </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl text-slate-400 mb-8 font-light">Work with a certified partner.</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300">
           Request Copies <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}

// --- COMPONENTS ---

function Badge({ text }: { text: string }) {
   return (
      <span className="px-4 py-2 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded-full border border-yellow-500/20 uppercase tracking-wider flex items-center gap-2">
         <Star size={12} fill="currentColor" /> {text}
      </span>
   )
}

function CheckItem({ text }: { text: string }) {
   return (
      <li className="flex items-center gap-3 text-slate-300">
         <CheckCircle size={18} className="text-slate-600 group-hover:text-white transition-colors" />
         {text}
      </li>
   )
}