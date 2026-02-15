import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const DemoForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().min(2),
    phone: z.string().min(9),
    business: z.string().min(1),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, phone, business });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: '✅', description: t('demo.success') });
    setName('');
    setPhone('');
    setBusiness('');
  };

  return (
    <section id="demo" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-card rounded-xl border border-border p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground">{t('demo.title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder={t('demo.name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? 'border-destructive' : ''}
              />
            </div>
            <div>
              <Input
                placeholder={t('demo.phone')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={errors.phone ? 'border-destructive' : ''}
              />
            </div>
            <div>
              <Select value={business} onValueChange={setBusiness}>
                <SelectTrigger className={errors.business ? 'border-destructive' : ''}>
                  <SelectValue placeholder={t('demo.business')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shop">{t('demo.shop')}</SelectItem>
                  <SelectItem value="supermarket">{t('demo.supermarket')}</SelectItem>
                  <SelectItem value="pharmacy">{t('demo.pharmacy')}</SelectItem>
                  <SelectItem value="other">{t('demo.other')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground">
              {t('demo.submit')}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoForm;
