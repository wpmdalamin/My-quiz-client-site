import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Login = () => {
    const {singIn} = useContext(AuthContext);

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
        })
        .catch(error => console.log(error))

    }

    return (
        <div className='bg-neutral-800 text-white text-center p-3'>
            <h2>Log In</h2>
            <form onSubmit={handelLogin}>
                <input type="email" name='email' placeholder="Email" required className="input input-bordered w-3/4 text-white " />
                <input type="password" name="password" placeholder="password" required className="input input-bordered w-3/4 my-3 text-white" />
                <button className='btn btn-info w-3/4 my-2'>Log In</button>
            </form>
            <div>
                <span>Don't have an account? <Link to="/register"> Sign Up</Link></span>
            </div>
        </div>
    );
};

export default Login;