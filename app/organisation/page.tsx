import Link from 'next/link';
import { 
  Users, 
  User, 
  Briefcase, 
  ShieldCheck, 
  Factory, 
  CreditCard,
  TrendingUp,
  FileText,
  ChevronDown
} from 'lucide-react';

export default function OrganisationPage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 px-6 py-2 rounded-full text-purple-400 text-sm font-mono tracking-widest uppercase mb-8">
            <Users size={16} /> Corporate Hierarchy
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4">LEADERSHIP STRUCTURE</h1>
          <p className="text-slate-400">The chain of command driving Trimaax Technologies.</p>
        </div>
      </section>

      {/* 2. THE ORG CHART TREE */}
      <section className="pb-32 px-6 overflow-x-auto">
        <div className="min-w-[1000px] max-w-7xl mx-auto">
          
          {/* LEVEL 1: MD */}
          <div className="flex justify-center mb-16 relative">
             <TreeNode title="Managing Director" name="Mr. S. Murugesan" icon={<User />} head />
             {/* Connector Line Down */}
             <div className="absolute -bottom-16 left-1/2 w-px h-16 bg-gradient-to-b from-purple-500 to-slate-700"></div>
          </div>

          {/* LEVEL 2: SPLIT (GM & DIRECTOR) */}
          <div className="flex justify-center gap-32 relative mb-16">
             {/* Horizontal Connector Bar */}
             <div className="absolute -top-16 left-[25%] right-[25%] h-px bg-slate-700"></div>
             <div className="absolute -top-16 left-[25%] h-8 w-px bg-slate-700"></div>
             <div className="absolute -top-16 right-[25%] h-8 w-px bg-slate-700"></div>

             {/* Branch Left: GM Operations */}
             <div className="flex flex-col items-center w-1/2 relative">
                <TreeNode title="General Manager" name="Operations" icon={<Briefcase />} />
                <div className="h-12 w-px bg-slate-700 my-2"></div>
                
                {/* Level 3 Left: Project Coordinator & Purchase */}
                <div className="flex gap-12 relative mt-4">
                   {/* Horizontal Bar for GM Sub-tree */}
                   <div className="absolute -top-6 left-[20%] right-[20%] h-px bg-slate-700"></div>
                   <div className="absolute -top-6 left-[20%] h-6 w-px bg-slate-700"></div>
                   <div className="absolute -top-6 right-[20%] h-6 w-px bg-slate-700"></div>

                   {/* PROJECT COORDINATOR BRANCH */}
                   <div className="flex flex-col items-center">
                      <TreeNode title="Project Coordinator" name="(MR)" icon={<TrendingUp />} />
                      <div className="h-8 w-px bg-slate-700"></div>
                      {/* 4 Engineers Under Project Coord */}
                      <div className="grid grid-cols-4 gap-4 mt-8 relative">
                         <div className="absolute -top-8 left-4 right-4 h-px bg-slate-700"></div>
                         <div className="absolute -top-8 left-4 h-8 w-px bg-slate-700"></div>
                         <div className="absolute -top-8 right-4 h-8 w-px bg-slate-700"></div>
                         <div className="absolute -top-8 left-1/3 h-8 w-px bg-slate-700"></div>
                         <div className="absolute -top-8 right-1/3 h-8 w-px bg-slate-700"></div>

                         <MiniNode role="Marketing" />
                         <MiniNode role="Planning" />
                         <MiniNode role="Production" />
                         <MiniNode role="QC" />
                      </div>
                      <div className="mt-4">
                         <div className="h-4 w-px bg-slate-700 mx-auto"></div>
                         <div className="bg-purple-900/20 border border-purple-500/30 px-4 py-2 rounded text-xs text-purple-300">
                            Production Team
                         </div>
                      </div>
                   </div>

                   {/* PURCHASE MANAGER BRANCH */}
                   <div className="flex flex-col items-center">
                      <TreeNode title="Purchase & Stores" name="Manager" icon={<CreditCard />} />
                      <div className="h-8 w-px bg-slate-700"></div>
                      <MiniNode role="Stores In-Charge" />
                   </div>
                </div>
             </div>

             {/* Branch Right: Director */}
             <div className="flex flex-col items-center w-1/2">
                <TreeNode title="Director" name="Board Member" icon={<User />} />
                <div className="h-12 w-px bg-slate-700"></div>
                
                <TreeNode title="Finance & Admin" name="Manager" icon={<FileText />} />
                <div className="h-8 w-px bg-slate-700"></div>
                
                {/* Finance Sub-tree */}
                <div className="flex gap-8 relative mt-4">
                   <div className="absolute -top-4 left-[25%] right-[25%] h-px bg-slate-700"></div>
                   <div className="absolute -top-4 left-[25%] h-4 w-px bg-slate-700"></div>
                   <div className="absolute -top-4 right-[25%] h-4 w-px bg-slate-700"></div>
                   
                   <MiniNode role="Accountant" />
                   <MiniNode role="Security Staff" />
                </div>
             </div>

          </div>

        </div>
      </section>

    </div>
  );
}

// --- COMPONENTS ---

function TreeNode({ title, name, icon, head }: { title: string, name: string, icon: any, head?: boolean }) {
  return (
    <div className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-105 z-10
      ${head 
        ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_30px_rgba(147,51,234,0.3)] w-64' 
        : 'bg-slate-900 border-slate-700 hover:border-purple-500 w-52'
      }`}>
      <div className={`p-3 rounded-full ${head ? 'bg-white/20' : 'bg-slate-800 text-purple-400'}`}>
        {icon}
      </div>
      <div className="text-center">
        <div className={`font-bold ${head ? 'text-lg' : 'text-sm text-slate-200'}`}>{title}</div>
        <div className={`text-xs ${head ? 'text-purple-100' : 'text-slate-500 uppercase tracking-wider'}`}>{name}</div>
      </div>
    </div>
  )
}

function MiniNode({ role }: { role: string }) {
  return (
    <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg text-xs font-bold text-slate-300 text-center w-32 hover:bg-slate-700 hover:border-purple-500 transition-colors">
       {role}
    </div>
  )
}