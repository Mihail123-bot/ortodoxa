import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp } from "@/components/ui/animated-text";
import crossImage from "@/assets/orthodox-cross.png";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
  variant?: "light" | "dark";
}

const FAQSection = ({ id, title, subtitle, items, variant = "light" }: FAQSectionProps) => {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={`relative py-28 px-6 ${isDark ? "bg-navy-deep" : "bg-background"}`}
    >
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? "hsl(38 42% 61%)" : "hsl(240 20% 15%)"} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        <FadeUp>
          <div className="text-center mb-20">
            <img
              src={crossImage}
              alt=""
              width={28}
              height={28}
              className={`mx-auto mb-6 ${isDark ? "opacity-25" : "opacity-20"}`}
              loading="lazy"
            />
            <p className={`font-body text-[10px] uppercase tracking-[0.4em] mb-5 ${isDark ? "text-gold-light" : "text-gold"}`}>
              {subtitle}
            </p>
            <h2 className={`font-display text-4xl md:text-5xl font-bold mb-8 ${isDark ? "text-cream" : "text-foreground"}`}>
              {title}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className={`w-16 h-px bg-gradient-to-r from-transparent ${isDark ? "to-gold/30" : "to-gold/40"}`} />
              <div className={`w-1 h-1 rounded-full ${isDark ? "bg-gold/40" : "bg-gold/50"}`} />
              <div className={`w-16 h-px bg-gradient-to-l from-transparent ${isDark ? "to-gold/30" : "to-gold/40"}`} />
            </div>
          </div>
        </FadeUp>

        <Accordion type="single" collapsible className="space-y-0">
          {items.map((item, i) => (
            <FadeUp key={i} delay={Math.min(i * 0.04, 0.25)}>
              <AccordionItem
                value={`item-${i}`}
                className={`border-b px-0 ${isDark ? "border-cream/8" : "border-border/30"}`}
              >
                <AccordionTrigger
                  className={`font-serif text-base md:text-lg py-6 hover:no-underline text-left font-normal transition-colors duration-300 ${
                    isDark
                      ? "text-cream/85 hover:text-gold-light"
                      : "text-foreground hover:text-gold-dark"
                  }`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className={`font-body text-[10px] tabular-nums tracking-wider ${isDark ? "text-gold/30" : "text-gold/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className={`leading-[1.8] pb-6 pl-10 text-[15px] font-body ${
                    isDark ? "text-cream/50" : "text-muted-foreground"
                  }`}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </FadeUp>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
