export const metadata = {
  title: 'Custom Installations | Source Trusted Pros',
  description: 'Discover the benefits of Custom Installations for smart homes. Learn how professional smart home installation creates a tailored, seamless system for convenience, security, and control.'
};

export default function CustomInstallationsPage() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Section 1: Intro - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <a href="/" className="text-sm/6 font-semibold text-white hover:text-gray-100 flex items-center gap-1 mb-8">
            {/* Heroicon: ArrowLeft */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </a>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">Custom Installations</h1>
          <p className="text-lg text-gray-300 mb-8">
            Transform your home into a truly personalized smart living space with Custom Installations. Discover how professional smart home installation services tailor systems to your unique needs, ensuring seamless integration, reliability, and exceptional convenience.
          </p>
        </div>
        <div className="relative flex justify-end">
          <img src="/custom-installs-05.png" alt="Custom Installations" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 2: What Are Custom Installations? - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/custom-installs-06.png" alt="Custom Installations Example" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">What Are Custom Installations for Smart Homes?</h2>
          <p className="text-gray-300 mb-6">Custom installations go beyond off-the-shelf solutions. Instead of one-size-fits-all packages, your system is designed specifically for your home’s layout, lifestyle, and goals.</p>
          <p className="text-gray-300 mb-6">Professional custom installation means your smart lighting, security, climate control, entertainment, and energy management systems are integrated perfectly—so they work exactly how you want, every time.</p>
        </div>
      </div>

      {/* Section 3: Benefits - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Benefits of Custom Smart Home Installations</h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Personalized Design:</span> No two homes are alike. Custom installation ensures your system is planned around your floor plan, needs, and preferences. Whether you want whole-home audio in every room, tailored lighting scenes, or advanced security coverage, your system will match your vision.</li>
            <li><span className="font-semibold text-white">Seamless Integration:</span> Avoid the headaches of disconnected gadgets. Custom installations bring together different brands and devices into one unified, easy-to-control system.</li>
            <li><span className="font-semibold text-white">Professional Expertise:</span> Certified installers ensure reliable, secure setups with expert placement, wiring, and configuration—resulting in a polished system you can trust.</li>
            <li><span className="font-semibold text-white">Enhanced Aesthetics:</span> Custom installations hide wires, mount devices neatly, and design controls to blend beautifully with your décor.</li>
            <li><span className="font-semibold text-white">Scalability:</span> Start small or go big—custom systems are designed to grow with you, adding new features or rooms over time without redoing the entire setup.</li>
            <li><span className="font-semibold text-white">Superior Support:</span> Get tailored training, easy maintenance, and ongoing support from experienced professionals who know your system inside and out.</li>
          </ol>
        </div>
        <div className="relative flex justify-end">
          <img src="/custom-installs-07.png" alt="Custom Installations Benefits" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 4: Features - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/custom-installs-08.png" alt="Custom Installations Features" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Features of Custom Smart Home Installations</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Whole-Home Audio and Video:</span> Distribute music or video to any room, with hidden wiring and easy control from your phone, tablet, or voice assistant.</li>
            <li><span className="font-semibold text-white">Advanced Security Systems:</span> Tailor your security setup with cameras, smart locks, motion sensors, window and door contacts, glass-break detectors, and professional monitoring—all designed for your home’s unique entry points and blind spots.</li>
            <li><span className="font-semibold text-white">Smart Lighting:</span> Program personalized lighting scenes for mood, security, or convenience. Automate schedules or control them remotely.</li>
            <li><span className="font-semibold text-white">Climate Control:</span> Integrate smart thermostats and zoning systems to maintain perfect temperatures throughout your home while saving energy.</li>
            <li><span className="font-semibold text-white">Automated Window Treatments:</span> Install motorized blinds and shades that adjust automatically based on time of day or temperature.</li>
            <li><span className="font-semibold text-white">Energy Management Systems:</span> Monitor and reduce energy use with integrated smart plugs, thermostats, lighting, and solar/battery system controls.</li>
            <li><span className="font-semibold text-white">Home Theater and Media Rooms:</span> Custom-designed theaters with professional acoustic treatments, hidden wiring, and intuitive control systems.</li>
            <li><span className="font-semibold text-white">Networking and Wi-Fi:</span> Ensure robust, reliable whole-home Wi-Fi and networking infrastructure to support all your connected devices.</li>
          </ul>
        </div>
      </div>

      {/* Section 5: Why Choose Pro - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Professional Custom Installation?</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Complete Design and Planning: A solution tailored to your needs, not limited by out-of-the-box options.</li>
            <li>Expert Integration: Seamless control of diverse devices and brands.</li>
            <li>Clean Installation: Hidden wiring, expert mounting, and flawless finishes.</li>
            <li>Enhanced Security: Secure network setup and professional-grade hardware.</li>
            <li>Personalized Training: Learn to use your system effectively.</li>
            <li>Long-Term Support: Professional help with updates, expansions, or maintenance.</li>
          </ul>
          <p className="text-gray-300 mb-6">Professional custom installation ensures your system is reliable, secure, and perfectly tailored to your lifestyle.</p>
        </div>
        <div className="relative flex justify-end">
          <img src="/custom-installs-09.png" alt="Professional Custom Installation" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 6: How It Works - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/custom-installs-10.png" alt="How Custom Installation Works" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">How the Custom Installation Process Works</h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Consultation:</span> A detailed discussion to understand your goals, home layout, and budget.</li>
            <li><span className="font-semibold text-white">Design & Planning:</span> Customized system plan including devices, placement, wiring, and control systems.</li>
            <li><span className="font-semibold text-white">Professional Installation:</span> Clean, reliable installation with minimal disruption.</li>
            <li><span className="font-semibold text-white">Configuration & Integration:</span> Devices connected and programmed to work seamlessly together.</li>
            <li><span className="font-semibold text-white">Training & Handover:</span> Learn to use your system with personalized guidance.</li>
            <li><span className="font-semibold text-white">Ongoing Support:</span> Maintenance, updates, and help as your needs evolve.</li>
          </ol>
        </div>
      </div>

      {/* Section 7: FAQs - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">FAQs About Custom Installations</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Are custom installations more expensive?</span> They can be, but they offer unmatched quality, reliability, and personalization, often adding long-term value to your home.</li>
            <li><span className="font-semibold text-white">Can I choose specific brands or devices?</span> Yes! Professional installers work with your preferences to design the ideal system.</li>
            <li><span className="font-semibold text-white">Will this work with existing devices?</span> Many systems can integrate with your current smart devices, reducing the need to replace them.</li>
            <li><span className="font-semibold text-white">Can I expand later?</span> Absolutely. Custom systems are designed with scalability in mind, so you can add rooms, features, or devices over time.</li>
          </ul>
        </div>
        <div className="relative flex justify-end">
          <img src="/custom-installs-05.png" alt="Custom Installations FAQ" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 8: CTA - text center */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center mt-24">
        <h2 className="text-2xl font-semibold text-white mb-4">Ready to Build Your Custom Smart Home?</h2>
        <p className="text-gray-300 mb-6">Turn your vision into reality with professional custom smart home installation. Contact us today for a free consultation and see how easy it is to make your home truly smart, secure, and convenient.</p>
        <a href="/" className="inline-block rounded bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition">Find Your Trusted Pro</a>
      </div>
    </section>
  );
}
