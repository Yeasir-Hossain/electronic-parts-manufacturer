import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading';
import google from '../../assets/icons/google.png'
import auth from '../../firebase.init';
import Slide from 'react-reveal/Slide';


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    // const [token] = useToken( user ||gUser);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    // if (token) {
    //     navigate('/purchase')
    // }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    }
    return (
        <div>
            <Slide right>
                <div class="bg-no-repeat bg-cover bg-center relative bg-[url('/src/assets/images/bg.png')]"><div class="absolute bg-gradient-to-b from-amber-500 to-black opacity-75 inset-0 z-0"></div>
                    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                        <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                            <div class="self-start hidden lg:flex flex-col  text-white">
                                <img src="" class="mb-3" alt='' />
                                <h1 class="mb-3 font-bold text-5xl">Hi 👋 Welcome  to Electronics Lab </h1>
                                <p class="pr-3">Please Sign up to order products from our page</p>
                            </div>
                        </div>
                        <div class="flex justify-center self-center  z-10">
                            <div class="p-12 bg-transparent mx-auto rounded-2xl w-100 ">
                                <div class="mb-4">
                                    <h3 class="font-semibold text-2xl ">Sign Up</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Name is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>

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
                                    <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
                                </form>
                                <p className='text-center'><small>Already have an account? <Link className='text-amber-400' to="/login">Please login</Link></small></p>
                                <div className="divider">OR</div>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn btn-outline"
                                ><img className='p-2' src={google} alt="" />Continue with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>

    );
};

export default SignUp;