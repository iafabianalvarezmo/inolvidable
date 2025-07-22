import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowControls(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg cursor-pointer">
      <video
        ref={videoRef}
        className="w-full h-full object-cover sepia-filter"
        onClick={handleVideoClick}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        poster="fondo1.JPG"
      >
        <source src="video4.mp4" type="video/mp4" />
      </video>
      
      {showControls && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300">
          <button
            onClick={togglePlay}
            className="vintage-button w-16 h-16 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors"
            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

const Music = () => {
  const { toast } = useToast();
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const songs = [
  {
    title: "Una Lágrima",
    artist: "Cecilia",
    duration: "3:42",
    description: "La voz incomparable en su éxito más emotivo"
  },
  {
    title: "Llegaste Tú",
    artist: "Buddy Richard",
    duration: "4:15",
    description: "El himno romántico de la Nueva Ola chilena"
  },
  {
    title: "Tu Cariño Se Me Va",
    artist: "Buddy Richard", 
    duration: "3:28",
    description: "Una de las baladas más recordadas de los 60"
  },
  {
    title: "Por Ti",
    artist: "Buddy Richard",
    duration: "4:02",
    description: "El clásico que conquistó a toda una generación"
  },
  {
    title: "Una Cosa Loca",
    artist: "Luis Dimas",
    duration: "3:35",
    description: "El ritmo contagioso de la Nueva Ola en su máximo esplendor"
  },
  {
    title: "Corazón",
    artist: "Peter Rock",
    duration: "3:48", 
    description: "Del pionero que inició el movimiento juvenil chileno"
  }
];

  const repertoire = [
 "Cecilia", "Buddy Richard", "José Alfredo Fuentes", "Luis Dimas",
 "Gloria Benavides", "Fresia Soto", "Danny Chilean", "Peter Rock", 
 "Gloria Simonetti", "Los Red Juniors", "Los Ángeles Negros", "Los Galos",
 "Los Mac's", "Los Ramblers", "Los Teen Tops", "Los Jokers",
 "Los Blue Splendor", "Los Clip", "Los Vidrios Quebrados", "Los de las Condes",
 "Los Beat 4", "Los Twisters", "Los Go-Go's", "Los Stop"
];

  const handlePlay = (index) => {
    if (currentPlaying === index) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(index);
      toast({
        title: "🚧 Reproductor aún no implementado",
        description: "¡Pero no te preocupes! Puedes solicitarlo en tu próximo mensaje 🚀",
      });
    }
  };

  const handleAction = (action) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  return (
    <section id="music" className="py-20 bg-gradient-to-b from-orange-50 to-amber-100 vintage-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Revive la Magia
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-8"></div>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Escucha nuestras interpretaciones más emotivas y descubre por qué somos 
            la banda favorita para eventos especiales
          </p>
        </motion.div>

        {/* Music Player Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-semibold text-amber-900 mb-8">
              Nuestros Éxitos Más Solicitados
            </h3>
            <div className="space-y-4">
              {songs.map((song, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`vintage-card rounded-lg p-4 vintage-shadow hover:scale-102 transition-all duration-300 ${
                    currentPlaying === index ? 'ring-2 ring-vintage-gold' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => handlePlay(index)}
                      className="vintage-button w-12 h-12 rounded-full flex items-center justify-center"
                    >
                      {currentPlaying === index ? 
                        <Pause className="w-5 h-5 text-white" /> : 
                        <Play className="w-5 h-5 text-white ml-1" />
                      }
                    </Button>
                    <div className="flex-1">
                      <h4 className="font-semibold text-amber-900">{song.title}</h4>
                      <p className="text-vintage-bronze text-sm">{song.artist}</p>
                      <p className="text-amber-700 text-xs mt-1">{song.description}</p>
                    </div>
                    <div className="text-amber-700 text-sm font-medium">
                      {song.duration}
                    </div>
                  </div>
                  {currentPlaying === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-vintage-gold/20"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 bg-vintage-gold/20 rounded-full h-2">
                          <motion.div
                            className="bg-vintage-gold h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '35%' }}
                            transition={{ duration: 2 }}
                          />
                        </div>
                        <Volume2 className="w-4 h-4 text-vintage-gold" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Video Section */}
            <div className="vintage-card rounded-xl overflow-hidden vintage-shadow">
              <VideoComponent />
              <div className="p-6">
                <h4 className="font-display text-xl font-semibold text-amber-900 mb-2">
                  Presentación en Vivo
                </h4>
                <p className="text-amber-700">
                  Mira nuestra energía y profesionalismo en el escenario
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={() => handleAction('spotify')}
                className="w-full vintage-button text-white font-semibold py-3 rounded-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Escúchanos en Spotify
              </Button>
              <Button
                onClick={() => handleAction('epk')}
                variant="outline"
                className="w-full border-2 border-vintage-gold text-vintage-gold hover:bg-vintage-gold hover:text-white font-semibold py-3 rounded-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar Kit de Prensa
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Repertoire Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="vintage-card rounded-2xl p-8 vintage-shadow"
        >
          <h3 className="font-display text-2xl font-semibold text-amber-900 text-center mb-8">
            Repertorio Destacado
          </h3>
          <p className="text-amber-800 text-center mb-8">
            Interpretamos los grandes éxitos de estos artistas legendarios
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {repertoire.map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-vintage-gold/10 rounded-lg p-3 text-center hover:bg-vintage-gold/20 transition-colors duration-300"
              >
                <span className="text-amber-900 font-medium text-sm">
                  {artist}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Music;
