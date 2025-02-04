import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Particles from "./GenerateParticles";
import { FaRegHeart, FaCameraRetro } from "react-icons/fa";

const photos = [
  { src: "/images/image1.jpg", width: 800, height: 600 },
  { src: "/images/image2.jpg", width: 800, height: 600 },
  { src: "/images/valen1.jpg", width: 800, height: 600 },
  { src: "/images/valen2.jpg", width: 800, height: 600 },
  { src: "/images/valen3.jpg", width: 800, height: 600 },
  { src: "/images/valen4.jpg", width: 800, height: 600 },
];

const InvitationPage = () => {
  const eventDate = new Date("2025-03-08T21:00:00");

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

  const Footer = () => {
    return (
      <footer className="bg-rose-200 text-gray-800 text-center py-6 mt-10 shadow-inner">
        <p className="text-lg sm:text-xl font-semibold">Con cariño,</p>
        <p className="text-xl sm:text-2xl font-bold text-rose-500">Familia de Zoe</p>
      </footer>
    );
  };

  return (
    <div className="relative bg-white text-gray-800 overflow-hidden min-h-screen font-['Playfair_Display'] z-10">
      <Particles />

      {/* Encabezado elegante */}
      <header
        className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center z-10"
        style={{
          backgroundImage: "url('images/fondo.png')",
        }}
      ></header>

      {/* Countdown Section */}
      <div className="w-full bg-rose-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Countdown
            date={eventDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex flex-wrap justify-center gap-4 sm:gap-12 text-gray-800">
                <div className="flex flex-col items-center">
                  <span className="text-4xl sm:text-7xl font-bold text-rose-500 drop-shadow-lg font-['Playfair_Display']">
                    {days}
                  </span>
                  <span className="text-lg sm:text-2xl font-semibold mt-2 text-gray-600">
                    Días
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl sm:text-7xl font-bold text-rose-500 drop-shadow-lg font-['Playfair_Display']">
                    {hours}
                  </span>
                  <span className="text-lg sm:text-2xl font-semibold mt-2 text-gray-600">
                    Horas
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl sm:text-7xl font-bold text-rose-500 drop-shadow-lg font-['Playfair_Display']">
                    {minutes}
                  </span>
                  <span className="text-lg sm:text-2xl font-semibold mt-2 text-gray-600">
                    Minutos
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl sm:text-7xl font-bold text-rose-500 drop-shadow-lg font-['Playfair_Display']">
                    {seconds}
                  </span>
                  <span className="text-lg sm:text-2xl font-semibold mt-2 text-gray-600">
                    Segundos
                  </span>
                </div>
              </div>
            )}
          />
        </div>
      </div>

      {/* Sección de detalles del evento */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center z-10"
        style={{
          backgroundImage: "url('images/image4.jpg')",
        }}
      >
        <motion.div
          className="bg-white shadow-lg p-6 sm:p-10 max-w-md sm:max-w-xl w-full mx-4 sm:mx-auto text-gray-800 rounded-lg flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full flex justify-center">
            <FaRegHeart className="text-rose-300 text-4xl sm:text-6xl mb-4" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-rose-300">Celebración</h2>
          <p className="text-base sm:text-lg mb-1">
            La fiesta será el día <strong>viernes 8 de Marzo</strong>.
          </p>
          <p className="text-base sm:text-lg mb-7">
            Los espero a las <strong>21:00 hs</strong> en{" "}
            <strong>Centro Empleado de Comercio</strong>, salón ubicado en Mitre 266,
            Resistencia, Chaco.
          </p>
          <a
            href="https://www.google.com/maps/place/Centro+Empleados+de+Comercio/@-27.4483411,-58.9874406,17z/data=!3m1!4b1!4m6!3m5!1s0x94450cf5c65dd7e7:0x98752805e74d94e8!8m2!3d-27.4483459!4d-58.9848657!16s%2Fg%2F11btxgrt2d?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-400 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-pink-500 transition"
          >
            Ver Mapa
          </a>
        </motion.div>
      </section>

      {/* Sección de fotos */}
      <section className="relative py-16 text-center bg-rose-100 z-10">
        <div className="w-full flex justify-center z-10">
          <FaCameraRetro className="text-rose-300 text-3xl sm:text-4xl mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-rose-300">
            Momentos Especiales
          </h2>
        </div>
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
                className="w-full h-auto object-contain max-h-[600px] mx-auto rounded-lg border-4 border-pink-300"
              />
            </motion.div>
          ))}
        </Slider>
      </section>

      {/* Confirmar Asistencia */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center z-10"
        style={{
          backgroundImage: "url('images/image4.jpg')",
        }}
      >
        <motion.div
          className="bg-white shadow-lg p-6 sm:p-10 max-w-md sm:max-w-xl w-full mx-4 sm:mx-auto text-gray-800 rounded-lg flex flex-col items-center text-center z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <FaRegHeart className="text-rose-300 text-4xl sm:text-6xl mb-6" />

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-rose-300">
            Confirmar Asistencia
          </h2>
          <p className="text-base sm:text-lg mb-7">
            Por favor confirma tu asistencia antes del{" "}
            <strong>8 de marzo</strong>.
          </p>
          <a
            href="https://wa.me/3624895561/?text=Voy a ir! "
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-400 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-pink-500 transition"
          >
            Confirmar
          </a>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default InvitationPage;