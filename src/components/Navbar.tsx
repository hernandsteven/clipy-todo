import { FC, useEffect, useState } from 'react'
import { NAVBAR_WIDTH } from '../util/constants'
import { toggleNavState } from '../redux/reducers/globalSlice'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { MenuAlt1Icon, ClipboardListIcon } from '@heroicons/react/outline'

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
			className={`absolute max-w-[250px] flex justify-between h-[100vh] text-white border-r ${handleClassName(
				navState
			)}`}
		>
			<div className="flex flex-row min-w-[250px] pt-2">
				<ClipboardListIcon className="w-9 h-9 text-black" />
				<h1 className="flex flex-1 text-3xl font-bold whitespace-nowrap text-gray-500">
					Clipy
				</h1>
				<div
					className={'flex flex-1 text-center justify-end'}
					onClick={() => {
						dispatch(toggleNavState())
					}}
				>
					<p className="text-white  h-max w-max p-1">
						<MenuAlt1Icon
							style={{ color: 'black' }}
							className="w-6 h-9 hover:cursor-pointer"
						/>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Navbar
