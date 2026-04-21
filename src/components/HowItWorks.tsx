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
      <section className="py-8 md:py-10 lg:py-12 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">

          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-foreground"
          >
            {t("workflow.title")}
          </motion.h2>

          <div className="relative max-w-6xl mx-auto">

            <div className="hidden md:block absolute top-12 left-0 right-0 h-[4px] bg-border rounded-full" />

            <div className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-border rounded-full" />

            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-5
              gap-6 sm:gap-8 md:gap-6
              relative
            ">
              {steps.map((step, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.15,
                      }}
                      className="
                        flex md:flex-col items-center md:text-center
                        gap-4 md:gap-0
                        group cursor-pointer relative
                      "
                  >

                    <div className="
                      relative z-10
                      w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
                      rounded-2xl
                      bg-background border border-border
                      shadow-md flex items-center justify-center
                      transition-all duration-300
                      group-hover:shadow-2xl
                      group-hover:-translate-y-2
                      group-hover:scale-105
                    ">
                      <step.icon
                          className="
                          h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16
                          text-primary
                          transition-all duration-300
                          group-hover:scale-110
                          group-hover:rotate-6
                        "
                      />
                    </div>

                    <p className="
                      mt-0 md:mt-4
                      text-sm sm:text-base md:text-base
                      font-semibold
                      text-foreground
                      text-left md:text-center
                      max-w-[200px] md:max-w-none
                      transition-all duration-300
                      group-hover:text-primary
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