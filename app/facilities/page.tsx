import Link from 'next/link';
import { 
  Factory, 
  Scan, 
  Box, 
  Wind, 
  Maximize, 
  Grid, 
  PenTool, 
  Zap,
  CheckCircle,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

export default function FacilitiesPage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-red-500 selection:text-white">
      
      {/* 1. HERO SECTION: 3D Map Style */}
      <section className="relative py-32 px-6 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
           {/* Grid Background */}
           <div className="absolute inset-0 opacity-10" 
                style={{backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
           </div>
           {/* Radar Pulse Animation */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <MapPin size={12} /> Strategic Industrial Network
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6">
            INFRASTRUCTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-500">
              ECOSYSTEM
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Three specialized units covering 6+ Acres of manufacturing excellence. From micron-level precision to massive structural fabrication.
          </p>
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto border-t border-slate-800 pt-8">
            <QuickStat label="Total Area" value="6+ Acres" />
            <QuickStat label="Throughput" value="10k Tons/Yr" />
            <QuickStat label="Man Hours" value="1 Million+" />
            <QuickStat label="Tech Level" value="Industry 4.0" />
          </div>
        </div>
      </section>

      {/* 2. UNIT 1: THE PRECISION HUB (Glassmorphism) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <UnitBadge unit="01" type="Precision Hub" />
            <h2 className="text-4xl font-bold mb-6">Ekkattuthangal Facility</h2>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              Our engineering command center. This facility is dedicated to high-precision tasks involving exotic metallurgy (Carbon, SS, Aluminium). It houses our advanced Metrology and CAD/CAM design capabilities.
            </p>
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                <Scan size={18} /> Advanced Capabilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <TechSpec label="Design" value="Full CAD/CAM Suite" />
                <TechSpec label="Metrology" value="CMM Inspection" />
                <TechSpec label="Cutting" value="Laser & Spark Erosion" />
                <TechSpec label="Machining" value="CNC Turning & Milling" />
              </div>
            </div>
          </div>

          {/* Visual/Card */}
          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-[80px] opacity-20"></div>
             <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-blue-500 transition-colors duration-500 group">
                <div className="flex justify-between items-start mb-8">
                   <Grid size={48} className="text-blue-500" />
                   <span className="text-5xl font-black text-slate-800 group-hover:text-slate-700 transition-colors">01</span>
                </div>
                <div className="space-y-4">
                   <FeatureRow text="Surface Grinding & Milling" />
                   <FeatureRow text="Prototyping Support (R&D)" />
                   <FeatureRow text="Material Optimization Lab" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. UNIT 2: THE HEAVY YARD (Industrial / Rugged Look) */}
      <section className="py-24 px-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Card */}
          <div className="relative">
             <div className="absolute inset-0 bg-orange-600 rounded-3xl blur-[80px] opacity-10"></div>
             <div className="relative bg-black border border-slate-800 rounded-3xl p-8 hover:border-orange-500 transition-colors duration-500 group">
                <div className="flex justify-between items-start mb-8">
                   <Factory size={48} className="text-orange-500" />
                   <span className="text-5xl font-black text-slate-800 group-hover:text-slate-700 transition-colors">02</span>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                   <BigStat val="1 Acre" lbl="Yard Space" />
                   <BigStat val="25k" lbl="Sq.Ft Covered" />
                   <BigStat val="10k" lbl="Tons / Year" />
                   <BigStat val="1M+" lbl="Man Hours" />
                </div>
             </div>
          </div>

          {/* Text Content */}
          <div>
            <UnitBadge unit="02" type="Heavy Fabrication" color="orange" />
            <h2 className="text-4xl font-bold mb-6">Sriperumbuthur Integrated Yard</h2>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              A massive 1-acre complex designed for scale. This facility handles end-to-end heavy structural fabrication, complete with in-house sandblasting and coating zones.
            </p>
            <p className="text-slate-500 mb-8 border-l-2 border-orange-500 pl-4 italic">
              "High quality craftsmanship with safety standards ensuring delivery to the highest levels of integrity."
            </p>

            <div className="space-y-3">
              <CheckItem text="Complete E&I Testing & Calibration Setup" />
              <CheckItem text="Dedicated Blasting & Painting Zones (4000 sqft)" />
              <CheckItem text="Heavy Pipeline Fabrication Lines" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. UNIT 3: THE FUTURE HUB (Futuristic / Red Theme) */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <UnitBadge unit="03" type="Smart Infrastructure Park" color="red" />
             <h2 className="text-5xl md:text-7xl font-black mt-4 mb-6">VALLAM VADAGAL</h2>
             <div className="inline-block bg-red-900/30 border border-red-500/30 text-red-400 px-4 py-2 rounded font-mono text-sm">
                STATUS: INAUGURATED 2025 // NEXT-GEN HUB
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Scale */}
            <div className="bg-slate-900/80 backdrop-blur border border-red-500/20 p-8 rounded-2xl hover:bg-red-900/10 transition-colors">
               <Maximize className="text-red-500 mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-2">Massive Scale</h3>
               <p className="text-slate-400">
                 Spread across <span className="text-white font-bold">6 Acres</span> with a 40,000 sq.ft manufacturing shed and 10,000 sq.ft dedicated office complex.
               </p>
            </div>

            {/* Card 2: Product */}
            <div className="bg-red-600 text-white p-8 rounded-2xl shadow-2xl shadow-red-900/50 scale-105 z-10">
               <Zap className="text-white mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-2">Smart Mobility Hub</h3>
               <p className="text-red-100">
                 The dedicated manufacturing headquarters for our <strong>Automated Car Parking Systems</strong>. Where urban innovation meets heavy steel.
               </p>
            </div>

            {/* Card 3: Vision */}
            <div className="bg-slate-900/80 backdrop-blur border border-red-500/20 p-8 rounded-2xl hover:bg-red-900/10 transition-colors">
               <PenTool className="text-red-500 mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-2">Design Studio</h3>
               <p className="text-slate-400">
                 Integrated R&D center for developing next-generation structural solutions and custom fabrication prototypes.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GLOBAL FOOTPRINT CTA */}
      <section className="py-20 border-t border-slate-900 text-center">
         <h2 className="text-2xl text-slate-400 mb-8">Ready to leverage our infrastructure?</h2>
         <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors">
            Schedule a Facility Visit <ArrowUpRight size={20} />
         </Link>
      </section>

    </div>
  );
}

