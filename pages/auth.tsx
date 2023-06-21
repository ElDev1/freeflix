import Input from '../components/Input'

const Auth = () => {
	return (
		<div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<nav className="px-12 py-5">
					<h1 className="text-red-700 text-4xl font-bold">Freeflix</h1>
					<div className="flex justify-center">
						<div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg-max-w-md rounded-md w-full">
							<h2 className="text-white text-4xl mb-8 font-semibold">
								Sign in
							</h2>
							<div className="flex flex-col gap-4">
								<Input />
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Auth