import {useState} from "react";
import {Box, Button, Step, StepLabel, Stepper, Typography} from "@mui/material";
import OfferStep from "@/components/steps/OfferStep";
import FormStep from "@/components/steps/FormStep";
import InvoiceStep from "@/components/steps/InvoiceStep";
import PaymentStep from "@/components/steps/PaymentStep";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useLanguage} from "@/contexts/LanguageContext";
import {useSearchParams} from "react-router-dom";

const ActivatePage = () => {
    const { t } = useLanguage();
    const [activeStep, setActiveStep] = useState(0);
    const [tenantId, setTenantId] = useState<number | null>(null);

    const [searchParams] = useSearchParams();
    const planId = Number(searchParams.get("planId"));

    const steps = [
        t("activate.step1"),
        t("activate.step2"),
        t("activate.step3"),
        t("activate.step4"),
    ];

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            <Box sx={{ flex: 1, py: 10 }}>
                <Box sx={{ maxWidth: 900, mx: "auto", px: 2 }}>
                    <Typography
                        sx={{ fontSize: 32, fontWeight: 700, textAlign: "center", mb: 3 }}
                    >
                        {t("activate.title")}
                    </Typography>

                    <Stepper
                        activeStep={activeStep}
                        alternativeLabel
                        sx={{
                            mb: 2,

                            "& .MuiStepLabel-label": {
                                color: "#9CA3AF",
                                fontSize: 16,
                                fontWeight: 500,
                            },
                            "& .MuiStepLabel-label.Mui-active": {
                                color: "#22C55E",
                                fontSize: 16,
                                fontWeight: 500,
                            },
                            "& .MuiStepLabel-label.Mui-completed": {
                                color: "#22C55E",
                            },

                            "& .MuiStepIcon-root": {
                                color: "#374151",
                                fontSize: 30,
                            },
                            "& .MuiStepIcon-root.Mui-active": {
                                color: "#22C55E",
                            },
                            "& .MuiStepIcon-root.Mui-completed": {
                                color: "#22C55E",
                            },

                            "& .MuiStepIcon-text": {
                                fontSize: "0.85rem",
                                fontWeight: 600,
                            },
                        }}
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep > 0 && (
                        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
                            <Button
                                onClick={() => setActiveStep((prev) => prev - 1)}
                                sx={{
                                    textTransform: "none",
                                    fontWeight: 600,
                                    color: "#24c648",
                                    border: "1px solid #24c648",
                                    "&:hover": {
                                        background: "#24c648",
                                        color: "#fff",
                                    },
                                }}
                            >
                                ← {t("common.back")}
                            </Button>
                        </Box>
                    )}

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
                            planId={planId}
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