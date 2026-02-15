import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Monitor, CreditCard, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-accent text-accent-foreground border-0">
              <ShieldCheck className="h-4 w-4 mr-2" />
              {t('hero.badge')}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              {t('hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12"
                onClick={() => document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta1')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-border"
              >
                <Play className="mr-2 h-5 w-5" />
                {t('hero.cta2')}
              </Button>
            </div>
          </motion.div>

          {/* Visual - POS Terminal illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-2xl border border-border shadow-2xl p-8 mx-auto max-w-md">
              {/* Mock POS Screen */}
              <div className="bg-muted rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-sm text-foreground">K-TECH POS</span>
                  </div>
                  <Badge className="bg-primary/15 text-primary border-0 text-xs">Online</Badge>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Coca-Cola 1L', price: '12,000', qty: 2 },
                    { name: 'Non bread', price: '5,000', qty: 1 },
                    { name: 'Oltin yogʻ 1L', price: '28,000', qty: 1 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">x{item.qty}</p>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-border flex justify-between items-center">
                  <span className="font-semibold text-foreground">Jami:</span>
                  <span className="text-xl font-bold text-primary">57,000 so'm</span>
                </div>
              </div>

              {/* Action buttons mock */}
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-primary/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium text-foreground">Karta</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-accent">
                  <BarChart3 className="h-5 w-5 text-accent-foreground" />
                  <span className="text-xs font-medium text-foreground">Hisobot</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-secondary/10">
                  <Monitor className="h-5 w-5 text-secondary" />
                  <span className="text-xs font-medium text-foreground">Tovar</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
              >
                AI Powered ✨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
