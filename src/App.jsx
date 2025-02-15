import { Sidebar } from './components/sidebar/sidebar';
import { SidebarControls } from './components/sidebar/sidebar-controls';
import { SidebarItems } from './components/sidebar/sidebar-items';
import { SidebarItem } from './components/sidebar/sidebar-item';
import { Header } from './components/header/header';
import { Perfil } from './components/perfil/perfil';
import { ReposTable } from './components/repos/repos-table';
import { Repo } from './components/repos/repo';
import { VscGithubAlt } from "react-icons/vsc";
import { useEffect, useState } from 'react'
import './index.css'


function App() {

  const [repos, setRepos] = useState([]);
  const [favoriteRepos, setFavoriteRepos] = useState([]);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);

  async function handleSubmit() {
    async function getUserData() {
      if (username === "") { return }
      else {
        try {
          const response = await fetch(`http://api.github.com/users/${username}`);
          const body = await response.json();

          setUserData(body);
          console.log(userData);
        }
        catch (err) {
          console.log(err);
        }
      }
    }

    async function getUserRepos() {
      if (username === "") { return }
      else {
        try {
          const response = await fetch(`http://api.github.com/users/${username}/repos`);
          const body = await response.json();

          setRepos(body);
        }
        catch (err) {
          console.log(err);
        }
      }
    }

    getUserData();
    getUserRepos();

    setUsername('');
  }

  function handleFavorite(id) {
    const filteredRepos = repos.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    });

    setRepos(filteredRepos);
  }

  useEffect(() => {
    const filteredRepos = repos.filter(repo => repo.favorite);
    setFavoriteRepos(filteredRepos.length);
  }, [repos])

  return (
    <>
      <main className='h-screen py-20'>
        <div className='w-8/12 flex mx-auto bg-white/80 overflow-hidden rounded-xl backdrop-blur-3xl min-h-[800px] max-h-[800px] border shadow-2xl shadow-black/80'>

          <Sidebar>
            <SidebarControls />

            <SidebarItems>
              <SidebarItem 
                icon={<VscGithubAlt />}
                text={"Consultar GitHub"}
              />
            </SidebarItems>
          </Sidebar>

          <div className='py-14 px-10 w-full space-y-7 overflow-y-scroll'>
            <Header 
              handleSubmit={handleSubmit} 
              username={username} 
              setUsername={setUsername}
            />

            <Perfil 
              userData={userData}
            />
            
            <div className={`items-center gap-3 ${repos ? "flex" : "hidden"}`}>
              <h1>Repositórios</h1>
              <span className='rounded-full bg-black/10 text-xs px-2 py-0.5 text-zinc-600'>{favoriteRepos} Favoritos</span>
            </div>

            <ReposTable>
              {repos.map(repo => <Repo 
                name={repo.name}
                language={repo.language}
                id={repo.id}
                favorite={repo.favorite}
                handleFavorite={handleFavorite}
                url={repo.html_url}
              />)}
            </ReposTable>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
