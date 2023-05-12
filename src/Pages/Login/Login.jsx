import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Providers/AuthProvider';
import { } from '@heroicons/react/24/solid'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { logInUser, loading, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be 6 characters')
            return;
        }
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                setLoading(false)
                form.reset()
                navigate(from, {replace : true})
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage == 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong password. Please try again')
                }
                console.log(errorMessage)
            })
    }
    return (
        <>
            {
                loading && <Loader />
            }
            <div className="hero max-h-screen ">
                <div className="hero-content flex-col lg:justify-between items-center lg:flex-row w-full">
                    <img className='w-1/2' style={{ height: '70vh' }} src={img} alt="" />
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl rounded-sm bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input focus:outline-none input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input focus:outline-none input-bordered" required />
                                </div>
                                <p className='my-3 text-red-700'>{error}</p>
                                <div className='form-control'>
                                    <button type='submit' className="btn rounded-md bg-[#FF3811] border-none hover:bg-[#FF3811] hover:border-none my-5 text-white">Login</button>
                                </div>
                            </form>
                            <p className='text-center'>New to Car Doctors? <Link className='text-[#FF3811] underline font-semibold' to='/signUp'>Sign Up</Link></p>
                            <SocialLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;