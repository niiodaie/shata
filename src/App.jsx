import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { LandingPage } from './pages/LandingPage'
import { AuthPage } from './pages/AuthPage'
import { DashboardPage } from './pages/DashboardPage'
import { ProfilePage } from './pages/ProfilePage'
import { SocialPage } from './pages/SocialPage'
import { LivePage } from './pages/LivePage'
import { AncestryPage } from './pages/AncestryPage'
import { BeautyPage } from './pages/BeautyPage'
import { LovePage } from './pages/LovePage'
import { ActivismPage } from './pages/ActivismPage'
import { SpiritualityPage } from './pages/SpiritualityPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SettingsPage } from './pages/SettingsPage'
import { Toaster } from 'sonner'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/live" element={<LivePage />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/social" element={
              <ProtectedRoute>
                <SocialPage />
              </ProtectedRoute>
            } />
            <Route path="/ancestry" element={
              <ProtectedRoute>
                <AncestryPage />
              </ProtectedRoute>
            } />
            <Route path="/beauty" element={
              <ProtectedRoute>
                <BeautyPage />
              </ProtectedRoute>
            } />
            <Route path="/love" element={
              <ProtectedRoute>
                <LovePage />
              </ProtectedRoute>
            } />
            <Route path="/activism" element={
              <ProtectedRoute>
                <ActivismPage />
              </ProtectedRoute>
            } />
            <Route path="/spirituality" element={
              <ProtectedRoute>
                <SpiritualityPage />
              </ProtectedRoute>
            } />
            <Route path="/privacy" element={
              <ProtectedRoute>
                <PrivacyPage />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            } />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

