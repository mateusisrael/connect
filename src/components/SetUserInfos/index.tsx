import { useRef, useState } from 'react'
import * as S from './styles'
import { Button, Input } from '@chakra-ui/react'
import { client } from '../../services/supabase'

const SetUserInfos = ({ userId, onSuccessSetName }) => {
  // const [userName, setUserName] = useState('')
  const [userName, setUserName] = useState('')
  const [error, setError] = useState(false)

  const clickHandle = async () => {
    try {
      const queryUsers = await client
        .from('users')
        .select('*')
        .eq('name', userName)
      if (!!queryUsers?.data?.length) {
        setError(true)
      } else {
        const { error } = await client
          .from('users')
          .insert({ name: userName, id: userId })

        if (error) throw new Error()
        else onSuccessSetName()
      }
    } catch (error) {
      debugger
    }
  }

  const handleChangeName = (e) => {
    if (error) setError(false)

    setUserName(e.target.value)
  }

  return (
    <S.Container>
      <div className='form'>
        <div>
          <p style={{ fontSize: '2rem', lineHeight: '1' }}>
            Hora de escolher seu
          </p>
          <p
            style={{
              fontSize: '4rem',
              lineHeight: '1',
              fontFamily: 'system-ui',
              fontWeight: '600',
            }}
          >
            username
          </p>
        </div>
        <div>
          <Input
            isInvalid={error}
            size={'lg'}
            onChange={handleChangeName}
            value={userName}
          ></Input>
          {error ? (
            <p style={{ marginTop: '12px' }}>
              UserName não disponível! Tente outro!
            </p>
          ) : null}
        </div>
        <Button color={'teal'} onClick={clickHandle}>
          Seguir com esse
        </Button>
      </div>
    </S.Container>
  )
}

export default SetUserInfos
