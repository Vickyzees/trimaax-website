import Link from 'next/link';
import { 
  Box, 
  Wind, 
  Zap, 
  Layers, 
  ArrowUpRight, 
  Anchor, 
  Settings, 
  ShieldCheck,
  Maximize
} from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-red-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: 3D Text & Depth */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Grid Floor Effect */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{
                 backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                 backgroundSize: '100px 100px',
                 transform: 'perspective(1000px) rotateX(60deg) translateY(200px) scale(2)'
             }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full text-sm font-mono tracking-[0.3em] mb-8 text-slate-300">
            ENGINEERED HARDWARE V.2025
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 drop-shadow-2xl">
            PRECISION <br />
            <span className="text-stroke-white">MATRIX</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            From Gyroscopic Transport Tables to High-Pressure ASME Vessels. Explore the engineering backbone of Trimaax.
          </p>
        </div>
      </section>

      {/* 2. DIVISION 01: RENEWABLE ENERGY (3D TILT CARDS) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
             <div>
                <h3 className="text-blue-500 font-bold tracking-widest uppercase mb-2">Division 01</h3>
                <h2 className="text-4xl md:text-5xl font-bold">Renewable Energy Systems</h2>
             </div>
             <Wind className="text-blue-500 w-12 h-12 opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            
            {/* 3D Card 1 */}
            <TiltCard 
              title="Gyroscopic Tables" 
              subtitle="Blade Transportation" 
              desc="Advanced stabilization fixtures for transporting 60m+ Windmill blades safely across terrains."
              icon={<Maximize size={32} className="text-blue-400" />}
              color="blue"
            />

            {/* 3D Card 2 */}
            <TiltCard 
              title="Tower Internals" 
              subtitle="Structural Core" 
              desc="Heavy-duty hexagonal frames, platforms, and aluminium supporting kits for 120m+ towers."
              icon={<Layers size={32} className="text-blue-400" />}
              color="blue"
            />

            {/* 3D Card 3 */}
            <TiltCard 
              title="Blade Fixtures" 
              subtitle="Cutting & Assembly" 
              desc="Precision-engineered 'Root End' and 'Tip End' fixtures for blade manufacturing lines."
              icon={<Settings size={32} className="text-blue-400" />}
              color="blue"
            />

          </div>
        </div>
      </section>

      {/* 3. DIVISION 02: PROCESS EQUIPMENT (Holographic List) */}
      <section className="py-32 px-6 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        {/* Background Noise Texture */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}}></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
             <div className="space-y-6">
                <HoloRow 
                   title="Pressure Vessels" 
                   spec="ASME SEC VIII Div 1" 
                   desc="Carbon Steel & Stainless Steel vessels tested for high-pressure industrial environments." 
                />
                <HoloRow 
                   title="Heat Exchangers" 
                   spec="Thermal Efficiency" 
                   desc="Shell & Tube type exchangers designed for refineries and power plants." 
                />
                <HoloRow 
                   title="Heater Coils" 
                   spec="High Temp Alloys" 
                   desc="Precision bent coils for thermal fluid heaters and boilers." 
                />
                <HoloRow 
                   title="Air Piping Systems" 
                   spec="Large Diameter" 
                   desc="Complex piping networks for heavy industrial airflow management." 
                />
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-red-500 font-bold tracking-widest uppercase mb-2">Division 02</h3>
            <h2 className="text-4xl md:text-6xl font-black mb-6">HEAVY <br />PROCESS</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We manufacture the critical organs of industrial plants. From holding immense pressure to transferring heat efficiently, our fabrication meets the strictest international codes.
            </p>
            <div className="inline-flex items-center gap-4">
               <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-white" size={32} />
               </div>
               <div>
                  <div className="font-bold text-white">100% Tested</div>
                  <div className="text-sm text-slate-500">Hydro & Radiography</div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. DIVISION 03: SMART MOBILITY (Showcase) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white text-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
               <Box size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Smart Parking Systems</h2>
            <p className="text-slate-400 text-lg mb-10">
              The future of urban infrastructure. Our Rotary, Tower, and Puzzle systems are solving the global space crisis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
               <div className="bg-slate-950/50 p-6 rounded-xl border border-white/5 hover:border-red-500/50 transition-colors">
                  <div className="text-red-500 font-bold mb-1">Rotary</div>
                  <div className="text-xs text-slate-500">Ferris Wheel Mechanism</div>
               </div>
               <div className="bg-slate-950/50 p-6 rounded-xl border border-white/5 hover:border-red-500/50 transition-colors">
                  <div className="text-red-500 font-bold mb-1">Tower</div>
                  <div className="text-xs text-slate-500">Vertical Lift Speed</div>
               </div>
               <div className="bg-slate-950/50 p-6 rounded-xl border border-white/5 hover:border-red-500/50 transition-colors">
                  <div className="text-red-500 font-bold mb-1">Puzzle</div>
                  <div className="text-xs text-slate-500">Multi-Level Logic</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 text-center border-t border-white/10">
        <h2 className="text-2xl text-slate-400 mb-8 font-light">Need specs for these products?</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-blue-400 hover:text-white transition-all duration-300">
           Request Catalogue <ArrowUpRight size={20} />
        </Link>
      </section>

    </div>
  );
}

// --- 3D VISUAL COMPONENTS (Paste at bottom) ---

function TiltCard({ title, subtitle, desc, icon, color }: { title: string, subtitle: string, desc: string, icon: any, color: string }) {
  return (
    <div className="group relative w-full h-full perspective-1000">
      <div className="relative h-full bg-slate-900 border border-white/10 p-8 rounded-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] overflow-hidden">
        
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] -mr-16 -mt-16 transition-opacity group-hover:opacity-100"></div>

        <div className="mb-6 p-4 bg-slate-950 rounded-xl inline-block border border-white/5 group-hover:border-blue-500/50 transition-colors">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">{subtitle}</p>
        <p className="text-slate-400 leading-relaxed text-sm">
          {desc}
        </p>

        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
           <span className="text-xs font-bold text-slate-500 group-hover:text-white transition-colors">VIEW SPECS</span>
           <ArrowUpRight size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
        </div>
      </div>
    </div>
  )
}

function HoloRow({ title, spec, desc }: { title: string, spec: string, desc: string }) {
  return (
    <div className="group flex items-start gap-6 p-6 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-red-500/30">
      <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 group-hover:bg-red-600 transition-colors shrink-0">
        <Zap size={20} className="text-slate-400 group-hover:text-white" />
      </div>
      <div>
         <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">{spec}</span>
         </div>
         <p className="text-slate-400 text-sm">{desc}</p>
      </div>
    </div>
  )
}