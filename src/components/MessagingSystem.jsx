import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';
import { 
  Search, 
  Send, 
  Smile, 
  Paperclip, 
  Phone, 
  Video, 
  MoreVertical,
  ArrowLeft,
  Circle,
  Image,
  Mic,
  Heart,
  Globe,
  Users,
  Star,
  Archive,
  Trash2
} from 'lucide-react';

const MessagingSystem = ({ onClose }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef(null);

  const conversations = [
    {
      id: 1,
      user: {
        name: "Kwame Asante",
        username: "@kwame_london",
        avatar: "/api/placeholder/40/40",
        diasporaTag: "🇬🇭 x 🇬🇧",
        isOnline: true,
        lastSeen: "now"
      },
      lastMessage: {
        text: "That book recommendation was perfect! Thank you 📚",
        timestamp: "2m ago",
        isRead: false,
        sender: "them"
      },
      unreadCount: 2
    },
    {
      id: 2,
      user: {
        name: "Zara Baptiste",
        username: "@zara_kingston",
        avatar: "/api/placeholder/40/40",
        diasporaTag: "🇯🇲 x 🇨🇦",
        isOnline: false,
        lastSeen: "5m ago"
      },
      lastMessage: {
        text: "The dancehall workshop was amazing! When's the next one?",
        timestamp: "1h ago",
        isRead: true,
        sender: "them"
      },
      unreadCount: 0
    },
    {
      id: 3,
      user: {
        name: "Diaspora Book Club",
        username: "@diaspora_reads",
        avatar: "/api/placeholder/40/40",
        diasporaTag: "📚 Community",
        isOnline: true,
        lastSeen: "now",
        isGroup: true
      },
      lastMessage: {
        text: "Next month we're reading 'Homegoing' by Yaa Gyasi",
        timestamp: "3h ago",
        isRead: true,
        sender: "admin"
      },
      unreadCount: 0
    },
    {
      id: 4,
      user: {
        name: "Amina Hassan",
        username: "@amina_cairo",
        avatar: "/api/placeholder/40/40",
        diasporaTag: "🇪🇬 x 🇺🇸",
        isOnline: false,
        lastSeen: "2h ago"
      },
      lastMessage: {
        text: "Your koshari recipe video was incredible! 🍛",
        timestamp: "1d ago",
        isRead: true,
        sender: "you"
      },
      unreadCount: 0
    }
  ];

  const sampleMessages = [
    {
      id: 1,
      sender: "them",
      text: "Hey! I saw your post about African literature. Do you have any recommendations for someone just getting started?",
      timestamp: "10:30 AM",
      isRead: true
    },
    {
      id: 2,
      sender: "you",
      text: "Absolutely! I'd start with 'Things Fall Apart' by Chinua Achebe - it's a classic and really accessible.",
      timestamp: "10:32 AM",
      isRead: true
    },
    {
      id: 3,
      sender: "you",
      text: "Also, 'Americanah' by Chimamanda Ngozi Adichie is brilliant for diaspora perspectives.",
      timestamp: "10:32 AM",
      isRead: true
    },
    {
      id: 4,
      sender: "them",
      text: "Perfect! I've heard great things about both. Any contemporary authors you'd recommend?",
      timestamp: "10:35 AM",
      isRead: true
    },
    {
      id: 5,
      sender: "you",
      text: "Yaa Gyasi's 'Homegoing' is incredible - it traces families from Ghana to America over centuries. Really powerful stuff.",
      timestamp: "10:37 AM",
      isRead: true
    },
    {
      id: 6,
      sender: "them",
      text: "That book recommendation was perfect! Thank you 📚",
      timestamp: "Just now",
      isRead: false
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Add message logic here
      setMessage('');
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

  const filteredConversations = conversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-deep-black">
      {/* Conversations List */}
      <div className={`${selectedChat ? 'hidden md:block' : 'block'} w-full md:w-80 bg-charcoal border-r border-gold/20`}>
        <div className="p-4 border-b border-gold/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Messages</h2>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
            />
          </div>
        </div>

        {/* Conversation List */}
        <ScrollArea className="h-[calc(100vh-140px)]">
          <div className="p-2">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedChat(conversation)}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedChat?.id === conversation.id 
                    ? 'bg-gold/20 border border-gold/30' 
                    : 'hover:bg-gold/10'
                }`}
              >
                <div className="relative">
                  <Avatar className="w-12 h-12 border border-gold/30">
                    <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                    <AvatarFallback className="bg-pan-green text-white">
                      {conversation.user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {conversation.user.isOnline && (
                    <Circle className="absolute bottom-0 right-0 w-3 h-3 text-pan-green fill-current" />
                  )}
                  {conversation.unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 bg-pan-red text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                      {conversation.unreadCount}
                    </Badge>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-white text-sm truncate">
                        {conversation.user.name}
                      </h3>
                      {conversation.user.isGroup && (
                        <Users className="w-3 h-3 text-gold" />
                      )}
                    </div>
                    <span className="text-xs text-gray-400">
                      {conversation.lastMessage.timestamp}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className={`text-sm truncate ${
                      conversation.unreadCount > 0 ? 'text-white font-medium' : 'text-gray-400'
                    }`}>
                      {conversation.lastMessage.sender === 'you' && 'You: '}
                      {conversation.lastMessage.text}
                    </p>
                    <span className="text-xs text-gold ml-2">
                      {conversation.user.diasporaTag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      {selectedChat ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 bg-charcoal border-b border-gold/20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedChat(null)}
                className="md:hidden text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              
              <Avatar className="w-10 h-10 border border-gold/30">
                <AvatarImage src={selectedChat.user.avatar} alt={selectedChat.user.name} />
                <AvatarFallback className="bg-pan-green text-white">
                  {selectedChat.user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-white">{selectedChat.user.name}</h3>
                  <Badge variant="outline" className="border-gold text-gold text-xs">
                    {selectedChat.user.diasporaTag}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400">
                  {selectedChat.user.isOnline ? 'Online now' : `Last seen ${selectedChat.user.lastSeen}`}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {sampleMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'you' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.sender === 'you'
                      ? 'bg-gold text-black'
                      : 'bg-charcoal text-white border border-gold/20'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${
                      msg.sender === 'you' ? 'text-black/70' : 'text-gray-400'
                    }`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-charcoal border-t border-gold/20">
            <div className="flex items-center space-x-3">
              <Button type="button" variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button type="button" variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Image className="w-4 h-4" />
              </Button>
              
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <Smile className="w-4 h-4" />
                </Button>
              </div>
              
              <Button type="button" variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Mic className="w-4 h-4" />
              </Button>
              
              <Button
                type="submit"
                disabled={!message.trim()}
                className="bg-gold hover:bg-warm-gold text-black disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        // No Chat Selected
        <div className="hidden md:flex flex-1 items-center justify-center bg-deep-black">
          <div className="text-center">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Connect with the Diaspora
            </h3>
            <p className="text-gray-400 max-w-md">
              Start conversations with community members from around the world. 
              Share stories, exchange ideas, and build lasting connections.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagingSystem;

