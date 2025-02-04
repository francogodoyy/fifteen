import react from "react";

import { motion } from "framer-motion";

//Generate particles random
const generateParticles = (num) => {
    return Array.from({ length: num }).map((_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 5, // Retrasos aleatorios para mayor naturalidad
    }));
  };

  const particles = generateParticles(20); 

  const Particles = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none overflow-hidden"
      style={{ zIndex: 9999 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="w-3 h-3 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] opacity-75"
          initial={{ x: particle.x, y: particle.y, opacity: 0 }}
          animate={{
            y: [particle.y, particle.y - 50, particle.y], // Movimiento de arriba a abajo
            opacity: [0, 1, 0], // Desvanecimiento
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{ position: "absolute" }}
        />
      ))}
    </div>
  );
};

  
  export default Particles;