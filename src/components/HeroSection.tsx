import {useLanguage} from "@/contexts/LanguageContext";
import {Button} from "@/components/ui/button";
import {ArrowRight, Play} from "lucide-react";
import {Box, Typography} from "@mui/material";

const images = ["/desk.png", "/cloud.png", "/mobil.png"];

const HeroSection = () => {
    const { t } = useLanguage();

    return (
        <Box
            id="hero"
            sx={{
                pt: { xs: 10, sm: 12, md: 16, lg: 18 },
                pb: { xs: 4, md: 6 },
            }}
        >
            <Box
                sx={{
                    maxWidth: "1400px",
                    mx: "auto",
                    px: { xs: 2, sm: 3 },
                }}
            >
                <Box sx={{ textAlign: "center", maxWidth: 1400, mx: "auto" }}>
                    <Typography
                        sx={{
                            fontSize: { xs: 28, sm: 36, md: 52, lg: 64 },
                            fontWeight: 700,
                            lineHeight: 1.15,
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                position: "relative",
                                display: "inline-block",
                                color: "#16A34A",
                                px: "2px",
                                py: "2px",
                                border: "1.5px solid #16A34A",
                                borderRadius: "2px",
                                mr: 1,
                                backgroundColor: "rgba(22,163,74,0.12)",

                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    width: 6,
                                    height: 6,
                                    backgroundColor: "#16A34A",
                                    borderRadius: "50%",
                                    top: "-3px",
                                    left: "-3px",
                                },
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    width: 6,
                                    height: 6,
                                    backgroundColor: "#16A34A",
                                    borderRadius: "50%",
                                    top: "-3px",
                                    right: "-3px",
                                },

                                "& .dot-bl": {
                                    position: "absolute",
                                    width: 6,
                                    height: 6,
                                    backgroundColor: "#16A34A",
                                    borderRadius: "50%",
                                    bottom: "-3px",
                                    left: "-3px",
                                },
                                "& .dot-br": {
                                    position: "absolute",
                                    width: 6,
                                    height: 6,
                                    backgroundColor: "#16A34A",
                                    borderRadius: "50%",
                                    bottom: "-3px",
                                    right: "-3px",
                                },
                            }}
                        >
                            K-TECH POS
                            <Box className="dot-bl" />
                            <Box className="dot-br" />
                        </Box>
                        {t("hero.title")}
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2,
                            color: "text.secondary",
                            fontSize: { xs: 14, sm: 16, md: 18 },
                            maxWidth: 650,
                            mx: "auto",
                        }}
                    >
                        {t("hero.subtitle")}
                    </Typography>

                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                flexDirection: { xs: "column", sm: "row" },
                                width: { xs: "100%", sm: "auto" },
                                maxWidth: 420,
                            }}
                        >
                            <Button className="h-12 w-full sm:w-auto px-6 shadow-md text-md">
                                {t("hero.cta1")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button variant="outline" className="h-12 w-full sm:w-auto px-6 text-md">
                                <Play className="mr-2 h-4 w-4" />
                                {t("hero.cta2")}
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        mt: { xs: 2, md: 4 },
                        display: "grid",
                        gap: { xs: 2, md: 3 },
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "1fr 1fr",
                            md: "1.2fr 2fr 1fr",
                        },
                        alignItems: "stretch",
                    }}
                >
                    {images.map((src, index) => (
                        <Box
                            key={index}
                            sx={{
                                overflow: "hidden",
                                borderRadius: "20px",

                                height:
                                    index === 1
                                        ? { xs: 240, sm: 260, md: 320 }
                                        : { xs: 260, sm: 300, md: 380 },

                                transform:
                                    index === 1
                                        ? { xs: "none", md: "translateY(40px)" }
                                        : "none",

                                boxShadow:
                                    index === 1
                                        ? "0 8px 25px rgba(0,0,0,0.1)"
                                        : "0 20px 40px rgba(0,0,0,0.15)",

                                transition: "0.3s",
                            }}
                        >
                            <Box
                                component="img"
                                src={src}
                                alt="POS"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition:
                                        index === 0
                                            ? "center 20%"
                                            : index === 1
                                                ? "center 30%"
                                                : "center 35%",
                                    transition: "0.4s ease",
                                    "&:hover": {
                                        transform: "scale(1.04)",
                                    },
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;