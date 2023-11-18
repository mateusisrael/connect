import AuthProvider from "./Auth";
import Messages from "./pages/Messages";

function App() {
  return (
    <AuthProvider>
      <Messages />
    </AuthProvider>
  );
}

export default App;
