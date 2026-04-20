import { useState } from "react";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import OfferStep from "@/components/steps/OfferStep";
import FormStep from "@/components/steps/FormStep";
import InvoiceStep from "@/components/steps/InvoiceStep";
import PaymentStep from "@/components/steps/PaymentStep";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ActivatePage = () => {
    const { t } = useLanguage();
    const [activeStep, setActiveStep] = useState(0);
    const [tenantId, setTenantId] = useState<number | null>(null);

    const steps = [
        t("activate.step1"),
        t("activate.step2"),
        t("activate.step3"),
        t("activate.step4"),
    ];

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            <Box sx={{ flex: 1, py: 6, color: "#fff" }}>
                <Box sx={{ maxWidth: 900, mx: "auto", px: 2 }}>
                    <Typography
                        sx={{ fontSize: 32, fontWeight: 700, textAlign: "center", mb: 4 }}
                    >
                        {t("activate.title")}
                    </Typography>

                    <Stepper
                        activeStep={activeStep}
                        alternativeLabel
                        sx={{
                            mb: 6,
                            "& .MuiStepLabel-label": { color: "#9CA3AF" },
                            "& .MuiStepLabel-label.Mui-active": { color: "#22C55E" },
                            "& .MuiStepLabel-label.Mui-completed": { color: "#22C55E" },
                            "& .MuiStepIcon-root": { color: "#374151" },
                            "& .MuiStepIcon-root.Mui-active": { color: "#22C55E" },
                            "& .MuiStepIcon-root.Mui-completed": { color: "#22C55E" },
                        }}
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep === 0 && (
                        <OfferStep onNext={() => setActiveStep(1)} />
                    )}

                    {activeStep === 1 && (
                        <FormStep
                            onNext={(id: number) => {
                                setTenantId(id);
                                setActiveStep(2);
                            }}
                        />
                    )}

                    {activeStep === 2 && tenantId && (
                        <InvoiceStep
                            tenantId={tenantId}
                            onNext={() => setActiveStep(3)}
                        />
                    )}

                    {activeStep === 3 && <PaymentStep />}
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default ActivatePage;