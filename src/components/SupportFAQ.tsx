import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Box, Typography } from "@mui/material";

const SupportFAQ = () => {
    const { t } = useLanguage();

    const faqs = [
        { q: t("faq.q1"), a: t("faq.a1") },
        { q: t("faq.q2"), a: t("faq.a2") },
        { q: t("faq.q3"), a: t("faq.a3") },
    ];

    return (
        <Box
            component="section"
            id="faq"
            sx={{
                py: { xs: 2, md: 4 },
            }}
        >
            <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, sm: 3 } }}>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: { xs: 26, sm: 30, md: 36, lg: 42 },
                            fontWeight: 700,
                            mb: .5,
                        }}
                    >
                        {t("support.title")}
                    </Typography>

                    <Typography
                        sx={{
                            textAlign: "center",
                            mb: { xs: 0, md: 2 },
                            maxWidth: 600,
                            mx: "auto",
                            fontSize: { xs: 14, sm: 15, md: 16 },
                            color: "text.secondary",
                        }}
                    >
                        {t("support.subtitle")}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Box
                        sx={{
                            mb: 2,
                            px: { xs: 2, sm: 3 },
                            py: { xs: 2, md: 2.5 },
                            borderRadius: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flexDirection: { xs: "row", sm: "row" },
                            backgroundColor: "rgba(0,0,0,0.04)",
                            border: "1px solid #E5E7EB",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                        }}
                    >
                        <Box
                            sx={{
                                width: 42,
                                height: 42,
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "rgba(34,197,94,0.1)",
                                flexShrink: 0,
                            }}
                        >
                            <Headphones size={18} color="#22C55E" />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: { xs: 16, md: 18 },
                                fontWeight: 600,
                            }}
                        >
                            {t("support.guarantee")}
                        </Typography>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                            {faqs.map((faq, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`item-${i}`}
                                    className="border border-border rounded-xl px-4 md:px-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40"
                                >
                                    <AccordionTrigger className="py-4 md:py-5 text-base md:text-lg font-medium text-foreground hover:no-underline text-left">
                                        {faq.q}
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-4 md:pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Box>

                    </Accordion>
                </motion.div>

            </Box>
        </Box>
    );
};

export default SupportFAQ;