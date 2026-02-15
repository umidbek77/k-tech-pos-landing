import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      icon: Zap,
      name: t('pricing.start'),
      price: t('pricing.startPrice'),
      desc: t('pricing.startDesc'),
      features: [t('pricing.feature1'), t('pricing.feature2')],
      popular: false,
    },
    {
      icon: Star,
      name: t('pricing.business'),
      price: t('pricing.businessPrice'),
      desc: t('pricing.businessDesc'),
      features: [t('pricing.feature3'), t('pricing.feature4'), t('pricing.feature2')],
      popular: true,
    },
    {
      icon: Crown,
      name: t('pricing.enterprise'),
      price: t('pricing.enterprisePrice'),
      desc: t('pricing.enterpriseDesc'),
      features: [t('pricing.feature5'), t('pricing.feature4'), t('pricing.feature6')],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground border-0">
            {t('social.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t('pricing.title')}</h2>
          <p className="text-muted-foreground">{t('pricing.note')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card rounded-xl border p-6 flex flex-col ${
                plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground border-0">⭐ Popular</Badge>
                </div>
              )}
              <plan.icon className={`h-8 w-8 mb-4 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <p className="text-2xl font-bold text-foreground mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={plan.popular ? 'bg-primary text-primary-foreground' : ''}
                variant={plan.popular ? 'default' : 'outline'}
                onClick={() => document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('nav.demo')}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
