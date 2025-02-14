export function Perfil({ userData }) {
    return (
        <>
            <div className={`bg-zinc-900 rounded p-5 mb-10 flex items-center gap-10 ${Object.keys(userData).length == 0 ? "hidden" : ""}`}>
                <div>
                    <img src={userData.avatar_url} alt="" className="rounded-full w-28 h-28"/>
                </div>
                <div>
                    <h1 className="font-semibold text-3xl">{userData.name}</h1>
                    <span className="text-zinc-500">Seguidores: {new Intl.NumberFormat().format(userData.followers)}</span>
                </div>
            </div>
        </>
    )
}