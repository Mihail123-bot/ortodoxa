import crossImage from "@/assets/orthodox-cross.png";
import { FadeIn } from "@/components/ui/animated-text";

const Footer = () => (
  <footer className="bg-navy-deep py-24 px-6">
    <FadeIn>
      <div className="max-w-2xl mx-auto text-center">
        <img src={crossImage} alt="" width={40} height={40} className="mx-auto mb-10 opacity-30" loading="lazy" />
        <p className="font-display text-xl text-cream/70 mb-2 tracking-wide">Ortodox Tro</p>
        <p className="font-serif text-sm text-gold/40 italic mb-12">
          "Kom och se" — Johannes 1:46
        </p>
        <div className="w-12 h-px bg-gold/15 mx-auto mb-6" />
        <p className="font-body text-[11px] text-cream/20 tracking-widest uppercase">
          © {new Date().getFullYear()} Ortodox Tro
        </p>
      </div>
    </FadeIn>
  </footer>
);

export default Footer;
