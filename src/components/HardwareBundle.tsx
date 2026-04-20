import {useLanguage} from "@/contexts/LanguageContext";
import {motion} from "framer-motion";
import {ShieldCheck} from "lucide-react";
import {Box, Typography} from "@mui/material";

const HardwareBundle = () => {
    const { t } = useLanguage();

    const items = [
        { image: "/monoblok.png", label: "Monoblok" },
        { image: "/print.png", label: "Termal Printer" },
        { image: "/scan.png", label: "Skaner" },
        { image: "/scale.png", label: "Tarozi" },
    ];

    return (
        <Box sx={{ position: "relative", overflow: "hidden" }}>

            <Box
                sx={{
                    background: "linear-gradient(135deg, #0F172A, #0B1E2D)",
                    py: { xs: 4, md: 6 },
                }}
            >
                <Box sx={{ maxWidth: 1400, mx: "auto", px: 2, textAlign: "center" }}>

                    <Typography
                        sx={{
                            fontSize: { xs: 26, md: 40 },
                            fontWeight: 600,
                            color: "#fff",
                        }}
                    >
                        {t("hardware.title")}
                    </Typography>

                    <Typography
                        sx={{
                            mt: .5,
                            color: "rgba(255,255,255,0.6)",
                            fontSize: 16,
                            mb: 4,
                        }}
                    >
                        {t("hardware.desc")}
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2,1fr)",
                                md: "repeat(4,1fr)",
                            },
                            gap: { xs: 4, md: 6 },
                        }}
                    >
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Box
                                    sx={{
                                        borderRadius: "20px",
                                        p: { xs: 2, md: 4 },
                                        background: "#ffffff",
                                        textAlign: "center",
                                        transition: "0.3s",
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: 140,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 1,
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.label}
                                            sx={{
                                                maxHeight: "100%",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </Box>

                                    <Typography
                                        sx={{
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: "#111827",
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            mt: 3,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                px: 4,
                                py: 1.2,
                                borderRadius: "999px",
                                background: "rgba(16,185,129,0.1)",
                                border: "1px solid rgba(16,185,129,0.3)",
                                color: "#34D399",
                                fontSize: 14,
                            }}
                        >
                            <ShieldCheck size={24} />
                            {t("hardware.warranty")}
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default HardwareBundle;