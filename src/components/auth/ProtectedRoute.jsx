import { useAuth } from '../../contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

export const ProtectedRoute = ({ 
  children, 
  requireAuth = true, 
  allowedRoles = [], 
  fallback = null 
}) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  // If authentication is required but user is not logged in
  if (requireAuth && !user) {
    // Redirect to auth page with return url
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  // If user is logged in but route doesn't require auth (like auth page)
  if (!requireAuth && user) {
    // Redirect to dashboard or home
    return <Navigate to="/dashboard" replace />
  }

  // Check role-based access
  if (requireAuth && user && allowedRoles.length > 0) {
    const userRole = user.user_metadata?.role || 'user'
    if (!allowedRoles.includes(userRole)) {
      // Show fallback component or redirect to unauthorized page
      return fallback || (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
            <p className="text-muted-foreground">
              You don't have permission to access this page.
            </p>
          </div>
        </div>
      )
    }
  }

  return children
}

// Higher-order component for role-based access
export const withRoleAccess = (Component, allowedRoles = []) => {
  return (props) => (
    <ProtectedRoute allowedRoles={allowedRoles}>
      <Component {...props} />
    </ProtectedRoute>
  )
}

// Specific role-based route components
export const AdminRoute = ({ children }) => (
  <ProtectedRoute allowedRoles={['admin']}>
    {children}
  </ProtectedRoute>
)

export const ModeratorRoute = ({ children }) => (
  <ProtectedRoute allowedRoles={['admin', 'moderator']}>
    {children}
  </ProtectedRoute>
)

export const UserRoute = ({ children }) => (
  <ProtectedRoute allowedRoles={['admin', 'moderator', 'user']}>
    {children}
  </ProtectedRoute>
)

