import React, { FC, ReactNode } from 'react'
import Tag from './Tag'

interface TaskCardProps {
	title: string
	description?: string
	tags?: Tag[]
}

const TaskCard: FC<TaskCardProps> = ({ title, description, tags }) => {
	return (
		<div className="border-2 rounded-md p-3 shadow-md">
			<h1 className="border-b text-md font-semibold">{title}</h1>
			<p>{description}</p>
			<div className="flex flex-row gap-2 overflow-x-scroll">
				{tags?.map(({ difficulty }) => {
					console.log()
					return <Tag difficulty={difficulty} />
				})}
			</div>
		</div>
	)
}

export default TaskCard
