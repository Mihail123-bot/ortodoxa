import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Clock, Navigation } from "lucide-react";
import { FadeIn, FadeUp } from "@/components/ui/animated-text";
import Footer from "@/components/Footer";
import ChurchMap from "@/components/ChurchMap";

const churches = [
  {
    name: "St. Georgios Cathedral",
    tradition: "Grekisk-ortodox (Ekumeniska patriarkatet)",
    address: "Birger Jarlsgatan 92, Stockholm",
    lat: 59.3428,
    lng: 18.0735,
  },
  {
    name: "Kristi Förklarings Ortodoxa Församling",
    tradition: "Rysk-ortodox (Bulgariska patriarkatet)",
    address: "Birger Jarlsgatan 98, Stockholm",
    lat: 59.3435,
    lng: 18.0738,
  },
  {
    name: "Heliga Anna av Novgorod",
    tradition: "Svensk-ortodox (Georgiska patriarkatet)",
    address: "Kyrkvägen 27, Stocksund",
    lat: 59.3858,
    lng: 18.0576,
  },
  {
    name: "Finska Ortodoxa Församlingen",
    tradition: "Finsk-ortodox (Ekumeniska patriarkatet)",
    address: "Bellmansgatan 13, Stockholm",
    lat: 59.3179,
    lng: 18.0637,
  },
  {
    name: "St. Ignatios",
    tradition: "Svensk-ortodox (Georgiska patriarkatet)",
    address: "Nygatan 2, Södertälje",
    lat: 59.1955,
    lng: 17.6253,
  },
  {
    name: "Sankt Sava",
    tradition: "Serbisk-ortodox",
    address: "Bägerstavägen 68, Enskede",
    lat: 59.2745,
    lng: 18.0752,
  },
];

const Forsamlingar = () => {
  const [mapActive, setMapActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero header */}
      <section className="relative bg-navy-deep pt-28 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(38 42% 61%) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-8">
              <MapPin className="w-3.5 h-3.5 text-gold/70" />
              <span className="font-body text-xs text-gold/70 uppercase tracking-[0.2em]">
                Stockholmsområdet
              </span>
            </div>
          </FadeIn>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl text-cream tracking-tight mb-4">
              Ortodoxa Församlingar
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-serif text-lg text-cream/50 italic max-w-xl mx-auto">
              Hitta en ortodox kyrka nära dig och besök en gudstjänst
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Map section */}
      <section className="relative">
        <div
          className="relative h-[450px] md:h-[550px] w-full overflow-hidden group border-y border-gold/10"
          onClick={() => setMapActive(true)}
          onMouseLeave={() => setMapActive(false)}
        >
          <ChurchMap churches={churches} />

          {/* Overlay hint */}
          {!mapActive && (
            <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-navy-deep/20 pointer-events-none transition-opacity">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-navy-deep/70 backdrop-blur-sm border border-gold/20">
                <Navigation className="w-3.5 h-3.5 text-gold/70" />
                <span className="font-body text-xs text-cream/70">
                  Klicka för att interagera med kartan
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Church Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-1">
                Alla gudstjänster
              </h2>
              <p className="font-body text-sm text-muted-foreground">
                {churches.length} församlingar i Stockholmsområdet
              </p>
            </div>
            <a
              href="https://ortodoxagudstjanster.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground font-body text-sm hover:bg-secondary/80 transition-colors w-fit"
            >
              <Clock className="w-3.5 h-3.5" />
              Alla gudstjänster
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {churches.map((church, i) => (
            <motion.a
              key={church.name}
              href="https://ortodoxagudstjanster.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative rounded-lg border border-border bg-card p-5 md:p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5 h-full">
                {/* Gold accent line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-500" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base md:text-lg text-card-foreground leading-snug mb-1.5 group-hover:text-gold-dark transition-colors">
                      {church.name}
                    </h3>
                    <p className="font-body text-xs text-gold-dark/70 mb-3 leading-relaxed">
                      {church.tradition}
                    </p>
                    <div className="flex items-start gap-1.5 text-muted-foreground">
                      <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                      <span className="font-body text-xs leading-relaxed">
                        {church.address}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-gold transition-colors" />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-gold-dark/60 group-hover:text-gold-dark transition-colors">
                  <Clock className="w-3 h-3" />
                  <span className="font-body text-xs">
                    Se kommande gudstjänster →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Forsamlingar;
