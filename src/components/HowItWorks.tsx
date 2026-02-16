import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  ScanBarcode,
  CheckCircle2,
  PackageCheck,
  BarChart3,
} from "lucide-react";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: ScanBarcode, label: t("workflow.s1") },
    { icon: CheckCircle2, label: t("workflow.s2") },
    { icon: PackageCheck, label: t("workflow.s3") },
    { icon: BarChart3, label: t("workflow.s4") },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-20 text-foreground"
        >
          {t("workflow.title")}
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Progress line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-border" />

          <div className="grid md:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-6 text-lg font-bold text-muted-foreground">
                  {i + 1}
                </div>

                {/* Icon container */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-background border border-border shadow-md flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Label */}
                <p className="mt-6 text-sm font-semibold text-foreground leading-snug max-w-[180px]">
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
