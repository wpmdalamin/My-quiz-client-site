import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';


const Provider = new GoogleAuthProvider();

const Register = () => {
    const [error, setError] = useState('')
    const { GoogleAuth, emailAndPasswordAuth } = useContext(AuthContext)

    const handelRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.fname.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        emailAndPasswordAuth(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
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
        

    return (
        <div className='bg-neutral-800 text-white p-3 text-center'>
            <h2>Register</h2>
            <form onSubmit={handelRegister}>
                <input type="text" name='fname' placeholder="Full Name" required className="input text-white input-bordered w-3/4 my-3" />
                <input type="email" name='email' placeholder="Email" required className="input input-bordered w-3/4 text-white " />
                <input type="password" name="password" placeholder="password" required className="input input-bordered w-3/4 my-3 text-white" />
                <button className='btn btn-info w-3/4 my-2'>Register</button>
            </form>
            <div>
                <button onClick={handelGoogleSignin} className='btn btn-info w-3/4 my-6'> <span><AiFillGoogleCircle/></span> Register with Google</button>
            </div>
            <div className='py-3 text-danger'>
                {
                    error && <p>{error}</p>
                }
            </div>
            <div>
                <span>Already have an account? <Link to='/login'>Log in</Link> </span>
            </div>
            

        </div>
    );
};

export default Register;