import * as S from './styles'

type GenericButtonProps = {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const GenericButton = ({ children, onClick }: GenericButtonProps) => {
  return <S.Container onClick={onClick}>{children}</S.Container>
}

export default GenericButton
