import { AuthProvider } from './contexts/AuthContext'
import { LandingPage } from './pages/LandingPage'
import { Toaster } from 'sonner'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <LandingPage />
        <Toaster position="top-right" />
      </div>
    </AuthProvider>
  )
}

export default App

