export function Perfil({ userData }) {
    return (
        <>
            <div className={`${Object.keys(userData).length == 0 ? "hidden" : ""} hover:scale-[0.99] transition-all duration-300 p-5 cursor-pointer bg-white/40 shadow shadow-black/5 rounded-md`}>
                <a href={userData.html_url} target="blank">
                    <div className="flex items-center gap-5">
                        <img src={userData.avatar_url} className="w-16 h-16 rounded-full" alt="user_avatar" />
                        <div className="leading-[0px]">
                            <h1 className="text-lg">{userData.login}</h1>
                            <span className="text-xs text-zinc-500">Seguidores: {new Intl.NumberFormat().format(userData.followers)}</span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}