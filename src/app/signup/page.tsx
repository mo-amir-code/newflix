'use client'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import bgImage from "../../assets/images/newflix_bg.png"
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../context/authContext'

type Inputs = {
  email: string,
  password: string
}

const Signup = () => {
  const router = useRouter()
  const { user }: any = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>()

  const handleOnSubmit = (data: Inputs): void => {
    createUserWithEmailAndPassword(auth, data.email, data.password).then((res) => {
      alert("User registered successfully")
      reset()
      router.push("/explore")
    }).catch((err) => {
      console.log(err.message);
      alert("Something went wrong")
    })
  }

  useEffect(() => {
    if (Boolean(user.isLoggedIn)) {
      router.push("/")
    }
  }, [user])

  return (
    <div className='w-full h-screen relative' >
      <Image src={bgImage} alt='newflix' className='w-full h-full object-cover object-top' />
      <div className='bg-black/60 w-full h-full absolute top-0 left-0' />
      <div className='absolute top-0 left-0 p-4 w-full h-full' >
        <h1 className='text-4xl font-bold text-primary' >NEWFLIX</h1>
        <div className='mx-auto mt-6 w-[400px] max-[450px]:w-[300px] rounded-md bg-black/80 space-y-8 text-white max-[450px]:px-8 max-[350px]:w-[250px] max-[350px]:px-4 px-12 py-10' >
          <h2 className='text-3xl font-medium ' >Sign Up</h2>
          <form className='space-y-4' onSubmit={handleSubmit((data) => handleOnSubmit(data))} >
            <input type="email" {...register("email", { required: true })} className='outline-none text-sm bg-form-field w-full p-3 rounded-md' placeholder='Email' />
            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 12 })} className='outline-none text-sm bg-form-field w-full p-3 rounded-md' placeholder='Password' />
            <div  >
              <button className='py-2 w-full mt-4 rounded-md bg-primary font-semibold' >Sign Up</button>
              <div className='flex items-center justify-between mt-3' >
                <div className='flex items-center gap-2' >
                  <input type="checkbox" className='' />
                  <span className=' text-xs font-normal text-gray-400' >Remember me</span>
                </div>
                <p className=' text-xs font-normal text-gray-400' >Need help?</p>
              </div>
            </div>
          </form>
          <div>
            <p className=' text-base font-normal text-gray-500' >Have an account? <Link href={"/signin"} >Sign in now.</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
