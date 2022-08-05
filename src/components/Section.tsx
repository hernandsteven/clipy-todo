import { FC, ReactNode, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import TaskCard from './TaskCard'
import { DotsHorizontalIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { setAddTask, setIdle } from '../redux/reducers/globalSlice'
import {
    setCurrentSectionID,
    setCurrentSectionTitle,
} from '../redux/reducers/todosSlice'
import { supabase } from '../util/supabaseClient'

interface SectionPropTypes {
    sectionID?: string | null | undefined
    title: string
    icon?: string
    tasks?: Task[]
}

type Task = {
    title: string
    description: string
    tags: {}[]
}

const Section: FC<SectionPropTypes> = ({ sectionID, title, icon, tasks }) => {
    const dispatch = useAppDispatch()
    const user = supabase.auth.user()
    const [newTitle, setNewTitle] = useState(title)
    const globalTitle = useAppSelector(
        (state) => state.todos.currentSectionTitle
    )

    const handleAddTask = async () => {
        if (sectionID === null || sectionID === undefined) {
            // If sectionID is null, then we're adding a task to the "Untitled" section
            dispatch(setCurrentSectionID(uuid()))
        } else {
            // Otherwise, we're adding a task to a specific section
            dispatch(setCurrentSectionID(sectionID))
        }
        // Set the global state to show the add task modal
        dispatch(setAddTask())
    }

    const handleTitleChange = async (e: string) => {
        setNewTitle(e)
        dispatch(setCurrentSectionTitle(e))
    }

    const handleTitleEnter = async (e: string) => {
        if (sectionID !== null && sectionID !== undefined && user) {
            const { data, error } = await supabase
                .from('sections')
                .update({ section_title: e })
                .eq('section_id', sectionID)
                .eq('user_id', user?.id)
        }
    }

    useEffect(() => {
        if (!sectionID) {
            setNewTitle('untitled')
        }
    }, [])

    return (
        <div id="section" className="flex min-h-screen flex-col">
            <div className="sticky top-0 mb-2 mt-2 flex w-full flex-row rounded-md pr-3 shadow-md">
                <input
                    className="flex flex-1 p-4 text-2xl font-bold"
                    type="text"
                    onChange={(e) => {
                        handleTitleChange(e.target.value)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleTitleEnter(e.target.value)
                        }
                    }}
                    value={newTitle}
                />
                <div className="flex flex-row items-center justify-center gap-2">
                    <PlusCircleIcon className="h-5 w-5 cursor-pointer" />
                    <DotsHorizontalIcon className="h-5 w-5 cursor-pointer" />
                </div>
            </div>
            <section
                id="tasks"
                className="flex max-h-[100vh] flex-col gap-2 overflow-y-auto pr-3"
            >
                {tasks &&
                    tasks?.map(({ title, description, tags }, idx) => {
                        return (
                            <TaskCard
                                key={uuid()}
                                title={title}
                                description={description}
                                tags={tags}
                            />
                        )
                    })}

                {tasks && tasks.length > 0 ? (
                    <button
                        onClick={() => handleAddTask()}
                        className="flex min-h-[50px] w-full border-spacing-10 cursor-pointer flex-row items-center justify-center gap-1 rounded-md border border-dashed border-gray-500 bg-gray-50 p-4 text-center hover:bg-gray-100"
                    >
                        <PlusCircleIcon className="h-5 w-5 cursor-pointer self-center justify-self-end" />
                        <p>Add Task</p>
                    </button>
                ) : (
                    <button
                        onClick={() => handleAddTask()}
                        className="flex min-h-[100px] w-full border-spacing-10 cursor-pointer flex-row items-center justify-center gap-1 whitespace-nowrap rounded-md border border-solid border-gray-500 bg-gray-50 p-4 text-center hover:bg-gray-100"
                    >
                        <PlusCircleIcon className="h-5 w-5 cursor-pointer self-center justify-self-end" />
                        <p>Add Task</p>
                    </button>
                )}
            </section>
        </div>
    )
}

export default Section
