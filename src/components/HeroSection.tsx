import heroBg from "@/assets/hero-bg.jpg";
import crossImage from "@/assets/orthodox-cross.png";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Ortodox kyrka med gyllene kupoler i vinterlandskap"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep/80" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.img
          src={crossImage}
          alt="Ortodoxt kors"
          width={72}
          height={72}
          className="mx-auto mb-8 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-cream tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Ortodox Tro
        </motion.h1>

        <motion.div
          className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.p
          className="font-serif text-xl md:text-2xl text-gold-light/90 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          En inbjudan att upptäcka den ortodoxa kristna tron
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
