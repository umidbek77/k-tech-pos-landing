import {useLanguage} from '@/contexts/LanguageContext';
import {motion} from 'framer-motion';
import {Headphones} from 'lucide-react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from '@/components/ui/accordion';

const SupportFAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
  ];

  return (
      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* TITLE */}
          <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-center mb-3 text-foreground"
          >
            {t('support.title')}
          </motion.h2>

          {/* SUBTEXT */}
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t('support.guarantee')}
          </p>

          {/* GUARANTEE */}
          <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 bg-muted/40 border border-border rounded-2xl px-6 py-5 flex items-center gap-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10">
              <Headphones className="h-5 w-5 text-primary" />
            </div>

            <p className="text-lg text-foreground font-semibold leading-snug">
              {t('support.guarantee')}
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">

              {faqs.map((faq, i) => (
                  <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border border-border rounded-xl px-6 bg-white/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40"
                  >
                    <AccordionTrigger className="py-5 text-lg font-medium text-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>

                    <AccordionContent className="pb-5 text-base text-muted-foreground leading-relaxed">
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