
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Music2, Award } from 'lucide-react';

const Biography = () => {
  const stats = [
    { icon: Music2, number: "500+", label: "Canciones en Repertorio" },
    { icon: Users, number: "1000+", label: "Eventos Realizados" },
    { icon: Heart, number: "15", label: "Años de Experiencia" },
    { icon: Award, number: "50+", label: "Clientes Satisfechos" }
  ];

  const bandMembers = [
    {
      name: "Carlos Mendoza",
      role: "Vocalista",
      description: "Con más de 20 años interpretando los clásicos"
    },
    {
      name: "María Elena Ruiz",
      role: "Pianista",
      description: "Especialista en baladas románticas de los 70s y 80s"
    },
    {
      name: "Roberto Silva",
      role: "Guitarrista",
      description: "Maestro de las melodías que conquistaron corazones"
    },
    {
      name: "Eric Álvarez",
      role: "Bajista ",
      description: "El ritmo que hace vibrar cada presentación"
    }
  ];

  return (
    <section id="biography" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Nuestro Viaje Musical
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="vintage-card rounded-2xl p-8 vintage-shadow">
              <h3 className="font-display text-2xl font-semibold text-vintage-gold mb-6">
                La Pasión y el recuerdo......nos Une
              </h3>
              <p className="text-amber-800 text-lg leading-relaxed mb-6">
		INOLVIDABLES es una banda originaria de Rancagua que se 
		ha dedicado a mantener viva la magia de la música chilena de los años 60 y 70,
		interpretando los éxitos más memorables de esa época dorada. 
              </p>
              <p className="text-amber-800 text-lg leading-relaxed mb-6">
		Con una cuidada selección de covers, la agrupación rinde homenaje a las mejores bandas, 
		grupos y solistas que marcaron la historia musical de Chile, llevando a nuevas generaciones 
		y nostálgicos por igual esos sonidos que definieron toda una era. Su repertorio rescata los 
		clásicos que siguen resonando en el corazón de los chilenos, manteniendo intacta la esencia 
		y el espíritu de aquellas canciones que se convirtieron en banda sonora de toda una generación, 
		consolidándose como verdaderos embajadores de nuestro patrimonio musical nacional.                
              </p>
              <p className="text-amber-800 text-lg leading-relaxed mb-6">
                Nuestro compromiso va más allá de tocar música; buscamos crear experiencias 
                emotivas que transporten a nuestro público a esos momentos especiales que 
                atesoramos en la memoria.
              </p>
              <p className="text-amber-800 text-lg leading-relaxed">
                Con más de 15 años de trayectoria, hemos tenido el privilegio de ser parte 
                de miles de celebraciones, llevando la banda sonora perfecta para cada 
                ocasión especial.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="vintage-card rounded-2xl overflow-hidden vintage-shadow">
              <img  
                alt="Banda Melodías del Recuerdo en una presentación íntima"
                className="w-full h-80 object-cover sepia-filter"
               src="public/fondo1.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="vintage-card rounded-xl p-6 text-center vintage-shadow hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className="w-8 h-8 text-vintage-gold mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-amber-900 mb-2">
                {stat.number}
              </div>
              <div className="text-amber-700 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Band Members */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-3xl font-bold text-amber-900 text-center mb-12">
            Conoce a Nuestros Artistas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="vintage-card rounded-xl p-6 text-center vintage-shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-vintage-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Music2 className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-display text-xl font-semibold text-amber-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-vintage-gold font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-amber-700 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biography;
