import { useState } from 'react'
import * as S from './styles'

type NewContactFormProps = {
  onSearch: CallableFunction
}

const NewContactForm: React.FunctionComponent<NewContactFormProps> = ({
  onSearch,
}) => {
  const [error, setError] = useState(false)

  return (
    <S.Form>
      <S.Header>
        <div className='title-wrapper'>
          <h1 className='title'>Pesquisar Usuário</h1>
        </div>
      </S.Header>
      <S.InputWrapper>
        <input
          className='search-input'
          placeholder='Busque por um username'
        ></input>
        {error ? <p className='error-text'>Usuário não encontrado</p> : null}
      </S.InputWrapper>
      <S.ButtonRow>
        <button disabled={error} onClick={() => console.log('1')}>
          Iniciar Chat
        </button>
      </S.ButtonRow>
    </S.Form>
  )
}

export default NewContactForm
