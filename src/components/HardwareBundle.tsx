import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Box, Typography } from "@mui/material";

const HardwareBundle = () => {
  const { t } = useLanguage();

  const items = [
    { image: "/monoblok.png", label: "Monoblok" },
    { image: "/print.png", label: "Termal Printer" },
    { image: "/scan.png", label: "Skaner" },
    { image: "/scale.png", label: "Kassa qutisi" },
  ];

  return (
      <Box
          id="hardware"
          sx={{
            position: "relative",
            py: { xs: 12, md: 18 },
            overflow: "hidden",
            background: "linear-gradient(135deg, #0F172A 0%, #0B1E2D 100%)",
            color: "#fff",
          }}
      >
        <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 200,
              background: "#F8FAF9",
              clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
            }}
        />
        <Box
            sx={{
              position: "absolute",
              bottom: -18,
              left: 0,
              width: "100%",
              height: 200,
              background: "#F8FAF9",
              clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
            }}
        />

        <Box
            sx={{
              maxWidth: 1300,
              mx: "auto",
              px: 2,
              position: "relative",
              zIndex: 1,
            }}
        >
          {/* TITLE */}
          <Typography
              sx={{
                textAlign: "center",
                color: "#111827",
                fontSize: { xs: 30, md: 46 },
                fontWeight: 600,
                mt:-7,
              }}
          >
            {t("hardware.title")}
          </Typography>

          {/* DESC */}
          <Typography
              sx={{
                textAlign: "center",
                color: "#111827",
                fontSize: 18,
                fontWeight: 600,
                mb: 10,
              }}
          >
            {t("hardware.desc")}
          </Typography>

          {/* CARDS */}
          <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: { xs: 4, md: 7 },
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
                        borderRadius: "24px",
                        p: 6,
                        background: "#ffffff",
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        boxShadow: "0 12px 35px rgba(0,0,0,0.3)",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 55px rgba(0,0,0,0.4)",
                        },
                      }}
                  >
                    {/* IMAGE */}
                    <Box
                        sx={{
                          height: 160,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                        }}
                    >
                      <Box
                          component="img"
                          src={item.image}
                          alt={item.label}
                          sx={{
                            maxHeight: "100%",
                            objectFit: "contain",
                            transition: "0.3s",
                            "&:hover": {
                              transform: "scale(1.12)",
                            },
                          }}
                      />
                    </Box>

                    {/* LABEL */}
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

          {/* BADGE (STACK → BOX FIX) */}
          <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 8,
                mb:-6,
              }}
          >
            <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 6,
                  py: 1.5,
                  borderRadius: "999px",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#34D399",
                  backdropFilter: "blur(6px)",
                }}
            >
              <ShieldCheck size={18} />
              <Typography sx={{ fontSize: 14 }}>
                {t("hardware.warranty")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default HardwareBundle;