import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HardwareBundle = () => {
  const { t } = useLanguage();

  const items = [
    { image: "/public/monoblok.png", label: "Monoblok" },
    { image: "/public/print.png", label: "Termal Printer" },
    { image: "/public/scan.png", label: "Skaner" },
    { image: "/public/scale.png", label: "Kassa qutisi" },
  ];

  return (
    <section
      id="hardware"
      className="py-14 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
        >
          {t("hardware.title")}
        </motion.h2>

        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t("hardware.desc")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-14">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-3xl p-8 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative w-full h-36 flex items-center justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.label}
                  className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />

                {/* Soft glow */}
                <div className="absolute -z-10 w-24 h-24 bg-primary/20 blur-2xl rounded-full" />
              </div>

              {/* Label */}
              <span className="text-sm md:text-base font-semibold text-foreground text-center">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Warranty Badge */}
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="px-2 py-3 text-sm rounded-full border-primary/30 bg-primary/10 text-primary shadow-md"
          >
            <ShieldCheck className="h-4 w-4 mr-2" />
            {t("hardware.warranty")}
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default HardwareBundle;
