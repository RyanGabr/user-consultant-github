export function Sidebar(props){
    return(
        <>
            <div className='w-2/12 bg-black/10 h-[800px] p-3 space-y-5'>
                {props.children}
            </div>
        </>
    )
}