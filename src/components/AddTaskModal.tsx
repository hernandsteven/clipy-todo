import React, { FC } from 'react'
import { XIcon, CheckIcon } from '@heroicons/react/outline'
import { useAppDispatch } from '../redux/app/hooks'
import { setIdle } from '../redux/reducers/globalSlice'

interface AddTaskModalProps {
	sectionID: Number
}

const AddTaskModal: FC<AddTaskModalProps> = ({ sectionID }) => {
	const dispatch = useAppDispatch()
	return (
		<div className="select-none overflow-hidden text-center justify-center text-white fixed top-0 bottom-0 left-0 right-0 z-50">
			<div className="flex justify-center items-center w-full h-full">
				<div className="flex h-[600px] w-[600px] shadow-md bg-gray-200 rounded-md opacity-90">
					<section className="flex flex-row w-full p-2 gap-2">
						<div
							onClick={() => dispatch(setIdle())}
							className="flex flex-1 rounded-md flex-row gap-1 items-center h-10 self-end bg-red-400 hover:bg-red-500 cursor-pointer"
						>
							<button className="flex flex-row items-center w-full justify-center">
								<h1 className="flex text-xl">Cancel</h1>
								<XIcon className="cursor-pointer h-8 w-max stroke-1 rounded-lg text-inherit" />
							</button>
						</div>
						<div
							onClick={() => dispatch(setIdle())}
							className="flex flex-1 flex-row rounded-md items-center gap-1 h-10 self-end bg-green-400 hover:bg-green-500 cursor-pointer"
						>
							<button className="flex flex-row items-center w-full justify-center">
								<h1 className="flex text-xl"> Save</h1>
								<CheckIcon className="flex cursor-pointer h-8 w-max stroke-1 rounded-lg text-inherit" />
							</button>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default AddTaskModal
