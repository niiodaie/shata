import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { 
  Shield, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowLeft,
  AlertTriangle,
  UserCheck,
  Flag,
  Settings
} from 'lucide-react'
import { toast } from 'sonner'

export const PrivacyPage = () => {
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: true,
    locationSharing: false,
    messageRequests: true,
    dataCollection: false,
    analyticsOptIn: false
  })

  const handleSettingChange = (setting, value) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: value
    }))
    toast.success('Privacy setting updated')
  }

  const safetyFeatures = [
    {
      title: 'Content Moderation',
      description: 'AI-powered content filtering and community reporting',
      status: 'Active',
      icon: Shield
    },
    {
      title: 'Identity Verification',
      description: 'Optional identity verification for enhanced trust',
      status: 'Available',
      icon: UserCheck
    },
    {
      title: 'Block & Report',
      description: 'Tools to block users and report inappropriate content',
      status: 'Active',
      icon: Flag
    },
    {
      title: 'Safe Messaging',
      description: 'Encrypted messaging with spam protection',
      status: 'Active',
      icon: Lock
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => window.history.back()} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Privacy & Safety</h1>
            <p className="text-gray-600">Control your privacy and stay safe on Shata</p>
          </div>
        </div>

        <Tabs defaultValue="privacy" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="privacy">Privacy Settings</TabsTrigger>
            <TabsTrigger value="safety">Safety Features</TabsTrigger>
            <TabsTrigger value="data">Data & Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Controls</CardTitle>
                <CardDescription>
                  Manage who can see your information and how you interact with others
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Profile Visibility</h4>
                    <p className="text-sm text-gray-600">Allow others to find and view your profile</p>
                  </div>
                  <Switch
                    checked={privacySettings.profileVisibility}
                    onCheckedChange={(value) => handleSettingChange('profileVisibility', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Location Sharing</h4>
                    <p className="text-sm text-gray-600">Share your location with connections</p>
                  </div>
                  <Switch
                    checked={privacySettings.locationSharing}
                    onCheckedChange={(value) => handleSettingChange('locationSharing', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Message Requests</h4>
                    <p className="text-sm text-gray-600">Allow messages from people you don't follow</p>
                  </div>
                  <Switch
                    checked={privacySettings.messageRequests}
                    onCheckedChange={(value) => handleSettingChange('messageRequests', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Data Collection</h4>
                    <p className="text-sm text-gray-600">Allow collection of usage data for improvements</p>
                  </div>
                  <Switch
                    checked={privacySettings.dataCollection}
                    onCheckedChange={(value) => handleSettingChange('dataCollection', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Analytics Opt-in</h4>
                    <p className="text-sm text-gray-600">Help improve Shata with anonymous analytics</p>
                  </div>
                  <Switch
                    checked={privacySettings.analyticsOptIn}
                    onCheckedChange={(value) => handleSettingChange('analyticsOptIn', value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{feature.title}</h4>
                          <Badge variant={feature.status === 'Active' ? 'default' : 'secondary'}>
                            {feature.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        Configure
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Safety Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p>• Never share personal information like passwords, financial details, or home address</p>
                  <p>• Be cautious when meeting people from online in person</p>
                  <p>• Report any suspicious behavior or inappropriate content</p>
                  <p>• Use strong, unique passwords and enable two-factor authentication</p>
                  <p>• Trust your instincts - if something feels wrong, it probably is</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data & Analytics</CardTitle>
                <CardDescription>
                  Understand how your data is used and managed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium mb-2">Data We Collect</h4>
                  <p className="text-sm text-gray-600">
                    Profile information, usage patterns, device information, and interaction data
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium mb-2">How We Use Your Data</h4>
                  <p className="text-sm text-gray-600">
                    To improve your experience, provide personalized content, and ensure platform safety
                  </p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-medium mb-2">Your Rights</h4>
                  <p className="text-sm text-gray-600">
                    You can request, modify, or delete your data at any time through your account settings
                  </p>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline">Download My Data</Button>
                  <Button variant="outline">Delete Account</Button>
                  <Button variant="outline">Privacy Policy</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

