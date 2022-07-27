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
					<section className="self-end w-full">
						<div
							onClick={() => dispatch(setIdle())}
							className="flex flex-row  gap-1 bg-green-400 hover:bg-green-500 cursor-pointer"
						>
							<h1 className="text-xl ml-[45%]">Save</h1>
							<CheckIcon className=" ml-[19px] flex cursor-pointer h-8 w-10 stroke-1 rounded-lg text-inherit" />
						</div>
						<div
							onClick={() => dispatch(setIdle())}
							className="flex flex-row gap-1 bg-red-400 hover:bg-red-500 cursor-pointer"
						>
							<h1 className="text-xl ml-[45%]">Cancel</h1>
							<XIcon className="flex cursor-pointer h-8 w-10 stroke-1 rounded-lg text-inherit" />
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default AddTaskModal
