import { EpicStackLogo, logos } from './logos/logos'

const GETTING_STARTED_URL =
	'https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="grid place-items-center gap-12 px-4 py-16 sm:gap-16">
				<div className="flex max-w-md flex-col items-center text-center">
					<EpicStackLogo className="size-20" />
					<h1 className="sm:text-4.5xl lg:text-5.5xl mt-6 text-4xl font-medium md:mt-8 md:text-5xl">
						The <span className="text-highlight">Epic</span> Stack
					</h1>
					<p className="mt-4 text-slate-600 sm:text-lg md:mt-6 lg:text-xl">
						Check the{' '}
						<a className="text-black underline" href={GETTING_STARTED_URL}>
							Getting Started guide
						</a>{' '}
						file for how to get your project off the ground!
					</p>
				</div>
				<ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4">
					{logos.map(logo => (
						<li key={logo.href}>
							<a
								href={logo.href}
								className="bg-highlight/[7%] grid size-20 place-items-center rounded-2xl p-4 sm:size-24"
							>
								<img src={logo.src} alt="" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}