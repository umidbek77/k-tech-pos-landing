import {useLanguage} from "@/contexts/LanguageContext";
import {motion} from "framer-motion";
import {Box, Stack, Typography} from "@mui/material";

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
            py: { xs: 6, md: 10 },
            overflow: "hidden",
            backgroundColor: "#F6F8F7",
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

        <Box sx={{ maxWidth: 1300, mx: "auto", px: 2 }}>
          <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: 28, md: 44 },
                fontWeight: 600,
                mb: 8,
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
                    </Box>

                    <Box
                        sx={{
                          position: "absolute",
                          bottom: -25,
                          left: i === 1 ? "50%" : i === 2 ? 0 : "auto",
                          right: i === 0 ? 0 : "auto",
                          transform: i === 1 ? "translateX(-50%)" : "none",

                          width: "75%",
                        }}
                    >
                      <Stack
                          spacing={0.5}
                          sx={{
                            backgroundColor: "#F6F8F7",
                            px: 2,
                            py: 1.2,
                            textAlign: "center",
                            borderRadius: "18px",

                            clipPath:
                                i === 0
                                    ? "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 70%)"
                                    : i === 1
                                        ? "polygon(0 0, 100% 0, 100% 65%, 85% 100%, 15% 100%, 0 65%)"
                                        : "polygon(0 0, 100% 0, 100% 70%, 100% 100%, 0 100%, 0 65%)",

                          }}
                      >
                        <Typography
                            sx={{
                              fontSize: 17,
                              color: "text.secondary",
                            }}
                        >
                          {card.q}
                        </Typography>

                        <Typography
                            sx={{
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#16A34A",
                            }}
                        >
                          {card.a}
                        </Typography>
                      </Stack>
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