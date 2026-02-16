import { useLanguage } from "@/contexts/LanguageContext";
import {
  Monitor,
  Phone,
  Mail,
  MapPin,
  Send,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Monitor className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-foreground">K-TECH</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("footer.slogan")}
            </p>

            {/* CTA mini */}
            <div className="text-sm font-medium text-primary cursor-pointer hover:underline">
              Demo so‘rash →
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Mahsulot
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition cursor-pointer">
                Xususiyatlar
              </li>
              <li className="hover:text-foreground transition cursor-pointer">
                Tariflar
              </li>
              <li className="hover:text-foreground transition cursor-pointer">
                Dashboard
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Aloqa
            </h4>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+998 90 123 45 67</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@k-tech.uz</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Urgench, Xorazm</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Ijtimoiy tarmoqlar
            </h4>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <Send className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>© 2025 K-TECH. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-foreground cursor-pointer transition">
              Maxfiylik siyosati
            </span>
            <span className="hover:text-foreground cursor-pointer transition">
              Foydalanish shartlari
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
