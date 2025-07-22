
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Calendar, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Formulario de contacto aún no implementado",
      description: "¡Pero no te preocupes! Puedes solicitarlo en tu próximo mensaje 🚀",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+56 9 8765 4321",
      description: "Llámanos para consultas inmediatas"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contacto@melodiasdelrecuerdo.cl",
      description: "Escríbenos para cotizaciones detalladas"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Santiago, Chile",
      description: "Nos presentamos en toda la Región Metropolitana"
    }
  ];

  const eventTypes = [
    "Matrimonio",
    "Aniversario",
    "Cumpleaños",
    "Evento Corporativo",
    "Fiesta Privada",
    "Celebración Familiar",
    "Otro"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-orange-100 to-amber-50 vintage-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Hagamos Música Juntos
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-8"></div>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            ¿Listo para crear momentos inolvidables? Contáctanos y hagamos de tu evento 
            una experiencia musical única
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="vintage-card rounded-2xl p-8 vintage-shadow">
              <h3 className="font-display text-2xl font-semibold text-amber-900 mb-6 flex items-center">
                <Music className="w-6 h-6 mr-3 text-vintage-gold" />
                Solicita tu Cotización
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-800 font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full vintage-input rounded-lg px-4 py-3 text-amber-900 placeholder-amber-600 focus:outline-none"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-amber-800 font-medium mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full vintage-input rounded-lg px-4 py-3 text-amber-900 placeholder-amber-600 focus:outline-none"
                      placeholder="+56 9 1234 5678"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-amber-800 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full vintage-input rounded-lg px-4 py-3 text-amber-900 placeholder-amber-600 focus:outline-none"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-800 font-medium mb-2">
                      Tipo de Evento *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full vintage-input rounded-lg px-4 py-3 text-amber-900 focus:outline-none"
                      required
                    >
                      <option value="">Selecciona el tipo</option>
                      {eventTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-amber-800 font-medium mb-2">
                      Fecha Estimada
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full vintage-input rounded-lg px-4 py-3 text-amber-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-amber-800 font-medium mb-2">
                    Cuéntanos sobre tu evento
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full vintage-input rounded-lg px-4 py-3 text-amber-900 placeholder-amber-600 focus:outline-none resize-none"
                    placeholder="Describe tu evento, número de invitados, duración, canciones especiales que te gustaría escuchar..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full vintage-button text-white font-semibold py-3 rounded-lg text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitud
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="vintage-card rounded-2xl p-8 vintage-shadow">
              <h3 className="font-display text-2xl font-semibold text-amber-900 mb-6 flex items-center">
                <Phone className="w-6 h-6 mr-3 text-vintage-gold" />
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-vintage-gold/10 rounded-lg"
                  >
                    <contact.icon className="w-6 h-6 text-vintage-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-vintage-bronze font-medium mb-1">
                        {contact.info}
                      </p>
                      <p className="text-amber-700 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="vintage-card rounded-2xl p-8 vintage-shadow">
              <h3 className="font-display text-2xl font-semibold text-amber-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-vintage-gold" />
                Horarios de Atención
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-vintage-gold/20">
                  <span className="text-amber-800 font-medium">Lunes - Viernes</span>
                  <span className="text-vintage-bronze">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-vintage-gold/20">
                  <span className="text-amber-800 font-medium">Sábados</span>
                  <span className="text-vintage-bronze">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-amber-800 font-medium">Domingos</span>
                  <span className="text-vintage-bronze">Solo emergencias</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-vintage-gold/10 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>Respuesta garantizada:</strong> Contestamos todas las consultas 
                  en menos de 24 horas. Para eventos urgentes, llámanos directamente.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
