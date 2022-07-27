import { randomUUID } from 'crypto'
import { supabaseAdmin } from '../pages/index'
import Section from './Section'
const data = {
	Todo: [
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [
				{ difficulty: 'Easy' },
				{ difficulty: 'Medium' },
				{ difficulty: 'Hard' },
			],
		},
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [
				{ difficulty: 'Easy' },
				{ difficulty: 'Medium' },
				{ difficulty: 'Hard' },
			],
		},
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [
				{ difficulty: 'Easy' },
				{ difficulty: 'Medium' },
				{ difficulty: 'Hard' },
			],
		},
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [
				{ difficulty: 'Easy' },
				{ difficulty: 'Medium' },
				{ difficulty: 'Hard' },
			],
		},
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [
				{ difficulty: 'Easy' },
				{ difficulty: 'Medium' },
				{ difficulty: 'Hard' },
			],
		},
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [
				{ difficulty: 'Easy' },
				{ difficulty: 'Medium' },
				{ difficulty: 'Hard' },
			],
		},
	],
	Doing: [
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [
				{ difficulty: 'Easy' },
				{ difficulty: 'Medium' },
				{ difficulty: 'Hard' },
			],
		},
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [
				{ difficulty: 'Easy' },
				{ difficulty: 'Medium' },
				{ difficulty: 'Hard' },
			],
		},
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [
				{ difficulty: 'Easy' },
				{ difficulty: 'Medium' },
				{ difficulty: 'Hard' },
			],
		},
	],
	Done: [
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [{ difficulty: 'Hard' }],
		},
		{
			title: 'Take out the trash',
			description: 'I have guest coming over tmwr so tidy up the house',
			tags: [{ difficulty: 'Medium' }],
		},
	],
}

const TodoBoard = () => {
	const sections = Object.entries(data)
	return (
		<div className="flex md:flex-row sm:flex-col gap-[.5rem] p-4 overflow-x-scroll max-w-[95vw]">
			{sections.map(([title, tasks], idx) => {
				return (
					<Section key={Math.random()} title={title} tasks={tasks} />
				)
			})}
			<Section key={Math.random()} title={'Untitled'} />
			<Section key={Math.random()} title={'Untitled'} />
		</div>
	)
}

export default TodoBoard
