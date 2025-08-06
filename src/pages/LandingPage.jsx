import { useNavigate } from 'react-router-dom'
import { HeroLanding } from '../components/HeroLanding'
import { useAuth } from '../contexts/AuthContext'
import { useEffect } from 'react'

export const LandingPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true })
    }
  }, [user, navigate])

  const handleJoinNow = () => {
    navigate('/auth')
  }

  const handleGoLive = () => {
    navigate('/live')
  }

  return (
    <HeroLanding 
      onJoinNow={handleJoinNow}
      onGoLive={handleGoLive}
    />
  )
}

