import React from 'react'
import { PlusIcon } from '@heroicons/react/outline'

const ActionMenu = () => {
	return (
		<div className="flex flex-row w-full border rounded-md p-4 bg-gray-50">
			<section className="flex flex-row flex-1 gap-4 text-gray-500">
				<div className="hover:bg-gray-200 outline outline-gray-300 text-center min-w-[5rem] p-2 rounded-md cursor-pointer">
					Overview
				</div>
				<div className="hover:bg-gray-200 outline outline-gray-300 text-center min-w-[5rem] p-2 rounded-md cursor-pointer">
					List
				</div>
				<div className="hover:bg-gray-200 outline outline-gray-300 p-2 text-center min-w-[5rem] rounded-md cursor-pointer">
					Calender
				</div>
				<div className="hover:bg-gray-200 outline outline-gray-300 p-2 text-center min-w-[5rem] rounded-md cursor-pointer">
					Tasks
				</div>
			</section>
			<button className="flex flex-row justify-center items-center gap-1 h-fit w-fit rounded-md bg-purple-600 hover:bg-purple-500 self-end text-center p-2 cursor-pointer text-white">
				<PlusIcon className="h-5 w-5" />
				<p> Add Catergory </p>
			</button>
		</div>
	)
}

export default ActionMenu
