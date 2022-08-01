import Head from 'next/head'
import { ReactElement, useEffect, useState } from 'react'
import ActionMenu from '../components/ActionMenu'
import Layout from '../components/Layout'
import KanbanBoard from '../components/KanbanBoard'
import { NextPageWithLayout } from './_app'
import { supabase } from '../util/supaBaseClient'
import { setSession } from '../redux/reducers/globalSlice'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { useRouter } from 'next/router'
const Home: NextPageWithLayout = () => {
    const dispatch = useAppDispatch()
    const session = useAppSelector((state) => state.global.session)
    const router = useRouter()

    useEffect(() => {
        const session = supabase.auth.session()
        if (session) {
            dispatch(setSession(session))
        } else {
            router.push('/login')
        }
    }, [session])

    return (
        <>
            <Head>
                <title> Todos </title>
                <meta name="description" content="Have something todo?" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="ml-2 min-h-[100vh]">
                {session && (
                    <h1 className="text-xl">{`Hello, ${session?.user.user_metadata.displayName}`}</h1>
                )}
                <KanbanBoard />
            </div>
        </>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default Home
