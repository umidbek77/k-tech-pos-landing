import {useLanguage} from "@/contexts/LanguageContext";
import {motion} from "framer-motion";
import {BarChart3, Receipt, RefreshCcw, ScanBarcode, ShoppingCart} from "lucide-react";

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
              className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground"
          >
            {t("workflow.title")}
          </motion.h2>

          <div className="relative max-w-6xl mx-auto">
            <div className="hidden md:block absolute top-12 left-[-40px] right-[-40px] h-[4px] bg-border rounded-full" />

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
                      className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="
                  relative z-10 w-24 h-24 rounded-2xl
                  bg-background border border-border
                  shadow-md flex items-center justify-center
                  transition-all duration-300
                  group-hover:shadow-2xl
                  group-hover:-translate-y-2
                  group-hover:scale-105
                ">
                      <step.icon
                          className="
                      h-16 w-16 text-primary
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                      />
                    </div>

                    <p className="
                  mt-4 text-base font-semibold
                  text-foreground whitespace-nowrap
                  transition-all duration-300
                  group-hover:text-primary
                  group-hover:tracking-wide
                ">
                      {step.label}
                    </p>

                    <div className="
                  absolute inset-0 -z-10 opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-primary/5 blur-2xl rounded-full
                " />
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;