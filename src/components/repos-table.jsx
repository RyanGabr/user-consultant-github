import { FaStar } from "react-icons/fa";

export function ReposTable({ repos, handleFavorite }) {
    return (
        <>
            <div className='repos mt-5 grid grid-cols-3 gap-5'>
                {repos.map(repo => (
                    <div key={repo.id} className='transition-all bg-zinc-900 p-4 text-zinc-200 rounded shadow-xl flex items-center justify-between hover:bg-zinc-800'>
                        <div className=''>
                            <div>
                                {repo.name}
                            </div>
                            <div className={`text-zinc-500 text-xs flex items-center gap-1 ${repo.language === "TypeScript" ? "text-blue-500" : "" | repo.language === "JavaScript" ? "text-yellow-600" : "" | repo.language === "" ? "hidden" : ""}`}>
                                <div className={`w-2 h-2 rounded-full ${repo.language === "TypeScript" ? "bg-blue-500" : "" |
                                        repo.language === "JavaScript" ? "bg-yellow-600" : "" |
                                            repo.language === "" ? "hidden" : "" |
                                                repo.language === "Java" ? "bg-orange-500" : ""}`}
                                >
                                </div>
                                {repo.language}
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleFavorite(repo.id)}>
                                <FaStar size={20} className={`text-zinc-700 cursor-pointer transition ${repo.favorite ? "text-yellow-200" : ""}`} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}