import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Biography from '@/components/Biography.jsx';
import Music from '@/components/Music.jsx';
import Events from '@/components/Events.jsx';
import Contact from '@/components/Contact.jsx';
import Gallery from '@/components/Gallery.jsx';
import Footer from '@/components/Footer.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>Inolvidables - La Banda Sonora de Tus Recuerdos</title>
        <meta name="description" content="Banda especializada en música del recuerdo. Revivimos las melodías que marcaron tu vida con presentaciones emotivas y auténticas." />
      </Helmet>
      
      <div className="min-h-screen vintage-pattern">
        <Header />
        <main>
          <Hero />
          <Biography />
          <Music />
          <Events />
          <Contact />
          <Gallery />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;