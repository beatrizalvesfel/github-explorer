import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header {
    &__back-button {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #a8a8b3;
      transition: color .2s;

      &:hover {
        color: #666;
      }

      svg {
        margin-left: .25rem;
      }
    }
  }
`


export const RepositoryInfo = styled.section`
  margin-top: 5rem;


  .header {
    display: flex;
    align-items: center;

    &__content {
      margin-left: 24px;
    }
  }

  .repository {
    &__image {
      height: 7.5rem;
      width: 7.5rem;
      border-radius: 50%;
    }

    &__title {
      font-size: 2.25rem;
      color: #3d3d4d;
    }

    &__description {
      font-size: 1.125rem;
      margin-top: .25rem;
      color: #737380;
    }

    &__stats {
      display: flex;
      list-style: none;
      margin-top: 2.5rem;

      &-item {
        & + .repository__stats-item {
          margin-left: 5rem;
        }

        strong {
          display: block;
          font-size: 2.25rem;
          color: #3d3d4d;
        }

        span {
          display: block;
          margin-top: .25rem;
          color: #6c6c80;
        }
      }
    }
  }
`
export const RepositoryIssues = styled.div`

  a {
    color: inherit;
    text-decoration: inherit;
  }

  .issue {
    margin-top: 5rem;
    max-width: 45rem;
    background: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: .25rem;
    padding: 1.5rem;
    transition: transform .2s;

    & + .issue {
      margin-top: 1rem;
    }

    &:hover {
      transform: translateX(.75rem);
    }

    &__content {
      flex: 1;
      margin: 0 1rem;
    }

    &__title {
      font-size: 1.125rem;
      margin-bottom: 0.25rem;
      display: block;
    }

    &__description {
      color: #a8a8b3;
    }

    &__icon {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`
