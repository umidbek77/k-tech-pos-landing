import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ScanBarcode, CheckCircle2, PackageCheck, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: ScanBarcode, label: t('workflow.s1') },
    { icon: CheckCircle2, label: t('workflow.s2') },
    { icon: PackageCheck, label: t('workflow.s3') },
    { icon: BarChart3, label: t('workflow.s4') },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
        >
          {t('workflow.title')}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground text-center whitespace-nowrap">{step.label}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight className="h-6 w-6 text-muted-foreground mx-4 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
