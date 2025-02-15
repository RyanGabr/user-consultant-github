export function SidebarItem({ icon, text }){
    return(
        <>
            <div className="py-1 px-2 flex items-center gap-1.5 text-sm bg-black/10 rounded cursor-pointer">   
                {icon}
                {text}
            </div>
        </>
    )
}