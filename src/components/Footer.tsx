import { useLanguage } from "@/contexts/LanguageContext";
import {
    Instagram,
    Mail,
    MapPin,
    Phone,
    Send,
    Youtube,
} from "lucide-react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    const { t } = useLanguage();

    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box
            component="footer"
            sx={{
                borderTop: "1px solid #D2D1D1FF",
                backdropFilter: "blur(12px)",
                pt: 8,
                pb: 4,
            }}
        >
            <Box sx={{ maxWidth: 1400, mx: "auto", px: 2 }}>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(4,1fr)",
                        },
                        gap: 6,
                        mb: 4,
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                mb: 2,
                                cursor: "pointer",
                            }}
                        >
                            {/*<Box*/}
                            {/*    sx={{*/}
                            {/*        width: 36,*/}
                            {/*        height: 36,*/}
                            {/*        borderRadius: "10px",*/}
                            {/*        background: "#45af74",*/}
                            {/*        color: "#fff",*/}
                            {/*        display: "flex",*/}
                            {/*        alignItems: "center",*/}
                            {/*        justifyContent: "center",*/}
                            {/*        fontWeight: 700,*/}
                            {/*        fontSize: 20,*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    KP*/}
                            {/*</Box>*/}

                            <Typography sx={{ fontWeight: 700, fontSize: 34 }}>
                                K-TECH <Box component="span" sx={{ color: "#45af74" }}>POS</Box>
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                fontSize: 16,
                                color: "#6B7280",
                                lineHeight: 1.6,
                                maxWidth: 260,
                            }}
                        >
                            {t("footer.slogan")}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: 18,
                                fontWeight: 600,
                                mb: 2,
                            }}
                        >
                            {t("footer.product")}
                        </Typography>

                        {[
                            { label: t("footer.features"), href: "#solution" },
                            { label: t("footer.pricing"), href: "#pricing" },
                            { label: t("footer.dashboard"), href: "#hardware" },
                        ].map((item) => (
                            <Typography
                                key={item.href}
                                onClick={() => scrollTo(item.href)}
                                sx={{
                                    fontSize: 16,
                                    color: "#6B7280",
                                    mb: 1.5,
                                    cursor: "pointer",
                                    transition: "0.3s",
                                    "&:hover": {
                                        color: "#24c648",
                                    },
                                }}
                            >
                                {item.label}
                            </Typography>
                        ))}
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: 18,
                                fontWeight: 600,
                                mb: 2,
                            }}
                        >
                            {t("footer.contact")}
                        </Typography>

                        {[
                            { icon: Phone, text: "+998 90 123 45 67" },
                            { icon: Mail, text: "info@k-tech.uz" },
                            { icon: MapPin, text: "Urgench, Xorazm" },
                        ].map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    mb: 1.5,
                                    fontSize: 16,
                                    color: "#6B7280",
                                    transition: "0.3s",
                                    "&:hover": {
                                        color: "#24c648",
                                    },
                                }}
                            >
                                <item.icon size={16} color="#22C55E" />
                                {item.text}
                            </Box>
                        ))}
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: 18,
                                fontWeight: 600,
                                mb: 2,
                            }}
                        >
                            {t("footer.social")}
                        </Typography>

                        <Box sx={{ display: "flex", gap: 1.5 }}>
                            {[Send, Instagram, Youtube].map((Icon, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: "10px",
                                        border: "1px solid #E5E7EB",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        "&:hover": {
                                            background: "#22C55E",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    <Icon size={18} />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        borderTop: "1px solid #E5E7EB",
                        pt: 3,
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                        fontSize: 14,
                        color: "#6B7280",
                    }}
                >
                    <Typography sx={{ fontSize: 13 }}>
                        © 2025 K-TECH POS. All rights reserved.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Typography sx={{ cursor: "pointer", "&:hover": { color: "#24c648" } }}>
                            {t("footer.privacy")}
                        </Typography>
                        <Typography sx={{ cursor: "pointer", "&:hover": { color: "#24c648" } }}>
                            {t("footer.terms")}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;