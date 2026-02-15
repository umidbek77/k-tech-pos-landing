import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ShoppingCart, Shirt, Pill } from 'lucide-react';

const UseCases = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const tabs = [
    { icon: ShoppingCart, label: t('usecases.super'), desc: t('usecases.superDesc') },
    { icon: Shirt, label: t('usecases.clothing'), desc: t('usecases.clothingDesc') },
    { icon: Pill, label: t('usecases.pharmacy'), desc: t('usecases.pharmacyDesc') },
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          {t('usecases.title')}
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-2 mb-8">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  active === i
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-xl border border-border p-8 text-center"
          >
            {(() => {
              const ActiveIcon = tabs[active].icon;
              return <ActiveIcon className="h-12 w-12 text-primary mx-auto mb-4" />;
            })()}
            <h3 className="text-2xl font-bold mb-3 text-foreground">{tabs[active].label}</h3>
            <p className="text-lg text-muted-foreground">{tabs[active].desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
