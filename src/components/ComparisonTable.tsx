import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ComparisonTable = () => {
  const { t } = useLanguage();

  const rows = [
    { label: t('compare.speed'), manual: false, ktech: true },
    { label: t('compare.accuracy'), manual: false, ktech: true },
    { label: t('compare.growth'), manual: false, ktech: true },
    { label: 'AI', manual: false, ktech: true },
    { label: 'Offline', manual: false, ktech: true },
    { label: 'Telegram Bot', manual: false, ktech: true },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          {t('compare.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card rounded-xl border border-border overflow-hidden"
        >
          <div className="grid grid-cols-3 text-center font-bold text-sm bg-muted">
            <div className="p-4"></div>
            <div className="p-4 text-muted-foreground">{t('compare.manual')}</div>
            <div className="p-4 text-primary">{t('compare.ktech')}</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-3 text-center border-t border-border">
              <div className="p-4 text-sm font-medium text-foreground text-left pl-6">{row.label}</div>
              <div className="p-4 flex justify-center">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <div className="p-4 flex justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
