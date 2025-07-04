'use client';

import { SignalIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon, BoltIcon } from "@heroicons/react/20/solid";
import SignalAnimation from './SignalAnimation';
import ContactForm from './ContactForm';

const features = [
	{
		name: "Smart Home Installation in Phoenix, Mesa, Scottsdale, Gilbert & the East Valley",
		description:
			"A professionally installed smart home system in Mesa, Scottsdale, Paradise Valley, Gilbert, Queen Creek, San Tan Valley, or anywhere in the East Valley gives you seamless control over lighting, climate, security, and entertainment—from your phone or voice assistant. Whether you live in Eastmark, Blossom Rock, Cadence, Arcadia, North Scottsdale, DC Ranch, Silverleaf, Desert Mountain, or a brand-new build in Queen Creek, we help make everyday living more secure, convenient, and energy efficient.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "Security-Focused Smart Home Installations",
		description:
			"From video doorbells and smart locks to full home security systems with real-time monitoring, our Phoenix-area smart home solutions put peace of mind at your fingertips—whether you're at home or away. Popular in Queen Creek, Mesa, Gilbert, Scottsdale, Paradise Valley, Arcadia, North Scottsdale, and new East Valley developments, our security-first installations are designed for modern Arizona living.",
		icon: LockClosedIcon,
	},
	{
		name: "Comfort & Convenience for Every New Home",
		description:
			"Imagine walking into a perfectly lit, climate-controlled space in your new Blossom Rock, San Tan Valley, Eastmark, Cadence, Barney Farms, or Storyrock home—your environment adjusting automatically to your preferences. Our East Valley smart home installs include voice-controlled lights, smart thermostats, and connected devices that make life easier from day one.",
		icon: ServerIcon,
	},
	{
		name: "Energy-Saving Solutions for Arizona Homes",
		description:
			"Smart technology isn't just about convenience—it's about lowering your utility bills too. Our installations across Phoenix, Mesa, Scottsdale, Paradise Valley, Arcadia, North Scottsdale, Gilbert, Queen Creek, San Tan Valley, Apache Junction, Eastmark, Cadence, Blossom Rock, Barney Farms, and Storyrock help homeowners monitor and reduce energy use with smart thermostats, adaptive lighting, and more.",
		icon: BoltIcon,
	},
];

const featureOptions = [
  {
	img: '/smart-home-automation.svg',
	alt: 'Smart Home Automation',
	href: '/smart-home-automation',
	title: 'Smart Home Automation',
	desc: 'Automate lighting, climate, and security for your Phoenix or East Valley home. Seamless integration for modern living.'
  },
  {
	img: '/home-security.svg',
	alt: 'Home Security Systems',
	href: '/home-security',
	title: 'Home Security Systems',
	desc: 'Protect your family with advanced video doorbells, smart locks, and 24/7 monitoring. Serving Mesa, Scottsdale, and beyond.'
  },
  {
	img: '/energy-management.svg',
	alt: 'Energy Management',
	href: '/energy-management',
	title: 'Energy Management',
	desc: 'Lower utility bills with smart thermostats and adaptive lighting. Energy-saving solutions for Arizona homes.'
  },
  {
	img: '/custom-installations.svg',
	alt: 'Custom Installations',
	href: '/custom-installations',
	title: 'Custom Installations',
	desc: 'Tailored smart home solutions for new builds and remodels in Queen Creek, Gilbert, and the East Valley.'
  },
];

export default function HomePage() {
	return (
		<div className="overflow-hidden py-24 sm:py-32 pg-container">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pt-0 lg:pr-8">
						<div className="lg:max-w-lg">
							{/* <SignalIcon width={50} height={50} className="text-indigo-600 mb-4" /> */}
							{/* Custom animated signal SVG as a component */}
							<SignalAnimation className="w-20 h-20 text-blue-600" />
							<h1 className="text-base/7 font-semibold text-indigo-600">Your East Valley Smart Home Installation Resource</h1>
							<h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
								Smarter Living Starts Here, Sign Up for Expert Guidance
							</h2>
							<p className="mt-6 text-lg/8 text-gray-600">
								A professionally installed smart home system lets you control lighting, climate, security, and entertainment from anywhere—making everyday life more convenient, secure, and energy efficient.
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<h3 className="inline font-semibold text-gray-900">
											<feature.icon aria-hidden="true" className="absolute top-1 left-1 w-5 h-5 text-indigo-600" />
											{feature.name}
										</h3>{" "}
										<dd className="inline">{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>

					<div className="bg-white rounded-xl shadow-xl ring-1 ring-gray-400/10 p-8 flex flex-col gap-6 w-full max-w-lg mx-auto relative overflow-hidden">
						{/* Decorative background image */}
						<img 
							src="/form-bg-image.png" 
							alt="Smart home background" 
							className="absolute left-0 bottom-0 w-full h-auto max-h-full object-cover opacity-30 pointer-events-none select-none z-0" 
							aria-hidden="true"
						/>
						<div className="relative z-10">
							<h3 className="text-2xl font-bold text-indigo-700 mb-4">Get Expert Smart Home Advice—No Obligation, Just Answers!</h3>
							<div className="space-y-6">
							<ContactForm />
							</div>
						</div>
					</div>

				</div>

			</div> {/* End .pg-container/main content */}
			{/* Simple grid section - 4 columns, white background, full width */}
			<section className="bg-white py-12 sm:py-16 mt-16 w-full">
			<div className="w-full px-0">
		<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl mx-auto px-6 lg:px-8">
		  {featureOptions.map((opt) => (
			<div key={opt.title} className="flex flex-col items-center text-center">
			  <img src={opt.img} alt={opt.alt} className="w-20 h-20 mb-4 object-contain" style={{ filter: 'invert(18%) sepia(81%) saturate(7476%) hue-rotate(235deg) brightness(91%) contrast(101%)' }} />
			  <a href={opt.href} className="text-indigo-700 font-semibold hover:underline mb-2">{opt.title}</a>
			  <p className="text-xs text-gray-600">{opt.desc}</p>
			</div>
		  ))}
		</div>
			</div>
			</section>

			<div className="text-sm disclaimer-area">
			<p className="text-xs mt-16 text-center text-gray-500">
				© {new Date().getFullYear()} Source Trusted Pros. All rights reserved. Designed and developed by <a href="https://github.com/dmanzer2" className="text-indigo-600 hover:underline">David Manzer</a>.
			</p>
			</div>
		</div>
	);
}