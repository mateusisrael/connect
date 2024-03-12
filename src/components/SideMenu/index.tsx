import * as S from './styles'

type SideMenuProps = {
  children: React.ReactNode
}

const SideMenu: React.FunctionComponent<SideMenuProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

export default SideMenu
