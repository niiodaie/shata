import React from 'react';
import Hero from './components/Hero';
import ShareButton from './components/ShareButton';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-deep-black">
      <Hero />
      
      {/* Demo section to showcase ShareButton */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-african text-gold mb-8">
            Share Your Story with the World
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Every story matters. Every voice counts. Share your heritage, your struggles, 
            your triumphs, and your dreams with the global Pan-African community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </div>
      </section>

      {/* Footer */}
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
  );
}

export default App;
