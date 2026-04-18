import {useLanguage} from "@/contexts/LanguageContext";
import {motion} from "framer-motion";
import {BarChart3, Receipt, RefreshCcw, ScanBarcode, ShoppingCart,} from "lucide-react";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: ScanBarcode, label: t("workflow.s1") },
    { icon: ShoppingCart, label: t("workflow.s2") },
    { icon: Receipt, label: t("workflow.s3") },
    { icon: RefreshCcw, label: t("workflow.s4") },
    { icon: BarChart3, label: t("workflow.s5") },
  ];

  return (
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-2">
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
          >
            {t("workflow.title")}
          </motion.h2>

          <div className="relative max-w-6xl mx-auto">
            {/* 🔥 LINE (uzaytirildi) */}
            <div className="hidden md:block absolute top-12 left-[-40px] right-[-40px] h-[4px] bg-border" />

            {/* 🔥 GAP oshirildi */}
            <div className="grid md:grid-cols-5 gap-52 relative">
              {steps.map((step, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col items-center text-center group"
                  >
                    {/* NUMBER */}
                    <div className="absolute -top-7 text-xl font-bold text-primary">
                      {i + 1}
                    </div>

                    {/* ICON */}
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-background border border-border shadow-md flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                      <step.icon className="h-16 w-16 text-primary" />
                    </div>

                    {/* 🔥 TEXT (1 qatorda turadi) */}
                    <p className="mt-4 text-base font-semibold text-foreground whitespace-nowrap">
                      {step.label}
                    </p>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;