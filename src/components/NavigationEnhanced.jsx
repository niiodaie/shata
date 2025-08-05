import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Home, 
  Search, 
  Bell, 
  MessageCircle, 
  User, 
  Video,
  Users,
  Settings,
  Shield,
  LogOut,
  Plus,
  Menu,
  X
} from 'lucide-react';

const NavigationEnhanced = ({ onViewChange, onShowAuth, onShowPrivacy }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [notifications] = useState(3);
  const [messages] = useState(2);

  const navItems = [
    { id: 'feed', icon: Home, label: 'Home', active: true },
    { id: 'videos', icon: Video, label: 'Videos' },
    { id: 'groups', icon: Users, label: 'Groups' },
    { id: 'messages', icon: MessageCircle, label: 'Messages', badge: messages }
  ];

  const handleNavClick = (viewId) => {
    onViewChange(viewId);
    setShowMobileMenu(false);
  };

  return (
    <nav className="bg-charcoal border-b border-gold/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onViewChange('hero')}
              className="text-gold text-xl font-bold hover:text-warm-gold transition-colors"
            >
              Shata.net
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors relative
                    ${item.active 
                      ? 'bg-gold text-black' 
                      : 'text-gray-300 hover:text-white hover:bg-gold/10'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <Badge className="bg-pan-red text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                      {item.badge}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for people, posts, or communities..."
                className="pl-10 bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-pan-red text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                  {notifications}
                </Badge>
              )}
            </button>

            {/* Create Button */}
            <Button className="hidden md:flex bg-gold hover:bg-warm-gold text-black">
              <Plus className="w-4 h-4 mr-2" />
              Create
            </Button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gold/10 transition-colors"
              >
                <Avatar className="w-8 h-8 border-2 border-gold">
                  <AvatarImage src="/api/placeholder/32/32" alt="Your avatar" />
                  <AvatarFallback className="bg-pan-green text-white text-sm">
                    U
                  </AvatarFallback>
                </Avatar>
              </button>

              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-charcoal border border-gold/20 rounded-lg shadow-xl z-50">
                  <div className="p-4 border-b border-gold/20">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12 border-2 border-gold">
                        <AvatarImage src="/api/placeholder/48/48" alt="Your avatar" />
                        <AvatarFallback className="bg-pan-green text-white">
                          U
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-semibold">Your Name</h3>
                        <p className="text-gray-400 text-sm">@username</p>
                        <Badge variant="outline" className="border-gold text-gold text-xs mt-1">
                          🇳🇬 x 🇺🇸 Diaspora
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <button
                      onClick={() => {
                        handleNavClick('profile');
                        setShowUserMenu(false);
                      }}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors text-left"
                    >
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="text-white">Your Profile</span>
                    </button>

                    <button
                      onClick={() => {
                        onShowPrivacy();
                        setShowUserMenu(false);
                      }}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors text-left"
                    >
                      <Shield className="w-5 h-5 text-gray-400" />
                      <span className="text-white">Privacy & Safety</span>
                    </button>

                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors text-left">
                      <Settings className="w-5 h-5 text-gray-400" />
                      <span className="text-white">Settings</span>
                    </button>

                    <hr className="border-gold/20 my-2" />

                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-pan-red/10 transition-colors text-left">
                      <LogOut className="w-5 h-5 text-pan-red" />
                      <span className="text-pan-red">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-gold/20 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${item.active 
                      ? 'bg-gold text-black' 
                      : 'text-gray-300 hover:text-white hover:bg-gold/10'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <Badge className="bg-pan-red text-white text-xs ml-auto">
                      {item.badge}
                    </Badge>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Create Button */}
            <Button className="w-full mt-4 bg-gold hover:bg-warm-gold text-black">
              <Plus className="w-4 h-4 mr-2" />
              Create Post
            </Button>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {showMobileMenu && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      {/* Overlay for user menu */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </nav>
  );
};

export default NavigationEnhanced;

