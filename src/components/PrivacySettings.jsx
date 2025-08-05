import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Switch } from '@/components/ui/switch.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { 
  Shield, 
  Eye, 
  EyeOff, 
  Users, 
  Lock, 
  Globe, 
  UserCheck, 
  UserX, 
  MessageCircle,
  Bell,
  Search,
  Camera,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Flag,
  AlertTriangle,
  Settings,
  X,
  Check,
  Info
} from 'lucide-react';

const PrivacySettings = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Privacy Settings State
  const [profileSettings, setProfileSettings] = useState({
    profileVisibility: 'public', // public, diaspora, friends, private
    allowSearch: true,
    showOnlineStatus: true,
    allowFriendRequests: 'everyone', // everyone, diaspora, friends-of-friends, no-one
    showFriendsList: 'friends',
    showFollowersList: 'public',
    allowTagging: 'friends',
    showBirthday: 'friends',
    showLocation: 'diaspora',
    showEmail: 'private'
  });

  const [postSettings, setPostSettings] = useState({
    defaultAudience: 'public', // public, diaspora, friends, private
    allowComments: 'everyone',
    allowShares: 'everyone',
    allowReactions: 'everyone',
    moderateComments: false,
    hideFromTimeline: false,
    allowDownload: true
  });

  const [messagingSettings, setMessagingSettings] = useState({
    allowMessages: 'diaspora', // everyone, diaspora, friends, no-one
    allowGroupInvites: 'friends',
    allowVideoCall: 'friends',
    readReceipts: true,
    onlineStatus: true,
    messageRequests: true
  });

  const [notificationSettings, setNotificationSettings] = useState({
    postLikes: true,
    postComments: true,
    postShares: true,
    friendRequests: true,
    messages: true,
    groupInvites: true,
    mentions: true,
    diasporaEvents: true,
    culturalChallenges: true,
    emailNotifications: false,
    pushNotifications: true
  });

  const [blockedUsers, setBlockedUsers] = useState([
    { id: 1, name: "John Doe", username: "@johndoe", reason: "Harassment" },
    { id: 2, name: "Jane Smith", username: "@janesmith", reason: "Spam" }
  ]);

  const [reportedContent, setReportedContent] = useState([
    { id: 1, type: "Post", content: "Inappropriate content...", status: "Under Review", date: "2 days ago" },
    { id: 2, type: "Comment", content: "Spam comment...", status: "Resolved", date: "1 week ago" }
  ]);

  const audienceOptions = [
    { value: 'public', label: 'Public', icon: Globe, description: 'Anyone on or off Shata.net' },
    { value: 'diaspora', label: 'Diaspora Community', icon: Users, description: 'African and diaspora members only' },
    { value: 'friends', label: 'Friends', icon: UserCheck, description: 'Your friends on Shata.net' },
    { value: 'private', label: 'Only Me', icon: Lock, description: 'Only you can see this' }
  ];

  const handleUnblockUser = (userId) => {
    setBlockedUsers(blockedUsers.filter(user => user.id !== userId));
  };

  const handleDeleteReport = (reportId) => {
    setReportedContent(reportedContent.filter(report => report.id !== reportId));
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] bg-charcoal border-gold/20 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gold/20">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-gold" />
            <CardTitle className="text-white">Privacy & Safety Settings</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>

        <div className="flex h-[calc(90vh-80px)]">
          {/* Settings Navigation */}
          <div className="w-64 border-r border-gold/20 bg-deep-black">
            <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical" className="h-full">
              <TabsList className="flex flex-col h-full w-full bg-transparent space-y-1 p-2">
                <TabsTrigger 
                  value="profile" 
                  className="w-full justify-start text-white data-[state=active]:bg-gold data-[state=active]:text-black"
                >
                  <UserCheck className="w-4 h-4 mr-2" />
                  Profile Privacy
                </TabsTrigger>
                <TabsTrigger 
                  value="posts" 
                  className="w-full justify-start text-white data-[state=active]:bg-gold data-[state=active]:text-black"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Posts & Sharing
                </TabsTrigger>
                <TabsTrigger 
                  value="messaging" 
                  className="w-full justify-start text-white data-[state=active]:bg-gold data-[state=active]:text-black"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messaging
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="w-full justify-start text-white data-[state=active]:bg-gold data-[state=active]:text-black"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger 
                  value="blocking" 
                  className="w-full justify-start text-white data-[state=active]:bg-gold data-[state=active]:text-black"
                >
                  <UserX className="w-4 h-4 mr-2" />
                  Blocking & Reports
                </TabsTrigger>
                <TabsTrigger 
                  value="safety" 
                  className="w-full justify-start text-white data-[state=active]:bg-gold data-[state=active]:text-black"
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Safety Center
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Settings Content */}
          <div className="flex-1 overflow-y-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Profile Privacy */}
              <TabsContent value="profile" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Profile Visibility</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white mb-2 block">Who can see your profile?</Label>
                      <Select 
                        value={profileSettings.profileVisibility} 
                        onValueChange={(value) => setProfileSettings({...profileSettings, profileVisibility: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          {audienceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value} className="text-white hover:bg-gold/20">
                              <div className="flex items-center space-x-2">
                                <option.icon className="w-4 h-4" />
                                <div>
                                  <div>{option.label}</div>
                                  <div className="text-xs text-gray-400">{option.description}</div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Allow people to find you by search</Label>
                        <p className="text-sm text-gray-400">Let people discover your profile through search</p>
                      </div>
                      <Switch
                        checked={profileSettings.allowSearch}
                        onCheckedChange={(checked) => setProfileSettings({...profileSettings, allowSearch: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Show when you're online</Label>
                        <p className="text-sm text-gray-400">Let friends see when you're active</p>
                      </div>
                      <Switch
                        checked={profileSettings.showOnlineStatus}
                        onCheckedChange={(checked) => setProfileSettings({...profileSettings, showOnlineStatus: checked})}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Contact & Discovery</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white mb-2 block">Who can send you friend requests?</Label>
                      <Select 
                        value={profileSettings.allowFriendRequests} 
                        onValueChange={(value) => setProfileSettings({...profileSettings, allowFriendRequests: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          <SelectItem value="everyone" className="text-white hover:bg-gold/20">Everyone</SelectItem>
                          <SelectItem value="diaspora" className="text-white hover:bg-gold/20">Diaspora Community</SelectItem>
                          <SelectItem value="friends-of-friends" className="text-white hover:bg-gold/20">Friends of Friends</SelectItem>
                          <SelectItem value="no-one" className="text-white hover:bg-gold/20">No One</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white mb-2 block">Who can see your friends list?</Label>
                      <Select 
                        value={profileSettings.showFriendsList} 
                        onValueChange={(value) => setProfileSettings({...profileSettings, showFriendsList: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          <SelectItem value="public" className="text-white hover:bg-gold/20">Public</SelectItem>
                          <SelectItem value="diaspora" className="text-white hover:bg-gold/20">Diaspora Community</SelectItem>
                          <SelectItem value="friends" className="text-white hover:bg-gold/20">Friends</SelectItem>
                          <SelectItem value="private" className="text-white hover:bg-gold/20">Only Me</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white mb-2 block">Who can see your location?</Label>
                      <Select 
                        value={profileSettings.showLocation} 
                        onValueChange={(value) => setProfileSettings({...profileSettings, showLocation: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          <SelectItem value="public" className="text-white hover:bg-gold/20">Public</SelectItem>
                          <SelectItem value="diaspora" className="text-white hover:bg-gold/20">Diaspora Community</SelectItem>
                          <SelectItem value="friends" className="text-white hover:bg-gold/20">Friends</SelectItem>
                          <SelectItem value="private" className="text-white hover:bg-gold/20">Only Me</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white mb-2 block">Who can see your birthday?</Label>
                      <Select 
                        value={profileSettings.showBirthday} 
                        onValueChange={(value) => setProfileSettings({...profileSettings, showBirthday: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          <SelectItem value="public" className="text-white hover:bg-gold/20">Public</SelectItem>
                          <SelectItem value="diaspora" className="text-white hover:bg-gold/20">Diaspora Community</SelectItem>
                          <SelectItem value="friends" className="text-white hover:bg-gold/20">Friends</SelectItem>
                          <SelectItem value="private" className="text-white hover:bg-gold/20">Only Me</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Posts & Sharing */}
              <TabsContent value="posts" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Default Post Audience</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white mb-2 block">Who can see your future posts?</Label>
                      <Select 
                        value={postSettings.defaultAudience} 
                        onValueChange={(value) => setPostSettings({...postSettings, defaultAudience: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          {audienceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value} className="text-white hover:bg-gold/20">
                              <div className="flex items-center space-x-2">
                                <option.icon className="w-4 h-4" />
                                <div>
                                  <div>{option.label}</div>
                                  <div className="text-xs text-gray-400">{option.description}</div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-deep-black p-4 rounded-lg border border-gold/20">
                      <div className="flex items-start space-x-2">
                        <Info className="w-5 h-5 text-gold mt-0.5" />
                        <div>
                          <p className="text-white text-sm font-medium">Diaspora Community</p>
                          <p className="text-gray-400 text-xs">
                            This setting helps you connect with people who share your cultural heritage while maintaining privacy from the general public.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Post Interactions</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white mb-2 block">Who can comment on your posts?</Label>
                      <Select 
                        value={postSettings.allowComments} 
                        onValueChange={(value) => setPostSettings({...postSettings, allowComments: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          <SelectItem value="everyone" className="text-white hover:bg-gold/20">Everyone</SelectItem>
                          <SelectItem value="diaspora" className="text-white hover:bg-gold/20">Diaspora Community</SelectItem>
                          <SelectItem value="friends" className="text-white hover:bg-gold/20">Friends</SelectItem>
                          <SelectItem value="no-one" className="text-white hover:bg-gold/20">No One</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white mb-2 block">Who can share your posts?</Label>
                      <Select 
                        value={postSettings.allowShares} 
                        onValueChange={(value) => setPostSettings({...postSettings, allowShares: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          <SelectItem value="everyone" className="text-white hover:bg-gold/20">Everyone</SelectItem>
                          <SelectItem value="diaspora" className="text-white hover:bg-gold/20">Diaspora Community</SelectItem>
                          <SelectItem value="friends" className="text-white hover:bg-gold/20">Friends</SelectItem>
                          <SelectItem value="no-one" className="text-white hover:bg-gold/20">No One</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Moderate comments before they appear</Label>
                        <p className="text-sm text-gray-400">Review comments before they're visible to others</p>
                      </div>
                      <Switch
                        checked={postSettings.moderateComments}
                        onCheckedChange={(checked) => setPostSettings({...postSettings, moderateComments: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Allow media downloads</Label>
                        <p className="text-sm text-gray-400">Let people download your photos and videos</p>
                      </div>
                      <Switch
                        checked={postSettings.allowDownload}
                        onCheckedChange={(checked) => setPostSettings({...postSettings, allowDownload: checked})}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Messaging */}
              <TabsContent value="messaging" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Message Delivery</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white mb-2 block">Who can send you messages?</Label>
                      <Select 
                        value={messagingSettings.allowMessages} 
                        onValueChange={(value) => setMessagingSettings({...messagingSettings, allowMessages: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          <SelectItem value="everyone" className="text-white hover:bg-gold/20">Everyone</SelectItem>
                          <SelectItem value="diaspora" className="text-white hover:bg-gold/20">Diaspora Community</SelectItem>
                          <SelectItem value="friends" className="text-white hover:bg-gold/20">Friends</SelectItem>
                          <SelectItem value="no-one" className="text-white hover:bg-gold/20">No One</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white mb-2 block">Who can add you to groups?</Label>
                      <Select 
                        value={messagingSettings.allowGroupInvites} 
                        onValueChange={(value) => setMessagingSettings({...messagingSettings, allowGroupInvites: value})}
                      >
                        <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20">
                          <SelectItem value="everyone" className="text-white hover:bg-gold/20">Everyone</SelectItem>
                          <SelectItem value="diaspora" className="text-white hover:bg-gold/20">Diaspora Community</SelectItem>
                          <SelectItem value="friends" className="text-white hover:bg-gold/20">Friends</SelectItem>
                          <SelectItem value="no-one" className="text-white hover:bg-gold/20">No One</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Send read receipts</Label>
                        <p className="text-sm text-gray-400">Let people know when you've read their messages</p>
                      </div>
                      <Switch
                        checked={messagingSettings.readReceipts}
                        onCheckedChange={(checked) => setMessagingSettings({...messagingSettings, readReceipts: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Show when you're online</Label>
                        <p className="text-sm text-gray-400">Let people see when you're active in messages</p>
                      </div>
                      <Switch
                        checked={messagingSettings.onlineStatus}
                        onCheckedChange={(checked) => setMessagingSettings({...messagingSettings, onlineStatus: checked})}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Notifications */}
              <TabsContent value="notifications" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Activity Notifications</h3>
                  <div className="space-y-4">
                    {Object.entries(notificationSettings).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <Label className="text-white capitalize">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </Label>
                          <p className="text-sm text-gray-400">
                            {key === 'diasporaEvents' && 'Cultural events and community gatherings'}
                            {key === 'culturalChallenges' && 'Heritage challenges and cultural activities'}
                            {key === 'emailNotifications' && 'Receive notifications via email'}
                            {key === 'pushNotifications' && 'Receive push notifications on your device'}
                            {!['diasporaEvents', 'culturalChallenges', 'emailNotifications', 'pushNotifications'].includes(key) && 
                              `Get notified about ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                          </p>
                        </div>
                        <Switch
                          checked={value}
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, [key]: checked})}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Blocking & Reports */}
              <TabsContent value="blocking" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Blocked Users</h3>
                  <div className="space-y-3">
                    {blockedUsers.length === 0 ? (
                      <p className="text-gray-400">You haven't blocked anyone yet.</p>
                    ) : (
                      blockedUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-3 bg-deep-black rounded-lg border border-gold/20">
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-gray-400 text-sm">{user.username}</p>
                            <Badge variant="outline" className="border-pan-red text-pan-red text-xs mt-1">
                              {user.reason}
                            </Badge>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleUnblockUser(user.id)}
                            className="border-gold text-gold hover:bg-gold hover:text-black"
                          >
                            Unblock
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Your Reports</h3>
                  <div className="space-y-3">
                    {reportedContent.length === 0 ? (
                      <p className="text-gray-400">You haven't reported any content.</p>
                    ) : (
                      reportedContent.map((report) => (
                        <div key={report.id} className="p-3 bg-deep-black rounded-lg border border-gold/20">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <Badge variant="outline" className="border-gold text-gold text-xs">
                                {report.type}
                              </Badge>
                              <Badge 
                                variant="outline" 
                                className={`ml-2 text-xs ${
                                  report.status === 'Resolved' 
                                    ? 'border-pan-green text-pan-green' 
                                    : 'border-yellow-500 text-yellow-500'
                                }`}
                              >
                                {report.status}
                              </Badge>
                            </div>
                            <span className="text-gray-400 text-xs">{report.date}</span>
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{report.content}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteReport(report.id)}
                            className="text-gray-400 hover:text-white"
                          >
                            <X className="w-4 h-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Safety Center */}
              <TabsContent value="safety" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Community Safety</h3>
                  <div className="space-y-4">
                    <Card className="bg-deep-black border-gold/20">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Shield className="w-6 h-6 text-gold mt-1" />
                          <div>
                            <h4 className="text-white font-medium mb-2">Safe Space Guidelines</h4>
                            <p className="text-gray-300 text-sm mb-3">
                              Shata.net is committed to creating a safe, respectful environment for the global African diaspora. 
                              Our community guidelines promote cultural celebration while preventing harassment and discrimination.
                            </p>
                            <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-black">
                              Read Community Guidelines
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-deep-black border-gold/20">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Flag className="w-6 h-6 text-pan-red mt-1" />
                          <div>
                            <h4 className="text-white font-medium mb-2">Report Content</h4>
                            <p className="text-gray-300 text-sm mb-3">
                              Help keep our community safe by reporting inappropriate content, harassment, or spam. 
                              All reports are reviewed by our moderation team.
                            </p>
                            <Button variant="outline" size="sm" className="border-pan-red text-pan-red hover:bg-pan-red hover:text-white">
                              Report Content
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-deep-black border-gold/20">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Heart className="w-6 h-6 text-pan-green mt-1" />
                          <div>
                            <h4 className="text-white font-medium mb-2">Mental Health Resources</h4>
                            <p className="text-gray-300 text-sm mb-3">
                              Access culturally-sensitive mental health resources and support networks within the diaspora community.
                            </p>
                            <Button variant="outline" size="sm" className="border-pan-green text-pan-green hover:bg-pan-green hover:text-white">
                              Find Support
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Save Button */}
        <div className="border-t border-gold/20 p-4 flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose} className="border-gold/30 text-gray-400 hover:text-white">
            Cancel
          </Button>
          <Button className="bg-gold hover:bg-warm-gold text-black">
            <Check className="w-4 h-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PrivacySettings;

