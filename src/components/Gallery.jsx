
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building, Heart } from 'lucide-react';

const Gallery = () => {
  const testimonials = [
    {
      name: "María González",
      event: "Matrimonio",
      rating: 5,
      text: "Banda Inolvidables hizo de nuestro matrimonio algo mágico. Cada canción tocó nuestros corazones y los de nuestros invitados.",
      date: "Diciembre 2024"
    },
    {
      name: "Carlos Mendoza",
      event: "Aniversario de Bodas de Oro",
      rating: 5,
      text: "50 años de matrimonio celebrados con la música que nos enamoró. Gracias por revivir nuestros mejores recuerdos.",
      date: "Noviembre 2024"
    },
    {
      name: "Ana Ruiz",
      event: "Evento Corporativo",
      rating: 5,
      text: "Profesionales excepcionales. Crearon el ambiente perfecto para nuestra cena de gala. Todos quedaron encantados.",
      date: "Octubre 2024"
    }
  ];

  const clientLogos = [
    { name: "Hotel Plaza San Francisco", category: "Hotelería" },
    { name: "Centro de Eventos Los Naranjos", category: "Eventos" },
    { name: "Municipalidad de Las Condes", category: "Gobierno" },
    { name: "Club de Campo Los Leones", category: "Clubes" },
    { name: "Empresa Constructora Paz", category: "Corporativo" },
    { name: "Fundación Esperanza", category: "ONG" }
  ];

  const galleryImages = [
    {
      title: "Matrimonio en Viña Santa Rita",
      description: "Ceremonia íntima con vista a los viñedos"
    },
    {
      title: "Festival de la Nostalgia 2024",
      description: "Más de 2000 personas cantando juntas"
    },
    {
      title: "Aniversario Bodas de Plata",
      description: "25 años de amor celebrados con música"
    },
    {
      title: "Evento Corporativo Banco Estado",
      description: "Cena de gala para 500 ejecutivos"
    },
    {
      title: "Cumpleaños 80 años Don Roberto",
      description: "Celebración familiar con tres generaciones"
    },
    {
      title: "Serenata en Plaza de Armas",
      description: "Concierto gratuito para la comunidad"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Galería de Recuerdos
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-8"></div>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Cada evento es único, cada momento es especial. Descubre la magia que creamos 
            junto a nuestros clientes
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display text-3xl font-bold text-amber-900 text-center mb-12">
            Momentos Inolvidables
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="vintage-card rounded-xl overflow-hidden vintage-shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img  
                    alt={image.title}
                    className="w-full h-48 object-cover sepia-filter"
                   src="public/evento1.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-display text-lg font-semibold text-white mb-1">
                      {image.title}
                    </h4>
                    <p className="text-amber-200 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display text-3xl font-bold text-amber-900 text-center mb-12">
            Lo Que Dicen Nuestros Clientes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="vintage-card rounded-xl p-6 vintage-shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-vintage-gold mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-vintage-gold fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-amber-800 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-vintage-gold/20 pt-4">
                  <h4 className="font-semibold text-amber-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-vintage-bronze text-sm">
                    {testimonial.event}
                  </p>
                  <p className="text-amber-600 text-xs mt-1">
                    {testimonial.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="vintage-card rounded-2xl p-8 vintage-shadow"
        >
          <h3 className="font-display text-3xl font-bold text-amber-900 text-center mb-8">
            Clientes que Confían en Nosotros
          </h3>
          <p className="text-amber-800 text-center mb-8">
            Hemos tenido el honor de ser parte de eventos especiales para estas organizaciones
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-vintage-gold/10 rounded-lg hover:bg-vintage-gold/20 transition-colors duration-300"
              >
                <Building className="w-8 h-8 text-vintage-gold mx-auto mb-2" />
                <h4 className="font-medium text-amber-900 text-sm mb-1">
                  {client.name}
                </h4>
                <p className="text-amber-700 text-xs">
                  {client.category}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-vintage-gold/20 rounded-full">
              <Heart className="w-5 h-5 text-vintage-gold mr-2" />
              <span className="text-amber-900 font-medium">
                Más de 1000 eventos exitosos desde 2009
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
