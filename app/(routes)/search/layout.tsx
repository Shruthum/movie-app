"use client"

import {QueryClientProvider,QueryClient} from "react-query";

const queryclient = new QueryClient()
export default function RouteLayout({children}:{children:React.ReactNode}){
    return (
        <QueryClientProvider client={queryclient} contextSharing={true}>
            <main className={"max-w-6xl mx-auto px-2 pt-10"}>{children}</main>
        </QueryClientProvider>
    )

}