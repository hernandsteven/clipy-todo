import { createClient } from '@supabase/supabase-js'
import type { NextPage } from 'next'
import Head from 'next/head'
import ActionMenu from '../components/ActionMenu'
import TodoBoard from '../components/TodoBoard'
/*
export const supabaseAdmin = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL || '',
	process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || ''
)

const fetchTable = () => {
	const data = supabaseAdmin.from('todo').select('*').order('id')
	return data
}
*/

const Home: NextPage = () => {
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

export default Home
