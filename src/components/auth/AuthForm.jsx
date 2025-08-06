import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Mail, Phone, Key } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { toast } from 'sonner'

export const AuthForm = ({ onSuccess }) => {
  const { signUp, signIn, signInWithMagicLink, signInWithPhone, verifyOtp, loading } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    otp: '',
    firstName: '',
    lastName: ''
  })
  const [errors, setErrors] = useState({})
  const [otpSent, setOtpSent] = useState(false)
  const [magicLinkSent, setMagicLinkSent] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (type) => {
    const newErrors = {}
    
    if (type === 'signup') {
      if (!formData.email) newErrors.email = 'Email is required'
      if (!formData.password) newErrors.password = 'Password is required'
      if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
      if (!formData.firstName) newErrors.firstName = 'First name is required'
      if (!formData.lastName) newErrors.lastName = 'Last name is required'
    } else if (type === 'signin') {
      if (!formData.email) newErrors.email = 'Email is required'
      if (!formData.password) newErrors.password = 'Password is required'
    } else if (type === 'phone') {
      if (!formData.phone) newErrors.phone = 'Phone number is required'
    } else if (type === 'otp') {
      if (!formData.otp) newErrors.otp = 'OTP is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (!validateForm('signup')) return

    const { data, error } = await signUp(
      formData.email,
      formData.password,
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        full_name: `${formData.firstName} ${formData.lastName}`
      }
    )

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Account created successfully! Please check your email to verify your account.')
      if (onSuccess) onSuccess(data)
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    if (!validateForm('signin')) return

    const { data, error } = await signIn(formData.email, formData.password)

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Signed in successfully!')
      if (onSuccess) onSuccess(data)
    }
  }

  const handleMagicLink = async (e) => {
    e.preventDefault()
    if (!formData.email) {
      setErrors({ email: 'Email is required' })
      return
    }

    const { data, error } = await signInWithMagicLink(formData.email)

    if (error) {
      toast.error(error.message)
    } else {
      setMagicLinkSent(true)
      toast.success('Magic link sent! Check your email.')
    }
  }

  const handlePhoneAuth = async (e) => {
    e.preventDefault()
    if (!validateForm('phone')) return

    const { data, error } = await signInWithPhone(formData.phone)

    if (error) {
      toast.error(error.message)
    } else {
      setOtpSent(true)
      toast.success('OTP sent to your phone!')
    }
  }

  const handleOtpVerification = async (e) => {
    e.preventDefault()
    if (!validateForm('otp')) return

    const { data, error } = await verifyOtp(formData.phone, formData.otp)

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Phone verified successfully!')
      if (onSuccess) onSuccess(data)
    }
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
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="space-y-4">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  {errors.email && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.email}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  {errors.password && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.password}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Key className="mr-2 h-4 w-4" />}
                  Sign In
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="space-y-2">
                {!magicLinkSent ? (
                  <Button variant="outline" onClick={handleMagicLink} className="w-full" disabled={loading}>
                    <Mail className="mr-2 h-4 w-4" />
                    Magic Link
                  </Button>
                ) : (
                  <Alert>
                    <AlertDescription>Magic link sent! Check your email.</AlertDescription>
                  </Alert>
                )}
              </div>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={loading}
                    />
                    {errors.firstName && (
                      <Alert variant="destructive">
                        <AlertDescription>{errors.firstName}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={loading}
                    />
                    {errors.lastName && (
                      <Alert variant="destructive">
                        <AlertDescription>{errors.lastName}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  {errors.email && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.email}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  {errors.password && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.password}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  {errors.confirmPassword && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.confirmPassword}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Phone Authentication</span>
              </div>
            </div>

            {!otpSent ? (
              <form onSubmit={handlePhoneAuth} className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1234567890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  {errors.phone && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.phone}</AlertDescription>
                    </Alert>
                  )}
                </div>
                <Button type="submit" variant="outline" className="w-full" disabled={loading}>
                  <Phone className="mr-2 h-4 w-4" />
                  Send OTP
                </Button>
              </form>
            ) : (
              <form onSubmit={handleOtpVerification} className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    name="otp"
                    placeholder="123456"
                    value={formData.otp}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  {errors.otp && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.otp}</AlertDescription>
                    </Alert>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Verify OTP
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  className="w-full" 
                  onClick={() => setOtpSent(false)}
                >
                  Back to Phone
                </Button>
              </form>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

