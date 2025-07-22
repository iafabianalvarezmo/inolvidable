
import React from 'react';
import { motion } from 'framer-motion';
import { Music, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 Redes sociales aún no implementadas",
      description: "¡Pero no te preocupes! Puedes solicitarlas en tu próximo mensaje 🚀",
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-vintage-gold rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-vintage-gold">
                Banda inolvidables
              </span>
            </div>
            <p className="text-amber-200 mb-6 leading-relaxed">
              Reviviendo las melodías que marcaron tu vida con pasión, 
              autenticidad y el profesionalismo que tu evento especial merece.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick('facebook')}
                className="w-10 h-10 bg-vintage-gold/20 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialClick('instagram')}
                className="w-10 h-10 bg-vintage-gold/20 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialClick('youtube')}
                className="w-10 h-10 bg-vintage-gold/20 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-white transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-lg font-semibold text-vintage-gold mb-6 block">
              Navegación
            </span>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', id: 'hero' },
                { label: 'Nosotros', id: 'biography' },
                { label: 'Música', id: 'music' },
                { label: 'Eventos', id: 'events' },
                { label: 'Contacto', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-amber-200 hover:text-vintage-gold transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-lg font-semibold text-vintage-gold mb-6 block">
              Servicios
            </span>
            <ul className="space-y-3 text-amber-200">
              <li>Matrimonios</li>
              <li>Aniversarios</li>
              <li>Eventos Corporativos</li>
              <li>Fiestas Privadas</li>
              <li>Celebraciones Familiares</li>
              <li>Conciertos Públicos</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-lg font-semibold text-vintage-gold mb-6 block">
              Contacto
            </span>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-vintage-gold" />
                <span className="text-amber-200">+56 9 8765 4321</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-vintage-gold" />
                <span className="text-amber-200">contacto@melodiasdelrecuerdo.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-vintage-gold" />
                <span className="text-amber-200">Santiago, Chile</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-vintage-gold/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-300 text-sm">
              © 2025 Banda Inolvidables. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-amber-300 hover:text-vintage-gold transition-colors duration-300">
                Política de Privacidad
              </button>
              <button className="text-amber-300 hover:text-vintage-gold transition-colors duration-300">
                Términos de Servicio
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-amber-400 text-sm italic">
              "La música es el lenguaje universal que une corazones y revive recuerdos"
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
