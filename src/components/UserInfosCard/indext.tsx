import * as S from './styles'
import SetaDireita from '../../../public/seta-direita.svg?react'
import GenericButton from '../GenericButton'

type UserInfosCardProps = {
  name: string
  userContact?: string
  profilePhoto?: string
}

const UserInfosCard = ({
  name,
  userContact,
  profilePhoto,
}: UserInfosCardProps) => {
  userContact = 'teste@fake.com'

  return (
    <GenericButton>
      <S.Container>
        <S.ProfileImg profilePhotoURL={profilePhoto ?? undefined} />

        <S.TextsColumn>
          <h1 className='name'>{name}</h1>
          {userContact ? <p className='contact'>{userContact}</p> : null}
        </S.TextsColumn>

        <SetaDireita />
      </S.Container>
    </GenericButton>
  )
}

export default UserInfosCard
