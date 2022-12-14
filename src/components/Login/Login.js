import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { GithubAuth, GoogleAuth, singIn } = useContext(AuthContext);



    const Provider = new GoogleAuthProvider();
    const provider = new GithubAuthProvider();


    const navegate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handelLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navegate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handelGoogleSignin = () => {
        GoogleAuth(Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);

            })
    }
    const handelGithubSignin = () => {
        GithubAuth(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='bg-neutral-800 text-white text-center p-3'>
            <h2 className='my-4'>Log In</h2>
            <form onSubmit={handelLogin}>
                <input type="email" name='email' placeholder="Email" required className="input input-bordered w-3/4 text-white " />
                <input type="password" name="password" placeholder="password" required className="input input-bordered w-3/4 my-3 text-white" />
                <button className='btn btn-info w-3/4 my-2'>Log In</button>
            </form>
            <div>
                <button onClick={handelGoogleSignin} className='text-white text-sm px-4 py-2 rounded bg-yellow-700 w-3/4 my-6'><span className=' d-flex justify-center items-center'>
                    <span className='px-2'><FaGoogle /></span>
                    <span>Register with Google</span>
                </span></button>
            </div>
            <div>
                <button onClick={handelGithubSignin} className='text-white text-sm px-4 py-2 rounded bg-yellow-700 w-3/4 my-2'><span className=' d-flex justify-center items-center'>
                    <span className='px-2'><FaGithub /></span>
                    <span>Register with Github</span>
                </span></button>
            </div>
            <div className='text-danger'>
                <span>{error}</span>
            </div>
            <div>
                <span>Don't have an account? <Link to="/register"> Sign Up</Link></span>
            </div>
        </div>
    );
};

export default Login;