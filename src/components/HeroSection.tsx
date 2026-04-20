import {useLanguage} from "@/contexts/LanguageContext";
import {Button} from "@/components/ui/button";
import {ArrowRight, Play} from "lucide-react";
import {Box, Typography} from "@mui/material";

const images = ["/img-1.png", "/img-2.png", "/img-3.png"];

const HeroSection = () => {
    const { t } = useLanguage();

    return (
        <Box
            id="hero"
            sx={{
                pt: { xs: 12, md: 18 },
                pb: { xs: 2, md: 4 },
            }}
        >
            <Box
                sx={{
                    maxWidth: "1400px",
                    mx: "auto",
                    px: 2,
                }}
            >
                <Box sx={{ textAlign: "center", maxWidth: 1200, mx: "auto" }}>
                    <Typography
                        sx={{
                            fontSize: { xs: 30, md: 52, lg: 64 },
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
                            fontSize: { xs: 15, md: 18 },
                            maxWidth: 650,
                            mx: "auto",
                        }}
                    >
                        {t("hero.subtitle")}
                    </Typography>

                    <Box
                        sx={{
                            mt: 4,
                            pl:3,
                            pr:3,
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 2,
                                flexDirection: { xs: "column", sm: "row" },
                            }}
                        >
                            <Button className="h-12 px-8 shadow-md text-md">
                                {t("hero.cta1")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button variant="outline" className="h-12 px-8 text-md">
                                <Play className="mr-2 h-4 w-4" />
                                {t("hero.cta2")}
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        mt: -8,
                        display: "grid",
                        gap: 3,
                        gridTemplateColumns: {
                            xs: "1.2fr",
                            md: "1fr 2.3fr 1fr",
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
                                        ? { xs: 280, md: 320 }
                                        : { xs: 340, md: 400 },
                                transform: index === 1 ? "translateY(80px)" : "none",
                                boxShadow:
                                    index === 1
                                        ? "0 10px 30px rgba(0,0,0,0.1)"
                                        : "0 20px 40px rgba(0,0,0,0.15)",
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
                                    transition: "0.5s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
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