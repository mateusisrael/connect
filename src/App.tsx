import AuthProvider from './Auth'
import Messages from './pages/Messages'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Messages />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
