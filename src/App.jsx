import React, { useState } from 'react';
import './App.css';
import HeroEnhanced from './components/HeroEnhanced.jsx';
import ShareButtonEnhanced from './components/ShareButtonEnhanced.jsx';
import FooterEnhanced from './components/FooterEnhanced.jsx';
import NavigationEnhanced from './components/NavigationEnhanced.jsx';
import Feed from './components/Feed.jsx';
import VideoFeed from './components/VideoFeed.jsx';
import UserProfile from './components/UserProfile.jsx';
import AuthModal from './components/AuthModal.jsx';
import MessagingSystem from './components/MessagingSystem.jsx';
import GroupsSystem from './components/GroupsSystem.jsx';
import PrivacySettings from './components/PrivacySettings.jsx';

function AppEnhanced() {
  const [currentView, setCurrentView] = useState('hero');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPrivacySettings, setShowPrivacySettings] = useState(false);

  const handleEnterCommunity = () => {
    setCurrentView('feed');
  };

  const handleJoinShataNet = () => {
    setShowAuthModal(true);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'hero':
        return (
          <div className="min-h-screen">
            <HeroEnhanced />
            
            {/* Share Your Story Section */}
            <section className="bg-deep-black py-20 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gold mb-8">
                  Share Your Story with the World
                </h2>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                  Every story matters. Every voice counts. Share your heritage, your 
                  struggles, your triumphs, and your dreams with the global Pan-African community.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <ShareButtonEnhanced />
                  <button
                    onClick={handleEnterCommunity}
                    className="bg-gold hover:bg-warm-gold text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Enter the Community
                  </button>
                  <button
                    onClick={handleJoinShataNet}
                    className="border-2 border-pan-red text-pan-red hover:bg-pan-red hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Join Shata.net
                  </button>
                </div>
              </div>
            </section>

            {/* Mission Statement */}
            <section className="bg-charcoal py-16 px-6">
              <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-gold mb-8">Shata.net</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Turning pain into purpose, separation into solidarity.
                </p>
                <div className="flex justify-center items-center space-x-8 text-gray-400">
                  <span>From Lagos to Harlem</span>
                  <span>•</span>
                  <span>Kingston to Paris</span>
                  <span>•</span>
                  <span>Global Voice, Local Heart</span>
                </div>
              </div>
            </section>

            <FooterEnhanced />
          </div>
        );
      case 'feed':
        return (
          <div className="min-h-screen bg-deep-black">
            <NavigationEnhanced 
              currentView={currentView} 
              onViewChange={setCurrentView}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <Feed />
          </div>
        );
      case 'videos':
        return (
          <div className="min-h-screen bg-deep-black">
            <NavigationEnhanced 
              currentView={currentView} 
              onViewChange={setCurrentView}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <VideoFeed />
          </div>
        );
      case 'groups':
        return (
          <div className="min-h-screen bg-deep-black">
            <NavigationEnhanced 
              currentView={currentView} 
              onViewChange={setCurrentView}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <GroupsSystem />
          </div>
        );
      case 'messages':
        return (
          <div className="min-h-screen bg-deep-black">
            <NavigationEnhanced 
              currentView={currentView} 
              onViewChange={setCurrentView}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <MessagingSystem />
          </div>
        );
      case 'profile':
        return (
          <div className="min-h-screen bg-deep-black">
            <NavigationEnhanced 
              currentView={currentView} 
              onViewChange={setCurrentView}
              onShowPrivacy={() => setShowPrivacySettings(true)}
            />
            <UserProfile />
          </div>
        );
      default:
        return (
          <div className="min-h-screen">
            <HeroEnhanced />
            <FooterEnhanced />
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
      
      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}

      {/* Privacy Settings Modal */}
      {showPrivacySettings && (
        <PrivacySettings onClose={() => setShowPrivacySettings(false)} />
      )}
    </div>
  );
}

export default AppEnhanced;

