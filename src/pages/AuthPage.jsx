import { useNavigate, useLocation } from 'react-router-dom'
import { AuthForm } from '../components/auth/AuthForm'
import { useAuth } from '../contexts/AuthContext'
import { useEffect } from 'react'

export const AuthPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      const from = location.state?.from?.pathname || '/dashboard'
      navigate(from, { replace: true })
    }
  }, [user, navigate, location])

  const handleAuthSuccess = (data) => {
    const from = location.state?.from?.pathname || '/dashboard'
    navigate(from, { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 p-4">
      <AuthForm onSuccess={handleAuthSuccess} />
    </div>
  )
}

