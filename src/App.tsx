import AuthProvider from './Auth'
import MainPage from './pages/MainPage'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <MainPage />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
