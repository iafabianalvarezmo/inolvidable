
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleCTA = (action) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "",
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img  
          alt="Banda de música del recuerdo"
          className="w-full h-full object-cover sepia-filter"
         src="/public/fondo.jpg" />
        <div className="absolute inset-0 vintage-gradient opacity-80"></div>
      </div>

      {/* Floating Musical Notes */}
      <div className="absolute inset-0 z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-vintage-gold opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-4xl">♪</span>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >Música del Recuerdo
            <span className="block text-vintage-gold"> </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-amber-100 mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Reviviendo las melodías que marcaron tu vida
          </motion.p>

          <motion.p 
            className="text-lg text-amber-200 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Somos una banda especializada en música del recuerdo, llevando la nostalgia 
            y la autenticidad a cada presentación a largo de todo Chile.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button 
              onClick={() => handleCTA('contratar')}
              className="vintage-button text-white font-semibold px-8 py-3 rounded-full text-lg hover:scale-105 transition-transform duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Contrátanos para tu Evento
            </Button>

            <Button 
              onClick={() => handleCTA('musica')}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-900 font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Escucha Nuestros Éxitos
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
