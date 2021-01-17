import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { Title, SearchForm, Repositories, Error } from './styles';
import logoImage from '../../assets/logo.svg'

import api from '../../services/api'

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {

  let [errorMessage, setErrorMessage] = useState('')

  let [newRepo, setNewRepo] = useState('')

  let [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories'
    )

    return storagedRepositories
      ? JSON.parse(storagedRepositories)
      : []
  })

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    )
  }, [repositories])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      if (!newRepo) {
        setErrorMessage('Digite o autor/nome do repositório')
        return
      }

      let { data: repository } = await api.get<Repository>(`repos/${newRepo}`)

      setRepositories([...repositories, repository])

      setNewRepo('')

      setErrorMessage('')

    } catch {
      setErrorMessage(`Repositorio "${newRepo}" não encontrado`)
    }
  }

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title> Explore Repositórios no Github </Title>
      <SearchForm hasError={!!errorMessage} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          className="search-form__input"
          type="text"
          placeholder="Digite aqui nome do repositório no formato autor/nome..."
        />
        <button className="search-form__button">
          <span>Pesquisar</span>
          <FiSearch size="20" />
        </button>
      </SearchForm>

      {errorMessage &&
        <Error>
          {errorMessage}
        </Error>
      }

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.owner.avatar_url}
            className="repository"
            to={`repositories/${repository.full_name}`}
          >
            <img
              className="repository__image"
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div className="repository__content">
              <strong className="repository__name">
                {repository.full_name}
              </strong>
              <p className="repository__description">
                {repository.description}
              </p>
            </div>
            <FiChevronRight size="20" className="repository__icon" />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
