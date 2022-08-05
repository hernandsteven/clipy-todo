import React, { FC } from 'react'
import { XIcon, CheckIcon } from '@heroicons/react/outline'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { setIdle } from '../redux/reducers/globalSlice'
import { supabase } from '../util/supabaseClient'
import { setCurrentSectionTitle } from '../redux/reducers/todosSlice'

interface AddTaskModalProps {
    sectionID: Number
}

const AddTaskModal: FC<AddTaskModalProps> = () => {
    const user = useAppSelector((state) => state.global.session.user)
    const currentSectionID = useAppSelector(
        (state) => state.todos.currentSectionID
    )
    const currentSectionTitle = useAppSelector(
        (state) => state.todos.currentSectionTitle
    )

    const dispatch = useAppDispatch()
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [tags, setTags] = React.useState('')

    const resetInputs = () => {
        setTitle('')
        setDescription('')
        setTags('')
    }

    const handleSave = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()

        const newTaskData = {
            title: title,
            description: description,
            tags: tags,
        }

        if (currentSectionID && user) {
            // Seeing if section exists with userID
            let { data: sections, error } = await supabase
                .from('sections')
                .select('*')
                .eq('section_id', currentSectionID)
                .eq('user_id', user.id)

            if (error) {
                console.log(error)
                return
            }

            if (sections?.length === 0) {
                // If section doesn't exist, create it
                const { data, error } = await supabase.from('sections').insert([
                    {
                        section_title: currentSectionTitle,
                        section_id: currentSectionID,
                        user_id: user.id,
                        todos: [newTaskData],
                    },
                ])

                if (error) {
                    console.log(error)
                    return
                }
            } else {
                // If section exists, add todo to section
                if (sections) {
                    const res = await supabase
                        .from('sections')
                        .update({ todos: [...sections[0].todos, newTaskData] })
                        .eq('user_id', user.id)
                        .eq('section_id', currentSectionID)

                    if (res.error) {
                        console.log(res.error)
                        return
                    }
                }
            }
        }

        resetInputs()
        dispatch(setCurrentSectionTitle('untitled'))
        dispatch(setIdle())
    }

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 select-none justify-center overflow-hidden text-center text-white">
            <div className="flex h-full w-full items-center justify-center">
                <div className="flex h-[600px] w-[600px] flex-row justify-center rounded-md bg-gray-200 opacity-90 shadow-md">
                    <form className="flex w-full flex-col ">
                        <div className="flex flex-1 flex-col items-center gap-2">
                            <label className="text-xl font-bold text-black">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className=" w-max rounded-md text-black "
                            />
                        </div>
                        <div className="flex flex-1 flex-col items-center gap-2">
                            <label className="text-xl font-bold text-black">
                                Description
                            </label>
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className=" w-max rounded-md text-black"
                            />
                        </div>
                        <div className="flex flex-1 flex-col items-center gap-2">
                            <label className="text-xl font-bold text-black">
                                Tags
                            </label>
                            <input
                                type="text"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                className=" w-max rounded-md text-black"
                            />
                        </div>
                        <section className="bottom-0 flex w-full flex-row items-end gap-2  self-end justify-self-end p-2">
                            <div
                                onClick={() => dispatch(setIdle())}
                                className="flex h-10 flex-1 cursor-pointer flex-row items-center gap-1 self-end rounded-md bg-red-400 hover:bg-red-500"
                            >
                                <button className="flex w-full flex-row items-center justify-center">
                                    <h1 className="flex text-xl">Cancel</h1>
                                    <XIcon className="h-8 w-max cursor-pointer rounded-lg stroke-1 text-inherit" />
                                </button>
                            </div>
                            <div className="flex h-10 flex-1 cursor-pointer flex-row items-center gap-1 self-end rounded-md bg-green-400 hover:bg-green-500">
                                <button
                                    type="submit"
                                    onClick={(e) => handleSave(e)}
                                    className="flex w-full flex-row items-center justify-center"
                                >
                                    <h1 className="flex text-xl"> Save</h1>
                                    <CheckIcon className="flex h-8 w-max cursor-pointer rounded-lg stroke-1 text-inherit" />
                                </button>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal
