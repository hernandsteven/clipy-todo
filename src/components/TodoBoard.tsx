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
	Untitled: [],
	Untitled1: [],
	Untitled2: [],
}
const TodoBoard = () => {
	const sections = Object.entries(data)
	return (
		<div
			style={{
				display: 'grid',
				gap: '.5rem',
				gridTemplateColumns: `repeat(${sections.length}, minmax(0, 1fr))`,
			}}
			className="overflow-x-scroll"
		>
			{sections.map(([title, tasks], idx) => {
				return <Section key={idx} title={title} tasks={tasks} />
			})}
		</div>
	)
}

export default TodoBoard
