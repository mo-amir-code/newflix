"use client"
import React, { useContext } from 'react'
import Button from './buttons/Button'
import { AuthContext } from '@/app/context/authContext'

const ExploreHeader = () => {
    const { user }: any = useContext(AuthContext)

    return (
        <div className='absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black' >
            <nav className=' w-full flex items-center justify-between text-white p-4 max-w-5xl mx-auto' >
                <h1 className='text-4xl font-bold text-primary' >NEWFLIX</h1>
                <div className='flex items-center justify-center gap-4 text-sm font-semibold' >
                    {!!user && !user?.isLoggedIn ? <Button type={"Sign In"} path={"/signin"} /> : <Button type={"Log out"} path={"/signout"} />}
                </div>
                {/* <div className='w-8 h-8 max-[500px]:block hidden rounded-full overflow-hidden' >
                    <Image src={homeIcon} alt='home' className='object-cover w-full h-full' />
                </div> */}
            </nav>
        </div>
    )
}

export default ExploreHeader
