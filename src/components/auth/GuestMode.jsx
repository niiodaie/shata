import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, UserPlus, Lock } from 'lucide-react'

export const GuestMode = ({ onContinueAsGuest, onSignUp }) => {
  const [isGuestMode, setIsGuestMode] = useState(false)

  const handleContinueAsGuest = () => {
    setIsGuestMode(true)
    if (onContinueAsGuest) onContinueAsGuest()
  }

  if (isGuestMode) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <Card className="mb-6">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                Guest Mode
              </Badge>
            </div>
            <CardTitle>Welcome to Shata</CardTitle>
            <CardDescription>
              You're browsing as a guest. Some features are limited.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">✅ Available</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Browse public content</li>
                  <li>View cultural cards</li>
                  <li>Read stories</li>
                  <li>Explore ancestry map</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">🔒 Limited</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Create posts</li>
                  <li>Follow users</li>
                  <li>Send messages</li>
                  <li>Go live</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">⭐ Premium</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>AI Hair Match</li>
                  <li>Advanced ancestry</li>
                  <li>Unlimited live</li>
                  <li>Custom dashboard</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={onSignUp} className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Create Account
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/auth'}>
                <Lock className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to Shata</CardTitle>
          <CardDescription>
            Where Africa Meets Her Diaspora
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Join our community to connect with your roots and diaspora family worldwide.
            </p>
            
            <div className="space-y-3">
              <Button onClick={onSignUp} className="w-full" size="lg">
                <UserPlus className="mr-2 h-4 w-4" />
                Join Now
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleContinueAsGuest} 
                className="w-full"
              >
                <Eye className="mr-2 h-4 w-4" />
                Continue as Guest
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Already have an account?{' '}
                <button 
                  onClick={() => window.location.href = '/auth'}
                  className="text-primary hover:underline"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Guest mode wrapper for components
export const GuestModeWrapper = ({ children, requireAuth = false }) => {
  if (requireAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please sign in or create an account to access this feature.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => window.location.href = '/auth'} className="w-full">
              <Lock className="mr-2 h-4 w-4" />
              Sign In / Sign Up
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()} 
              className="w-full"
            >
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return children
}

