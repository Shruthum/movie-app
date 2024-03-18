"use client"
import {useQuery} from "react-query";
import {usePathname, useSearchParams} from "next/navigation";


async function getSearchData(){
    const response = await fetch(`${process.env.API_URL}/search/movie`)

    if(!response.ok){
        throw new Error('Error while fetching the data')
    }
    return response.json()
}

export default function SearchPage(){

    const {data,isLoading,isError} = useQuery('search',getSearchData)
    return (
        <div>
            Search Page
        </div>
    )
}