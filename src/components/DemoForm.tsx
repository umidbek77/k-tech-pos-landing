import {useState} from "react";
import {useLanguage} from "@/contexts/LanguageContext";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/hooks/use-toast";
import {z} from "zod";
import {Building2, MessageSquare, Phone, User, Users,} from "lucide-react";

const DemoForm = () => {
    const { t } = useLanguage();
    const { toast } = useToast();

    const [form, setForm] = useState({
        name: "",
        phone: "",
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
        business: z.string().min(1),
        employees: z.string().min(1),
        branches: z.string().min(1),
        plan: z.string().min(1),
        note: z.string().optional(),
    });

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

        try {
            const message = `
📥 NEW DEMO REQUEST

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🏢 Business: ${form.business}
👥 Employees: ${form.employees}
🏬 Branches: ${form.branches}
📦 Plan: ${form.plan}
📝 Note: ${form.note || "-"}
            `;

            await fetch(
                `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
                        text: message,
                    }),
                }
            );

            toast({ title: "✅", description: t("demo.success") });

            setForm({
                name: "",
                phone: "",
                business: "",
                employees: "",
                branches: "",
                plan: "",
                note: "",
            });

        } catch (error) {
            toast({
                title: "❌",
                description: "Xatolik yuz berdi",
            });
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
                        {/* Name */}
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder={t("demo.name")}
                                value={form.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className={`pl-10 h-11 ${errors.name ? "border-destructive" : ""}`}
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder={t("demo.phone")}
                                value={form.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                className={`pl-10 h-11 ${errors.phone ? "border-destructive" : ""}`}
                            />
                        </div>

                        {/* Business */}
                        <div>
                            <Select
                                value={form.business}
                                onValueChange={(v) => handleChange("business", v)}
                            >
                                <SelectTrigger
                                    className={`h-11 ${errors.business ? "border-destructive" : ""}`}
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
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder={t("demo.employees")}
                                value={form.employees}
                                onChange={(e) => handleChange("employees", e.target.value)}
                                className={`pl-10 h-11 ${errors.employees ? "border-destructive" : ""}`}
                            />
                        </div>

                        {/* Branches */}
                        <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder={t("demo.branches")}
                                value={form.branches}
                                onChange={(e) => handleChange("branches", e.target.value)}
                                className={`pl-10 h-11 ${errors.branches ? "border-destructive" : ""}`}
                            />
                        </div>

                        {/* Plan */}
                        <div>
                            <Select
                                value={form.plan}
                                onValueChange={(v) => handleChange("plan", v)}
                            >
                                <SelectTrigger
                                    className={`h-11 ${errors.plan ? "border-destructive" : ""}`}
                                >
                                    <SelectValue placeholder={t("demo.plan")} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="start">{t("pricing.start")}</SelectItem>
                                    <SelectItem value="business">{t("pricing.business")}</SelectItem>
                                    <SelectItem value="enterprise">{t("pricing.enterprise")}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Note */}
                        <div className="md:col-span-2 relative">
                            <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                            <Textarea
                                placeholder={t("demo.note")}
                                value={form.note}
                                onChange={(e) => handleChange("note", e.target.value)}
                                className="pl-10"
                            />
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2">
                            <Button
                                type="submit"
                                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold"
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