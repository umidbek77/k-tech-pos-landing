import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Brain, WifiOff, Send, Layers } from "lucide-react";

const FeaturesGrid = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t("features.ai"),
      desc: t("features.aiDesc"),
      gradient: "from-primary/15 via-primary/10 to-transparent",
    },
    {
      icon: WifiOff,
      title: t("features.offline"),
      desc: t("features.offlineDesc"),
      gradient: "from-secondary/15 via-secondary/10 to-transparent",
    },
    {
      icon: Send,
      title: t("features.telegram"),
      desc: t("features.telegramDesc"),
      gradient: "from-primary/15 via-primary/10 to-transparent",
    },
    {
      icon: Layers,
      title: t("features.multi"),
      desc: t("features.multiDesc"),
      gradient: "from-secondary/15 via-secondary/10 to-transparent",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
        >
          {t("features.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            >
              {/* Gradient background layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-40 group-hover:opacity-60 transition-opacity`}
              />

              <div className="relative p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-background border border-border shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
