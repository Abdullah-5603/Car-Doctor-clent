import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignInUser, setLoading, setUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleGoogleLogin = () =>{
        googleSignInUser()
        .then((result)=>{
            const user = result.user;
            setUser(user)
            setLoading(false)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="flex flex-col w-full border-opacity-50 my-5">
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className='btn bg-transparent hover:bg-transparent text-black '>Continue with Google</button>
        </div>
    );
};

export default SocialLogin;