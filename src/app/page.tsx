import { BoltIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";

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
			"Smart technology isn’t just about convenience—it’s about lowering your utility bills too. Our installations across Phoenix, Mesa, Apache Junction, and Eastmark help homeowners monitor and reduce energy use with smart thermostats, adaptive lighting, and more.",
		icon: BoltIcon,
	},
];

export default function Home() {
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					
					<div className="lg:pt-0 lg:pr-8">
						<div className="lg:max-w-lg">
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
						<form className="space-y-6">
							<fieldset>
								<legend className="text-sm font-medium text-gray-700 mb-2">Contact Type</legend>
								<div className="flex gap-6">
									<label className="inline-flex items-center">
										<input type="radio" name="contactType" value="business" className="form-radio text-indigo-600" defaultChecked />
										<span className="ml-2">Business</span>
									</label>
									<label className="inline-flex items-center">
										<input type="radio" name="contactType" value="personal" className="form-radio text-indigo-600" />
										<span className="ml-2">Personal</span>
									</label>
								</div>
							</fieldset>
							<div className="space-y-4">
								<div>
									<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
									<input type="text" id="firstName" name="firstName" autoComplete="given-name" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" required />
								</div>
								<div>
									<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
									<input type="text" id="lastName" name="lastName" autoComplete="family-name" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" required />
								</div>
								<div>
									<label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name <span className="text-gray-400">(optional)</span></label>
									<input type="text" id="company" name="company" autoComplete="organization" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" />
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
									<input type="email" id="email" name="email" autoComplete="email" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" required />
								</div>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
									<input type="tel" id="phone" name="phone" autoComplete="tel" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" required />
								</div>
								<div>
									<label htmlFor="city" className="block text-sm font-medium text-gray-700">City / Location</label>
									<input type="text" id="city" name="city" autoComplete="address-level2" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" required />
								</div>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
									<input type="text" id="zip" name="zip" autoComplete="postal-code" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" required />
								</div>
								<div>
									<label htmlFor="county" className="block text-sm font-medium text-gray-700">AZ County</label>
									<input type="text" id="county" name="county" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" required />
								</div>
							</div>
							<div>
								<label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments</label>
								<textarea id="comments" name="comments" rows={4} className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-500" placeholder="Tell us about your smart home installation needs..." required />
							</div>
							<div>
								<label htmlFor="budget" className="block text-sm font-medium text-gray-700">Estimated Budget</label>
								<select id="budget" name="budget" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" required>
									<option value="">Select a budget range</option>
									<option value="under-2k">Under $2,000</option>
									<option value="2k-5k">$2,000 - $5,000</option>
									<option value="5k-10k">$5,000 - $10,000</option>
									<option value="10k-20k">$10,000 - $20,000</option>
									<option value="over-20k">Over $20,000</option>
								</select>
							</div>
							<div>
								<label htmlFor="timeline" className="block text-sm font-medium text-gray-700">Project Timeline</label>
								<select id="timeline" name="timeline" className="mt-1 block w-full rounded-md px-3 py-1.5 border-2 border-gray-300 shadow-sm h-10 focus:border-indigo-600 focus:ring-indigo-500" required>
									<option value="">Select a timeline</option>
									<option value="asap">ASAP</option>
									<option value="1-2-weeks">1-2 weeks</option>
									<option value="1-month">Within 1 month</option>
									<option value="1-3-months">1-3 months</option>
									<option value="3-6-months">3-6 months</option>
									<option value="flexible">Flexible / Not sure</option>
								</select>
							</div>
							<div>
								<button type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
								<p className="mt-4 text-xs text-gray-500 text-left">
  								We respect your privacy. Your information will only be used to contact you about our smart home installation products and services. We will never share or sell your details to third parties.
								</p>
							</div>
						</form>
					</div>
					
				</div>
			</div>
		</div>
	);
}
