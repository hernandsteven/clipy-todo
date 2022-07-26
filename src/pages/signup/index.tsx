import { NextPage } from 'next'

const SignUp: NextPage = () => {
	return (
		<div className="flex justify-center items-center content-center h-[100vh] bg-emerald-500">
			<form className="grid grid-rows-5 gap-0 justify-center bg-white min-h-[75vh] w-[35vw] rounded-md p-4">
				<h1 className="pt-4 text-4xl font-bold font-mono whitespace-nowrap">
					Sign Up
				</h1>
				<input
					className="self-center border-b-2 h-min focus:outline-none"
					type="text"
					placeholder="Username"
				></input>
				<input
					className="self-center border-b-2 h-min focus:outline-none"
					type="email"
					placeholder="Email"
				></input>
				<input
					className="self-center border-b-2 h-min focus:outline-none"
					type="password"
					placeholder="Password"
				></input>
				<h1 className="self-end bg-red-50">Haha</h1>
			</form>
		</div>
	)
}

export default SignUp
