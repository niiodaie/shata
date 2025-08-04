import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Copy, 
  Mail,
  MessageCircle,
  ExternalLink,
  Check,
  X
} from 'lucide-react';

const ShareButtonEnhanced = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://shata.net';
  const shareText = 'Join the Pan-African digital movement at Shata.net - Where Africa Meets Her Diaspora 🌍✊🏿';

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-blue-400 hover:bg-blue-500',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}&hashtags=ShataNet,PanAfrican,Diaspora`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-700 hover:bg-blue-800',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent('Shata.net - Pan-African Digital Movement')}&summary=${encodeURIComponent(shareText)}`
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-600 hover:bg-green-700',
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-gray-600 hover:bg-gray-700',
      url: `mailto:?subject=${encodeURIComponent('Join the Pan-African Movement')}&body=${encodeURIComponent(shareText + '\n\n' + currentUrl)}`
    }
  ];

  const handleShare = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Button
        onClick={() => setShowShareModal(true)}
        className="bg-pan-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Share2 className="w-5 h-5 mr-2" />
        Share
      </Button>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="bg-charcoal border-gold/20 w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Share Shata.net</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-300 text-sm mb-6">
                Help spread the word about the Pan-African digital movement
              </p>

              {/* Social Share Options */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => handleShare(option.url)}
                    className={`${option.color} text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105`}
                  >
                    <option.icon className="w-5 h-5" />
                    <span className="font-medium">{option.name}</span>
                  </button>
                ))}
              </div>

              {/* Copy Link */}
              <div className="border-t border-gold/20 pt-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={currentUrl}
                    readOnly
                    className="flex-1 bg-deep-black border border-gold/30 text-white px-3 py-2 rounded text-sm"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`px-4 py-2 rounded transition-all duration-300 ${
                      copied 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gold hover:bg-warm-gold text-black'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Additional Share Info */}
              <div className="mt-4 p-3 bg-deep-black/50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <ExternalLink className="w-4 h-4 text-gold mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Spread the Movement</p>
                    <p className="text-gray-400 text-xs">
                      Every share helps connect more people to their African heritage and diaspora community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cultural Hashtags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-gold text-gold text-xs">
                  #ShataNet
                </Badge>
                <Badge variant="outline" className="border-pan-green text-pan-green text-xs">
                  #PanAfrican
                </Badge>
                <Badge variant="outline" className="border-pan-red text-pan-red text-xs">
                  #Diaspora
                </Badge>
                <Badge variant="outline" className="border-gold text-gold text-xs">
                  #Unity
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Overlay */}
      {showShareModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setShowShareModal(false)}
        />
      )}
    </>
  );
};

export default ShareButtonEnhanced;

