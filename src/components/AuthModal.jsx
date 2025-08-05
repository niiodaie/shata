import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { 
  X, 
  Eye, 
  EyeOff, 
  Globe, 
  Heart, 
  Users,
  Mail,
  Lock,
  User,
  MapPin,
  Flag
} from 'lucide-react';

const AuthModal = ({ isOpen, onClose, onAuth }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    country: '',
    diasporaConnection: '',
    agreeToTerms: false,
    agreeToNewsletter: false
  });

  const countries = [
    { value: 'ng', label: 'Nigeria 🇳🇬', flag: '🇳🇬' },
    { value: 'gh', label: 'Ghana 🇬🇭', flag: '🇬🇭' },
    { value: 'us', label: 'United States 🇺🇸', flag: '🇺🇸' },
    { value: 'gb', label: 'United Kingdom 🇬🇧', flag: '🇬🇧' },
    { value: 'ca', label: 'Canada 🇨🇦', flag: '🇨🇦' },
    { value: 'jm', label: 'Jamaica 🇯🇲', flag: '🇯🇲' },
    { value: 'br', label: 'Brazil 🇧🇷', flag: '🇧🇷' },
    { value: 'fr', label: 'France 🇫🇷', flag: '🇫🇷' },
    { value: 'za', label: 'South Africa 🇿🇦', flag: '🇿🇦' },
    { value: 'ke', label: 'Kenya 🇰🇪', flag: '🇰🇪' }
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      onAuth({ type: 'login', data: loginData });
      onClose();
    }, 1500);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!registerData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      onAuth({ type: 'register', data: registerData });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-charcoal border-gold/20 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <h1 className="text-2xl font-african font-bold text-gold">
              Shata<span className="text-pan-green">.</span>net
            </h1>
          </div>
          <CardTitle className="text-white">
            {activeTab === 'login' ? 'Welcome Back' : 'Join the Diaspora'}
          </CardTitle>
          <p className="text-gray-400 text-sm">
            {activeTab === 'login' 
              ? 'Sign in to continue your journey' 
              : 'Connect with your global community'
            }
          </p>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 bg-deep-black border border-gold/20 mb-6">
              <TabsTrigger 
                value="login" 
                className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="register" 
                className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                Join Us
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="login-email" className="text-white">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="pl-10 bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="login-password" className="text-white">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="pl-10 pr-10 bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember-me"
                      checked={loginData.rememberMe}
                      onCheckedChange={(checked) => setLoginData({...loginData, rememberMe: checked})}
                    />
                    <Label htmlFor="remember-me" className="text-sm text-gray-400">
                      Remember me
                    </Label>
                  </div>
                  <button type="button" className="text-sm text-gold hover:underline">
                    Forgot password?
                  </button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-warm-gold text-black font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name" className="text-white">First Name</Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="First name"
                      value={registerData.firstName}
                      onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                      className="bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="text-white">Last Name</Label>
                    <Input
                      id="last-name"
                      type="text"
                      placeholder="Last name"
                      value={registerData.lastName}
                      onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                      className="bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="register-email" className="text-white">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="Enter your email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                      className="pl-10 bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="username" className="text-white">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Choose a username"
                      value={registerData.username}
                      onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                      className="pl-10 bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country" className="text-white">Current Location</Label>
                  <Select 
                    value={registerData.country} 
                    onValueChange={(value) => setRegisterData({...registerData, country: value})}
                  >
                    <SelectTrigger className="bg-deep-black border-gold/30 text-white focus:border-gold">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <SelectValue placeholder="Select your country" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-charcoal border-gold/20">
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value} className="text-white hover:bg-gold/20">
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="diaspora-connection" className="text-white">Diaspora Connection</Label>
                  <Input
                    id="diaspora-connection"
                    type="text"
                    placeholder="e.g., 🇳🇬 x 🇺🇸 or Nigerian-American"
                    value={registerData.diasporaConnection}
                    onChange={(e) => setRegisterData({...registerData, diasporaConnection: e.target.value})}
                    className="bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    How do you identify within the diaspora? (Optional)
                  </p>
                </div>

                <div>
                  <Label htmlFor="register-password" className="text-white">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                      className="pl-10 pr-10 bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirm-password" className="text-white">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                      className="pl-10 pr-10 bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agree-terms"
                      checked={registerData.agreeToTerms}
                      onCheckedChange={(checked) => setRegisterData({...registerData, agreeToTerms: checked})}
                      className="mt-1"
                    />
                    <Label htmlFor="agree-terms" className="text-sm text-gray-400 leading-relaxed">
                      I agree to the <button type="button" className="text-gold hover:underline">Terms of Service</button> and <button type="button" className="text-gold hover:underline">Privacy Policy</button>
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={registerData.agreeToNewsletter}
                      onCheckedChange={(checked) => setRegisterData({...registerData, agreeToNewsletter: checked})}
                      className="mt-1"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-400 leading-relaxed">
                      Send me updates about diaspora events and community highlights
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-warm-gold text-black font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Join the Community'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Social Login Options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gold/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-charcoal text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button variant="outline" className="border-gold/30 text-white hover:bg-gold/10">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="border-gold/30 text-white hover:bg-gold/10">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;

