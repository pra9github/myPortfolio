import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative">
      <video
        autoPlay
        loop
        muted
        className="fixed right-0 bottom-0 min-w-full min-h-full w-auto h-auto z-[-1] object-cover"
      >
        <source src="/images/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-10 bg-white bg-opacity-20">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
