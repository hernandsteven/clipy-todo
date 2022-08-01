import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../../util/supaBaseClient'
import { setSession } from '../../redux/reducers/globalSlice'
import { useAppDispatch } from '../../redux/app/hooks'

const Login: NextPage = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { user, session, error } = await supabase.auth.signIn({
            email: email,
            password: password,
        })

        if (error) {
            alert('Error')
            console.error(error)
        }

        if (user && session) {
            router.push('/')
            dispatch(setSession(session))
        }
    }

    useEffect(() => {
        if (email.length > 5 && password.length > 5) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [email, password])

    return (
        <div className="flex h-[100vh] flex-col content-center items-center  justify-center gap-2 bg-gradient-to-b from-sky-400 to-blue-500">
            <form
                className="flex flex-col gap-4"
                onSubmit={(e) => handleSubmit(e)}
            >
                <h1 className="whitespace-nowrap pt-4 text-center text-4xl font-bold text-white">
                    Login
                </h1>
                <input
                    className="h-min self-center rounded-md border-b-2 bg-sky-300 p-2 text-white placeholder:text-white focus:outline-none"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    className="h-min self-center rounded-md border-b-2 bg-sky-300 p-2 text-white placeholder:text-white focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="rounded-md border-2 border-purple-600 bg-purple-400 p-2 text-white disabled:text-[#fff]"
                    type="submit"
                    disabled={buttonDisabled}
                >
                    Login
                </button>
            </form>
            <section className="flew-row flex gap-2">
                <p className="text-white">Dont have an account?</p>
                <Link href="/signup">
                    <p className="cursor-pointer text-purple-600 hover:text-purple-400">
                        Sign up
                    </p>
                </Link>
            </section>
        </div>
    )
}

export default Login
