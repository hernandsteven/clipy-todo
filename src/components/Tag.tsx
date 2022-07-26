import React, { FC } from 'react'

type Tag = {
	difficulty?: string
}

interface TagProps {
	difficulty?: 'Easy' | 'Medium' | 'Hard' | string
}

const handleTagClassName = (difficulty: string | undefined) => {
	switch (difficulty) {
		case 'Easy':
			return 'bg-green-300'
		case 'Medium':
			return 'bg-orange-300'
		case 'Hard':
			return 'bg-red-300'
		default:
			return ''
	}
}

const Tag: FC<TagProps> = ({ difficulty }) => {
	return (
		<div
			className={`rounded-md p-1 select-none ${handleTagClassName(
				difficulty
			)}`}
		>
			{difficulty}
		</div>
	)
}

export default Tag
