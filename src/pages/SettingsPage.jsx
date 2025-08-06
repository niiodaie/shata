import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Globe, 
  DollarSign, 
  Crown, 
  Star,
  ArrowLeft,
  Languages,
  CreditCard,
  Gift,
  Zap
} from 'lucide-react'
import { toast } from 'sonner'

export const SettingsPage = () => {
  const [settings, setSettings] = useState({
    language: 'en',
    currency: 'usd',
    notifications: true,
    darkMode: false
  })

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
    { code: 'yo', name: 'Yorùbá', flag: '🇳🇬' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' }
  ]

  const subscriptionPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Basic profile', 'Limited messaging', 'Community access'],
      current: true
    },
    {
      name: 'Shata Plus',
      price: '$9.99',
      period: 'month',
      features: ['Unlimited messaging', 'Advanced ancestry tools', 'Priority support', 'Ad-free experience'],
      popular: true
    },
    {
      name: 'Shata Premium',
      price: '$19.99',
      period: 'month',
      features: ['All Plus features', 'Live streaming', 'Premium badges', 'Exclusive events', 'Advanced analytics']
    }
  ]

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }))
    toast.success('Setting updated')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => window.history.back()} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Customize your Shata experience</p>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="language">Language</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="monetization">Creator Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Basic app preferences and configurations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Push Notifications</h4>
                    <p className="text-sm text-gray-600">Receive notifications about activity</p>
                  </div>
                  <Switch
                    checked={settings.notifications}
                    onCheckedChange={(value) => handleSettingChange('notifications', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Dark Mode</h4>
                    <p className="text-sm text-gray-600">Use dark theme for better night viewing</p>
                  </div>
                  <Switch
                    checked={settings.darkMode}
                    onCheckedChange={(value) => handleSettingChange('darkMode', value)}
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Currency</h4>
                  <Select value={settings.currency} onValueChange={(value) => handleSettingChange('currency', value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="ngn">NGN (₦)</SelectItem>
                      <SelectItem value="ghs">GHS (₵)</SelectItem>
                      <SelectItem value="zar">ZAR (R)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="language" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Language & Region
                </CardTitle>
                <CardDescription>
                  Choose your preferred language and regional settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {languages.map((lang) => (
                    <Card 
                      key={lang.code} 
                      className={`cursor-pointer transition-all ${
                        settings.language === lang.code 
                          ? 'ring-2 ring-purple-500 bg-purple-50' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => handleSettingChange('language', lang.code)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <div>
                            <h4 className="font-medium">{lang.name}</h4>
                            <p className="text-sm text-gray-600">{lang.code.toUpperCase()}</p>
                          </div>
                          {settings.language === lang.code && (
                            <Badge className="ml-auto">Current</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  Subscription Plans
                </CardTitle>
                <CardDescription>
                  Upgrade your Shata experience with premium features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {subscriptionPlans.map((plan, index) => (
                    <Card 
                      key={index} 
                      className={`relative ${
                        plan.popular ? 'ring-2 ring-purple-500' : ''
                      } ${plan.current ? 'bg-green-50' : ''}`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          Most Popular
                        </Badge>
                      )}
                      <CardContent className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-gray-600">/{plan.period}</span>
                        </div>
                        <ul className="space-y-2 mb-6 text-sm">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="w-full" 
                          variant={plan.current ? "outline" : "default"}
                          disabled={plan.current}
                        >
                          {plan.current ? 'Current Plan' : 'Upgrade'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monetization" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Creator Monetization
                </CardTitle>
                <CardDescription>
                  Earn money from your content and community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <Gift className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Tips & Donations</h4>
                          <p className="text-sm text-gray-600">Receive tips from your followers</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        Set Up Tips
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Paid Live Streams</h4>
                          <p className="text-sm text-gray-600">Monetize your live content</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        Enable Paid Streams
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Subscription Content</h4>
                          <p className="text-sm text-gray-600">Offer premium content to subscribers</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        Create Subscription
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <Globe className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Brand Partnerships</h4>
                          <p className="text-sm text-gray-600">Connect with brands for sponsorships</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        Join Creator Program
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Creator Fund</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Join our creator fund to earn money based on your content performance and community engagement.
                    </p>
                    <Button>Apply for Creator Fund</Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

