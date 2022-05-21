import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init'

const Login = () => {

    // Get User
    const [user, loading, error] = useAuthState(auth);

    // Email and Password Login
    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useSignInWithEmailAndPassword(auth);

    // Google Sign In
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    // sign in with email and password
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email, password)
        console.log({ email, password });
    };

    if (eError) {
        console.log(eError.message);
    }

    // sign in with google
    const handleGoogleSignin = () => {
        signInWithGoogle()
    }

    // ---- form
    const { register, formState: { errors }, handleSubmit } = useForm();


    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email address is required"
                                    }
                                })}
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'email' && <span class="label-text-alt">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is required"
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'Min 6 characters or longer'
                                    }

                                })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input type="submit" className='btn w-full max-w-xs' value={"Login"} />
                    </form>

                    <div className="divider">OR</div>
                    <button
                        onClick={handleGoogleSignin}
                        className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;