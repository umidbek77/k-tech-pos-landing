import {useLanguage} from "@/contexts/LanguageContext";
import {motion} from "framer-motion";
import {Box, Typography, Button, useTheme} from "@mui/material";
import {Check, Star, Zap, Crown} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const PricingSection = () => {
    const {t} = useLanguage();
    const navigate = useNavigate();
    const theme = useTheme();

    const isDark = theme.palette.mode === "dark";

    const [apiPlans, setApiPlans] = useState<any[]>([]);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await fetch("https://api.pos.k-tech.uz/api/v1/plans");
                const data = await res.json();

                const activePlans = (data.content || []).filter(
                    (p: any) => p.active
                );

                setApiPlans(activePlans);
            } catch (e) {
                console.error("Plans fetch error:", e);
            }
        };

        fetchPlans();
    }, []);

    const plans = [
        {
            icon: Zap,
            name: t("pricing.start"),
            price: "120 000 so’m",
            desc: t("pricing.startDesc"),
            features: [
                t("pricing.start.f1"),
                t("pricing.start.f2"),
                t("pricing.start.f3"),
                t("pricing.start.f4"),
                t("pricing.start.f5"),
            ],
            popular: false,
        },
        {
            icon: Star,
            name: t("pricing.business"),
            price: "200 000 so’m",
            desc: t("pricing.businessDesc"),
            features: [
                t("pricing.business.f1"),
                t("pricing.business.f2"),
                t("pricing.business.f3"),
                t("pricing.business.f4"),
                t("pricing.business.f5"),
                t("pricing.business.f6"),
                t("pricing.business.f7"),
            ],
            popular: true,
        },
        {
            icon: Crown,
            name: t("pricing.enterprise"),
            price: "300 000 so’m",
            desc: t("pricing.enterpriseDesc"),
            features: [
                t("pricing.enterprise.f1"),
                t("pricing.enterprise.f2"),
                t("pricing.enterprise.f3"),
                t("pricing.enterprise.f4"),
                t("pricing.enterprise.f5"),
                t("pricing.enterprise.f6"),
                t("pricing.enterprise.f7"),
            ],
            popular: false,
        },
    ];

    return (
        <Box
            id="pricing"
            sx={{
                py: 6,
                background: isDark ? "#0B1220" : "rgba(0,0,0,0.03)",
            }}
        >
            <Box sx={{maxWidth: 1400, mx: "auto", px: 2}}>
                <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}>
                    <Box sx={{textAlign: "center", mb: 6}}>
                        <Typography
                            sx={{
                                fontSize: {xs: 28, md: 36},
                                fontWeight: 700,
                                mb: 0.5,
                            }}
                        >
                            {t("pricing.title")}
                        </Typography>

                        <Typography sx={{fontSize: 18}}>
                            {t("pricing.note")}
                        </Typography>
                    </Box>
                </motion.div>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(3,1fr)",
                        },
                        gap: 4,
                    }}
                >
                    {plans.map((plan, i) => {
                        const apiPlan = apiPlans[i];

                        return (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, y: 40}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{delay: i * 0.15}}
                                whileHover={{y: -8}}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        borderRadius: "16px",
                                        border: "2px solid #22C55E",
                                        p: 4,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        transition: "0.3s",
                                        boxShadow: isDark
                                            ? "0 10px 30px rgba(0,0,0,0.4)"
                                            : "0 8px 20px rgba(0,0,0,0.05)",
                                        "&:hover": {
                                            boxShadow: isDark
                                                ? "0 20px 50px rgba(0,0,0,0.6)"
                                                : "0 20px 40px rgba(0,0,0,0.1)",
                                        },
                                    }}
                                >
                                    {plan.popular && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: -16,
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                background: "#22C55E",
                                                color: "#fff",
                                                px: 2,
                                                py: 0.5,
                                                borderRadius: "999px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                                fontSize: 14,
                                            }}
                                        >
                                            <Star size={18}/>
                                            Eng mashhur
                                        </Box>
                                    )}

                                    <Box sx={{mb: 2}}>
                                        <plan.icon size={40} color="#22C55E"/>
                                    </Box>

                                    <Typography sx={{fontSize: 28, fontWeight: 700}}>
                                        {apiPlan?.name || plan.name}
                                    </Typography>

                                    <Typography sx={{fontSize: 18, mb: 1}}>
                                        {plan.desc}
                                    </Typography>

                                    <Typography sx={{fontSize: 28, fontWeight: 700, mb: 2}}>
                                        {apiPlan?.price
                                            ? `${apiPlan.price.toLocaleString()} so’m`
                                            : plan.price}
                                    </Typography>

                                    <Box sx={{flex: 1, mb: 4}}>
                                        {plan.features.map((f, fi) => (
                                            <Box
                                                key={fi}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: 1.5,
                                                    mb: 1.5,
                                                    fontSize: 18,
                                                }}
                                            >
                                                <Check size={18} color="#22C55E"/>
                                                {f}
                                            </Box>
                                        ))}
                                    </Box>

                                    <Button
                                        fullWidth
                                        sx={{
                                            background: "#16A34A",
                                            color: "#fff",
                                            textTransform: "none",
                                            fontWeight: 600,
                                            fontSize: 16,
                                            "&:hover": {
                                                background: "#15803D",
                                            },
                                        }}
                                        onClick={() =>
                                            navigate(`/activate?planId=${apiPlan?.id || ""}`)
                                        }
                                    >
                                        {t("nav.demo")}
                                    </Button>
                                </Box>
                            </motion.div>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default PricingSection;