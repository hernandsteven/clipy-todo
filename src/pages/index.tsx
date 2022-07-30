import Head from 'next/head'
import { ReactElement, useEffect, useState } from 'react'
import ActionMenu from '../components/ActionMenu'
import Layout from '../components/Layout'
import KanbanBoard from '../components/KanbanBoard'
import { NextPageWithLayout } from './_app'
import { supabase } from '../util/supaBaseClient'

export type todo = {
	id: any
	title: String
	description: String
	created_at: String
}

const Home: NextPageWithLayout = () => {
	const [todos, setTodos] = useState<any>([])

	const fetchTodos = async () => {
		let { data, error, status } = await supabase
			.from<any>('todo')
			.select('*')
		if (error) {
			alert(error)
		}
		if (status === 200) {
			setTodos(data)
		}
	}
	useEffect(() => {
		fetchTodos()
	}, [])

	return (
		<>
			<Head>
				<title> Todos </title>
				<meta name="description" content="Have something todo?" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-[100vh]">
				{/*todos &&
					todos.map(
						({ title, description, created_at, id }: todo) => {
							return (
								<div key={id}>
									<h1>{title}</h1>
									<p>{description}</p>
									<p>{created_at}</p>
								</div>
							)
						}
					)*/}

				<ActionMenu />
				<KanbanBoard />
			</div>
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Home
