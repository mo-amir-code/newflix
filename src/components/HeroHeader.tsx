"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import Button from './buttons/Button'
import homeIcon from "../assets/icons/home_icon.svg"
import { AuthContext } from '@/app/context/authContext'
import Link from 'next/link'

const HeroHeader = () => {
    const { user }: any = useContext(AuthContext)

    return (
        <div className='absolute top-0 left-0 w-full z-10' >
            <nav className=' w-full flex items-center justify-between text-white p-4 max-w-5xl mx-auto bg-gradient-to-b from-black' >
                <h1 className='text-4xl font-bold text-primary' >NEWFLIX</h1>
<<<<<<< HEAD
                <div className='flex items-center max-[500px]:hidden justify-center gap-4 text-sm font-semibold' >
                    {user.isLoggedIn && <Link href="/explore">Explore</Link>}
                    {!!user && !user?.isLoggedIn ? <Button type={"Sign In"} path={"/signin"} /> : <Button type={"Log out"} path={"/signout"} />}
                </div>
                <div className='w-8 h-8 max-[500px]:block hidden rounded-full overflow-hidden' >
                    <Image src={homeIcon} alt='home' className='object-cover w-full h-full' />
=======
                <div className='flex items-center justify-center gap-4 text-sm font-semibold' >
                    {user.isLoggedIn && <Link href="/explore">Explore</Link>}
                    <div className='max-[500px]:hidden' >
                        {!!user && !user?.isLoggedIn ? <Button type={"Sign In"} path={"/signin"} /> : <Button type={"Log out"} path={"/signout"} />}
                    </div>
                    <div className='w-8 h-8 max-[500px]:block hidden rounded-full overflow-hidden' >
                        <Image src={homeIcon} alt='home' className='object-cover w-full h-full' />
                    </div>
>>>>>>> changes
                </div>
            </nav>
        </div>
    )
}

export default HeroHeader
