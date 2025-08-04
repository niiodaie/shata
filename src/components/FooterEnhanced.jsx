import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  Youtube,
  ExternalLink,
  Heart,
  Globe
} from 'lucide-react';

const FooterEnhanced = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    community: [
      { name: 'About Shata.net', url: 'https://about.shata.net' },
      { name: 'Our Mission', url: 'https://shata.net/mission' },
      { name: 'Community Guidelines', url: 'https://shata.net/guidelines' },
      { name: 'Success Stories', url: 'https://stories.shata.net' },
      { name: 'Cultural Events', url: 'https://events.shata.net' }
    ],
    resources: [
      { name: 'Diaspora Research', url: 'https://research.africandiasporanetwork.org' },
      { name: 'Cultural Heritage', url: 'https://heritage.shata.net' },
      { name: 'Educational Resources', url: 'https://learn.shata.net' },
      { name: 'Business Directory', url: 'https://business.shata.net' },
      { name: 'Scholarship Programs', url: 'https://scholarships.shata.net' }
    ],
    support: [
      { name: 'Help Center', url: 'https://help.shata.net' },
      { name: 'Contact Support', url: 'mailto:support@shata.net' },
      { name: 'Report Issues', url: 'https://shata.net/report' },
      { name: 'Privacy Policy', url: 'https://shata.net/privacy' },
      { name: 'Terms of Service', url: 'https://shata.net/terms' }
    ],
    connect: [
      { name: 'Newsletter', url: 'https://newsletter.shata.net' },
      { name: 'Partner with Us', url: 'https://partners.shata.net' },
      { name: 'Media Kit', url: 'https://media.shata.net' },
      { name: 'Careers', url: 'https://careers.shata.net' },
      { name: 'Donate', url: 'https://donate.shata.net' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/shatanet_official', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/shatanet.official', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/shatanet_official', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/shatanet', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@shatanet', color: 'hover:text-red-500' }
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-deep-black text-white border-t border-gold/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gold mb-2">
                Shata<span className="text-pan-green">.</span>net
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Turning pain into purpose, separation into solidarity. 
                From Lagos to Harlem, Kingston to Paris.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <a 
                  href="mailto:hello@shata.net"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  hello@shata.net
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <a 
                  href="tel:+1-555-SHATA-NET"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  +1 (555) SHATA-NET
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-gray-400">Global Network</span>
              </div>
            </div>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.url)}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.url)}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.url)}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.url)}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">Follow the Movement:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(social.url)}
                    className={`text-gray-400 ${social.color} transition-colors p-2 rounded-full hover:bg-gray-800`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="Enter email for updates"
                className="bg-charcoal border border-gold/30 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-gold"
              />
              <button
                onClick={() => handleLinkClick('https://newsletter.shata.net')}
                className="bg-gold hover:bg-warm-gold text-black px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>© {currentYear} Shata.net. Made with</span>
              <Heart className="w-4 h-4 text-pan-red" />
              <span>for the global African diaspora.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => handleLinkClick('https://shata.net/privacy')}
                className="hover:text-gold transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick('https://shata.net/terms')}
                className="hover:text-gold transition-colors"
              >
                Terms of Service
              </button>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4 text-gold" />
                <span>Global Voice, Local Heart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEnhanced;

