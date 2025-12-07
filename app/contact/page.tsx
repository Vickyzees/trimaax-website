import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Globe,
  Building2,
  Factory,
  Zap
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: The Uplink */}
      <section className="relative py-24 px-6 text-center">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 center w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
           <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-6 py-2 rounded-full text-blue-400 text-sm font-mono tracking-widest uppercase mb-8">
            <Globe size={16} className="animate-pulse" /> Global Connectivity
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
            START THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              CONVERSATION
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to engineer the future? Reach out to our HQ or manufacturing units directly.
          </p>
        </div>
      </section>

      {/* 2. THE GRID (Addresses & Form) */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* LEFT: 3D LOCATION CARDS */}
          <div className="space-y-8 perspective-1000">
             
             {/* UNIT 1 CARD (HQ) */}
             <div className="group relative bg-slate-900/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:rotate-y-2 hover:shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Building2 size={64} className="text-blue-500" />
                </div>
                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded mb-4">UNIT 01 • HQ</div>
                <h3 className="text-2xl font-bold mb-2">Ekkattuthangal Facility</h3>
                <div className="flex items-start gap-4 text-slate-400 mb-6">
                   <MapPin size={24} className="shrink-0 text-blue-500 mt-1" />
                   <p className="leading-relaxed">
                      No. 22, North Phase, Guindy Industrial Estate,<br />
                      Ekkattuthangal, Chennai – 600032,<br />
                      Tamilnadu, India.
                   </p>
                </div>
                <ContactInfo />
             </div>

             {/* UNIT 2 CARD (HEAVY YARD) */}
             <div className="group relative bg-slate-900/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl hover:border-red-500/50 transition-all duration-500 hover:rotate-y-2 hover:shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Factory size={64} className="text-red-500" />
                </div>
                <div className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded mb-4">UNIT 02 • HEAVY YARD</div>
                <h3 className="text-2xl font-bold mb-2">Sriperumbuthur Facility</h3>
                <div className="flex items-start gap-4 text-slate-400 mb-6">
                   <MapPin size={24} className="shrink-0 text-red-500 mt-1" />
                   <p className="leading-relaxed">
                      Plot No. K14, SIPCOT Industrial Complex,<br />
                      Sriperumpudur, Kancheepuram District - 602105,<br />
                      Tamilnadu, India.
                   </p>
                </div>
                <ContactInfo />
             </div>

             {/* UNIT 3 CARD (SMART PARK - NEW) */}
             <div className="group relative bg-slate-900/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl hover:border-orange-500/50 transition-all duration-500 hover:rotate-y-2 hover:shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Zap size={64} className="text-orange-500" />
                </div>
                <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded mb-4">UNIT 03 • NEW EXPANSION</div>
                <h3 className="text-2xl font-bold mb-2">Vallam Vadagal Facility</h3>
                <div className="flex items-start gap-4 text-slate-400 mb-6">
                   <MapPin size={24} className="shrink-0 text-orange-500 mt-1" />
                   <p className="leading-relaxed">
                      Plot No. K14, No. G-113/1, 4th Cross Road,<br />
                      SIPCOT Industrial Park, Vallam Vadagal,<br />
                      Kanchipuram District - 602105.
                   </p>
                </div>
                <ContactInfo />
             </div>

          </div>

          {/* RIGHT: THE "TRANSMISSION" FORM */}
          <div className="relative">
             <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-[100px] opacity-10"></div>
             
             <div className="relative bg-slate-900 border border-slate-700 rounded-[2rem] p-8 md:p-12 shadow-2xl sticky top-24">
                <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
                <p className="text-slate-400 mb-8">Our engineering team usually responds within 24 hours.</p>

                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                   {/* Web3Forms Access Key */}
                   <input type="hidden" name="access_key" value="bebed2fd-8fea-4182-9fa2-3ed1359ba7c1" />
                   <input type="hidden" name="redirect" value="http://localhost:3000/contact" />

                   <div className="grid md:grid-cols-2 gap-6">
                      <InputGroup label="Your Name" type="text" name="name" placeholder="John Doe" />
                      <InputGroup label="Company Name" type="text" name="company" placeholder="Trimaax Client" />
                   </div>

                   <InputGroup label="Email Address" type="email" name="email" placeholder="john@company.com" />
                   <InputGroup label="Phone Number" type="tel" name="phone" placeholder="+91 98765 43210" />

                   <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">Project Details</label>
                      <textarea 
                        name="message" 
                        rows={4} 
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                        placeholder="Tell us about your heavy fabrication requirements..."
                        required
                      ></textarea>
                   </div>

                   <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group">
                      Transmit Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                   
                   <p className="text-xs text-slate-500 text-center mt-4">
                      By sending this form, you agree to our privacy policy. Your data is secure.
                   </p>
                </form>
             </div>
          </div>

        </div>
      </section>

    </div>
  );
}

// --- COMPONENTS ---

function ContactInfo() {
    return (
        <div className="space-y-4 border-t border-slate-700 pt-4 mt-4">
            <div className="flex items-start gap-3">
                <Mail size={18} className="text-slate-500 mt-1" />
                <div>
                    <div className="text-sm font-bold text-white">trimaaxtpl@gmail.com</div>
                    <div className="text-sm text-slate-400">naveenm@trimaaxtech.com</div>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <Phone size={18} className="text-slate-500 mt-1" />
                <div>
                    <div className="text-sm font-bold text-white">Naveen M</div>
                    <div className="text-sm text-green-400">+91 99529 19226</div>
                </div>
            </div>
        </div>
    )
}

function InputGroup({ label, type, name, placeholder }: { label: string, type: string, name: string, placeholder: string }) {
   return (
      <div>
         <label className="block text-sm font-bold text-slate-300 mb-2">{label}</label>
         <input 
            type={type} 
            name={name} 
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
            placeholder={placeholder}
            required
         />
      </div>
   )
}