// --- VISUAL COMPONENTS (Copy these to bottom) ---

function QuickStat({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-4 border border-slate-800 rounded-lg hover:border-slate-600 transition-colors">
      <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</div>
      <div className="text-xl md:text-2xl font-bold text-white">{value}</div>
    </div>
  )
}

function UnitBadge({ unit, type, color = "blue" }: { unit: string, type: string, color?: string }) {
  const colors: Record<string, string> = {
    blue: "text-blue-500 border-blue-500/30 bg-blue-500/10",
    orange: "text-orange-500 border-orange-500/30 bg-orange-500/10",
    red: "text-red-500 border-red-500/30 bg-red-500/10",
  };
  return (
    <div className={`inline-flex items-center gap-2 border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${colors[color] || colors.blue}`}>
      <span className="font-mono">UNIT {unit}</span> • {type}
    </div>
  )
}

function TechSpec({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col">
       <span className="text-slate-500 text-xs">{label}</span>
       <span className="text-slate-200 font-mono text-sm">{value}</span>
    </div>
  )
}

function FeatureRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
      <span>{text}</span>
    </div>
  )
}

function BigStat({ val, lbl }: { val: string, lbl: string }) {
  return (
    <div>
       <div className="text-3xl font-black text-white">{val}</div>
       <div className="text-slate-500 text-xs uppercase">{lbl}</div>
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <CheckCircle size={18} className="text-orange-500 shrink-0" />
      <span>{text}</span>
    </div>
  )
}