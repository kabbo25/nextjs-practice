import SideBar from "@/components/SideBar";
import {ReactNode} from "react";

export default function AppShell({children}: {children:ReactNode}){
    return (
        <div className={'flex flex-1'}>
            <SideBar/>
            <div className={'flex-1'}>
                {children}
            </div>
        </div>
    )
}
