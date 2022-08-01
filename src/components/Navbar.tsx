import { FC, useEffect, useState } from 'react'
import { NAVBAR_WIDTH } from '../util/constants'
import {
    toggleNavState,
    setSession,
    setUser,
} from '../redux/reducers/globalSlice'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import {
    MenuAlt1Icon,
    PaperClipIcon,
    HomeIcon,
    BellIcon,
    CollectionIcon,
} from '@heroicons/react/outline'
import { supabase } from '../util/supaBaseClient'

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
    const handleSignOut = async () => {
        await supabase.auth.signOut()
        dispatch(setSession(null))
        dispatch(setUser(null))
    }
    return (
        <div
            style={{ width: `${NAVBAR_WIDTH}px` }}
            className={`max-w-[250px]overflow-y-hidden absolute h-[100%] justify-between border-r text-white ${handleClassName(
                navState
            )}`}
        >
            <div className="flex min-w-[250px] flex-row pt-2 pb-8">
                <div className="flex flex-row items-center gap-1">
                    <PaperClipIcon className="h-10 w-10 stroke-1 pl-2 text-gray-500" />
                    <h1 className="flex flex-1 whitespace-nowrap text-3xl font-bold text-gray-500">
                        Clipy
                    </h1>
                </div>
                <div
                    className={'flex flex-1 justify-end text-center'}
                    onClick={() => {
                        dispatch(toggleNavState())
                    }}
                >
                    <div className="h-max w-max cursor-pointer p-1">
                        <MenuAlt1Icon className=" h-9 w-6 text-gray-500 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
            <section className="flex flex-col text-gray-600">
                <div className="flex cursor-pointer flex-row gap-2 p-4 hover:bg-gray-100">
                    <HomeIcon className="h-9 w-9 stroke-1" />
                    <h1 className="cursor-pointer self-end text-xl">Home</h1>
                </div>
                <div className="flex cursor-pointer flex-row gap-2 p-4 hover:bg-gray-100">
                    <BellIcon className="h-9 w-9 stroke-1" />
                    <h1 className="self-end text-xl">Alerts</h1>
                </div>
                <div className="flex cursor-pointer flex-row gap-2 p-4 hover:bg-gray-100">
                    <CollectionIcon className="h-9 w-9 stroke-1" />
                    <h1 className="self-end text-xl">My Tasks</h1>
                </div>
            </section>

            <section className="fixed bottom-2 mr-[26px] justify-self-end rounded-r-sm bg-purple-400 p-2">
                Invite your friends
            </section>
            <button
                onClick={() => handleSignOut()}
                className="flex cursor-pointer text-center align-middle text-red-400"
            >
                Sign Out
            </button>
        </div>
    )
}

export default Navbar
