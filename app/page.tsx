import Link from 'next/link';
import { Settings, ShieldCheck, Truck } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          "Trimaax Tech: Leaders in" <span className="text-blue-500">"Heavy Manufacturing"</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Specialized in Wind Mill Towers, Pressure Vessels, and Oil & Gas Piping Solutions.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="#contact" className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
            Get a Quote
          </Link>
          <Link href="#services" className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Our Services
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <Settings className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Heavy Fabrication</h3>
            <p className="text-gray-600">Manufacturing of high-grade Wind Mill towers and heavy structural components.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">Advanced testing for Pressure Vessels to ensure safety and durability.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <Truck className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Logistics & Support</h3>
            <p className="text-gray-600">End-to-end handling of Oil & Gas piping delivery and installation.</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-slate-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Trimaax Tech</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a premier engineering solutions provider based in India. With years of experience in the heavy manufacturing sector, we deliver world-class infrastructure components. We are committed to quality, safety, and timely delivery.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            
            {/* THIS IS YOUR KEY (I added it for you) */}
            <input type="hidden" name="access_key" value="bebed2fd-8fea-4182-9fa2-3ed1359ba7c1" />

            {/* Redirect back to your site after sending */}
            <input type="hidden" name="redirect" value="http://localhost:3000" />

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" required className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows={4} required className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-50"></textarea>
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}