import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignupPage = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, signup } = useSignup()

    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)

    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-orange-400 bg-clip-padding backdrop-filter
            backdrop-blur-[15px] bg-opacity-0'>
                <h1 className='text-3xl font-semibold font-serif text-center text-orange-600'>Sign Up
                    <span className='text-slate-300'> Chat App</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Full Name'
                            className='w-full input input-bordered bg-orange-400 bg-opacity-0  h-10 '
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className=' text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Username'
                            className='w-full input input-bordered bg-orange-400 bg-opacity-0  h-10 '
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className=' text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered bg-orange-400 bg-opacity-0  h-10 '
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className=' text-base label-text '>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Confirm Password'
                            className='w-full input input-bordered bg-orange-400 bg-opacity-0  h-10 '
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to={"/login"} className='text-sm hover:text-black mt-2 inline-block w-fit ml-1 cursor-pointer'>
                        Alredy have an Account
                    </Link>
                    <div>
                        <button className=' btn btn-block btm-sm  mt-2 font-serif font-bold text-xl' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupPage