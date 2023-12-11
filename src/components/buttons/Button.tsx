"use client"
import React from 'react'
import Link from 'next/link'
import { signOut } from 'firebase/auth'
import { auth } from '@/app/firebase'
import { useRouter } from 'next/navigation'

type button = {
    type: String,
    path?: String
}

const Button = ({ type, path }: button) => {
    const router = useRouter()
    const handleButton = () => {

        if (type === "Log out") {
            signOut(auth).then((res) => {
                localStorage.removeItem("user")
                router.push("/signin")
            }).catch((err) => {
                console.log(err.message);
            })
        } else {
            router.push("/signin")
        }
    }
    return (
        <Link onClick={handleButton} href={`${path}`} className='btn cursor-pointer' >{type}</Link>
    )
}

export default Button
