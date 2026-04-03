import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { MapPin, MessageSquare, Phone, User, AtSign } from "lucide-react";

const DemoForm = () => {
  const { t, lang } = useLanguage();
  const { toast } = useToast();

  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    telegramNick: "",
    address: "",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    fullName: z.string().min(2, "Ism kamida 2 ta belgidan iborat bo‘lishi kerak"),
    phoneNumber: z.string().min(9, "Telefon raqam noto‘g‘ri"),
    telegramNick: z.string().optional(),
    address: z.string().min(2, "Manzilni kiriting"),
    description: z.string().optional(),
  });

  const mapLanguageToApiLang = () => {
    switch (lang) {
      case "uz":
        return "UZ_LATN";
      case "ru":
        return "RU";
      default:
        return "UZ_LATN";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.pos.k-tech.uz/api/v1/contract-applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            lang: mapLanguageToApiLang(),
          },
          body: JSON.stringify({
            fullName: form.fullName,
            phoneNumber: form.phoneNumber,
            telegramNick: form.telegramNick || "",
            address: form.address,
            description: form.description || "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("API error");
      }

      toast({
        title: "✅",
        description: t("demo.success") || "So‘rovingiz muvaffaqiyatli yuborildi",
      });

      setForm({
        fullName: "",
        phoneNumber: "",
        telegramNick: "",
        address: "",
        description: "",
      });
    } catch (error) {
      toast({
        title: "❌",
        description: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section id="demo" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card rounded-2xl border border-border p-8 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            {t("demo.title")}
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-2">
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("demo.name") || "Ismingiz"}
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className={`pl-10 h-11 ${errors.fullName ? "border-destructive" : ""}`}
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("demo.phone") || "Telefon raqamingiz"}
                value={form.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className={`pl-10 h-11 ${errors.phoneNumber ? "border-destructive" : ""}`}
              />
            </div>

            {/* Telegram Nick */}
            <div className="relative">
              <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Telegram username (@username)"
                value={form.telegramNick}
                onChange={(e) => handleChange("telegramNick", e.target.value)}
                className={`pl-10 h-11 ${errors.telegramNick ? "border-destructive" : ""}`}
              />
            </div>

            {/* Address */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Manzilingiz"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className={`pl-10 h-11 ${errors.address ? "border-destructive" : ""}`}
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2 relative">
              <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
              <Textarea
                placeholder={t("demo.note") || "Qo‘shimcha izoh..."}
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold"
              >
                {loading ? "Yuborilmoqda..." : t("demo.submit")}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoForm;