import { useState } from 'react'
import * as S from './styles'
import { useDebouncedCallback } from 'use-debounce'
import { client } from '../../services/supabase'
import SetaDireita from '../../assets/seta-direita.svg?react'
import GenericButton from '../GenericButton'

type NewContactFormProps = {
  // onChangeName: CallableFunction
  onClickClose?: CallableFunction
}

const NewContactForm: React.FunctionComponent<NewContactFormProps> = ({
  onClickClose,
}) => {
  const [error, setError] = useState(false)
  const [name, setName] = useState('')
  const [userFinded, setUserFinded] = useState()

  const debounced = useDebouncedCallback((value) => {
    handleSearchUser(value)
  }, 1200)

  const handleSearchUser = (value: string) => {
    client
      .from('users')
      .select('*')
      .eq('name', value)
      .then((res) => {
        if (!!res?.data?.length) {
          setUserFinded(res.data[0])
          setError(false)
          return
        }

        setUserFinded(undefined)
        setError(true)
        console.log('search user', res)
      })
  }

  const handleChangeName = (e) => {
    setError(false)
    setUserFinded(undefined)
    setName(e.target.value)
    debounced(e.target.value)
  }

  const handleInitChat = (e) => {
    e.preventDefault()
    console.log('1')
  }

  return (
    <S.Form>
      <S.Header>
        <GenericButton
          onClick={(e) => {
            e.preventDefault()
            if (!!onClickClose) {
              onClickClose()
            }
          }}
        >
          <SetaDireita style={{ rotate: '180deg' }} />
        </GenericButton>
        <div className='title-wrapper'>
          <h1 className='title'>Pesquisar Usuário</h1>
        </div>
      </S.Header>
      <S.InputWrapper>
        <input
          className='search-input'
          placeholder='Busque por um username'
          onChange={handleChangeName}
        ></input>
        {error && !!name ? (
          <p className='error-text'>Usuário não encontrado</p>
        ) : null}
        {!error && !!userFinded && !!name ? (
          <p className='success-text'>Usuário encontrado</p>
        ) : null}
      </S.InputWrapper>
      <S.ButtonRow>
        <button disabled={error || !userFinded} onClick={handleInitChat}>
          Enviar Mensagem
        </button>
      </S.ButtonRow>
    </S.Form>
  )
}

export default NewContactForm
