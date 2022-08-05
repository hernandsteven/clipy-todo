import { FC, useEffect, useState } from 'react'
import Section from './Section'
import { v4 as uuid } from 'uuid'
import { supabase } from '../util/supabaseClient'
import { useAppSelector } from '../redux/app/hooks'

const KanbanBoard: FC<any> = () => {
    const [sections, setSections] = useState<any>([])
    const globalTitle = useAppSelector(
        (state) => state.todos.currentSectionTitle
    )
    const status = useAppSelector((state) => state.global.status)
    // Fetch sections from database
    useEffect(() => {
        // Get sections from database
        const user = supabase.auth.user()
        if (user) {
            getSections(user.id)
        }
    }, [status])

    const getSections = async (id: string) => {
        const { data, error } = await supabase
            .from('sections')
            .select('*')
            .eq('user_id', id)

        if (error) {
            console.log(error)
            return
        }

        setSections(data)
    }

    return (
        <div
            id="sections_row"
            className="flex max-w-[93vw] gap-[.5rem] overflow-x-scroll p-4 sm:flex-col md:flex-row"
        >
            {sections &&
                sections.map(
                    (
                        {
                            section_id,
                            section_title,
                            todos,
                        }: {
                            section_id: string
                            section_title: string
                            todos: any
                        },
                        idx: number
                    ) => {
                        return (
                            <Section
                                key={section_id}
                                title={section_title}
                                sectionID={section_id}
                                tasks={todos}
                            />
                        )
                    }
                )}
            <Section sectionID={null} title={globalTitle} />
        </div>
    )
}

export default KanbanBoard
