import Head from 'next/head'
import { ReactElement } from 'react'
import ActionMenu from '../components/ActionMenu'
import Layout from '../components/Layout'
import TodoBoard from '../components/TodoBoard'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title> Todos </title>
				<meta name="description" content="Have something todo?" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-[100vh]">
				<ActionMenu />
				<TodoBoard />
			</div>
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Home
