export const metadata = {
  title: 'Smart Home Automation | Source Trusted Pros',
  description: 'Smart Home Automation makes life easier, safer, and more efficient. Learn about professional smart home installation, top features, and benefits for your home.'
};

export default function SmartHomeAutomationPage() {
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">Smart Home Automation</h1>
          <p className="text-lg text-gray-300 mb-8">
            Transform your living space with advanced Smart Home Automation. Discover how professional smart home installation can make your home more convenient, secure, energy-efficient, and future-ready.
          </p>
        </div>
        <div className="relative flex justify-end">
          <img src="/room-lighting-06.png" alt="Smart Home Automation" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 2: What is Smart Home Automation? - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/room-lighting-07.png" alt="Smart Home System Example" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">What is Smart Home Automation?</h2>
          <p className="text-gray-300 mb-6">Smart Home Automation refers to integrating technology into your home to automate and remotely control lighting, climate, security, entertainment, and other systems. With a properly designed and professionally installed smart home system, you can control these features from your smartphone, tablet, voice assistant, or dedicated control panels.</p>
          <p className="text-gray-300 mb-6">From adjusting your thermostat before you get home to checking security cameras while on vacation, automation puts control at your fingertips—anywhere, anytime.</p>
        </div>
      </div>

      {/* Section 3: Benefits - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Benefits of Smart Home Automation</h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li>
              <span className="font-semibold text-white">Convenience and Control:</span> Control lighting, thermostats, cameras, door locks, garage doors, and appliances from one app or voice command. Set up “scenes” like “Movie Night” to dim lights and start your streaming service automatically.
            </li>
            <li>
              <span className="font-semibold text-white">Energy Efficiency:</span> Automated lighting, climate control, and window shades help reduce energy waste. Smart thermostats learn your schedule and adjust temperatures automatically, saving on utility bills while maintaining comfort.
            </li>
            <li>
              <span className="font-semibold text-white">Enhanced Security:</span> Professional smart home installation includes options like smart locks, video doorbells, motion sensors, indoor/outdoor cameras, alarm systems, and 24/7 monitoring integration. Receive instant notifications and check camera feeds in real time, even if you’re halfway across the world.
            </li>
            <li>
              <span className="font-semibold text-white">Customization and Scalability:</span> Start with a basic package and expand to include security systems, automated lighting, whole-home audio, irrigation controls, and more.
            </li>
            <li>
              <span className="font-semibold text-white">Increased Home Value:</span> Smart home technology is a sought-after feature in today’s real estate market. A professionally installed system can add to your home’s appeal and value.
            </li>
          </ol>
        </div>
        <div className="relative flex justify-end">
          <img src="/room-lighting-08.png" alt="Smart Home Benefits" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 4: Features - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/room-lighting-08.png" alt="Smart Home Features" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Popular Smart Home Automation Features</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Smart Lighting:</span> Control brightness, color, and schedules from your phone or voice assistant. Automate routines to turn lights on at sunset or when you arrive home.</li>
            <li><span className="font-semibold text-white">Smart Thermostats:</span> Save energy with thermostats that learn your preferences and adapt automatically. Many integrate with other systems for whole-home energy management.</li>
            <li><span className="font-semibold text-white">Security and Surveillance:</span> Professional installation ensures reliable, secure, and comprehensive monitoring with high-definition cameras, video doorbells, motion detectors, and smart locks.</li>
            <li><span className="font-semibold text-white">Voice Control Integration:</span> Compatible with Google Assistant, Amazon Alexa, or Apple HomeKit, allowing you to control your entire home with simple voice commands.</li>
            <li><span className="font-semibold text-white">Automated Window Shades:</span> Program shades to adjust based on time of day or temperature, increasing comfort and reducing energy use.</li>
            <li><span className="font-semibold text-white">Whole-Home Audio and Entertainment:</span> Stream music or video seamlessly in any room, controlled centrally or from mobile devices.</li>
          </ul>
        </div>
      </div>

      {/* Section 5: Why Choose Pro - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Professional Smart Home Installation?</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Expert design for your space and needs</li>
            <li>Clean, reliable installation</li>
            <li>Seamless integration across devices and brands</li>
            <li>Stronger network and security setup</li>
            <li>Ongoing support and troubleshooting</li>
          </ul>
          <p className="text-gray-300 mb-6">A professional installer ensures your smart home system isn’t just a collection of gadgets but a true, integrated system that works beautifully and reliably.</p>
        </div>
        <div className="relative flex justify-end">
          <img src="/room-lighting-09.png" alt="Professional Installation" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 6: How It Works - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/room-lighting-10.png" alt="How Smart Home Installation Works" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">How Does Smart Home Installation Work?</h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Consultation & Assessment:</span> Discuss your needs and review your home’s layout to design a custom system.</li>
            <li><span className="font-semibold text-white">System Design:</span> Choose the right devices, brands, and integrations for your budget and goals.</li>
            <li><span className="font-semibold text-white">Professional Installation:</span> Technicians install and configure devices, ensuring everything works together seamlessly.</li>
            <li><span className="font-semibold text-white">Training & Support:</span> Learn how to use your system effectively with expert guidance and ongoing support options.</li>
          </ol>
        </div>
      </div>

      {/* Section 7: FAQs - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">FAQs About Smart Home Automation</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Can I start small and expand later?</span> Yes! Most systems are modular. Start with lighting or security, then add features over time.</li>
            <li><span className="font-semibold text-white">Is smart home automation secure?</span> Professional systems use encrypted communications and best practices to ensure security. A reliable installer will also secure your network and devices.</li>
            <li><span className="font-semibold text-white">Will smart home automation work with my phone?</span> Most systems are compatible with iOS and Android, as well as popular voice assistants.</li>
            <li><span className="font-semibold text-white">How much does professional installation cost?</span> Costs vary depending on system complexity and device selection. Get a custom quote during your consultation.</li>
          </ul>
        </div>
        <div className="relative flex justify-end">
          <img src="/room-lighting-05.png" alt="Smart Home FAQ" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 8: CTA - text center */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center mt-24">
        <h2 className="text-2xl font-semibold text-white mb-4">Ready to Automate Your Home?</h2>
        <p className="text-gray-300 mb-6">Make everyday living smarter, safer, and more convenient. Contact us today for a free smart home consultation and discover the difference professional smart home installation can make.</p>
        <a href="/" className="inline-block rounded bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition">Find Your Trusted Pro</a>
      </div>
    </section>
  );
}
