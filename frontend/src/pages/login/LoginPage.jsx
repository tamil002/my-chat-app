import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
            <div className='w-full p-6 rounded-lg shadow-md bg-orange-400 bg-clip-padding backdrop-filter
            backdrop-blur-[15px] bg-opacity-0'>
                <h1 className='text-3xl font-semibold font-serif text-center text-orange-600'>
                    Login
                    <span className='text-slate-300'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit} className='grid gap-3'>
                    <div className='font-serif'>
                        <label className='label p-2'>
                            <span className=' text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Username'
                            className='w-full input input-bordered bg-orange-400 bg-opacity-0  h-10 '
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='font-serif'>
                        <label className='label p-2'>
                            <span className=' text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered bg-orange-400 bg-opacity-0  h-10 '
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to={"/signup"} className='text-sm hover:text-black mt-2 inline-block w-fit ml-1'>
                        Don't have an account?
                    </Link>
                    <div>
                        <button className=' btn btn-block btm-sm mt-2 font-serif font-bold text-xl' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginPage