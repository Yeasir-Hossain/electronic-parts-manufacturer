import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../shared/Loading';
import google from '../../assets/icons/google.png'
import auth from '../../firebase.init';
import Slide from 'react-reveal/Slide';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || gUser);
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div>
            <Slide left>
                <div class="bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/bg.png')]">
                    <div class="absolute bg-gradient-to-b from-amber-500 to-black opacity-75 inset-0 z-0"></div>
                    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                        <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                            <div class="self-start hidden lg:flex flex-col  text-white">
                                <img src="" class="mb-3" alt='' />
                                <h1 class="mb-3 font-bold text-5xl">Hi 👋 Welcome back to Electronics Lab </h1>
                                <p class="pr-3">Please login to order products from our page</p>
                            </div>
                        </div>
                        <div class="flex justify-center self-center  z-10">
                            <div class="p-12 bg-transparent mx-auto rounded-2xl w-100 ">
                                <div class="mb-4">
                                    <h3 class="font-semibold text-2xl ">Login</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Provide a valid Email'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 characters or longer'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        </label>
                                    </div>

                                    {signInError}
                                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                                </form>
                                <p className='text-center'><small>New to Electronics Lab? <Link className='text-amber-400' to="/signup">Create new account</Link></small></p>
                                <div className="divider">OR</div>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn btn-outline"
                                > <img className='p-2' src={google} alt="" /> Continue with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>

    );
};

export default Login;