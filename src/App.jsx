import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero.jsx';
import HeroQuoteCarousel from './components/HeroQuoteCarousel.jsx';
import ShareButton from './components/ShareButton.jsx';
import Navigation from './components/Navigation.jsx';
import Feed from './components/Feed.jsx';
import CreatePostEnhanced from './components/CreatePostEnhanced.jsx';
import Sidebar from './components/Sidebar.jsx';
import VideoFeed from './components/VideoFeed.jsx';
import UserProfile from './components/UserProfile.jsx';
import AuthModal from './components/AuthModal.jsx';
import MessagingSystem from './components/MessagingSystem.jsx';
import GroupsSystem from './components/GroupsSystem.jsx';
import PrivacySettings from './components/PrivacySettings.jsx';

function App() {
  const [currentView, setCurrentView] = useState('hero');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPrivacySettings, setShowPrivacySettings] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleNewPost = (post) => {
    setPosts(prev => [post, ...prev]);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'hero':
        return (
          <div className="min-h-screen bg-gradient-to-br from-pan-red via-deep-black to-pan-green">
            <Hero />
            <div className="container mx-auto px-4 py-8">
              <HeroQuoteCarousel />
              <div className="text-center py-12">
                <h2 className="text-3xl font-bold text-gold mb-6">Share Your Story with the World</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Every story matters. Every voice counts. Share your heritage, your struggles, your triumphs, 
                  and your dreams with the global Pan-African community.
                </p>
                <div className="flex justify-center space-x-4">
                  <ShareButton />
                  <button 
                    onClick={() => handleViewChange('feed')}
                    className="bg-gold hover:bg-warm-gold text-black px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Enter the Community
                  </button>
                  <button 
                    onClick={() => setShowAuthModal(true)}
                    className="bg-transparent border-2 border-pan-red text-pan-red hover:bg-pan-red hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Join Shata.net
                  </button>
                </div>
              </div>
            </div>
            <footer className="bg-deep-black py-8 text-center">
              <h3 className="text-gold text-xl font-bold mb-2">Shata.net</h3>
              <p className="text-gray-400 mb-4">Turning pain into purpose, separation into solidarity.</p>
              <div className="flex justify-center space-x-8 text-gray-500 text-sm">
                <span>From Lagos to Harlem</span>
                <span>Kingston to Paris</span>
                <span>Global Voice, Local Heart</span>
              </div>
            </footer>
          </div>
        );
      
      case 'feed':
        return (
          <div className="min-h-screen bg-deep-black">
            <Navigation 
              onViewChange={handleViewChange}
              onShowAuth={() => setShowAuthModal(true)}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <div className="flex max-w-7xl mx-auto">
              <Sidebar />
              <main className="flex-1 px-4 py-6">
                <CreatePostEnhanced onPost={handleNewPost} className="mb-6" />
                <Feed posts={posts} />
              </main>
            </div>
          </div>
        );
      
      case 'videos':
        return (
          <div className="min-h-screen bg-deep-black">
            <Navigation 
              onViewChange={handleViewChange}
              onShowAuth={() => setShowAuthModal(true)}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <VideoFeed />
          </div>
        );
      
      case 'groups':
        return (
          <div className="min-h-screen bg-deep-black">
            <Navigation 
              onViewChange={handleViewChange}
              onShowAuth={() => setShowAuthModal(true)}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <GroupsSystem />
          </div>
        );
      
      case 'profile':
        return (
          <div className="min-h-screen bg-deep-black">
            <Navigation 
              onViewChange={handleViewChange}
              onShowAuth={() => setShowAuthModal(true)}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <UserProfile />
          </div>
        );
      
      case 'messages':
        return (
          <div className="min-h-screen bg-deep-black">
            <Navigation 
              onViewChange={handleViewChange}
              onShowAuth={() => setShowAuthModal(true)}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <MessagingSystem />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
      
      {/* Modals */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
      
      {showPrivacySettings && (
        <PrivacySettings onClose={() => setShowPrivacySettings(false)} />
      )}
    </div>
  );
}

export default App;

