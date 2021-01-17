import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Header, RepositoryInfo, RepositoryIssues } from './styles'
import api from '../../services/api'
import logoImage from '../../assets/logo.svg'

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
  }
}

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  const [repository, setRepository] = useState<Repository | null>(null)

  const [issues, setIssues] = useState<Issue[]>([])


  useEffect(() => {
    api.get<Repository>(`repos/${params.repository}`).then(
      response => {
        setRepository(response.data)
      }
    )

    api.get<Issue[]>(`repos/${params.repository}/issues`).then(
      response => {
        setIssues(response.data)
      }
    )

  }, [params.repository])

  return (
    <>
      <Header>
        <img
          src={logoImage}
          alt="Github Explorer"
        />
        <Link to="/" className="header__back-button">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header className="header">
            <img
              className="repository__image"
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div className="header__content">
              <strong className="repository__title">
                {repository.full_name}
              </strong>
              <p className="repository__description">
                {repository.description}
              </p>
            </div>
          </header>
          <ul className="repository__stats">
            <li className="repository__stats-item">
              <strong>
                {repository.stargazers_count}
              </strong>
              <span>
                Stars
            </span>
            </li>
            <li className="repository__stats-item">
              <strong>
                {repository.forks_count}
              </strong>
              <span>
                forks
            </span>
            </li>
            <li className="repository__stats-item">
              <strong>
                {repository.open_issues_count}
              </strong>
              <span>
                Issues Abertas
            </span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <RepositoryIssues>
        {issues.map(
          issue => (
            <a
              key={issue.id}
              className="issue"
              href={issue.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="issue__content">
                <strong className="issue__name">
                  {issue.title}
                </strong>
                <p className="issue__description">
                  {issue.user.login}
                </p>
              </div>
              <FiChevronRight size="20" className="issue__icon" />
            </a>
          )
        )}
      </RepositoryIssues>

    </>
  )
}

export default Repository
