import React, { FC, ReactNode } from 'react'
import { useAppSelector } from '../redux/app/hooks'
import { RootState } from '../redux/app/store'
import { NAVBAR_WIDTH } from '../util/constants'
import AddTaskModal from './AddTaskModal'
import Footer from './Footer'
import Navbar from './Navbar'
import { handleClassName } from './Navbar'

type LayoutPropInterface = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutPropInterface) => {
    const status = useAppSelector((state: RootState) => state.global.status)
    const statusElement = ApplicationStatusElementProvider(status)
    const navState = useAppSelector(({ global }) => global.navState)
    return (
        <>
            {statusElement}
            <div
                id="fullscreen-modal-blur"
                className={`overflow-x-hidden ${
                    status !== 'idle' ? 'blur-sm' : ''
                }`}
            >
                <Navbar />
                <main
                    style={{
                        marginLeft: `${NAVBAR_WIDTH}px `,
                    }}
                    className={`flex w-[100vw]  items-center justify-center overflow-x-hidden bg-transparent  p-2 ${handleClassName(
                        navState
                    )}`}
                >
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

const ApplicationStatusElementProvider = (status: string): ReactNode => {
    switch (status) {
        case 'addTask':
            return <AddTaskModal sectionID={123} />
        case 'loading':
            return (
                <div className="fixed top-0 bottom-0 left-0 right-0 z-50 select-none justify-center overflow-hidden bg-black text-center text-white opacity-80">
                    <div className="flex h-full w-full items-center justify-center">
                        <p>Loading ...</p>
                    </div>
                </div>
            )
        case 'failed':
            return <div className="absolute z-50 h-[100vh] w-[100vw]">IDLE</div>
        default:
            return null
    }
}

export default Layout
