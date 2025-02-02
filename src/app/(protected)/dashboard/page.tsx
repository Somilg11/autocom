
import Sidebar from "@/components/global/sidebar";
import React from "react";

type Props = {
    children: React.ReactNode
    params: {slug: string}
}

const Page = ({children, params}: Props) => {
    return (
        <div>
            <Sidebar slug={params.slug}></Sidebar>
        </div>
    )
}

export default Page;