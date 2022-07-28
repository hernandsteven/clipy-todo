import { FC, ReactNode } from 'react'
import TaskCard from './TaskCard'
import { DotsHorizontalIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { useAppDispatch } from '../redux/app/hooks'
import { setAddTask } from '../redux/reducers/globalSlice'

interface SectionPropTypes {
	title: string
	icon?: string
	tasks?: Task[]
}

type Task = {
	title: string
	description: string
	tags: {}[]
}

const Section: FC<SectionPropTypes> = ({ title, icon, tasks }) => {
	const dispatch = useAppDispatch()

	return (
		<div id="section" className="flex flex-col">
			<div className="flex flex-row top-0 sticky w-full pr-3 rounded-md shadow-md mb-2 mt-2">
				<h1 className="flex flex-1 p-4 text-2xl font-bold">{title}</h1>
				<div className="flex flex-row justify-center items-center gap-2">
					<PlusCircleIcon className="h-5 w-5 cursor-pointer" />
					<DotsHorizontalIcon className="h-5 w-5 cursor-pointer" />
				</div>
			</div>
			<section
				id="tasks"
				className="flex flex-col gap-2 max-h-[100vh] overflow-y-auto pr-3"
			>
				{tasks?.map(({ title, description, tags }) => {
					return (
						<TaskCard
							title={title}
							description={description}
							tags={tags}
						/>
					)
				})}

				{tasks && tasks.length > 0 ? (
					<button
						onClick={() => dispatch(setAddTask())}
						className="flex flex-row gap-1 cursor-pointer bg-gray-50 hover:bg-gray-100 p-4 text-center justify-center items-center border-dashed min-h-[50px] w-full rounded-md border-gray-500 border border-spacing-10"
					>
						<PlusCircleIcon className="h-5 w-5 justify-self-end self-center cursor-pointer" />
						<p>Add Task</p>
					</button>
				) : (
					<button
						onClick={() => dispatch(setAddTask())}
						className="flex flex-row gap-1 cursor-pointer bg-gray-50 hover:bg-gray-100 p-4 text-center justify-center items-center border-solid min-h-[100px] w-full rounded-md border-gray-500 border border-spacing-10"
					>
						<PlusCircleIcon className="h-5 w-5 justify-self-end self-center cursor-pointer" />
						<p>Add Task</p>
					</button>
				)}
			</section>
		</div>
	)
}

export default Section
