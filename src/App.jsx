import { useEffect, useState } from 'react'
import './index.css'
import { ReposTable } from './components/repos-table';
import { Perfil } from './components/perfil';

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
      <div className='bg-black min-h-screen text-zinc-100 py-20'>
        <div className='w-7/12 mx-auto'>
          <div className='header flex items-center justify-between mb-10'>
            <h1 className='text-4xl font-medium'>Consultar Repositórios</h1>
            <div className='space-x-4'>
              <input onKeyUp={(e) => { if (e.keyCode === 13) { handleSubmit() } }} onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder='Informe o nome do usuário' className='input bg-zinc-900 px-4 py-1.5 text-sm rounded w-[500px]' />
              <button onClick={handleSubmit} className='bg-zinc-700 px-4 py-1.5 text-sm rounded'>Pesquisar</button>
            </div>
          </div>

          <Perfil userData={userData} />

          <div className='flex items-center justify-between border-b border-zinc-900 pb-3'>
            <h1 className='font-medium text-2xl'>Repositórios</h1>
            <span className='text-zinc-500'>Você possui {favoriteRepos} favoritos</span>
          </div>
          <ReposTable
            repos={repos}
            handleFavorite={handleFavorite}
          />
        </div>
      </div>
    </>
  )
}

export default App
