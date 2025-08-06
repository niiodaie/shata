import { HeroLanding } from './components/HeroLanding'
import './App.css'

function App() {
  const handleJoinNow = () => {
    // For now, just show an alert - will be connected to auth system later
    alert('Join Now clicked! This will open the authentication form.')
  }

  const handleGoLive = () => {
    // For now, just show an alert - will be connected to live system later
    alert('Go Live clicked! This will open the live streaming feature.')
  }

  return (
    <div className="App">
      <HeroLanding 
        onJoinNow={handleJoinNow}
        onGoLive={handleGoLive}
      />
    </div>
  )
}

export default App

