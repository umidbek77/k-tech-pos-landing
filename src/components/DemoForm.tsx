import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  User,
  Phone,
  Mail,
  Building2,
  Users,
  Store,
  MessageSquare,
} from "lucide-react";

const DemoForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    employees: "",
    branches: "",
    plan: "",
    note: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().min(2),
    phone: z.string().min(9),
    email: z.string().email(),
    business: z.string().min(1),
    employees: z.string().min(1),
    branches: z.string().min(1),
    plan: z.string().min(1),
    note: z.string().optional(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    toast({ title: "✅", description: t("demo.success") });

    setForm({
      name: "",
      phone: "",
      email: "",
      business: "",
      employees: "",
      branches: "",
      plan: "",
      note: "",
    });
  };

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section id="demo" className="py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card rounded-2xl border border-border p-10 shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            {t("demo.title")}
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t("demo.name")}
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`pl-10 ${errors.name ? "border-destructive" : ""}`}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("demo.phone")}
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`pl-10 ${errors.phone ? "border-destructive" : ""}`}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
              />
            </div>

            {/* Business Type */}
            <div>
              <Select
                value={form.business}
                onValueChange={(v) => handleChange("business", v)}
              >
                <SelectTrigger
                  className={errors.business ? "border-destructive" : ""}
                >
                  <SelectValue placeholder={t("demo.business")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shop">{t("demo.shop")}</SelectItem>
                  <SelectItem value="supermarket">
                    {t("demo.supermarket")}
                  </SelectItem>
                  <SelectItem value="pharmacy">{t("demo.pharmacy")}</SelectItem>
                  <SelectItem value="other">{t("demo.other")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Employees */}
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Xodimlar soni"
                value={form.employees}
                onChange={(e) => handleChange("employees", e.target.value)}
                className={`pl-10 ${errors.employees ? "border-destructive" : ""}`}
              />
            </div>

            {/* Branches */}
            <div className="relative">
              <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Filiallar soni"
                value={form.branches}
                onChange={(e) => handleChange("branches", e.target.value)}
                className={`pl-10 ${errors.branches ? "border-destructive" : ""}`}
              />
            </div>

            {/* Plan */}
            <div className="md:col-span-2">
              <Select
                value={form.plan}
                onValueChange={(v) => handleChange("plan", v)}
              >
                <SelectTrigger
                  className={errors.plan ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Qaysi tarif qiziqtiradi?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="start">120 000 so’m</SelectItem>
                  <SelectItem value="business">200 000 so’m</SelectItem>
                  <SelectItem value="enterprise">300 000 so’m</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Note */}
            <div className="md:col-span-2 relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                placeholder="Qo‘shimcha izoh..."
                value={form.note}
                onChange={(e) => handleChange("note", e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold"
              >
                {t("demo.submit")}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoForm;
