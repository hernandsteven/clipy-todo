import type { NextPage } from 'next'
import Head from 'next/head'
import ActionMenu from '../components/ActionMenu'
import TodoBoard from '../components/TodoBoard'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { setLoading } from '../redux/reducers/globalSlice'

const Home: NextPage = () => {
	const dispatch = useAppDispatch()
	return (
		<>
			<Head>
				<title> Todos </title>
				<meta name="description" content="Have something todo?" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className=" min-h-[100vh]">
				<ActionMenu />
				<TodoBoard />
			</div>
		</>
	)
}

export default Home
