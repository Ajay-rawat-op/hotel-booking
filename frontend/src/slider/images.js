import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "../data/testimonials";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    arrows: false,
  };

  return (
    <div
      className="relative w-full min-h-screen flex my-2 items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>

      <div className="relative z-10 w-full max-w-4xl p-6 sm:p-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl text-white">
        <h2 className="text-4xl font-bold text-center mb-8">What Client's Say?</h2>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center px-4 sm:px-8"
            >
              <p className="mb-6 text-lg italic text-gray-100 leading-relaxed">
                “{t.review}”
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-lg">{t.name}</p>
                  <p className="text-sm text-gray-300">{t.role}</p>
                  <div className="text-yellow-400 mt-1 text-lg">★★★★★</div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
