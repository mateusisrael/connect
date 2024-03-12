import * as S from './styles'
import SetaDireita from '../../assets/seta-direita.svg?react'
import Avatar from '../Avatar'

type UserInfosCardProps = {
  name: string
  userContact?: string
  profilePhoto?: string
}

const UserInfosCard: React.FunctionComponent<UserInfosCardProps> = ({
  name,
  userContact,
  profilePhoto,
}) => {
  userContact = 'teste@fake.com'

  return (
    <S.Button>
      <S.Container>
        <Avatar profilePhotoURL={profilePhoto} />

        <S.TextsColumn>
          <h1 className='name'>{name}</h1>
          {userContact ? <p className='contact'>{userContact}</p> : null}
        </S.TextsColumn>

        <SetaDireita />
      </S.Container>
    </S.Button>
  )
}

export default UserInfosCard
