import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "@/contexts/LanguageContext";

const payments = [
    { name: "Payme", img: "/payme.png" },
    { name: "Click", img: "/click.jpg" },
    { name: "Xazna", img: "/xazna.png" },
];

const PaymentStep = () => {
    const { t } = useLanguage();
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <Box
            sx={{
                borderRadius: 3,
                p: 4,
                border: "1px solid",
                borderColor: "divider",
                background: "background.paper",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
        >
            <Typography
                sx={{
                    fontSize: 22,
                    fontWeight: 600,
                    mb: 1,
                    color: "text.primary",
                }}
            >
                {t("payment.title")}
            </Typography>

            <Typography
                sx={{
                    fontSize: 16,
                    color: "text.secondary",
                    mb: 4,
                }}
            >
                {t("payment.subtitle")}
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                    gap: 2.5,
                }}
            >
                {payments.map((p) => (
                    <Box
                        key={p.name}
                        onClick={() => setSelected(p.name)}
                        sx={{
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            p: 3,
                            borderRadius: "12px",
                            border: "1.5px solid",
                            borderColor: selected === p.name ? "#22C55E" : "divider",
                            background: selected === p.name
                                ? "rgba(34, 197, 94, 0.06)"
                                : "background.default",
                            transition: "all 0.25s ease",
                            minHeight: 140,
                            "&:hover": {
                                borderColor: "#22C55E",
                                transform: "translateY(-4px)",
                                boxShadow: "0 8px 24px rgba(34, 197, 94, 0.12)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 120,
                                height: 52,
                                borderRadius: "8px",
                                background: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 1,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={p.img}
                                alt={p.name}
                                style={{
                                    maxHeight: 86,
                                    maxWidth: 100,
                                    objectFit: "contain",
                                    display: "block",
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: 15,
                                fontWeight: 600,
                                color: selected === p.name ? "#16A34A" : "text.primary",
                                letterSpacing: 0.2,
                            }}
                        >
                            {p.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PaymentStep;