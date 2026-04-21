import {useState} from "react";
import {Box, Button, Chip, CircularProgress, Divider, Typography,} from "@mui/material";
import {CheckCircle2} from "lucide-react";
import {useLanguage} from "@/contexts/LanguageContext";

interface InvoiceResult {
    id: number;
    planId: number;
    tenantId: number;
    amount: number;
    pendingAmount: number;
    currency: string;
    status: string;
    paymentStatus: string;
    invoiceNumber: string;
}

type PaymentStatus =
    | "PAID"
    | "UNPAID"
    | "CANCELLED"
    | "PENDING"
    | "SUCCESS";

const InvoiceStep = ({
                         tenantId,
                         planId,
                         onNext,
                     }: {
    tenantId: number;
    planId: number;
    onNext: () => void;
}) => {
    const { t, lang } = useLanguage();

    const [loading, setLoading] = useState(false);
    const [invoice, setInvoice] = useState<InvoiceResult | null>(null);
    const [error, setError] = useState("");

    const mapLang = () => {
        switch (lang) {
            case "ru":
                return "RU";
            default:
                return "UZ_LATN";
        }
    };

    const getStatusLabel = (status: string) => {
        const safeStatus = status as PaymentStatus;
        return t(`invoice.status.${safeStatus}`) || status;
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "PAID":
            case "SUCCESS":
                return "#16A34A";
            case "PENDING":
            case "UNPAID":
                return "#F59E0B";
            case "CANCELLED":
                return "#EF4444";
            default:
                return "#6B7280";
        }
    };

    const handleCreate = async () => {
        if (!planId || !tenantId) return;

        setLoading(true);
        setError("");

        try {
            const res = await fetch(
                "https://api.pos.k-tech.uz/api/v1/invoices",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        lang: mapLang(),
                    },
                    body: JSON.stringify({
                        planId,
                        tenantId,
                    }),
                }
            );

            if (!res.ok) throw new Error();

            const data = await res.json();

            const res2 = await fetch(
                `https://api.pos.k-tech.uz/api/v1/invoices/${data.id}`,
                {
                    headers: { lang: mapLang() },
                }
            );

            if (!res2.ok) throw new Error();

            const full = await res2.json();

            setInvoice(full);
        } catch (e) {
            setError(t("invoice.error"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                p: 4,
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                background: "background.paper",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
        >
            {!invoice ? (
                <>
                    <Typography sx={{ fontSize: 26, fontWeight: 700, mb: 1, color: "text.primary" }}>
                        {t("invoice.activateTitle")}
                    </Typography>

                    <Typography sx={{ fontSize: 15, mb: 2, color: "text.secondary" }}>
                        {t("invoice.activateDesc")}
                    </Typography>

                    {error && (
                        <Typography sx={{ color: "error.main", mb: 2 }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        fullWidth
                        onClick={handleCreate}
                        disabled={loading}
                        sx={{
                            height: 50,
                            background: "#16A34A",
                            color: "#fff",
                            fontWeight: 600,
                        }}
                    >
                        {loading ? (
                            <CircularProgress size={22} sx={{ color: "#fff" }} />
                        ) : (
                            t("invoice.activateBtn")
                        )}
                    </Button>
                </>
            ) : (
                <Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <CheckCircle2 size={30} color="#22C55E" />
                        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
                            {t("invoice.created")}
                        </Typography>
                    </Box>

                    <Typography sx={{ mb: 3, color: "text.secondary" }}>
                        {t("invoice.createdDesc")}
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
                            gap: 1,
                            mb: 3,
                        }}
                    >
                        <Box sx={cardStyle}>
                            <Typography sx={labelStyle}>
                                {t("invoice.invoiceNumber")}
                            </Typography>
                            <Typography sx={valueStyle}>
                                {invoice.invoiceNumber}
                            </Typography>
                        </Box>

                        <Box sx={cardStyle}>
                            <Typography sx={labelStyle}>
                                {t("invoice.status")}
                            </Typography>

                            <Chip
                                label={getStatusLabel(
                                    invoice.paymentStatus || invoice.status
                                )}
                                sx={{
                                    background: `${getStatusColor(
                                        invoice.paymentStatus || invoice.status
                                    )}22`,
                                    color: getStatusColor(
                                        invoice.paymentStatus || invoice.status
                                    ),
                                    fontWeight: 600,
                                }}
                            />
                        </Box>

                        <Box sx={cardStyle}>
                            <Typography sx={labelStyle}>
                                {t("invoice.amount")}
                            </Typography>

                            <Typography sx={{ ...valueStyle, fontSize: 18 }}>
                                {invoice.pendingAmount?.toLocaleString()}{" "}
                                {invoice.currency || "UZS"}
                            </Typography>
                        </Box>
                    </Box>

                    <Button
                        fullWidth
                        onClick={onNext}
                        sx={{
                            height: 50,
                            background: "#16A34A",
                            color: "#fff",
                            fontWeight: 600,
                        }}
                    >
                        {t("common.next")}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

const cardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap:1,
    p: 1.5,
    borderRadius: "12px",
    border: "1px solid",
    borderColor: "divider",
    background: "background.default",
};

const labelStyle = {
    fontSize: 16,
    fontWeight: 600,
    mb: 0.2,
};

const valueStyle = {
    fontSize: 15,
    fontWeight: 500,
};

export default InvoiceStep;