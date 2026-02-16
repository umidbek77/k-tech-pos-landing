import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ShoppingCart, Shirt, Pill } from "lucide-react";

const UseCases = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const tabs = [
    {
      icon: ShoppingCart,
      label: t("usecases.super"),
      desc: t("usecases.superDesc"),
      image: "/public/img-2.png",
    },
    {
      icon: Shirt,
      label: t("usecases.clothing"),
      desc: t("usecases.clothingDesc"),
      image: "/public/img-7.png",
    },
    {
      icon: Pill,
      label: t("usecases.pharmacy"),
      desc: t("usecases.pharmacyDesc"),
      image: "/public/img-4.png",
    },
  ];

  return (
    <section id="solutions" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
        >
          {t("usecases.title")}
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-xl scale-105"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:shadow-md"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-10 items-center bg-card border border-border rounded-3xl p-10 shadow-xl"
          >
            {/* LEFT: TEXT */}
            <div>
              {(() => {
                const ActiveIcon = tabs[active].icon;
                return <ActiveIcon className="h-12 w-12 text-primary mb-6" />;
              })()}

              <h3 className="text-3xl font-bold mb-4 text-foreground">
                {tabs[active].label}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {tabs[active].desc}
              </p>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative">
              <img
                src={tabs[active].image}
                alt={tabs[active].label}
                className="w-full h-[320px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Soft glow */}
              <div className="absolute -z-10 inset-0 bg-primary/20 blur-3xl rounded-2xl scale-90" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
