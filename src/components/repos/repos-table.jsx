export function ReposTable(props) {
    return (
        <>
            <div className="grid grid-cols-3 gap-3">
                {props.children}
            </div>
        </>
    )
}