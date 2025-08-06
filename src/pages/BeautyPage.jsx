import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Sparkles, 
  Heart, 
  Star,
  ArrowLeft,
  Camera,
  Play,
  BookOpen,
  Users,
  Crown,
  Palette
} from 'lucide-react'

export const BeautyPage = () => {
  const beautyContent = [
    {
      title: 'Natural Hair Care Routines',
      author: 'Zara Beauty',
      category: 'Hair Care',
      likes: 234,
      type: 'tutorial'
    },
    {
      title: 'Traditional African Skincare',
      author: 'Amara Wellness',
      category: 'Skincare',
      likes: 189,
      type: 'article'
    },
    {
      title: 'Makeup for Melanin-Rich Skin',
      author: 'Beauty Queen Kemi',
      category: 'Makeup',
      likes: 456,
      type: 'video'
    }
  ]

  const beautyTips = [
    {
      title: 'Shea Butter Benefits',
      description: 'Traditional African moisturizer for healthy skin',
      ingredients: ['Raw Shea Butter', 'Coconut Oil', 'Essential Oils']
    },
    {
      title: 'Protective Hairstyles',
      description: 'Styles that protect and celebrate natural hair',
      ingredients: ['Braids', 'Twists', 'Bantu Knots']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => window.history.back()} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Beauty & Wellness</h1>
            <p className="text-gray-600">Celebrate natural beauty and traditional wellness</p>
          </div>
        </div>

        <Tabs defaultValue="discover" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {beautyContent.map((content, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                        {content.type === 'video' ? (
                          <Play className="h-12 w-12 text-gray-600" />
                        ) : (
                          <Camera className="h-12 w-12 text-gray-600" />
                        )}
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{content.title}</h3>
                        <Badge variant="secondary">{content.category}</Badge>
                      </div>
                      <p className="text-gray-600 mb-4">by {content.author}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-red-500" />
                          <span className="text-sm">{content.likes} likes</span>
                        </div>
                        <Button size="sm">
                          {content.type === 'video' ? 'Watch' : 'Read'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Beauty Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {beautyTips.map((tip, index) => (
                      <div key={index} className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                        <h4 className="font-semibold mb-2">{tip.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{tip.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {tip.ingredients.map((ingredient, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {ingredient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Beauty Tutorials</CardTitle>
                <CardDescription>Learn from beauty experts in the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Beauty tutorials coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Products</CardTitle>
                <CardDescription>Beauty products for melanin-rich skin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Crown className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Product recommendations coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Beauty Community</CardTitle>
                <CardDescription>Connect with beauty enthusiasts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Beauty community features coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

