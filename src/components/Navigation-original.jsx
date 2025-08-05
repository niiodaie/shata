import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { 
  Home, 
  Search, 
  Users, 
  MessageCircle, 
  Bell, 
  Plus,
  Menu,
  Globe,
  Heart
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-deep-black/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-african font-bold text-gold">
                Shata<span className="text-pan-green">.</span>net
              </h1>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for people, posts, or communities..."
                className="w-full pl-10 bg-charcoal border-gold/30 text-white placeholder-gray-400 focus:border-gold"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-gold/10">
              <Home className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-gold/10">
              <Users className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-gold/10">
              <Globe className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-gold/10">
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-gold/10 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-pan-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </Button>
            
            {/* Create Post Button */}
            <Button className="bg-gold hover:bg-warm-gold text-black font-semibold">
              <Plus className="w-4 h-4 mr-2" />
              Create
            </Button>

            {/* Profile Avatar */}
            <Avatar className="w-8 h-8 border-2 border-gold">
              <AvatarImage src="/api/placeholder/32/32" alt="Profile" />
              <AvatarFallback className="bg-pan-green text-white">U</AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gold"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-charcoal rounded-lg mt-2">
              {/* Mobile Search */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 bg-deep-black border-gold/30 text-white placeholder-gray-400"
                />
              </div>
              
              <Button variant="ghost" className="w-full justify-start text-white hover:text-gold hover:bg-gold/10">
                <Home className="w-5 h-5 mr-3" />
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-gold hover:bg-gold/10">
                <Users className="w-5 h-5 mr-3" />
                Community
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-gold hover:bg-gold/10">
                <Globe className="w-5 h-5 mr-3" />
                Diaspora
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-gold hover:bg-gold/10">
                <MessageCircle className="w-5 h-5 mr-3" />
                Messages
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-gold hover:bg-gold/10">
                <Bell className="w-5 h-5 mr-3" />
                Notifications
              </Button>
              <Button className="w-full bg-gold hover:bg-warm-gold text-black font-semibold mt-3">
                <Plus className="w-4 h-4 mr-2" />
                Create Post
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

