import * as S from './styles'

type AvatarProps = {
  profilePhotoURL?: string
}

const Avatar: React.FunctionComponent<AvatarProps> = ({ profilePhotoURL }) => {
  return <S.ProfileImg profilePhotoURL={profilePhotoURL} />
}
export default Avatar
