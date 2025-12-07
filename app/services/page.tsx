import Link from 'next/link';
import { 
  Anvil, 
  Ruler, 
  Flame, 
  Truck, 
  Wrench, 
  Factory, 
  ClipboardCheck, 
  Zap,
  Box,
  ArrowRight
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. HERO SECTION: Technical & Clean */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: 'linear-gradient(#4a5568 1px, transparent 1px), linear-gradient(90deg, #4a5568 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase text-xs mb-4">
            <Zap size={14} /> Operational Capabilities
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">ARSENAL</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
            We don't just fabricate; we engineer solutions. From 100-Ton hydraulic pressing to micron-level precision machining, here is how we execute complex projects.
          </p>
        </div>
      </section>

      {/* 2. CORE SERVICE DOMAINS (Grid Layout) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Service Domains</h2>
          <p className="text-slate-500">Comprehensive fabrication solutions extracted from our ISO 9001 certified portfolio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Wind Energy */}
          <ServiceCard 
            icon={<Zap size={32} />}
            title="Wind Energy Components"
            desc="Specialized fabrication for the renewable energy sector."
            items={[
              "Windmill Tower Internals & Accessories",
              "Blade Cutting Fixtures & Transport Frames",
              "Gear Box Supporting Systems",
              "Gyroscopic Tables for Blade Transportation"
            ]}
          />

          {/* Card 2: Process Equipment */}
          <ServiceCard 
            icon={<Factory size={32} />}
            title="Heavy Process Equipment"
            desc="Manufacturing of pressure-retaining components for refineries."
            items={[
              "Pressure Vessels (Carbon & Stainless Steel)",
              "Heat Exchangers & Heater Coils",
              "Boiler Supporting Components",
              "Air Piping & Columns"
            ]}
          />

          {/* Card 3: EPC & Infrastructure */}
          <ServiceCard 
            icon={<Truck size={32} />}
            title="EPC & Turnkey Projects"
            desc="End-to-end execution from design to commissioning."
            items={[
              "Turnkey Project Execution (Design to Install)",
              "Smart Urban Infrastructure (Parking Systems)",
              "Structural Steel Works for Chimneys & Tanks",
              "Pipeline Erection & Commissioning"
            ]}
          />

          {/* Card 4: Specialized Services */}
          <ServiceCard 
            icon={<Wrench size={32} />}
            title="Reconditioning & Maintenance"
            desc="Extending the lifecycle of heavy industrial machinery."
            items={[
              "Reconditioning of Transport Frames",
              "Machinery Refurbishment",
              "Valve Testing & Calibration",
              "Blasting & Coating Services"
            ]}
          />

        </div>
      </section>

      {/* 3. THE MACHINE ARSENAL (Data Visualization Style) */}
      <section className="bg-slate-900 text-white py-24 px-6 border-y border-red-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">The Machine Arsenal</h2>
                <p className="text-slate-400">Powered by 121 HP capacity across 3 units.</p>
             </div>
             {/* Decorative Tech Lines */}
             <div className="hidden md:block w-1/3 h-px bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MachineStat 
              title="Plate Rolling" 
              value="12mm" 
              sub="Max Thickness (1400mm Width)" 
              icon={<Ruler className="text-red-500" />} 
            />
            <MachineStat 
              title="Hydraulic Press" 
              value="100 Tons" 
              sub="Premier Machineries" 
              icon={<Anvil className="text-red-500" />} 
            />
             <MachineStat 
              title="Handling Capacity" 
              value="10 Tons" 
              sub="Overhead EOT Cranes" 
              icon={<Box className="text-red-500" />} 
            />
            <MachineStat 
              title="Welding Power" 
              value="630 Amps" 
              sub="MIG / TIG / ARC (ESAB/Lorch)" 
              icon={<Flame className="text-red-500" />} 
            />
          </div>
          {/* Detailed Machinery List (Scrollable / Tech look) */}
          <div className="mt-16 border border-slate-700 rounded-xl overflow-hidden bg-slate-800/50">
            <div className="p-4 bg-slate-800 border-b border-slate-700 font-bold text-slate-300 flex justify-between">
              <span>FULL EQUIPMENT LIST</span>
              <span className="text-red-500 text-xs tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> LIVE STATUS: OPERATIONAL
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 text-sm text-slate-400">
              {/* LEFT COLUMN: The New High-Tech Machines */}
              <ul className="p-6 space-y-4 border-b md:border-b-0 md:border-r border-slate-700">
                <li className="flex justify-between items-center">
                  <span>Tailift Fibre Laser (Model A6525)</span> 
                  <span className="text-white font-mono bg-slate-700 px-2 py-1 rounded">6000 Watts</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Yaskawa GP25 Robot Arm</span> 
                  <span className="text-white font-mono bg-slate-700 px-2 py-1 rounded">6-Axis / 25kg</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Hydraulic Press Brake</span> 
                  <span className="text-white font-mono bg-slate-700 px-2 py-1 rounded">200 Ton CNC</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Plate Rolling Machine</span> 
                  <span className="text-slate-300">Punjab Machines (12mm)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Radial Drilling (52mm)</span> 
                  <span className="text-slate-300">Prakash</span>
                </li>
              </ul>

              {/* RIGHT COLUMN: Standard Fleet */}
              <ul className="p-6 space-y-4">
                <li className="flex justify-between items-center">
                  <span>MIG Welding (x7 Units)</span> 
                  <span className="text-slate-300">Migatronic</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>TIG Welding (x6 Units)</span> 
                  <span className="text-slate-300">Lorch / APS</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Bandsaw Cutter (3000x27)</span> 
                  <span className="text-slate-300">Laxson</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Pug Cutting (150mm thk)</span> 
                  <span className="text-slate-300">Koike</span>
                </li>
                 <li className="flex justify-between items-center">
                  <span>Power Generator</span> 
                  <span className="text-slate-300">62.5 KVA</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </section>

      {/* 4. QUALITY & MATERIALS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Quality Control */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ClipboardCheck className="text-red-600" /> Quality Assurance
            </h3>
            <p className="text-slate-600 mb-6">
              Our quality lab is equipped with Mitutoyo instruments to ensure micron-level precision.
            </p>
            <div className="space-y-4">
              <QualityItem label="NDT Testing" value="Ultrasonic (UT) & Magnetic Particle (MPT)" />
              <QualityItem label="Precision Measurement" value="Digital Vernier Calipers (0-450mm)" />
              <QualityItem label="Micrometers" value="OD Micrometers (0-50mm)" />
              <QualityItem label="Calibration" value="Radius Gauges & Bevel Protractors" />
            </div>
          </div>

          {/* Materials */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Box className="text-red-600" /> Material Expertise
            </h3>
            <p className="text-slate-600 mb-6">
              We are experts in handling exotic and standard metallurgy for diverse environments.
            </p>
            <div className="flex flex-wrap gap-3">
              <MaterialTag text="Stainless Steel" />
              <MaterialTag text="Carbon Steel" />
              <MaterialTag text="Alloy Steel" />
              <MaterialTag text="Duplex Steel" />
              <MaterialTag text="Aluminum" />
              <MaterialTag text="IS 2062 Grades" />
            </div>
            
            <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
               <h4 className="font-bold text-red-900 mb-2">Need a Custom Specification?</h4>
               <p className="text-red-700 text-sm mb-4">We customize fabrication based on client-specific metallurgy requirements.</p>
               <Link href="/contact" className="text-red-600 font-bold text-sm flex items-center hover:underline">
                 Contact Engineering Team <ArrowRight size={16} className="ml-2" />
               </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

// --- HELPER COMPONENTS (Paste these at the bottom) ---

function ServiceCard({ icon, title, desc, items }: { icon: any, title: string, desc: string, items: string[] }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-500 transition-all group">
      <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 mb-6 text-sm">{desc}</p>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-slate-700 font-medium text-sm">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function MachineStat({ title, value, sub, icon }: { title: string, value: string, sub: string, icon: any }) {
  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-red-500 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider">{title}</h4>
        {icon}
      </div>
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className="text-slate-500 text-xs">{sub}</div>
    </div>
  )
}

function QualityItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-slate-100">
      <span className="font-bold text-slate-700">{label}</span>
      <span className="text-slate-500 text-sm text-right">{value}</span>
    </div>
  )
}

function MaterialTag({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 bg-slate-100 text-slate-700 font-bold text-sm rounded-lg border border-slate-200">
      {text}
    </span>
  )
}