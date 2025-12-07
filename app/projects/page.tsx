import Link from 'next/link';
import { 
  Construction, 
  Wind, 
  Car, 
  Wrench, 
  Cpu, 
  ArrowRight,
  Globe,
  Settings,
  Database
} from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. HERO SECTION: Project Command */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Grid Animation */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 opacity-10" 
                style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
           </div>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 px-6 py-2 rounded-full text-orange-400 text-sm font-mono tracking-widest uppercase mb-8">
             <Database size={14} /> Project Database: ONLINE
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
            EXECUTION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              MATRIX
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            From Engineering, Procurement, Installation, and Commissioning (EPIC) to next-gen Urban Infrastructure.
          </p>
        </div>
      </section>

      {/* 2. FEATURED INNOVATION: SMART PARKING (3D Hero Card) */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
             <div>
               <h3 className="text-orange-500 font-bold tracking-widest uppercase mb-2">Flagship Project 2025</h3>
               <h2 className="text-4xl font-bold">Urban Mobility Infrastructure</h2>
             </div>
             <Car className="text-orange-500 w-12 h-12 opacity-80" />
          </div>

          <div className="group relative w-full perspective-1000">
             <div className="relative bg-gradient-to-br from-slate-900 to-black border border-orange-500/30 rounded-[3rem] p-8 md:p-16 overflow-hidden transition-all duration-700 transform group-hover:rotate-x-1 group-hover:shadow-[0_0_80px_rgba(249,115,22,0.2)]">
                
                {/* Neon Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600 rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                   <div>
                      <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6">NEW COMMISSION</div>
                      <h3 className="text-3xl md:text-5xl font-black mb-6">Automatic Car Parking System</h3>
                      <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                         A fully automated, vertical mobility solution designed to solve urban congestion. Implemented using our high-precision heavy structural fabrication capabilities.
                      </p>
                      <ul className="space-y-4 mb-8">
                         <ProjectPoint text="Rotary & Tower Configurations" />
                         <ProjectPoint text="PLC Controlled Automation" />
                         <ProjectPoint text="Zero-Footprint Installation" />
                      </ul>
                      <Link href="/products" className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-white transition-colors">
                         View Technical Specs <ArrowRight size={20} />
                      </Link>
                   </div>
                   
                   {/* Visual Placeholder for 3D Graphic */}
                   <div className="bg-slate-800/50 rounded-2xl h-80 flex items-center justify-center border border-white/5 group-hover:border-orange-500/30 transition-colors">
                      <Car size={80} className="text-slate-600 group-hover:text-orange-500 transition-colors duration-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PROJECT LOGS (EPIC / WIND / BOILERS) */}
      <section className="py-24 px-6 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl font-bold mb-12">Industrial Project Logs</h2>
           
           <div className="grid md:grid-cols-3 gap-8 perspective-1000">
              
              <ProjectCard 
                title="EPIC Contracts" 
                client="Multiple Sectors"
                desc="End-to-end management: Engineering (Subcontract), Procurement, Installation, & Commissioning of Mech/Elec/Inst streams."
                icon={<Globe size={32} />}
                color="blue"
              />

              <ProjectCard 
                title="Wind Energy Farms" 
                client="Vestas / Suzlon"
                desc="Successfully completed multiple Wind Mill projects including heavy structural fabrication and tower internal installation."
                icon={<Wind size={32} />}
                color="green"
              />

              <ProjectCard 
                title="Boiler Infrastructure" 
                client="Power Gen"
                desc="Heavy structural fabrication for high-pressure boiler plants. Structural support installation and commissioning."
                icon={<Construction size={32} />}
                color="red"
              />

           </div>
        </div>
      </section>

      {/* 4. UPCOMING CAPABILITY: VALVE REPAIR */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="max-w-5xl mx-auto border border-slate-800 bg-slate-900/50 backdrop-blur rounded-2xl p-10 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="flex flex-col md:flex-row gap-10 items-start">
               <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-700">
                  <Wrench className="text-purple-400 animate-pulse" size={32} />
               </div>
               
               <div>
                  <div className="flex items-center gap-3 mb-2">
                     <h3 className="text-2xl font-bold text-white">Valve Repair & Testing Facility</h3>
                     <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-purple-500/30">
                        IN DEVELOPMENT
                     </span>
                  </div>
                  <p className="text-slate-400 mb-6 max-w-2xl">
                     Trimaax is establishing a state-of-the-art facility for the testing, calibration, and overhauling of industrial valves.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                     <ValveFeature text="Control Valves (Globe, Ball, Butterfly)" />
                     <ValveFeature text="Safety Relief Valves (SRV)" />
                     <ValveFeature text="Motor Operated Valves (MOV)" />
                     <ValveFeature text="Hydraulic & Gear Operated" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl text-slate-400 mb-8 font-light">Have a complex project?</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300">
           Initiate Consultation <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}

// --- COMPONENTS ---

function ProjectCard({ title, client, desc, icon, color }: { title: string, client: string, desc: string, icon: any, color: string }) {
  const colors: any = {
    blue: "group-hover:text-blue-400 group-hover:border-blue-500/50",
    green: "group-hover:text-green-400 group-hover:border-green-500/50",
    red: "group-hover:text-red-400 group-hover:border-red-500/50",
  };
  
  return (
    <div className="group h-full bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:-translate-y-2">
       <div className={`w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-slate-500 mb-6 transition-colors border border-slate-800 ${colors[color]}`}>
          {icon}
       </div>
       <div className="mb-2 text-xs font-mono text-slate-500 uppercase tracking-widest">{client}</div>
       <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
       <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function ProjectPoint({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-slate-300 font-medium">
       <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
       {text}
    </li>
  )
}

function ValveFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800/50 pb-2">
       <Settings size={14} className="text-purple-500" />
       {text}
    </div>
  )
}