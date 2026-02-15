import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, Package } from 'lucide-react';

const AnalyticsDashboard = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
        >
          {t('dashboard.title')}
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">{t('dashboard.desc')}</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto"
        >
          {/* Phone frame */}
          <div className="bg-card rounded-[2rem] border-4 border-border p-4 shadow-2xl">
            <div className="bg-muted rounded-2xl p-4 space-y-4">
              {/* Header */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground">K-TECH Analytics</p>
                <p className="text-lg font-bold text-foreground">12,450,000 so'm</p>
                <p className="text-xs text-primary font-semibold">+23.5% ↑</p>
              </div>

              {/* Mini chart bars */}
              <div className="flex items-end justify-center gap-1.5 h-20">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="w-6 rounded-t-md bg-primary/80"
                  />
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: TrendingUp, label: 'Foyda', value: '+18%', color: 'text-primary' },
                  { icon: TrendingDown, label: 'Xarajat', value: '-5%', color: 'text-destructive' },
                  { icon: Package, label: 'Top tovar', value: 'Coca-Cola', color: 'text-secondary' },
                  { icon: Users, label: 'Xodimlar', value: '12 ta', color: 'text-primary' },
                ].map((stat, i) => (
                  <div key={i} className="bg-card rounded-lg p-3 border border-border">
                    <stat.icon className={`h-4 w-4 ${stat.color} mb-1`} />
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-sm font-bold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
