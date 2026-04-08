import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Church, BookOpen, MapPin } from "lucide-react";
import crossImage from "@/assets/orthodox-cross.png";

const navItems = [
  { label: "Tron", href: "/#ny", icon: BookOpen },
  { label: "Fördjupning", href: "/#lard", icon: BookOpen },
  { label: "Församlingar", href: "/forsamlingar", icon: MapPin },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-navy-deep/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={crossImage}
              alt=""
              className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-display text-lg text-cream/90 tracking-wide group-hover:text-cream transition-colors">
              Ortodox Tro
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/forsamlingar"
                  ? location.pathname === "/forsamlingar"
                  : false;
              return item.href.startsWith("/#") ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 font-body text-sm tracking-wide transition-all duration-300 rounded-md hover:bg-cream/5 ${
                    isActive ? "text-gold" : "text-cream/60 hover:text-cream/90"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-2 font-body text-sm tracking-wide transition-all duration-300 rounded-md hover:bg-cream/5 ${
                    isActive ? "text-gold" : "text-cream/60 hover:text-cream/90"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cream/70 hover:text-cream transition-colors p-2"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-navy-deep/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center gap-3 text-cream/80 hover:text-gold font-display text-2xl tracking-wide transition-colors"
                    >
                      <Icon className="w-5 h-5 text-gold/50" />
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 text-cream/80 hover:text-gold font-display text-2xl tracking-wide transition-colors"
                    >
                      <Icon className="w-5 h-5 text-gold/50" />
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
