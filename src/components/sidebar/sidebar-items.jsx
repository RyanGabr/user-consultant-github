export function SidebarItems(props){
    return(
        <>
            <div className='flex flex-col justify-center'>
                {props.children}
            </div>
        </>
    )
}