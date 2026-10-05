export default function SideBar(){
    return (
        <aside className={'w-60 shrink-0 border-r border-zinc-200 bg-zinc-50 p-4'}>
            <nav>
                <ul className={'flex flex-col gap-1'}>
                    <li className={'rounded px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-200'}>Home</li>
                    <li className={'rounded px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-200'}>Events</li>
                    <li className={'rounded px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-200'}>Survey Targets</li>
                </ul>
            </nav>
        </aside>
    )
}
