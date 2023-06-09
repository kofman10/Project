import React, { useEffect, useState } from "react";
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { getError } from '../utils/error';
import { ToastContainer,toast } from 'react-toastify';
import { ColorRing } from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ username, password }) => {
    try {
      setLoading(true);
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });
      if (result.error) {
        toast.error(result.error);
        setLoading(false)
      } 
      setLoading(false)
    } catch (err) {
      toast.error(getError(err));
      setLoading(false)
    }
  };

  return (
    <div className=" py-3 ">
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col justify-center items-center gap-5 mt-32">
        <div className="relative">
          <input
          required
            type="text"
            {...register('username')}
            placeholder="Username"
            className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
          />
          <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
            Username
          </label>
          {errors.username && (
            <div className="text-red-500">{errors.username.message}</div>
          )}
        </div>
        <div className="relative">
          <input
          required
            {...register('password')}
            type="password"
            placeholder="Password"
            className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
          />
          <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
            Password
          </label>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="flex justify-center">
        <button
              className=" bg-black text-white rounded-md shadow-sm mt-5 w-72 py-2"
              type="submit"
            >
              {loading ? (
                <div className="flex justify-center">
                  {" "}
                  <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#b8c480",
                      "#B2A3B5",
                      "#F4442E",
                      "#51E5FF",
                      "#429EA6",
                    ]}
                  />{" "}
                </div>
              ) : (
                "Login"
              )}
            </button>
            </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
