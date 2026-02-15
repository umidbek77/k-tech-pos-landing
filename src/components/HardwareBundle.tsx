import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Monitor, Printer, ScanBarcode, Archive, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HardwareBundle = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Monitor, label: 'Monoblok' },
    { icon: Printer, label: 'Termal Printer' },
    { icon: ScanBarcode, label: 'Skaner' },
    { icon: Archive, label: 'Kassa qutisi' },
  ];

  return (
    <section id="hardware" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
        >
          {t('hardware.title')}
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">{t('hardware.desc')}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground text-center">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm bg-accent text-accent-foreground border-0">
            <ShieldCheck className="h-4 w-4 mr-2" />
            {t('hardware.warranty')}
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default HardwareBundle;
