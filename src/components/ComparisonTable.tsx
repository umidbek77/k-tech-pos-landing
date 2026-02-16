import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ComparisonTable = () => {
  const { t } = useLanguage();

  const rows = [
    { label: t("compare.speed"), manual: false, ktech: true },
    { label: t("compare.accuracy"), manual: false, ktech: true },
    { label: t("compare.growth"), manual: false, ktech: true },
    { label: "AI", manual: false, ktech: true },
    { label: "Offline", manual: false, ktech: true },
    { label: "Telegram Bot", manual: false, ktech: true },
  ];

  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
        >
          {t("compare.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* MANUAL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground text-center">
              {t("compare.manual")}
            </h3>

            <div className="space-y-4">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-border rounded-lg px-4 py-3 bg-background"
                >
                  <span className="text-sm text-foreground">{row.label}</span>

                  <X className="h-5 w-5 text-destructive" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* K-TECH */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border-2 border-primary rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-6 text-primary text-center">
              {t("compare.ktech")}
            </h3>

            <div className="space-y-4">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-primary/20 rounded-lg px-4 py-3 bg-background"
                >
                  <span className="text-sm font-medium text-foreground">
                    {row.label}
                  </span>

                  <Check className="h-5 w-5 text-primary" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
