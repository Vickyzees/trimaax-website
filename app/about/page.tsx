import Link from 'next/link';
import { 
  History, 
  Target, 
  Award, 
  TrendingUp, 
  Users, 
  Globe, 
  Anchor, 
  Flame,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-amber-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: The Legacy */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/10 px-6 py-2 rounded-full text-amber-500 text-sm font-mono tracking-widest uppercase mb-8">
            <History size={16} /> Est. 2000 • Chennai, India
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
            25 YEARS OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
              INDUSTRIAL MASTERY
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            From a precision fabrication unit to a global EPIC (Engineering, Procurement, Installation & Commissioning) leader. We build the infrastructure that powers the world.
          </p>
        </div>
      </section>

      {/* 2. THE EVOLUTION STORY (Split Layout) */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Narrative */}
          <div>
             <h3 className="text-amber-500 font-bold tracking-widest uppercase mb-4">Our Genesis</h3>
             <h2 className="text-4xl font-bold mb-6">From Component Manufacturer to Turnkey Solution Provider</h2>
             <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                   Established in the year 2000 in Chennai, Trimaax Technologies began as a specialized fabrication unit. Our foundation was built on manufacturing critical <strong className="text-white">Carbon Steel Structures</strong> for Wind Mill Towers and heavy-duty Gear Box supporting components.
                </p>
                <p>
                   Today, we have evolved into a comprehensive EPIC entity. We don't just manufacture; we execute turnkey projects including Design, Procurement, Installation, and Commissioning for complex sectors like <strong className="text-white">Refineries, Power Plants, and Heavy Utilities</strong>.
                </p>
                <p>
                   Our workshops at Ekkattuthangal and Sriperumbuthur are supported by modern maintenance facilities, ensuring highest availability and precision.
                </p>
             </div>
             
             <div className="mt-8 flex gap-4">
                <StatBadge number="25+" label="Years Experience" />
                <StatBadge number="ISO" label="9001:2015 Certified" />
                <StatBadge number="EPIC" label="Turnkey Experts" />
             </div>
          </div>

          {/* Right: Visual Hologram Card */}
          <div className="relative group perspective-1000">
             <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <div className="relative bg-slate-900 border border-slate-700 p-8 rounded-3xl transform transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105 shadow-2xl">
                <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-4">
                   <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
                      <TrendingUp size={32} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold">Growth Trajectory</h4>
                      <p className="text-xs text-slate-500 uppercase">Continuous Expansion</p>
                   </div>
                </div>
                <ul className="space-y-4">
                   <Milestone year="2000" text="Established as Fabrication Unit" />
                   <Milestone year="2008" text="ISO 9001 Certification Achieved" />
                   <Milestone year="2015" text="Expansion to Oil & Gas Sectors" />
                   <Milestone year="2020" text="Commissioned Sriperumbuthur Yard" />
                   <Milestone year="2025" text="Launch of Smart Parking Systems" />
                </ul>
             </div>
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION (3D Glass Cards) */}
      <section className="py-24 px-6 bg-slate-900 border-y border-white/5 relative overflow-hidden">
         {/* Texture */}
         <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")'}}></div>
         
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 perspective-1000">
               
               {/* Vision Card */}
               <div className="group relative h-full bg-slate-950 border border-slate-800 p-10 rounded-3xl hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2">
                  <div className="mb-6 inline-flex p-4 rounded-full bg-slate-900 border border-slate-700 text-amber-500 group-hover:text-white group-hover:bg-amber-500 transition-colors">
                     <Globe size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                     To be the customer's most valued and preferred business partner by delivering leading-edge solutions in heavy fabrication that provide the highest value to our global clients.
                  </p>
               </div>

               {/* Mission Card */}
               <div className="group relative h-full bg-slate-950 border border-slate-800 p-10 rounded-3xl hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2">
                  <div className="mb-6 inline-flex p-4 rounded-full bg-slate-900 border border-slate-700 text-amber-500 group-hover:text-white group-hover:bg-amber-500 transition-colors">
                     <Target size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                     To enhance customer satisfaction through continual improvement of our business practices in terms of <span className="text-white font-bold">Safety, Quality, Service, and Delivery</span>. We integrate safety with productivity, ensuring zero-harm operations.
                  </p>
               </div>

            </div>
         </div>
      </section>

      {/* 4. SECTORS WE SERVE (The Grid) */}
      <section className="py-24 px-6">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Industrial Sectors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               <SectorCard title="Oil & Gas Development" icon={<Flame />} />
               <SectorCard title="LNG & Petrochemicals" icon={<Anchor />} />
               <SectorCard title="Power & Utilities" icon={<TrendingUp />} />
               <SectorCard title="Fertilizer Plants" icon={<Globe />} />
               <SectorCard title="Pumping Stations" icon={<SettingsIcon />} />
               <SectorCard title="Tank Farms" icon={<DatabaseIcon />} />
               <SectorCard title="Desalination Plants" icon={<WaterIcon />} />
               <SectorCard title="Onshore Pipelines" icon={<PipelineIcon />} />
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 text-center border-t border-white/10">
        <h2 className="text-2xl text-slate-400 mb-8 font-light">Partner with a legacy of excellence.</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all duration-300">
           Get in Touch <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}

// --- COMPONENTS ---

function StatBadge({ number, label }: { number: string, label: string }) {
   return (
      <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-center">
         <div className="text-xl font-bold text-white">{number}</div>
         <div className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</div>
      </div>
   )
}

function Milestone({ year, text }: { year: string, text: string }) {
   return (
      <li className="flex gap-4 items-start">
         <span className="font-mono text-amber-500 font-bold">{year}</span>
         <span className="text-slate-300 text-sm">{text}</span>
      </li>
   )
}

function SectorCard({ title, icon }: { title: string, icon: any }) {
   return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-amber-500/50 transition-colors flex flex-col items-center gap-4 group">
         <div className="text-slate-500 group-hover:text-amber-500 transition-colors">
            {icon}
         </div>
         <span className="font-bold text-sm">{title}</span>
      </div>
   )
}

// Simple Icon Wrappers for visual variety
function SettingsIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg> }
function DatabaseIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> }
function WaterIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.74 5.74c.9.9 1.41 2.1 1.41 3.37v2.4c0 1.27-.51 2.47-1.41 3.37L12 23.31l-5.74-5.74c-.9-.9-1.41-2.1-1.41-3.37v-2.4c0-1.27.51-2.47 1.41-3.37L12 2.69z"/></svg> }
function PipelineIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M12 2v20"/><path d="M12 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5"/><path d="M12 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5"/></svg> }