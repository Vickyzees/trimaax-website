import Link from 'next/link';
import { 
  ArrowRight, 
  Settings, 
  Car, 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Zap,
  CheckCircle 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* NEW BACKGROUND (No Image File Needed) */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-black"></div>
            <div className="absolute inset-0 opacity-20" 
                 style={{
                    backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', 
                    backgroundSize: '60px 60px'
                 }}>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-red-500/50 bg-red-500/10 text-red-400 text-sm font-medium tracking-wide backdrop-blur-md">
            ISO 9001:2008 CERTIFIED EPC FIRM
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
            ENGINEERING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              FUTURE OF INFRASTRUCTURE
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto mb-10 font-light leading-relaxed">
            From Heavy Industrial Fabrication to Smart Urban Mobility. We bridge the gap between complex engineering requirements and operational reality.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2">
              Start a Project <ArrowRight size={20} />
            </Link>
            <Link href="#parking" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              View Parking Systems
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LEGACY & STATS */}
      <section className="bg-slate-950 py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-red-500 font-bold uppercase tracking-widest mb-2">Who We Are</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Legacy of Expansion</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Established in 2000, TRIMAAX Technologies has transformed from a manufacturing-centric operation into a multi-disciplinary industrial powerhouse.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Headquartered in Chennai, we serve clients across Refineries, Power Generation, Renewable Energy, and now, Smart Urban Mobility.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatBox number="20+" label="Years of Excellence" />
              <StatBox number="03" label="Manufacturing Units" />
              <StatBox number="EPC" label="Turnkey Execution" />
              <StatBox number="ISO" label="9001:2008 Certified" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INFRASTRUCTURE (UPDATED WITH ADDRESSES) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-red-600 font-bold uppercase tracking-widest mb-2">Our Infrastructure</h3>
            <h2 className="text-4xl font-bold text-slate-900">Strategic Manufacturing Units</h2>
            <p className="text-slate-600 mt-4">Operational excellence delivered through three specialized facilities in the Chennai industrial belt.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* UNIT 3 */}
            <FacilityCard 
              title="Vallam Vadagal, Oragadam"
              tag="UNIT 3"
              desc="Our newest state-of-the-art facility dedicated to modern infrastructure. This plant spearheads our Automatic Car Parking Systems market."
              address="Plot No. K14, No. G-113/1, 4th Cross Road, SIPCOT Industrial Park, Vallam Vadagal, Kanchipuram District - 602105."
              icon={<Car size={32} className="text-red-600" />}
            />
            
            {/* UNIT 2 */}
            <FacilityCard 
              title="Sriperumbuthur Facility"
              tag="UNIT 2"
              desc="A comprehensive center for heavy fabrication. Handles Pipelines, Vessels, Columns, blasting, coating, and valve testing."
              address="SIPCOT Industrial Complex, Sriperumpudur, Kancheepuram - 602105, Tamilnadu - India."
              icon={<Settings size={32} className="text-red-600" />}
            />

            {/* UNIT 1 */}
            <FacilityCard 
              title="Ekkattuthangal Facility"
              tag="UNIT 1"
              desc="Specializes in high-precision fabrication for Carbon Steel Structures, Wind Mill Tower components, and Gear Box systems."
              address="No. 22, North Phase, Guindy Industrial Estate, Ekkattuthangal, Chennai – 600032, Tamilnadu, India."
              icon={<Cpu size={32} className="text-red-600" />}
            />
          </div>
        </div>
      </section>

      {/* 4. PRODUCT FOCUS: SMART PARKING */}
      <section id="parking" className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Product Focus</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">Smart Parking Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl">
              Addressed space constraints with precision engineering. Manufactured at our Vallam Vadagal facility, our systems maximize vehicle storage within minimal footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ParkingCard 
              title="Rotary Parking System"
              subtitle="Ideal for Tight Spaces"
              desc="Operates on a vertical cycle mechanism (like a Ferris wheel). The most space-efficient solution for small plots."
              features={[
                "Capacity: 6 to 16 cars in space of 2",
                "One-touch automated operation",
                "Ideal for offices & hospitals"
              ]}
            />
            <ParkingCard 
              title="Tower Parking System"
              subtitle="High-Density Vertical Storage"
              desc="Utilizes an elevator-style lift mechanism to transport vehicles vertically. Perfect for tall, narrow spaces between buildings."
              features={[
                "Fastest retrieval times",
                "Fully automated with Turntable",
                "Ultra-low noise & vibration"
              ]}
              highlight
            />
            <ParkingCard 
              title="Puzzle Parking System"
              subtitle="Multi-Level Lift & Slide"
              desc="A versatile semi-automated solution where pallets move horizontally and vertically to clear a path."
              features={[
                "Configurable 2 to 6 levels",
                "Independent parking retrieval",
                "Modular & Cost-effective"
              ]}
            />
          </div>
        </div>
      </section>

      {/* 5. CORE CAPABILITIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Core Capabilities</h2>
            <p className="text-slate-600 mt-4">We manage end-to-end project lifecycles.</p>
          </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CapabilityCard icon={<Building2 />} title="Turnkey EPC" desc="From design and procurement to installation and commissioning." />
          <CapabilityCard icon={<Car />} title="Urban Infrastructure" desc="Automated Car Parking Systems for smart cities." />
          <CapabilityCard icon={<Zap />} title="Renewable Energy" desc="Carbon Steel Structural components for Wind Mill Towers." />
          <CapabilityCard icon={<Settings />} title="Heavy Engineering" desc="Pressure Vessels, Heat Exchangers & Gear Box Components." />
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose TRIMAAX?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShieldCheck className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg">ISO 9001:2008</h3>
              <p className="text-sm text-gray-500 mt-2">High-grade steel & safety testing.</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg">End-to-End</h3>
              <p className="text-sm text-gray-500 mt-2">Feasibility, Design, AMC.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg">Safety First</h3>
              <p className="text-sm text-gray-500 mt-2">Multiple sensors & emergency stops.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// --- HELPER COMPONENTS ---

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-4 bg-slate-900 rounded-lg border border-white/10 text-center">
      <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-1">
        {number}
      </div>
      <div className="text-slate-500 text-xs uppercase tracking-wider font-bold">{label}</div>
    </div>
  );
}

// Updated Facility Card with Address Support
function FacilityCard({ title, tag, desc, address, icon }: { title: string; tag: string; desc: string; address: string; icon: any }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all group flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        <span className="text-xs font-bold text-red-600 uppercase tracking-wide bg-red-50 px-2 py-1 rounded">{tag}</span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
      
      <div className="pt-6 border-t border-slate-100 mt-auto">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-red-500 shrink-0 mt-1" />
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}

function ParkingCard({ title, subtitle, desc, features, highlight = false }: { title: string; subtitle: string; desc: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`p-8 rounded-3xl border flex flex-col h-full transition-all ${highlight ? 'bg-red-600 border-red-500 text-white shadow-2xl scale-105 z-10' : 'bg-slate-800 border-white/10 hover:bg-slate-700'}`}>
      <div className="mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className={`text-sm font-medium ${highlight ? 'text-red-100' : 'text-slate-400'}`}>{subtitle}</p>
      </div>
      <p className={`text-sm mb-8 flex-grow leading-relaxed ${highlight ? 'text-red-50' : 'text-slate-300'}`}>{desc}</p>
      
      <div className="space-y-3">
        {features.map((feat, index) => (
          <div key={index} className="flex items-center gap-3 text-sm">
             <div className={`w-1.5 h-1.5 rounded-full ${highlight ? 'bg-white' : 'bg-red-500'}`}></div>
             <span>{feat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CapabilityCard({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
      <div className="text-red-600 shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );
}