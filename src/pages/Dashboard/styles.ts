import styled from 'styled-components'
import { shade } from 'polished'

interface SearchFormProps {
  hasError: boolean
}

export const Title = styled.h1`
  font-size: 3rem;
  max-width: 32rem;
  line-height: 3.5rem;
  margin-top: 5rem;
`
export const SearchForm = styled.form<SearchFormProps>`
  margin-top: 3.5rem;
  max-width: 45rem;
  display: flex;
  .search-form {

    &__input, &__button {
      height: 4.5rem;
    }

    &__input {
      flex: 1;
      padding: 0 1.5rem;
      border-radius: .25rem 0 0 .25rem;
      border: solid 2px ${props => props.hasError ? '#c53030' : '#fff'};
      border-right: 0;



      &:placeholder {
        color: #a8a8b3
      }
    }

    &__button {
      width: 14rem;
      color: #fff;
      background: #04d361;
      border-radius: 0 .25rem .25rem 0;
      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color .2s;

      /* search icon */
      svg {
        margin-left: 1rem;
      }

      &:hover {
        background: ${shade(0.2, '#04d361')}
      }
    }
  }
`

export const Repositories = styled.div`

  a {
    color: inherit;
    text-decoration: inherit;
  }

  .repository {
    margin-top: 5rem;
    max-width: 45rem;
    background: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: .25rem;
    padding: 1.5rem;
    transition: transform .2s;

    & + .repository {
      margin-top: 1rem;
    }

    &:hover {
      transform: translateX(.75rem);
    }

    &__content {
      flex: 1;
      margin: 0 1rem;
    }

    &__image {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
    }

    &__name {
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
export const Error = styled.div`
  color: #c53030;
  margin-top: .25rem;
  font-size: .75rem;
`
