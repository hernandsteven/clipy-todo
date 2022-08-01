import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '../../util/supaBaseClient'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../redux/app/hooks'
import { useAppSelector } from '../../redux/app/hooks'
import { setUser } from '../../redux/reducers/globalSlice'
import { PaperClipIcon } from '@heroicons/react/outline'

const SignUp: NextPage = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const user = useAppSelector((state) => state.global.user)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [error, setError] = useState(false)

    const signUpWithGithHub = async () => {
        await supabase.auth.signIn({
            provider: 'github',
        })
    }

    const signUpWithEmail = async () => {
        const { body, status } = await supabase
            .from('profiles')
            .select('email')
            .eq('email', email)

        if (body && body.length === 0) {
            const { user, error } = await supabase.auth.signUp(
                {
                    email: email,
                    password: password,
                },
                {
                    data: {
                        displayName: username,
                    },
                }
            )
            if (error) {
                alert('Error')
            } else {
                const updates = {
                    id: user?.id,
                    username: user?.user_metadata.displayName,
                    email: user?.email,
                    created_at: new Date(),
                    updated_at: new Date(),
                }

                let { error } = await supabase.from('profiles').upsert(updates)

                if (error) {
                    alert('Failed to update profile table.')
                }

                dispatch(setUser(user))
            }
        } else {
            alert('Email is already registered.')
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signUpWithEmail()
    }

    const handleDemoUser = async () => {
        const { user, session, error } = await supabase.auth.signIn({
            email: 'slicknaturee@gmail.com',
            password: '123456',
        })

        if (error) {
            alert('Error')
            console.error(error)
        }

        if (user && session) {
            router.push('/')
            dispatch(setUser(user))
        }
    }
    return (
        <div className="flex h-[100vh] flex-col content-center items-center  justify-center gap-2 bg-gradient-to-b from-sky-400 to-blue-500">
            {!user ? (
                <>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={(e) => {
                            handleSubmit(e)
                        }}
                    >
                        <h1 className="whitespace-nowrap pt-4 text-center text-4xl font-bold text-white">
                            {' '}
                            Sign Up
                        </h1>
                        <input
                            className="h-min self-center rounded-md border-b-2 bg-sky-300 p-2 text-white placeholder:text-white focus:outline-none"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <input
                            className="h-min self-center rounded-md border-b-2 bg-sky-300 p-2 text-white placeholder:text-white autofill:bg-red-400 focus:outline-none"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="h-min self-center rounded-md border-b-2 bg-sky-300 p-2 text-white placeholder:text-white focus:outline-none"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            className="h-min self-center rounded-md border-b-2 bg-sky-300 p-2 text-white placeholder:text-white focus:outline-none"
                            type="password"
                            placeholder="Confirm Password"
                            value={passwordConfirmation}
                            onChange={(e) =>
                                setPasswordConfirmation(e.target.value)
                            }
                        />
                        <button
                            className="rounded-md border-2 border-purple-600 bg-purple-400 p-2 text-white disabled:text-[#fff]"
                            type="submit"
                            disabled={buttonDisabled}
                        >
                            Sign Up
                        </button>
                    </form>

                    <section className="flew-row flex gap-2">
                        <p className="text-white">Already have an account?</p>
                        <Link href="/login">
                            <p className="hover: cursor-pointer text-purple-600 hover:text-purple-400">
                                Login
                            </p>
                        </Link>
                    </section>
                    <section
                        onClick={() => handleDemoUser()}
                        className="rounded-xl bg-purple-300 p-1 px-4"
                    >
                        <button>Demo User</button>
                    </section>
                </>
            ) : (
                <>
                    <h1>{`Email Confirmation sent to ${user.email}`}</h1>
                </>
            )}
        </div>
    )
}

export default SignUp
