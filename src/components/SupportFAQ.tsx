import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SupportFAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground"
        >
          {t('support.title')}
        </motion.h2>

        {/* Compact Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 bg-muted/40 border border-border rounded-xl px-5 py-4 flex items-center gap-4"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <Headphones className="h-4 w-4 text-primary" />
          </div>

          <p className="text-sm text-foreground font-medium leading-snug">
            {t('support.guarantee')}
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">

            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-lg px-4 transition-all duration-200 hover:border-primary/40"
              >
                <AccordionTrigger className="py-4 text-sm font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>

                <AccordionContent className="pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}

          </Accordion>
        </motion.div>

      </div>
    </section>
  );
};

export default SupportFAQ;
