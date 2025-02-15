import { FaStar } from "react-icons/fa";

export function Repo({ name, language, handleFavorite, id, favorite, url }) {
    return (
        <>
            <div className="bg-white/40 rounded-md p-5 shadow shadow-black/5 flex items-center justify-between hover:scale-[0.98] hover:rotate-[1deg] transition-all duration-300">
                <div className="text-sm text-zinc-900 flex flex-col">
                    <a href={url} target="blank">
                        <div>
                            {name}
                        </div>
                        <div className={`text-xs flex items-center gap-1 ${language === "TypeScript" ? "text-blue-600" : "" |
                                language === "JavaScript" ? "text-yellow-600" : ""
                            }`}>
                            <div className={`h-1.5 w-1.5 rounded-full ${language === "TypeScript" ? "bg-blue-600" : "" |
                                    language === "JavaScript" ? "bg-yellow-600" : ""
                                }`}></div>
                            {language}
                        </div>
                    </a>
                </div>
                <div>
                    <button onClick={() => handleFavorite(id)} className={`${favorite ? "text-yellow-400" : "text-black/10"}`}>
                        <FaStar size={20} />
                    </button>
                </div>
            </div>
        </>
    )
}