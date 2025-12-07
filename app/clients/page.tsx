import Link from 'next/link';
import { 
  Globe, 
  Wind, 
  Settings, 
  Factory,
  ArrowRight,
} from 'lucide-react';

export default function ClientsPage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'invert(1)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-6 py-2 rounded-full text-blue-400 text-sm font-mono tracking-widest uppercase mb-8">
            <Globe size={16} /> Global Industrial Footprint
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-600">
            TRUSTED BY <br />
            GIANTS
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            We serve as the manufacturing backbone for the world's leading energy and infrastructure conglomerates.
          </p>
        </div>
      </section>

      {/* 2. INFINITE SCROLLING MARQUEE (Text Version for Backup) */}
      <section className="py-10 border-y border-white/5 bg-slate-900/50 overflow-hidden relative">
         <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
         <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
         
         <div className="flex animate-scroll whitespace-nowrap gap-16 items-center">
            <MarqueeItem text="VESTAS" />
            <MarqueeItem text="SUZLON" />
            <MarqueeItem text="SIEMENS" />
            <MarqueeItem text="LARSEN & TOUBRO" />
            <MarqueeItem text="DANIELI" />
            <MarqueeItem text="ALSTOM" />
            {/* Loop */}
            <MarqueeItem text="VESTAS" />
            <MarqueeItem text="SUZLON" />
            <MarqueeItem text="SIEMENS" />
            <MarqueeItem text="LARSEN & TOUBRO" />
            <MarqueeItem text="DANIELI" />
            <MarqueeItem text="ALSTOM" />
         </div>
      </section>

      {/* 3. CLIENT LOGO GRID (The Real Images) */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* SECTOR 1: WIND ENERGY */}
          <SectorGroup title="Wind Energy Majors" icon={<Wind className="text-green-500" size={32} />}>
             {/* Make sure these files exist in public/clients/ */}
             <LogoCard src="/clients/vestas.png" name="Vestas" />
             <LogoCard src="/clients/suzlon.png" name="Suzlon" />
             <LogoCard src="/clients/regen.png" name="ReGen Powertech" />
             <LogoCard src="/clients/pioneer.png" name="Pioneer Asia" />
             <LogoCard src="/clients/global.png" name="Global Wind Power" />
             <LogoCard src="/clients/tpi.png" name="TPI Composites" />
             <LogoCard src="/clients/gamesa.png" name="Gamesa" />
             <LogoCard src="/clients/nordex.png" name="Nordex" />
          </SectorGroup>

          {/* SECTOR 2: HEAVY ENGINEERING */}
          <SectorGroup title="Heavy Engineering & Construction" icon={<Factory className="text-orange-500" size={32} />}>
             <LogoCard src="/clients/lt.png" name="Larsen & Toubro" />
             <LogoCard src="/clients/flsmidth.png" name="FLSmidth" />
             <LogoCard src="/clients/eimco.png" name="EIMCO KCP" />
             <LogoCard src="/clients/boldrocchi.png" name="Boldrocchi" />
          </SectorGroup>

          {/* SECTOR 3: MACHINERY & COMPONENTS */}
          <SectorGroup title="Machinery & Systems" icon={<Settings className="text-purple-500" size={32} />}>
             <LogoCard src="/clients/danieli.png" name="Danieli" />
             <LogoCard src="/clients/alstom.png" name="Alstom" />
             <LogoCard src="/clients/siemens.png" name="Siemens" />
             <LogoCard src="/clients/fives.png" name="Fives" />
             <LogoCard src="/clients/flexco.png" name="Flexco" />
             <LogoCard src="/clients/bsh.png" name="B/S/H/" />
             <LogoCard src="/clients/flender.png" name="Flender" />
          </SectorGroup>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 text-center border-t border-white/10">
        <h2 className="text-2xl text-slate-400 mb-8 font-light">Join our list of satisfied partners</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-300">
           Become a Partner <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}

// --- COMPONENTS ---

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="text-2xl font-black text-slate-700 uppercase tracking-widest px-8">
      {text}
    </span>
  )
}

function SectorGroup({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-4">
         <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            {icon}
         </div>
         <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
         {children}
      </div>
    </div>
  )
}

function LogoCard({ src, name }: { src: string, name: string }) {
  return (
    <div className="group relative bg-white h-32 rounded-xl flex flex-col items-center justify-center p-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-default shadow-lg hover:shadow-blue-500/20 overflow-hidden">
       
       {/* THE IMAGE LOGO */}
       <img 
         src={src} 
         alt={name} 
         className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
       />
       
       {/* Fallback Text (Hidden if image loads, usually) */}
       <span className="sr-only">{name}</span>
    </div>
  )
}