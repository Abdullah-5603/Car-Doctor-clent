import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {signUpUser, setUser} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        if(password.length < 6){
            setError('Password must be 6 characters')
            return;
        }
        signUpUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            loggedUser.displayName = name;
            setUser(loggedUser)
            form.reset();
        })
        .catch(error => {
            const errorMessage = error.message;
            if(errorMessage == 'Firebase: Error (auth/email-already-in-use).'){
                setError('Account already exists. Please login')
            }
            console.log(errorMessage)
        })
    }
    return (
        <div className="hero max-h-screen ">
            <div className="hero-content flex-col lg:justify-between items-center lg:flex-row w-full">
                <img className='w-1/2' style={{ height: '70vh' }} src={img} alt="" />
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl rounded-sm bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                       <form onSubmit={handleSubmit}>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input focus:outline-none input-bordered" />
                        </div>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input focus:outline-none input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" className="input focus:outline-none input-bordered" required/>
                        </div>
                        <p className='my-3 text-red-700'>{error}</p>
                        <div className='form-control'>
                            <button type='submit' className="btn rounded-md bg-[#FF3811] border-none hover:bg-[#FF3811] hover:border-none my-5 text-white">Sign Up</button>
                        </div>
                       </form>
                       <p className='text-center'>Already Have An Account? <Link className='text-[#FF3811] underline font-semibold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;