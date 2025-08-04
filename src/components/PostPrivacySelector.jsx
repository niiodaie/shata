import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Globe, 
  Users, 
  UserCheck, 
  Lock, 
  ChevronDown,
  Settings,
  Eye,
  EyeOff,
  MapPin,
  Calendar,
  Hash,
  Shield
} from 'lucide-react';

const PostPrivacySelector = ({ 
  selectedAudience = 'public', 
  onAudienceChange, 
  showAdvanced = false,
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(showAdvanced);

  const audienceOptions = [
    {
      value: 'public',
      label: 'Public',
      icon: Globe,
      description: 'Anyone on or off Shata.net',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    },
    {
      value: 'diaspora',
      label: 'Diaspora Community',
      icon: Users,
      description: 'African and diaspora members only',
      color: 'text-gold',
      bgColor: 'bg-gold/10',
      borderColor: 'border-gold/30'
    },
    {
      value: 'friends',
      label: 'Friends',
      icon: UserCheck,
      description: 'Your friends on Shata.net',
      color: 'text-pan-green',
      bgColor: 'bg-pan-green/10',
      borderColor: 'border-pan-green/30'
    },
    {
      value: 'private',
      label: 'Only Me',
      icon: Lock,
      description: 'Only you can see this',
      color: 'text-gray-400',
      bgColor: 'bg-gray-400/10',
      borderColor: 'border-gray-400/30'
    }
  ];

  const advancedOptions = [
    {
      id: 'hide-from-timeline',
      label: 'Hide from timeline',
      description: 'This post won\'t appear on your profile timeline',
      enabled: false
    },
    {
      id: 'turn-off-commenting',
      label: 'Turn off commenting',
      description: 'People won\'t be able to comment on this post',
      enabled: false
    },
    {
      id: 'turn-off-sharing',
      label: 'Turn off sharing',
      description: 'People won\'t be able to share this post',
      enabled: false
    },
    {
      id: 'location-restriction',
      label: 'Location-based visibility',
      description: 'Only show to people in specific regions',
      enabled: false
    }
  ];

  const selectedOption = audienceOptions.find(option => option.value === selectedAudience);

  const handleAudienceSelect = (audience) => {
    onAudienceChange?.(audience);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Selector Button */}
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center space-x-2 px-3 py-2 rounded-lg border
          ${selectedOption?.bgColor} ${selectedOption?.borderColor} ${selectedOption?.color}
          hover:opacity-80 transition-all
        `}
      >
        <selectedOption.icon className="w-4 h-4" />
        <span className="text-sm font-medium">{selectedOption?.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <Card className="absolute top-full left-0 mt-2 w-80 bg-charcoal border-gold/20 shadow-xl z-50">
          <CardContent className="p-0">
            <div className="p-4 border-b border-gold/20">
              <h3 className="text-white font-medium mb-1">Who can see your post?</h3>
              <p className="text-gray-400 text-sm">Your post will be visible to the selected audience</p>
            </div>

            {/* Audience Options */}
            <div className="p-2">
              {audienceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAudienceSelect(option.value)}
                  className={`
                    w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors
                    ${selectedAudience === option.value ? 'bg-gold/20' : ''}
                  `}
                >
                  <div className={`p-2 rounded-full ${option.bgColor} ${option.borderColor} border`}>
                    <option.icon className={`w-4 h-4 ${option.color}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{option.label}</span>
                      {selectedAudience === option.value && (
                        <Badge variant="outline" className="border-gold text-gold text-xs">
                          Selected
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{option.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Advanced Options Toggle */}
            <div className="border-t border-gold/20 p-4">
              <Button
                variant="ghost"
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="w-full flex items-center justify-between text-gray-400 hover:text-white"
              >
                <div className="flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Advanced Options</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${showAdvancedOptions ? 'rotate-180' : ''}`} />
              </Button>

              {/* Advanced Options */}
              {showAdvancedOptions && (
                <div className="mt-4 space-y-3">
                  {advancedOptions.map((option) => (
                    <div key={option.id} className="flex items-start space-x-3">
                      <button className="mt-1">
                        {option.enabled ? (
                          <Eye className="w-4 h-4 text-gold" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{option.label}</p>
                        <p className="text-gray-400 text-xs">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cultural Context Info */}
            <div className="border-t border-gold/20 p-4 bg-deep-black/50">
              <div className="flex items-start space-x-2">
                <Shield className="w-4 h-4 text-gold mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Diaspora Community</p>
                  <p className="text-gray-400 text-xs">
                    Share with people who understand your cultural context and heritage. 
                    This helps create meaningful connections within the global African diaspora.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default PostPrivacySelector;

