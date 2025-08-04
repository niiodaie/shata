import React, { useState } from 'react';
import { Share2, Copy, Check, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ShareButton = ({ 
  url = window.location.href, 
  title = "Check out this story on Shata.net - Where Africa Meets Her Diaspora",
  description = "Join the global Pan-African community sharing stories, heritage, and culture.",
  showSocialButtons = false,
  variant = "default",
  size = "default"
}) => {
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ 
          title, 
          text: description,
          url 
        });
      } catch (err) {
        console.error('Share failed:', err);
        fallbackCopy();
      }
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard error:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToSocial = (platform) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);
    
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  if (showSocialButtons) {
    return (
      <div className="relative">
        <Button
          onClick={() => setShowDropdown(!showDropdown)}
          variant={variant}
          size={size}
          className="flex items-center gap-2 text-gold hover:text-warm-gold transition-colors duration-200"
        >
          <Share2 className="w-4 h-4" />
          Share Story
        </Button>
        
        {showDropdown && (
          <div className="absolute top-full mt-2 right-0 bg-charcoal border border-gold/20 rounded-lg shadow-lg p-4 min-w-48 z-50">
            <div className="space-y-2">
              <button
                onClick={() => shareToSocial('facebook')}
                className="flex items-center gap-3 w-full p-2 text-left hover:bg-gold/10 rounded transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-500" />
                <span className="text-white">Facebook</span>
              </button>
              
              <button
                onClick={() => shareToSocial('twitter')}
                className="flex items-center gap-3 w-full p-2 text-left hover:bg-gold/10 rounded transition-colors"
              >
                <Twitter className="w-4 h-4 text-blue-400" />
                <span className="text-white">Twitter</span>
              </button>
              
              <button
                onClick={() => shareToSocial('linkedin')}
                className="flex items-center gap-3 w-full p-2 text-left hover:bg-gold/10 rounded transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span className="text-white">LinkedIn</span>
              </button>
              
              <hr className="border-gold/20 my-2" />
              
              <button
                onClick={fallbackCopy}
                className="flex items-center gap-3 w-full p-2 text-left hover:bg-gold/10 rounded transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-pan-green" />
                ) : (
                  <Copy className="w-4 h-4 text-gold" />
                )}
                <span className="text-white">
                  {copied ? 'Copied!' : 'Copy Link'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Button
      onClick={shareContent}
      variant={variant}
      size={size}
      className="flex items-center gap-2 text-gold hover:text-warm-gold transition-colors duration-200"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Share
        </>
      )}
    </Button>
  );
};

export default ShareButton;

