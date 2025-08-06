import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  MapPin, 
  Users, 
  BookOpen, 
  Search,
  ArrowLeft,
  TreePine,
  Globe,
  Camera,
  Heart,
  Star,
  Calendar
} from 'lucide-react'
import { toast } from 'sonner'

export const AncestryPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const ancestryData = {
    primaryRegion: 'West Africa',
    percentage: 78,
    countries: [
      { name: 'Nigeria', percentage: 45, tribe: 'Yoruba' },
      { name: 'Ghana', percentage: 23, tribe: 'Akan' },
      { name: 'Senegal', percentage: 10, tribe: 'Wolof' }
    ],
    matches: 234,
    stories: 12
  }

  const familyTree = [
    { name: 'You', generation: 0, location: 'Current' },
    { name: 'Parents', generation: 1, location: 'Known' },
    { name: 'Grandparents', generation: 2, location: 'Partially Known' },
    { name: 'Great-Grandparents', generation: 3, location: 'Research Needed' }
  ]

  const culturalInsights = [
    {
      title: 'Yoruba Traditions',
      description: 'Rich cultural heritage from southwestern Nigeria',
      practices: ['Orisha worship', 'Traditional festivals', 'Ancestral reverence'],
      image: true
    },
    {
      title: 'Akan Heritage',
      description: 'Cultural practices from Ghana and Ivory Coast',
      practices: ['Adinkra symbols', 'Kente cloth', 'Naming ceremonies'],
      image: true
    }
  ]

  const dnaMatches = [
    { name: 'Adunni Okafor', relationship: '3rd-4th cousin', location: 'Lagos, Nigeria', shared: '2.1%' },
    { name: 'Kwame Asante', relationship: '4th-6th cousin', location: 'Kumasi, Ghana', shared: '1.8%' },
    { name: 'Fatou Diallo', relationship: '5th-8th cousin', location: 'Dakar, Senegal', shared: '1.2%' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ancestry & Heritage</h1>
            <p className="text-gray-600">Discover your roots and connect with your heritage</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="family-tree">Family Tree</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="matches">DNA Matches</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Ancestry Composition */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Ancestry Composition</CardTitle>
                  <CardDescription>
                    Based on genetic analysis and historical records
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      {ancestryData.percentage}%
                    </div>
                    <p className="text-lg font-semibold">{ancestryData.primaryRegion}</p>
                  </div>

                  <div className="space-y-4">
                    {ancestryData.countries.map((country, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{country.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {country.tribe}
                            </Badge>
                          </div>
                          <span className="text-sm font-semibold">{country.percentage}%</span>
                        </div>
                        <Progress value={country.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{ancestryData.matches}</div>
                      <p className="text-sm text-gray-600">DNA Matches</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{ancestryData.stories}</div>
                      <p className="text-sm text-gray-600">Family Stories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Discoveries */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Discoveries</CardTitle>
                  <CardDescription>
                    New insights about your heritage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold text-blue-900">New DNA Match</h4>
                    </div>
                    <p className="text-sm text-blue-800">
                      You have a new 3rd cousin match from Lagos, Nigeria
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-green-900">Historical Record</h4>
                    </div>
                    <p className="text-sm text-green-800">
                      Found records of your great-grandfather in colonial archives
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-orange-600" />
                      <h4 className="font-semibold text-orange-900">Community Connection</h4>
                    </div>
                    <p className="text-sm text-orange-800">
                      5 people from your ancestral village joined the platform
                    </p>
                  </div>

                  <Button className="w-full">
                    View All Discoveries
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Ancestry Map */}
            <Card>
              <CardHeader>
                <CardTitle>Ancestral Origins Map</CardTitle>
                <CardDescription>
                  Visual representation of your heritage across Africa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-700">Interactive Ancestry Map</p>
                    <p className="text-sm text-gray-600">Explore your genetic journey across Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Family Tree Tab */}
          <TabsContent value="family-tree" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Family Tree Builder</CardTitle>
                <CardDescription>
                  Build and explore your family lineage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="space-y-8">
                    {familyTree.map((generation, index) => (
                      <div key={index} className="text-center">
                        <div className="w-32 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg border-2 border-orange-200 flex items-center justify-center mb-2">
                          <div>
                            <TreePine className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                            <p className="text-sm font-semibold">{generation.name}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {generation.location}
                        </Badge>
                        {index < familyTree.length - 1 && (
                          <div className="w-px h-8 bg-gray-300 mx-auto mt-4"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-gray-600">
                    Add family members to build your complete family tree
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline">
                      <Users className="mr-2 h-4 w-4" />
                      Add Family Member
                    </Button>
                    <Button variant="outline">
                      <Camera className="mr-2 h-4 w-4" />
                      Upload Photo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Culture Tab */}
          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {culturalInsights.map((insight, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-600">Cultural Heritage Image</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                    <p className="text-gray-600 mb-4">{insight.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium">Traditional Practices:</h4>
                      <div className="flex flex-wrap gap-2">
                        {insight.practices.map((practice, i) => (
                          <Badge key={i} variant="secondary">
                            {practice}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* DNA Matches Tab */}
          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>DNA Matches</CardTitle>
                    <CardDescription>
                      Connect with genetic relatives around the world
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Search matches..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48"
                    />
                    <Button variant="outline">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dnaMatches.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                          {match.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold">{match.name}</h4>
                          <p className="text-sm text-gray-600">{match.relationship}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <MapPin className="h-3 w-3" />
                            <span>{match.location}</span>
                            <span>•</span>
                            <span>{match.shared} DNA shared</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Heart className="mr-2 h-4 w-4" />
                          Connect
                        </Button>
                        <Button size="sm">
                          Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

