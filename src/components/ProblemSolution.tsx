import {useLanguage} from "@/contexts/LanguageContext";
import {motion} from "framer-motion";
import {Box, Typography} from "@mui/material";

const ProblemSolution = () => {
    const { t } = useLanguage();

    const cards = [
        {
            image: "/img-15.jpg",
            q: t("problem.q1"),
            a: t("problem.a1"),
        },
        {
            image: "/img-16.jpg",
            q: t("problem.q2"),
            a: t("problem.a2"),
        },
        {
            image: "/img-17.jpg",
            q: t("problem.q3"),
            a: t("problem.a3"),
        },
    ];

    return (
        <Box
            id="solution"
            sx={{
                position: "relative",
                py: { xs: 2, md: 4 },
                overflow: "hidden",
            }}
        >
            <Box sx={{ position: "absolute", inset: 0, zIndex: -1 }}>
                <Box sx={{ position: "absolute", inset: 0, bgcolor: "#F6F8F7" }} />

                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "65%",
                        bgcolor: "#EEF2F1",
                        clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0 100%)",
                    }}
                />
            </Box>

            <Box sx={{ maxWidth: 1400, mx: "auto", px: 2 }}>
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: { xs: 24, md: 40 },
                        fontWeight: 600,
                        mb: 3,
                    }}
                >
                    {t("problem.title")}
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gap: 5,
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(3, 1fr)",
                        },
                    }}
                >
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <Box sx={{ position: "relative" }}>
                                <Box
                                    sx={{
                                        height: 340,
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        position: "relative",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={card.image}
                                        alt="problem"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            width: "100%",
                                            px: 2,
                                            py: 1,

                                            backdropFilter: "blur(4px)",
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 40%, transparent 75%)",

                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems:
                                                i === 0
                                                    ? "flex-start"
                                                    : i === 1
                                                        ? "center"
                                                        : "flex-end",
                                            textAlign:
                                                i === 0
                                                    ? "left"
                                                    : i === 1
                                                        ? "center"
                                                        : "right",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 17,
                                                color: "#fff",
                                            }}
                                        >
                                            {card.q}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: 19,
                                                fontWeight: 600,
                                                color: "#16A34A",
                                            }}
                                        >
                                            {card.a}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ProblemSolution;