import * as S from './styles'

type GenericButtonProps = {
  children: React.ReactNode
}

const GenericButton = ({ children }: GenericButtonProps) => {
  return <S.Container>{children}</S.Container>
}

export default GenericButton
