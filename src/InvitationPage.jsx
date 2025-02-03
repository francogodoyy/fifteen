import React, { useState } from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Particles from "./GenerateParticles";
import Modal from "react-modal";
import { FaCrown, FaStar, FaHeart } from "react-icons/fa";

const photos = [
  { src: "/images/image1.jpg", width: 800, height: 600 },
  { src: "/images/image2.jpg", width: 800, height: 600 },
  { src: "/images/image3.jpg", width: 800, height: 600 },
];

const InvitationPage = () => {
  const eventDate = new Date("2025-03-08T21:00:00");
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [error, setError] = useState("");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: "ondemand",
    adaptiveHeight: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !guests) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    setError("");
    alert(`Gracias por confirmar, ${name} con ${guests} invitados.`);
    setModalOpen(false);
  };

  return (
    <div className="relative bg-gradient-to-b from-cyan-300 text-gray-100 overflow-hidden font-[\'Great Vibes\'] min-h-screen flex flex-col">
      <Particles />

      {/* Encabezado elegante */}
      <header className="relative text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold flex items-center justify-center gap-4">
            <h2 className="text-yellow-400" /> Mis 15 Años <h2 className="text-yellow-400" />
          </h1>
          <h2 className="text-6xl mt-4 font-serif">Zoe Valentina Torres</h2>
          <div className="mt-6 text-2xl font-semibold bg-white text-purple-700 py-2 px-6 rounded-full shadow-lg">
            <Countdown
              date={eventDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <span>
                  {days} días {hours}h {minutes}m {seconds}s
                </span>
              )}
            />
          </div>
        </motion.div>
      </header>

      {/* Sección de detalles del evento */}
      <section className="py-16 px-6 md:px-20 text-center bg-purple-100">
        <motion.div
          className="bg-white shadow-lg border-4 border-gold p-6 max-w-md mx-auto text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl mb-4 flex items-center justify-center gap-2">
            <FaStar className="text-yellow-400" /> Cena y Fiesta con <FaStar className="text-yellow-400" />
          </h2>
          <p><strong>Fecha:</strong> 8 de Marzo de 2025</p>
          <p><strong>Hora:</strong> 21:00 hrs</p>
          <p><strong>Lugar:</strong> Salón [Nombre], [Dirección]</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">Ver en Google Maps</a>
        </motion.div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl mb-8">Una Historia Especial</h2>
        <Slider {...sliderSettings}>
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <img
                src={photo.src}
                alt={`Imagen ${index + 1}`}
                className="w-full h-auto object-contain max-h-[600px] mx-auto rounded-lg border-4 border-yellow-500"
              />
            </motion.div>
          ))}
        </Slider>
      </section>

      <motion.button
        onClick={() => setModalOpen(true)}
        className="bg-white text-purple-600 py-3 px-3 rounded-lg hover:bg-purple-700 hover:text-white transition duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <FaHeart className="text-red-500" /> ¡Te invitamos a este día especial! <FaHeart className="text-red-500" />
        </h1>
      </motion.button>

      <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} ariaHideApp={false} className="max-w-md mx-auto p-8 bg-white shadow-lg text-gray-800 border-4 border-gold">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input type="text" placeholder="Tu nombre" className="w-full p-3 border rounded-lg" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="number" placeholder="Número de personas" className="w-full p-3 border rounded-lg" value={guests} onChange={(e) => setGuests(e.target.value)} />
          <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">Enviar</button>
        </form>
      </Modal>
    </div>
  );
};

export default InvitationPage;
