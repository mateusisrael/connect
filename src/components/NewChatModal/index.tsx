import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import * as S from './styles'

const NewChatModal = ({ onClose }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Iniciar novo chat</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <div className='input-container'>
            <Input placeholder='Digite o username do usuário' />
            <Button>Buscar</Button>
          </div>
          <p className='error-text'>Usuário não encontrado</p>
          <div className='user-list'>
            <div></div>
          </div>
          {/* <Button>Iniciar conversa</Button> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NewChatModal
