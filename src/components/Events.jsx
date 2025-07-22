
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Events = () => {
  const { toast } = useToast();

  const upcomingEvents = [
    {
      title: "Noche de Boleros",
      venue: "Teatro Municipal de Santiago",
      date: "15 de Febrero, 2025",
      time: "20:00 hrs",
      description: "Una velada íntima con los boleros más románticos",
      price: "Desde $25.000",
      status: "Entradas Disponibles"
    },
    {
      title: "Festival de la Nostalgia",
      venue: "Centro Cultural Estación Maipú",
      date: "8 de Marzo, 2025",
      time: "19:30 hrs",
      description: "Celebrando la música que marcó generaciones",
      price: "Desde $18.000",
      status: "Últimas Entradas"
    },
    {
      title: "Serenata de Primavera",
      venue: "Parque Bicentenario",
      date: "22 de Marzo, 2025",
      time: "18:00 hrs",
      description: "Concierto al aire libre con las melodías del recuerdo",
      price: "Entrada Liberada",
      status: "Evento Gratuito"
    }
  ];

  const eventTypes = [
    {
      title: "Matrimonios",
      description: "La banda sonora perfecta para el día más especial",
      icon: "💒",
      features: ["Ceremonia religiosa", "Cocktail", "Fiesta de celebración"]
    },
    {
      title: "Aniversarios",
      description: "Celebrando el amor que perdura en el tiempo",
      icon: "💕",
      features: ["Bodas de plata", "Bodas de oro", "Celebraciones familiares"]
    },
    {
      title: "Eventos Corporativos",
      description: "Música que une equipos y celebra logros",
      icon: "🏢",
      features: ["Cenas de gala", "Celebraciones de fin de año", "Lanzamientos"]
    },
    {
      title: "Fiestas Privadas",
      description: "Momentos únicos con la música que amas",
      icon: "🎉",
      features: ["Cumpleaños especiales", "Reuniones familiares", "Celebraciones íntimas"]
    }
  ];

  const handleTickets = (eventTitle) => {
    toast({
      title: "🚧 Venta de entradas aún no implementada",
      description: "",
    });
  };

  const handleEventInquiry = (eventType) => {
    toast({
      title: "🚧 Formulario de consulta aún no implementado",
      description: "",
    });
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-amber-100 to-orange-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            ¿Dónde Nos Vemos?
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-8"></div>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            <b>Únete a nosotros en nuestras próximas presentaciones o contrata nuestros servicios 
            para tu evento especial</b>
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display text-3xl font-bold text-amber-900 text-center mb-12">
            Próximas Presentaciones
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="vintage-card rounded-xl overflow-hidden vintage-shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-display text-xl font-semibold text-amber-900">
                      {event.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'Entradas Disponibles' 
                        ? 'bg-green-100 text-green-800'
                        : event.status === 'Últimas Entradas'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-amber-700">
                      <MapPin className="w-4 h-4 mr-2 text-vintage-gold" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                    <div className="flex items-center text-amber-700">
                      <Calendar className="w-4 h-4 mr-2 text-vintage-gold" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-amber-700">
                      <Clock className="w-4 h-4 mr-2 text-vintage-gold" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-amber-700">
                      <Ticket className="w-4 h-4 mr-2 text-vintage-gold" />
                      <span className="text-sm font-medium">{event.price}</span>
                    </div>
                  </div>

                  <p className="text-amber-800 text-sm mb-6">
                    {event.description}
                  </p>

                  <Button
                    onClick={() => handleTickets(event.title)}
                    className="w-full vintage-button text-white font-semibold py-2 rounded-lg"
                  >
                    {event.status === 'Evento Gratuito' ? (
                      <>
                        <Calendar className="w-4 h-4 mr-2" />
                        Más Información
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Comprar Entradas
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Types */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-3xl font-bold text-amber-900 text-center mb-12">
            Tu Evento, Nuestra Música
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="vintage-card rounded-xl p-6 text-center vintage-shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h4 className="font-display text-xl font-semibold text-amber-900 mb-3">
                  {type.title}
                </h4>
                <p className="text-amber-700 text-sm mb-4">
                  {type.description}
                </p>
                <ul className="text-amber-600 text-xs space-y-1 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleEventInquiry(type.title)}
                  variant="outline"
                  className="w-full border-2 border-vintage-gold text-vintage-gold hover:bg-vintage-gold hover:text-white font-medium py-2 rounded-lg text-sm"
                >
                  Solicitar Cotización
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
