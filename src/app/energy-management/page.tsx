export const metadata = {
  title: 'Energy Management | Source Trusted Pros',
  description: 'Save energy, cut utility bills, and reduce your carbon footprint with smart home Energy Management. Learn about professional installation, popular features, and automation benefits.'
};

export default function EnergyManagementPage() {
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">Energy Management</h1>
          <p className="text-lg text-gray-300 mb-8">
            Take control of your home’s energy use with advanced Energy Management solutions. Discover how professional smart home installation can help you save money, reduce environmental impact, and optimize comfort through intelligent automation.
          </p>
        </div>
        <div className="relative flex justify-end">
          <img src="/energy-management-05.png" alt="Energy Management" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 2: What is Energy Management? - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/energy-management-06.png" alt="Energy Management System Example" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">What is Energy Management in a Smart Home?</h2>
          <p className="text-gray-300 mb-6">Energy Management refers to the use of smart technologies to monitor, control, and reduce energy consumption in your home. By integrating connected devices like smart thermostats, lighting, appliances, and sensors, you can automate energy-saving routines, gain real-time usage insights, and make your home more efficient and sustainable.</p>
          <p className="text-gray-300 mb-6">Professional installation ensures your energy management system is seamlessly designed to fit your lifestyle, budget, and long-term goals.</p>
        </div>
      </div>

      {/* Section 3: Benefits - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Benefits of Smart Home Energy Management</h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Lower Utility Bills:</span> Automated thermostats, lighting schedules, and appliance control reduce waste and optimize energy use, lowering monthly bills.</li>
            <li><span className="font-semibold text-white">Environmental Sustainability:</span> Using less energy means reducing your carbon footprint. Smart energy management is a step toward a greener, more sustainable home.</li>
            <li><span className="font-semibold text-white">Real-Time Monitoring and Insights:</span> Gain visibility into how much energy each device uses. Smart apps provide charts, alerts, and suggestions to optimize efficiency.</li>
            <li><span className="font-semibold text-white">Enhanced Comfort:</span> Automate climate control for perfect temperatures when you’re home, and save energy when you’re away.</li>
            <li><span className="font-semibold text-white">Remote Access and Control:</span> Adjust your home’s energy settings anytime, from anywhere, via your smartphone or tablet.</li>
            <li><span className="font-semibold text-white">Integration with Renewable Energy:</span> Many systems work seamlessly with solar panels, battery storage, and other renewable solutions to maximize self-generated power.</li>
          </ol>
        </div>
        <div className="relative flex justify-end">
          <img src="/energy-management-07.png" alt="Energy Management Benefits" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 4: Features - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/energy-management-08.png" alt="Energy Management Features" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Popular Energy Management Features</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Smart Thermostats:</span> Learn your schedule and adjust heating/cooling automatically for maximum efficiency and comfort.</li>
            <li><span className="font-semibold text-white">Smart Lighting:</span> Set schedules, motion-activated controls, and dimming for reduced energy use without sacrificing convenience.</li>
            <li><span className="font-semibold text-white">Energy Monitoring Plugs and Outlets:</span> Identify energy-hungry appliances and automate on/off cycles to save power.</li>
            <li><span className="font-semibold text-white">Automated Window Shades:</span> Regulate indoor temperatures by blocking heat in summer and letting sunlight in during winter.</li>
            <li><span className="font-semibold text-white">Appliance Control:</span> Turn off forgotten devices remotely or on a schedule to reduce phantom energy drain.</li>
            <li><span className="font-semibold text-white">Solar and Battery Integration:</span> Optimize use of self-generated power with intelligent control systems that prioritize stored or solar energy.</li>
          </ul>
        </div>
      </div>

      {/* Section 5: Why Choose Pro - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Professional Energy Management Installation?</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Customized System Design: Tailored to your home’s layout and energy goals.</li>
            <li>Expert Integration: All devices work together seamlessly, avoiding compatibility issues.</li>
            <li>Secure Setup: Proper network configuration and data privacy best practices.</li>
            <li>Training and Support: Learn to use your system effectively and get ongoing help as needed.</li>
            <li>Future-Proof Solutions: Easily expand your system with new technologies.</li>
          </ul>
          <p className="text-gray-300 mb-6">Professional installation ensures your energy management system is secure, reliable, and delivers the full benefits of smart automation.</p>
        </div>
        <div className="relative flex justify-end">
          <img src="/energy-management-09.png" alt="Professional Energy Management Installation" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 6: How It Works - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/energy-management-10.png" alt="How Energy Management Works" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">How Does Smart Home Energy Management Work?</h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Consultation & Assessment:</span> Understand your current energy usage and goals.</li>
            <li><span className="font-semibold text-white">System Design:</span> Choose the right devices and automation strategies for your home.</li>
            <li><span className="font-semibold text-white">Professional Installation:</span> Ensure everything is installed securely and works together perfectly.</li>
            <li><span className="font-semibold text-white">Configuration & Training:</span> Learn to use the app, set schedules, and monitor savings.</li>
            <li><span className="font-semibold text-white">Ongoing Support:</span> Get help expanding or maintaining your system over time.</li>
          </ol>
        </div>
      </div>

      {/* Section 7: FAQs - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">FAQs About Energy Management</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">How much can I save with smart energy management?</span> Savings vary by home and system, but many users reduce energy bills by 10–30% with smart automation.</li>
            <li><span className="font-semibold text-white">Will this work with solar panels?</span> Yes! Professional systems can integrate with solar and battery storage to optimize self-generated energy.</li>
            <li><span className="font-semibold text-white">Can I control it from my phone?</span> Absolutely. Most systems offer full app control for remote management and real-time monitoring.</li>
            <li><span className="font-semibold text-white">Is professional installation really necessary?</span> Professional installation ensures compatibility, security, and optimal performance—so you get the full benefits of your investment.</li>
          </ul>
        </div>
        <div className="relative flex justify-end">
          <img src="/energy-management-05.png" alt="Energy Management FAQ" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 8: CTA - text center */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center mt-24">
        <h2 className="text-2xl font-semibold text-white mb-4">Ready to Optimize Your Home’s Energy Use?</h2>
        <p className="text-gray-300 mb-6">Save money, increase comfort, and reduce your environmental impact with smart home energy management. Contact us today for a free consultation and see how easy it is to make your home more efficient and sustainable.</p>
        <a href="/" className="inline-block rounded bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition">Find Your Trusted Pro</a>
      </div>
    </section>
  );
}
