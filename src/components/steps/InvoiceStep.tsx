import {useEffect, useState} from "react";
import {Box, Button, Chip, CircularProgress, Divider, Skeleton, Typography,} from "@mui/material";
import {Building2, CalendarDays, CheckCircle2, CreditCard, Hash, Network, Receipt, Zap,} from "lucide-react";
import {useLanguage} from "@/contexts/LanguageContext";

interface Plan {
    id: number;
    name: string;
    price: number;
    durationMonths: number;
    maxPos: number;
    maxUsers: number;
    active: boolean;
    graceDays: number;
    description: string;
}

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
    expiredAt?: string;
    createdAt?: string;
    [key: string]: unknown;
}

interface ResultItem {
    icon: React.ReactNode;
    label: string;
    value: string;
    color?: string;
    chip?: boolean;
}

const PLAN_STYLES = [
    { color: "#22C55E", icon: <Zap size={20} /> },
    { color: "#3B82F6", icon: <Building2 size={20} />, popular: true },
    { color: "#A855F7", icon: <Network size={20} /> },
];

const getPlanStyle = (index: number) =>
    PLAN_STYLES[index % PLAN_STYLES.length];

const InvoiceStep = ({
                         tenantId,
                         onNext,
                     }: {
    tenantId: number;
    onNext: () => void;
}) => {
    const { t } = useLanguage();

    const [plans, setPlans] = useState<Plan[]>([]);
    const [plansLoading, setPlansLoading] = useState(true);
    const [plansError, setPlansError] = useState("");

    const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<InvoiceResult | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPlans = async () => {
            setPlansLoading(true);
            setPlansError("");
            try {
                const res = await fetch("https://api.pos.k-tech.uz/api/v1/plans");
                if (!res.ok) throw new Error();
                const data = await res.json();
                const activePlans: Plan[] = (data.content ?? []).filter(
                    (p: Plan) => p.active
                );
                setPlans(activePlans);
            } catch {
                setPlansError(
                    t("invoice.plansError") ?? "Tariflarni yuklashda xatolik yuz berdi."
                );
            } finally {
                setPlansLoading(false);
            }
        };

        fetchPlans();
    }, []);

    const handleSubmit = async () => {
        if (!selectedPlanId) return;
        setLoading(true);
        setError("");

        try {
            const res = await fetch("https://api.pos.k-tech.uz/api/v1/invoices", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ planId: selectedPlanId, tenantId }),
            });

            if (!res.ok) throw new Error();
            const data: InvoiceResult = await res.json();
            setResult(data);
        } catch {
            setError(
                t("invoice.error") ?? "Xatolik yuz berdi. Qayta urinib ko'ring."
            );
        } finally {
            setLoading(false);
        }
    };

    const selectedPlan = plans.find((p) => p.id === selectedPlanId);
    const selectedPlanStyle = selectedPlan
        ? getPlanStyle(plans.indexOf(selectedPlan))
        : null;

    const resultItems: ResultItem[] = result
        ? [
            {
                icon: <Hash size={18} />,
                label: t("invoice.invoiceId") ?? "Invoice ID",
                value: `#${result.invoiceNumber}`,
            },
            {
                icon: <Receipt size={18} />,
                label: t("invoice.amount") ?? "To'lov miqdori",
                value: result.pendingAmount
                    ? `${result.pendingAmount.toLocaleString()} ${result.currency ?? "UZS"}`
                    : "—",
            },
            {
                icon: <Zap size={18} />,
                label: t("invoice.plan") ?? "Tarif",
                value: selectedPlan
                    ? selectedPlan.name
                    : `Plan #${result.planId}`,
                color: selectedPlanStyle?.color,
            },
            {
                icon: <CreditCard size={18} />,
                label: t("invoice.status") ?? "Status",
                value: result.paymentStatus ?? result.status,
                chip: true,
            },
            ...(result.expiredAt
                ? [
                    {
                        icon: <CalendarDays size={18} />,
                        label: t("invoice.expiredAt") ?? "Muddati",
                        value: new Date(result.expiredAt).toLocaleDateString(),
                    } satisfies ResultItem,
                ]
                : []),
        ]
        : [];

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
            {!result ? (
                <>
                    <Typography
                        sx={{ fontSize: 24, fontWeight: 600, mb: 1, color: "text.primary" }}
                    >
                        {t("invoice.title") ?? "Tarifni tanlang"}
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: "text.secondary", mb: 4 }}>
                        {t("invoice.subtitle") ??
                            "O'zingizga mos tarifni tanlang va davom eting"}
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                            gap: 2,
                            mb: 4,
                        }}
                    >
                        {plansLoading
                            ? [1, 2, 3].map((i) => (
                                <Skeleton
                                    key={i}
                                    variant="rounded"
                                    height={140}
                                    sx={{ borderRadius: "12px" }}
                                />
                            ))
                            : plansError
                                ? (
                                    <Typography
                                        sx={{
                                            color: "error.main",
                                            fontSize: 14,
                                            gridColumn: "1 / -1",
                                        }}
                                    >
                                        {plansError}
                                    </Typography>
                                )
                                : plans.map((plan, index) => {
                                    const style = getPlanStyle(index);
                                    const isSelected = selectedPlanId === plan.id;

                                    return (
                                        <Box
                                            key={plan.id}
                                            onClick={() => setSelectedPlanId(plan.id)}
                                            sx={{
                                                cursor: "pointer",
                                                p: 3,
                                                borderRadius: "12px",
                                                border: "1.5px solid",
                                                borderColor: isSelected ? style.color : "divider",
                                                background: isSelected
                                                    ? `${style.color}0D`
                                                    : "background.default",
                                                transition: "all 0.2s ease",
                                                position: "relative",
                                                "&:hover": {
                                                    borderColor: style.color,
                                                    transform: "translateY(-2px)",
                                                    boxShadow: `0 8px 24px ${style.color}22`,
                                                },
                                            }}
                                        >
                                            {style.popular && (
                                                <Chip
                                                    label={t("invoice.popular") ?? "Mashhur"}
                                                    size="small"
                                                    sx={{
                                                        position: "absolute",
                                                        top: -12,
                                                        right: 12,
                                                        background: style.color,
                                                        color: "#fff",
                                                        fontWeight: 600,
                                                        fontSize: 11,
                                                    }}
                                                />
                                            )}

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                    mb: 1.5,
                                                    color: style.color,
                                                }}
                                            >
                                                {style.icon}
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                        fontSize: 16,
                                                        color: style.color,
                                                    }}
                                                >
                                                    {plan.name}
                                                </Typography>
                                            </Box>

                                            <Typography
                                                sx={{
                                                    fontSize: 18,
                                                    fontWeight: 700,
                                                    color: "text.primary",
                                                    mb: 0.5,
                                                }}
                                            >
                                                {plan.price.toLocaleString()} UZS
                                            </Typography>

                                            <Typography
                                                sx={{ fontSize: 13, color: "text.secondary" }}
                                            >
                                                {plan.description ||
                                                    `${plan.durationMonths} oy · Max ${plan.maxPos} POS · Max ${plan.maxUsers} foydalanuvchi`}
                                            </Typography>

                                            {isSelected && (
                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        top: 10,
                                                        right: 10,
                                                        color: style.color,
                                                    }}
                                                >
                                                    <CheckCircle2 size={20} />
                                                </Box>
                                            )}
                                        </Box>
                                    );
                                })}
                    </Box>

                    {error && (
                        <Typography sx={{ color: "error.main", fontSize: 14, mb: 2 }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        fullWidth
                        disabled={!selectedPlanId || loading || plansLoading}
                        onClick={handleSubmit}
                        sx={{
                            height: 48,
                            background: "#16A34A",
                            color: "#fff",
                            fontWeight: 600,
                            textTransform: "none",
                            borderRadius: "10px",
                            "&:hover": { background: "#15803D" },
                            "&.Mui-disabled": {
                                background: "rgba(34,197,94,0.20)",
                                color: "#065F46",
                            },
                        }}
                    >
                        {loading ? (
                            <CircularProgress size={22} sx={{ color: "#fff" }} />
                        ) : (
                            t("invoice.submit") ?? "Hisob-faktura yaratish"
                        )}
                    </Button>
                </>
            ) : (
                <Box>
                    <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}
                    >
                        <CheckCircle2 size={28} color="#22C55E" />
                        <Typography
                            sx={{ fontSize: 22, fontWeight: 700, color: "text.primary" }}
                        >
                            {t("invoice.created") ?? "Hisob-faktura yaratildi!"}
                        </Typography>
                    </Box>

                    <Typography sx={{ fontSize: 14, color: "text.secondary", mb: 4 }}>
                        {t("invoice.createdDesc") ??
                            "Quyida to'lov ma'lumotlari keltirilgan"}
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                            gap: 2,
                            mb: 3,
                        }}
                    >
                        {resultItems.map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    p: 2.5,
                                    borderRadius: "10px",
                                    border: "1px solid",
                                    borderColor: "divider",
                                    background: "background.default",
                                    // ✅ yonma-yon: icon | label+value
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                }}
                            >
                                {/* Icon */}
                                <Box
                                    sx={{
                                        color: item.color ?? "#22C55E",
                                        flexShrink: 0,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                {/* Label + Value yonma-yon */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "text.secondary",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {item.label}:
                                    </Typography>

                                    {item.chip ? (
                                        <Chip
                                            label={String(item.value)}
                                            size="small"
                                            sx={{
                                                background: "rgba(34,197,94,0.12)",
                                                color: "#16A34A",
                                                fontWeight: 600,
                                                fontSize: 12,
                                            }}
                                        />
                                    ) : (
                                        <Typography
                                            sx={{
                                                fontSize: 15,
                                                fontWeight: 700,
                                                color: item.color ?? "text.primary",
                                            }}
                                        >
                                            {String(item.value)}
                                        </Typography>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <Button
                        fullWidth
                        onClick={onNext}
                        sx={{
                            height: 48,
                            background: "#16A34A",
                            color: "#fff",
                            fontWeight: 600,
                            textTransform: "none",
                            borderRadius: "10px",
                            "&:hover": { background: "#15803D" },
                        }}
                    >
                        {t("common.next") ?? "Keyingi"}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default InvoiceStep;