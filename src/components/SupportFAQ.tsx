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
            py: { xs: 4, md: 6 },
          }}
      >
        <Box sx={{ maxWidth: 1400, mx: "auto", px: 2 }}>

          <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
            <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: 28, md: 36 },
                  fontWeight: 600,
                  mb: 1,
                }}
            >
              {t("support.title")}
            </Typography>

            <Typography
                sx={{
                  textAlign: "center",
                  mb: 6,
                  maxWidth: 600,
                  mx: "auto",
                  fontSize: 16,
                }}
            >
              {t("support.guarantee")}
            </Typography>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
            <Box
                sx={{
                  mb: 4,
                  px: 3,
                  py: 2.5,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
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
                  }}
              >
                <Headphones size={18} color="#22C55E" />
              </Box>

              <Typography
                  sx={{
                    fontSize: 18,
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

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {faqs.map((faq, i) => (
                    <AccordionItem
                        key={i}
                        value={`item-${i}`}
                        className="border border-border rounded-xl px-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40"
                    >
                      <AccordionTrigger className="py-5 text-lg font-medium text-foreground hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>

                      <AccordionContent className="pb-5 text-base text-muted-foreground leading-relaxed">
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