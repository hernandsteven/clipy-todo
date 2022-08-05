import React, { FC, ReactNode } from 'react'
import Tag from './Tag'

interface TaskCardProps {
    title: string
    description?: string
    tags?: Tag[] | null | undefined
}

const TaskCard: FC<TaskCardProps> = ({ title, description, tags }) => {
    return (
        <div className="min-w-[250px] rounded-md border p-3 shadow-md">
            <h1 className="border-b text-lg font-semibold">{title}</h1>
            <p>{description}</p>
            <div className="flex flex-row gap-2 overflow-x-scroll">
                {/*tags &&
                    tags.map(({ difficulty }) => {
                        console.log()
                        return <Tag difficulty={difficulty} />
                    })*/}
            </div>
        </div>
    )
}

export default TaskCard
