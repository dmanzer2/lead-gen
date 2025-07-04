export const metadata = {
  title: 'Home Security Systems | Source Trusted Pros',
  description: 'Protect your family with advanced Home Security Systems. Learn about professional security system installation, popular features, and 24/7 monitoring for peace of mind.'
};

export default function HomeSecurityPage() {
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">Home Security Systems</h1>
          <p className="text-lg text-gray-300 mb-8">
            Protect what matters most with advanced Home Security Systems. Learn how professional security system installation can give you peace of mind, deter crime, and keep your family safe with 24/7 monitoring and smart technology.
          </p>
        </div>
        <div className="relative flex justify-end">
          <img src="/home-security-05.png" alt="Home Security Systems" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 2: What Are Home Security Systems? - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/home-security-06.png" alt="Home Security System Example" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">What Are Home Security Systems?</h2>
          <p className="text-gray-300 mb-6">A home security system is a network of connected devices designed to detect, deter, and respond to potential threats like intrusions, fires, or environmental hazards. These systems range from basic alarm setups to fully integrated smart systems that let you monitor and control your home security from anywhere in the world.</p>
          <p className="text-gray-300 mb-6">Professional home security installation ensures your system is tailored to your home’s layout, your family’s needs, and the latest technology standards.</p>
        </div>
      </div>

      {/* Section 3: Benefits - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Benefits of Home Security Systems</h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Crime Deterrence:</span> Visible security cameras, yard signs, and window stickers discourage potential intruders from targeting your home. Most burglars avoid homes with robust security systems.</li>
            <li><span className="font-semibold text-white">24/7 Monitoring:</span> Professional systems offer round-the-clock monitoring. If an alarm is triggered, trained operators can contact you, dispatch authorities, or even alert emergency services immediately.</li>
            <li><span className="font-semibold text-white">Remote Access and Control:</span> Modern systems let you arm/disarm alarms, lock doors, view live camera feeds, and receive instant notifications—all from your smartphone or tablet.</li>
            <li><span className="font-semibold text-white">Real-Time Alerts:</span> Receive immediate alerts for break-ins, motion detection, glass-break sensors, or even environmental threats like smoke or carbon monoxide.</li>
            <li><span className="font-semibold text-white">Insurance Benefits:</span> Many insurance companies offer discounts for professionally monitored security systems, saving you money over time.</li>
            <li><span className="font-semibold text-white">Peace of Mind:</span> Whether you’re at work, on vacation, or asleep, you’ll know your family and property are protected.</li>
          </ol>
        </div>
        <div className="relative flex justify-end">
          <img src="/home-security-07.png" alt="Home Security Benefits" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 4: Features - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/home-security-08.png" alt="Home Security Features" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Popular Features in Home Security Systems</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Surveillance Cameras:</span> Indoor and outdoor cameras offer live streaming, HD recording, night vision, and motion-activated alerts. Some systems even feature two-way audio to communicate with visitors.</li>
            <li><span className="font-semibold text-white">Smart Door Locks:</span> Remotely lock or unlock doors, grant access to guests, and monitor entry logs for added control over who enters your home.</li>
            <li><span className="font-semibold text-white">Motion Sensors:</span> Detect movement inside or around your property and trigger alerts or alarms.</li>
            <li><span className="font-semibold text-white">Window and Door Sensors:</span> Get notified if a door or window is opened unexpectedly, adding an extra layer of protection against break-ins.</li>
            <li><span className="font-semibold text-white">Glass-Break Detectors:</span> Special sensors that listen for the sound frequency of shattering glass, ideal for homes with large windows or sliding doors.</li>
            <li><span className="font-semibold text-white">Alarm Sirens:</span> Loud alarms deter intruders and alert occupants in the event of a break-in.</li>
            <li><span className="font-semibold text-white">Environmental Monitoring:</span> Many systems include smoke detectors, carbon monoxide alarms, and flood sensors for comprehensive safety.</li>
            <li><span className="font-semibold text-white">Video Doorbells:</span> See and speak with visitors at your door from anywhere, deterring package theft and unwanted solicitors.</li>
          </ul>
        </div>
      </div>

      {/* Section 5: Why Choose Pro - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Professional Home Security Installation?</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Customized system design tailored to your home’s layout</li>
            <li>Expert placement of cameras and sensors for maximum coverage</li>
            <li>Integration with existing smart home systems</li>
            <li>Reliable, secure connections and data encryption</li>
            <li>Ongoing support and maintenance</li>
            <li>Access to professional monitoring services</li>
          </ul>
          <p className="text-gray-300 mb-6">Professional installers ensure that your security system is effective, easy to use, and designed to meet your specific needs.</p>
        </div>
        <div className="relative flex justify-end">
          <img src="/home-security-09.png" alt="Professional Security Installation" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 6: How It Works - image left, text right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative flex justify-start order-2 lg:order-1">
          <img src="/home-security-10.png" alt="How Home Security Installation Works" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -ml-32 lg:-ml-48 xl:-ml-64" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-white mb-4">How Does Professional Installation Work?</h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Consultation:</span> Discuss your needs and get a custom security plan for your property.</li>
            <li><span className="font-semibold text-white">Design:</span> Choose the right devices, brands, and monitoring options.</li>
            <li><span className="font-semibold text-white">Installation:</span> Professional technicians install and test all equipment.</li>
            <li><span className="font-semibold text-white">Training:</span> Learn how to use your system with confidence.</li>
            <li><span className="font-semibold text-white">Support:</span> Access maintenance, troubleshooting, and upgrades as needed.</li>
          </ol>
        </div>
      </div>

      {/* Section 7: FAQs - text left, image right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">FAQs About Home Security Systems</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><span className="font-semibold text-white">Do I need professional monitoring?</span> While some homeowners choose self-monitoring, professional monitoring ensures authorities are alerted even if you miss an alarm.</li>
            <li><span className="font-semibold text-white">Can I control my security system from my phone?</span> Yes! Most modern systems offer full app control, allowing you to arm/disarm, view cameras, and get alerts remotely.</li>
            <li><span className="font-semibold text-white">Are wireless systems reliable?</span> Today’s wireless systems use encrypted connections and battery backups to remain secure and reliable even during power outages.</li>
            <li><span className="font-semibold text-white">How much does installation cost?</span> Costs vary based on the size of your home and chosen features. A professional consultation will give you a clear, customized quote.</li>
          </ul>
        </div>
        <div className="relative flex justify-end">
          <img src="/home-security-05.png" alt="Home Security FAQ" className="w-[800px] max-w-none h-auto drop-shadow-2xl bg-gray-800 rounded-xl p-8 -mr-32 lg:-mr-48 xl:-mr-64" />
        </div>
      </div>

      {/* Section 8: CTA - text center */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center mt-24">
        <h2 className="text-2xl font-semibold text-white mb-4">Secure Your Home Today</h2>
        <p className="text-gray-300 mb-6">Don’t wait until it’s too late. Protect your family and property with a professionally installed home security system. Contact us now for a free consultation and see how easy it is to make your home safer and smarter.</p>
        <a href="/" className="inline-block rounded bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition">Find Your Trusted Pro</a>
      </div>
    </section>
  );
}
