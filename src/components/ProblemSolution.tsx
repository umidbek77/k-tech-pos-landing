import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Clock, PackageSearch, Shield } from 'lucide-react';

const ProblemSolution = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Clock, q: t('problem.q1'), a: t('problem.a1'), color: 'text-primary' },
    { icon: PackageSearch, q: t('problem.q2'), a: t('problem.a2'), color: 'text-secondary' },
    { icon: Shield, q: t('problem.q3'), a: t('problem.a3'), color: 'text-primary' },
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
          {t('problem.title')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <card.icon className={`h-7 w-7 ${card.color}`} />
              </div>
              <p className="text-lg font-semibold text-destructive mb-2 line-through decoration-2">{card.q}</p>
              <p className="text-lg font-semibold text-primary">{card.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
