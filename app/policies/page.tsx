import Link from 'next/link';
import { 
  ShieldCheck, 
  FileCheck, 
  HardHat, 
  Globe, 
  Activity, 
  Award,
  CheckCircle,
  AlertTriangle,
  FileBadge
} from 'lucide-react';

export default function PoliciesPage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-green-500 selection:text-black">
      
      {/* 1. HERO SECTION: Digital Governance Theme */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #4f46e5 0, #4f46e5 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 px-6 py-2 rounded-full text-green-400 text-sm font-mono tracking-widest uppercase mb-8">
            <Activity size={16} className="animate-pulse" /> System Status: COMPLIANT
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
            PROTOCOL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
              ZERO DEFECT
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Our governance framework is built on three pillars: Micron-level Quality, Absolute Safety, and Global Certification.
          </p>
        </div>
      </section>

      {/* 2. QUALITY CONTROL & ASSURANCE (3D Floating Tablets) */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 perspective-1000">
            
            {/* 3D Card: Quality Control */}
            <PolicyCard 
              title="Quality Control (QC)"
              subtitle="The First Line of Defense"
              icon={<ScanIcon />}
              color="blue"
            >
              <p className="text-slate-400 mb-6 leading-relaxed">
                TRIMAAX maintains an enviable position in welding exotic metals including <strong className="text-white">Incoloy, Titanium, and Super Duplex Stainless Steel</strong>. Our QC team identifies needs at the earliest project stages.
              </p>
              <ul className="space-y-3">
                <ListItem text="Multi-disciplined QC Engineers & Inspectors" />
                <ListItem text="In-house NDT Service Providers" />
                <ListItem text="Continuous Certification Programs" />
              </ul>
            </PolicyCard>

            {/* 3D Card: Quality Assurance */}
            <PolicyCard 
              title="Quality Assurance (QA)"
              subtitle="Systemic Integrity"
              icon={<ShieldCheck size={40} className="text-blue-500" />}
              color="blue"
            >
              <p className="text-slate-400 mb-6 leading-relaxed">
                Our QA team instigates internal and external audits to ensure ISO 9001:2008 compliance. We focus on failure investigation and providing engineering recommendations.
              </p>
              <div className="bg-slate-900 border border-blue-500/30 p-4 rounded-xl mb-4">
                 <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Target Accreditations</div>
                 <div className="flex flex-wrap gap-2">
                    <Badge text="ASME 'U' Stamp" />
                    <Badge text="ASME 'PP' Stamp" />
                    <Badge text="ASME 'R' Stamp" />
                    <Badge text="ASME 'S' Stamp" />
                 </div>
              </div>
            </PolicyCard>

          </div>
        </div>
      </section>

      {/* 3. SAFETY & ENVIRONMENT (The Bio-Dome Look) */}
      <section className="py-32 px-6 bg-slate-900 relative overflow-hidden border-y border-white/5">
        {/* Green Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[100px]"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <HardHat size={64} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-black mb-8">HSE EXCELLENCE</h2>
          <p className="text-2xl text-slate-300 font-light mb-12">
            "Safety has to be integrated with productivity, not superimposed."
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
             <div className="bg-slate-950/80 backdrop-blur p-8 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                   <Globe size={20} className="text-green-500" /> Environmental Pact
                </h3>
                <p className="text-slate-400">
                   Dedicated to making operations compatible with protecting people and property. We strictly follow <strong className="text-white">OHSAS 18001</strong> standards.
                </p>
             </div>
             
             <div className="bg-slate-950/80 backdrop-blur p-8 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                   <AlertTriangle size={20} className="text-green-500" /> Risk Management
                </h3>
                <p className="text-slate-400">
                   Our HSE Management System encompasses Risk Management, Safety Communication, and a visible intention to achieve a zero-harm environment.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE VAULT (Certification Wall) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-slate-800 flex-grow"></div>
              <h2 className="text-slate-500 font-mono uppercase tracking-widest text-sm">Official Certifications</h2>
              <div className="h-px bg-slate-800 flex-grow"></div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <CertCard code="ISO 9001:2015" org="BMQR Certified" />
              <CertCard code="API 5CT / 6A" org="Official Monogram" />
              <CertCard code="OHSAS 18001" org="Safety Standard" />
              <CertCard code="ASME Sec VIII" org="Pressure Vessels" />
           </div>
        </div>
      </section>

    </div>
  );
}

// --- 3D COMPONENTS & HELPERS ---

function PolicyCard({ title, subtitle, icon, children, color }: { title: string, subtitle: string, icon: any, children: React.ReactNode, color: string }) {
  return (
    <div className="group relative perspective-1000">
       <div className="relative h-full bg-slate-900 border border-slate-800 p-8 rounded-3xl transition-all duration-500 transform group-hover:rotate-y-2 group-hover:rotate-x-2 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] group-hover:border-blue-500/50">
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
             <FileCheck size={48} className="text-blue-500" />
          </div>
          
          <div className="flex items-center gap-4 mb-8">
             <div className="w-14 h-14 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                {icon}
             </div>
             <div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-blue-500 font-mono text-xs uppercase tracking-wider">{subtitle}</p>
             </div>
          </div>
          
          <div className="relative z-10">
             {children}
          </div>
       </div>
    </div>
  )
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-300">
       <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
       {text}
    </li>
  )
}

function Badge({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-[10px] font-bold rounded border border-blue-500/20">
       {text}
    </span>
  )
}

function CertCard({ code, org }: { code: string, org: string }) {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors flex flex-col items-center text-center group">
       <FileBadge size={32} className="text-slate-600 mb-4 group-hover:text-white transition-colors" />
       <div className="text-xl font-bold text-white mb-1">{code}</div>
       <div className="text-xs text-slate-500 uppercase">{org}</div>
    </div>
  )
}

function ScanIcon() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
   )
}