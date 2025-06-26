'use client';

import { SignalIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon, BoltIcon } from "@heroicons/react/20/solid";
import ContactForm from './ContactForm';

const features = [
	{
		name: "Smart Home Installation in Phoenix, Mesa & the East Valley",
		description:
			"A professionally installed smart home system in Mesa, Queen Creek, San Tan Valley, or anywhere in the East Valley gives you seamless control over lighting, climate, security, and entertainment—from your phone or voice assistant. Whether you live in Eastmark, Blossom Rock, Cadence, or a brand-new build in Queen Creek, we help make everyday living more secure, convenient, and energy efficient.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "Security-Focused Smart Home Installations",
		description:
			"From video doorbells and smart locks to full home security systems with real-time monitoring, our Phoenix-area smart home solutions put peace of mind at your fingertips—whether you're at home or away. Popular in Queen Creek, Mesa, and new East Valley developments, our security-first installations are designed for modern Arizona living.",
		icon: LockClosedIcon,
	},
	{
		name: "Comfort & Convenience for Every New Home",
		description:
			"Imagine walking into a perfectly lit, climate-controlled space in your new Blossom Rock or San Tan Valley home—your environment adjusting automatically to your preferences. Our East Valley smart home installs include voice-controlled lights, smart thermostats, and connected devices that make life easier from day one.",
		icon: ServerIcon,
	},
	{
		name: "Energy-Saving Solutions for Arizona Homes",
		description:
			"Smart technology isn't just about convenience—it's about lowering your utility bills too. Our installations across Phoenix, Mesa, Apache Junction, and Eastmark help homeowners monitor and reduce energy use with smart thermostats, adaptive lighting, and more.",
		icon: BoltIcon,
	},
];

export default function HomePage() {
	return (
		<div className="overflow-hidden py-24 sm:py-32 pg-container">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pt-0 lg:pr-8">
						<div className="lg:max-w-lg">
							<SignalIcon width={50} height={50} className="text-indigo-600 mb-4" />
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

					<div className="bg-white rounded-xl shadow-xl ring-1 ring-gray-400/10 p-8 flex flex-col gap-6 w-full max-w-lg mx-auto">
						<h3 className="text-2xl font-bold text-indigo-700 mb-4">Get Expert Smart Home Advice—No Obligation, Just Answers!</h3>
						<div className="space-y-6">
							<ContactForm />
						</div>
					</div>
				</div>
				<div className="text-sm disclaimer-area">
					<p className="text-xs mt-16 text-center text-gray-500">
						© {new Date().getFullYear()} Source Trusted Pros. All rights reserved. Designed and developed by <a href="https://github.com/dmanzer2" className="text-indigo-600 hover:underline">David Manzer</a>.
					</p>
				</div>
			</div>
		</div>
	);
}