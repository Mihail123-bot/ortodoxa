import { FadeIn } from "@/components/ui/animated-text";

interface QuoteBannerProps {
  quote: string;
  source: string;
  bgImage: string;
}

const QuoteBanner = ({ quote, source, bgImage }: QuoteBannerProps) => {
  return (
    <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
      <img
        src={bgImage}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 40%" }}
      />
      <div className="absolute inset-0 bg-navy-deep/75" />

      <FadeIn>
        <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
          <div className="w-8 h-px bg-gold/40 mx-auto mb-8" />
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream/90 italic leading-relaxed mb-6">
            "{quote}"
          </blockquote>
          <cite className="font-body text-xs text-gold/60 uppercase tracking-[0.3em] not-italic">
            {source}
          </cite>
          <div className="w-8 h-px bg-gold/40 mx-auto mt-8" />
        </div>
      </FadeIn>
    </section>
  );
};

export default QuoteBanner;
