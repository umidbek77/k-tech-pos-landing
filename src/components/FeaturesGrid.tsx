import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Brain, WifiOff, Send, Layers } from 'lucide-react';

const FeaturesGrid = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Brain, title: t('features.ai'), desc: t('features.aiDesc'), gradient: 'from-primary/20 to-primary/5' },
    { icon: WifiOff, title: t('features.offline'), desc: t('features.offlineDesc'), gradient: 'from-secondary/20 to-secondary/5' },
    { icon: Send, title: t('features.telegram'), desc: t('features.telegramDesc'), gradient: 'from-primary/20 to-primary/5' },
    { icon: Layers, title: t('features.multi'), desc: t('features.multiDesc'), gradient: 'from-secondary/20 to-secondary/5' },
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          {t('features.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-br ${f.gradient} rounded-xl border border-border p-6 hover:shadow-lg transition-all group`}
            >
              <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
