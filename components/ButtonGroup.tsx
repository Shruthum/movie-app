"use client"

import {useState} from 'react'
import Link from "next/link";
export default function ButtonGroup(){
    return(
        <div className={"flex items-center gap-x-4 mr-6 md:mr-4"}>
            <Link href={"/movies"} className="text-sm bg-neutral-600 p-2 px-4 rounded-md text-white hover:bg-neutral-900 transition-colors duration-150">Movies</Link>
            <Link href={"/tv%20shows"} className={"text-sm bg-neutral-600 p-2 rounded-md text-white  hover:bg-neutral-900 transition-colors duration-150 text-nowrap"}>TV-Shows</Link>
        </div>
    )
}