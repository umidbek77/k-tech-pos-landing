import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      icon: Zap,
      name: t("pricing.start"),
      price: "120 000 so’m",
      desc: t("pricing.startDesc"),
      features: [
        t("pricing.feature1"),
        t("pricing.feature2"),
        "1 kassa terminali",
        "Asosiy hisobotlar",
        "Email qo‘llab-quvvatlash",
      ],
      popular: false,
    },
    {
      icon: Star,
      name: t("pricing.business"),
      price: "200 000 so’m",
      desc: t("pricing.businessDesc"),
      features: [
        t("pricing.feature3"),
        t("pricing.feature4"),
        t("pricing.feature2"),
        "Cheksiz mahsulot",
        "AI tavsiyalar",
        "Telegram bot integratsiya",
        "Real-time monitoring",
      ],
      popular: true,
    },
    {
      icon: Crown,
      name: t("pricing.enterprise"),
      price: "300 000 so’m",
      desc: t("pricing.enterpriseDesc"),
      features: [
        t("pricing.feature5"),
        t("pricing.feature4"),
        t("pricing.feature6"),
        "Multi-branch boshqaruv",
        "Maxsus integratsiyalar",
        "Shaxsiy menejer",
        "24/7 premium support",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-1 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/*<Badge*/}
          {/*  variant="secondary"*/}
          {/*  className="mb-4 bg-accent text-accent-foreground border-0 px-4 py-1"*/}
          {/*>*/}
          {/*  {t("social.badge")}*/}
          {/*</Badge>*/}

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("pricing.title")}
          </h2>

          <p className="text-muted-foreground">{t("pricing.note")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative bg-card rounded-2xl border border-border shadow-lg p-8 flex flex-col transition-all duration-300 hover:shadow-2xl"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="flex items-center gap-1 bg-primary text-primary-foreground border-0 px-4 py-1">
                    <Star className="h-3 w-3" />
                    Eng mashhur
                  </Badge>
                </div>
              )}

              <plan.icon className="h-10 w-10 mb-6 text-primary" />

              <h3 className="text-xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>

              <p className="text-3xl font-bold text-foreground mb-8">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() =>
                  document
                    .querySelector("#demo")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("nav.demo")}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
