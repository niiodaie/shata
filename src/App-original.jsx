import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Feed from './components/Feed';
import VideoFeed from './components/VideoFeed';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
import MessagingSystem from './components/MessagingSystem';
import AuthModal from './components/AuthModal';
import ShareButton from './components/ShareButton';
import './App.css';

function App() {
  const [showHero, setShowHero] = useState(true);
  const [currentView, setCurrentView] = useState('feed'); // feed, videos, profile, messages
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (authData) => {
    console.log('Authentication:', authData);
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  const handleNavigation = (view) => {
    if (!isAuthenticated && view !== 'feed') {
      setShowAuthModal(true);
      return;
    }
    setCurrentView(view);
    setShowHero(false);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'videos':
        return <VideoFeed />;
      case 'profile':
        return (
          <div className="max-w-6xl mx-auto p-6">
            <UserProfile isOwnProfile={true} />
          </div>
        );
      case 'messages':
        return <MessagingSystem />;
      default:
        return (
          <div className="flex">
            <div className="flex-1 min-h-screen">
              <div className="max-w-6xl mx-auto flex gap-6 p-6">
                <div className="hidden lg:block">
                  <Sidebar />
                </div>
                <div className="flex-1">
                  <Feed />
                </div>
                <div className="hidden xl:block w-80">
                  <div className="sticky top-24 space-y-6">
                    <div className="bg-charcoal border border-gold/20 rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
                      <div className="space-y-2">
                        <button 
                          onClick={() => handleNavigation('videos')}
                          className="w-full text-left p-2 rounded hover:bg-gold/10 text-gray-300 hover:text-white transition-colors"
                        >
                          🎬 Watch Diaspora Videos
                        </button>
                        <button 
                          onClick={() => handleNavigation('messages')}
                          className="w-full text-left p-2 rounded hover:bg-gold/10 text-gray-300 hover:text-white transition-colors"
                        >
                          💬 Connect with Community
                        </button>
                        <button 
                          onClick={() => handleNavigation('profile')}
                          className="w-full text-left p-2 rounded hover:bg-gold/10 text-gray-300 hover:text-white transition-colors"
                        >
                          👤 View Your Profile
                        </button>
                        <button className="w-full text-left p-2 rounded hover:bg-gold/10 text-gray-300 hover:text-white transition-colors">
                          🌍 Find Local Diaspora
                        </button>
                      </div>
                    </div>

                    <div className="bg-charcoal border border-gold/20 rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-4">Community Impact</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Active Members</span>
                          <span className="text-gold font-semibold">2.3M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Stories Shared</span>
                          <span className="text-pan-green font-semibold">15.7M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Countries Connected</span>
                          <span className="text-pan-red font-semibold">195</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Communities</span>
                          <span className="text-white font-semibold">12.4K+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-deep-black">
      {!showHero && (
        <Navigation 
          onNavigate={handleNavigation} 
          currentView={currentView}
          isAuthenticated={isAuthenticated}
          onAuthClick={() => setShowAuthModal(true)}
        />
      )}
      
      {showHero ? (
        <div>
          <Hero />
          
          <section className="py-20 px-6 bg-charcoal">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-african text-gold mb-8">
                Share Your Story with the World
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Every story matters. Every voice counts. Share your heritage, your struggles, 
                your triumphs, and your dreams with the global Pan-African community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <ShareButton 
                  title="Join Shata.net - Where Africa Meets Her Diaspora"
                  description="A global platform uniting Africans and the diaspora through stories, culture, and community."
                  showSocialButtons={true}
                  variant="outline"
                  size="lg"
                />
                <ShareButton 
                  title="Experience the Unity at Shata.net"
                  description="Discover stories from Lagos to Harlem, Kingston to Paris. Join the movement."
                  variant="default"
                  size="lg"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setShowHero(false);
                    setCurrentView('feed');
                  }}
                  className="bg-gold hover:bg-warm-gold text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Enter the Community
                </button>
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
                >
                  Join Shata.net
                </button>
              </div>
            </div>
          </section>

          <footer className="bg-deep-black py-12 px-6 border-t border-gold/20">
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-2xl font-african text-gold mb-4">
                Shata<span className="text-pan-green">.</span>net
              </h3>
              <p className="text-gray-400 mb-6">
                Turning pain into purpose, separation into solidarity.
              </p>
              <div className="flex justify-center space-x-8 text-sm text-gray-500">
                <span>From Lagos to Harlem</span>
                <span>Kingston to Paris</span>
                <span>Global Voice, Local Heart</span>
              </div>
            </div>
          </footer>
        </div>
      ) : (
        renderCurrentView()
      )}

      {/* Authentication Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuth={handleAuth}
      />
    </div>
  );
}

export default App;
