export function Header({ handleSubmit, username, setUsername }) {

    return (
        <>
            <div className='flex items-center gap-5 w-full'>
                <h1 className='font-semibold text-3xl'>Consultar Perfil</h1>
                <div className="flex-1">
                    <input onChange={(e) => setUsername(e.target.value)} value={username} onKeyUp={(e) => { if (e.key === "Enter") { handleSubmit() }}} type="text" placeholder="Informe o nome de usuário" className="bg-white/40 shadow shadow-black/5 rounded-full py-1.5 px-4 w-full text-sm font-light"/>
                </div>
            </div>
        </>
    )
}