import {useLanguage} from "@/contexts/LanguageContext";
import {Instagram, Mail, MapPin, Phone, Send, Youtube,} from "lucide-react";
import {Button} from "@/components/ui/button";

const Footer = () => {
    const { t } = useLanguage();

    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-border bg-background/80 backdrop-blur-xl pt-16 pb-8">
            <div className="container mx-auto px-4">

                {/* Top Grid */}
                <div className="grid md:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="space-y-5">
                        <a
                            href="#"
                            className="flex items-center gap-2 font-bold text-xl tracking-tight group"
                        >
                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-semibold transition-transform group-hover:scale-105">
                                KP
                            </div>
                            <span className="text-foreground">
                K-TECH <span className="text-primary">POS</span>
              </span>
                        </a>

                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            {t("footer.slogan")}
                        </p>

                        {/*<Button*/}
                        {/*    onClick={() => scrollTo("#demo")}*/}
                        {/*    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"*/}
                        {/*>*/}
                        {/*    {t("footer.demo")}*/}
                        {/*</Button>*/}
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            {t("footer.product")}
                        </h4>

                        <ul className="space-y-3">
                            {[
                                { label: t("footer.features"), href: "#solution" },
                                { label: t("footer.pricing"), href: "#pricing" },
                                { label: t("footer.dashboard"), href: "#hardware" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <button
                                        onClick={() => scrollTo(item.href)}
                                        className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            {t("footer.contact")}
                        </h4>

                        <div className="space-y-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-3 hover:text-foreground transition">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+998 90 123 45 67</span>
                            </div>

                            <div className="flex items-center gap-3 hover:text-foreground transition">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>info@k-tech.uz</span>
                            </div>

                            <div className="flex items-center gap-3 hover:text-foreground transition">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Urgench, Xorazm</span>
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            {t("footer.social")}
                        </h4>

                        <div className="flex gap-3">
                            {[Send, Instagram, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
                    <p>© 2025 K-TECH POS. All rights reserved.</p>

                    <div className="flex gap-6">
            <span className="hover:text-foreground cursor-pointer transition">
              {t("footer.privacy")}
            </span>
                        <span className="hover:text-foreground cursor-pointer transition">
              {t("footer.terms")}
            </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;