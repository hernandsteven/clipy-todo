import { FC, useEffect, useState } from 'react'
import { NAVBAR_WIDTH } from '../util/constants'
import { toggleNavState } from '../redux/reducers/globalSlice'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import {
	MenuAlt1Icon,
	PaperClipIcon,
	HomeIcon,
	BellIcon,
	CollectionIcon,
} from '@heroicons/react/outline'

export const handleClassName = (navState: string) => {
	if (navState === 'collapsed') {
		return 'animate-slideOut'
	} else if (navState === 'expanded') {
		return 'animate-slideIn'
	} else {
		return ''
	}
}
const Navbar: FC = () => {
	const dispatch = useAppDispatch()
	const navState = useAppSelector(({ global }) => global.navState)
	return (
		<div
			style={{ width: `${NAVBAR_WIDTH}px` }}
			className={`absolute max-w-[250px]overflow-y-hidden justify-between h-[100%] text-white border-r ${handleClassName(
				navState
			)}`}
		>
			<div className="flex flex-row min-w-[250px] pt-2 pb-8">
				<div className="flex flex-row gap-1 items-center">
					<PaperClipIcon className="w-10 h-10 text-gray-500 stroke-1 pl-2" />
					<h1 className="flex flex-1 text-3xl font-bold whitespace-nowrap text-gray-500">
						Clipy
					</h1>
				</div>
				<div
					className={'flex flex-1 text-center justify-end'}
					onClick={() => {
						dispatch(toggleNavState())
					}}
				>
					<div className="cursor-pointer h-max w-max p-1">
						<MenuAlt1Icon className=" text-gray-500 w-6 h-9 hover:cursor-pointer" />
					</div>
				</div>
			</div>
			<section className="flex flex-col text-gray-600">
				<div className="flex flex-row gap-2 p-4 cursor-pointer hover:bg-gray-100">
					<HomeIcon className="h-9 w-9 stroke-1" />
					<h1 className="self-end text-xl cursor-pointer">Home</h1>
				</div>
				<div className="flex flex-row gap-2 p-4 cursor-pointer hover:bg-gray-100">
					<BellIcon className="h-9 w-9 stroke-1" />
					<h1 className="self-end text-xl">Alerts</h1>
				</div>
				<div className="flex flex-row gap-2 p-4 cursor-pointer hover:bg-gray-100">
					<CollectionIcon className="h-9 w-9 stroke-1" />
					<h1 className="self-end text-xl">My Tasks</h1>
				</div>
			</section>

			<section className="bottom-2 fixed bg-purple-400 justify-self-end mr-[26px] rounded-r-sm p-2">
				Invite your friends
			</section>
		</div>
	)
}

export default Navbar
