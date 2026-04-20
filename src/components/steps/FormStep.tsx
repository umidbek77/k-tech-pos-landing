import {useState} from "react";
import {Box, Button, Divider, InputAdornment, TextField, Typography,} from "@mui/material";
import {AtSign, Building2, CreditCard, FileText, Hash, MapPin, MessageSquare, Phone, Receipt, User} from "lucide-react";
import {useLanguage} from "@/contexts/LanguageContext";
import {z} from "zod";

const FormStep = ({ onNext }: { onNext: (tenantId: number) => void }) => {
    const { t, lang } = useLanguage();

    const [form, setForm] = useState({
        fullName: "",
        phoneNumber: "",
        telegramNick: "",
        address: "",
        description: "",
        tenantName: "",
        inn: "",
        bankAccount: "",
        mfo: "",
        receiptHeader: "",
        receiptFooter: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    const schema = z.object({
        fullName: z.string().min(2),
        phoneNumber: z.string().min(9),
        telegramNick: z.string().optional(),
        address: z.string().min(2),
        description: z.string().optional(),
        tenantName: z.string().min(2),
        inn: z.string().min(9),
        bankAccount: z.string().min(16),
        mfo: z.string().min(5),
        receiptHeader: z.string().optional(),
        receiptFooter: z.string().optional(),
    });

    const mapLang = () => {
        switch (lang) {
            case "ru":
                return "RU";
            default:
                return "UZ_LATN";
        }
    };

    const handleSubmit = async () => {
        const result = schema.safeParse(form);

        if (!result.success) {
            const err: Record<string, string> = {};
            result.error.issues.forEach((e) => {
                err[e.path[0] as string] = e.message;
            });
            setErrors(err);
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            const res = await fetch(
                "https://api.pos.k-tech.uz/api/v1/contract-applications/contract-with-tenant",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        lang: mapLang(),
                    },
                    body: JSON.stringify(form),
                }
            );

            if (!res.ok) throw new Error();
            const data = await res.json();
            onNext(data.tenantId);
        } catch {
            alert("Xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (key: string, value: string) => {
        setForm((p) => ({ ...p, [key]: value }));
    };

    const inputSx = {
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            "& fieldset": { borderColor: "divider" },
            "&:hover fieldset": { borderColor: "#22C55E" },
            "&.Mui-focused fieldset": { borderColor: "#22C55E" },
        },
        "& input::placeholder": { color: "text.secondary", opacity: 1 },
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
            <Typography sx={{ fontSize: 24, fontWeight: 600, mb: 3, color: "text.primary" }}>
                {t("form.title")}
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>

                <TextField
                    fullWidth
                    placeholder={t("form.name")}
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    error={!!errors.fullName}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><User size={18} /></InputAdornment> } }}
                />

                <TextField
                    fullWidth
                    placeholder={t("form.phone")}
                    value={form.phoneNumber}
                    onChange={(e) => handleChange("phoneNumber", e.target.value)}
                    error={!!errors.phoneNumber}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><Phone size={18} /></InputAdornment> } }}
                />

                <TextField
                    fullWidth
                    placeholder="@username"
                    value={form.telegramNick}
                    onChange={(e) => handleChange("telegramNick", e.target.value)}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><AtSign size={18} /></InputAdornment> } }}
                />

                <TextField
                    fullWidth
                    placeholder={t("form.address")}
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    error={!!errors.address}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><MapPin size={18} /></InputAdornment> } }}
                />

                <Box sx={{ gridColumn: "1 / -1", color: "text.primary", fontSize: 16 }}>
                        <Typography variant="caption" color="text.secondary">
                            {t("form.tenantInfo")}
                        </Typography>
                </Box>

                <TextField
                    fullWidth
                    placeholder={t("form.tenantName")}
                    value={form.tenantName}
                    onChange={(e) => handleChange("tenantName", e.target.value)}
                    error={!!errors.tenantName}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><Building2 size={18} /></InputAdornment> } }}
                />

                <TextField
                    fullWidth
                    placeholder={t("form.inn")}
                    value={form.inn}
                    onChange={(e) => handleChange("inn", e.target.value)}
                    error={!!errors.inn}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><Hash size={18} /></InputAdornment> } }}
                />

                <TextField
                    fullWidth
                    placeholder={t("form.bankAccount")}
                    value={form.bankAccount}
                    onChange={(e) => handleChange("bankAccount", e.target.value)}
                    error={!!errors.bankAccount}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><CreditCard size={18} /></InputAdornment> } }}
                />

                <TextField
                    fullWidth
                    placeholder={t("form.mfo")}
                    value={form.mfo}
                    onChange={(e) => handleChange("mfo", e.target.value)}
                    error={!!errors.mfo}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><Hash size={18} /></InputAdornment> } }}
                />

                <TextField
                    fullWidth
                    multiline
                    rows={2}
                    placeholder={t("form.receiptHeader")}
                    value={form.receiptHeader}
                    onChange={(e) => handleChange("receiptHeader", e.target.value)}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><Receipt size={18} /></InputAdornment> } }}
                />

                <TextField
                    fullWidth
                    multiline
                    rows={2}
                    placeholder={t("form.receiptFooter")}
                    value={form.receiptFooter}
                    onChange={(e) => handleChange("receiptFooter", e.target.value)}
                    sx={inputSx}
                    slotProps={{ input: { startAdornment: <InputAdornment position="start"><FileText size={18} /></InputAdornment> } }}
                />

                <Box sx={{ gridColumn: "1 / -1" }}>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        placeholder={t("form.note")}
                        value={form.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        sx={inputSx}
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><MessageSquare size={18} /></InputAdornment> } }}
                    />
                </Box>

                <Box sx={{ gridColumn: "1 / -1" }}>
                    <Button
                        fullWidth
                        disabled={loading}
                        onClick={handleSubmit}
                        sx={{
                            height: 48,
                            mt: 1,
                            background: "#16A34A",
                            color: "#fff",
                            fontWeight: 600,
                            textTransform: "none",
                            borderRadius: "10px",
                            "&:hover": { background: "#15803D" },
                            "&.Mui-disabled": { background: "rgba(34,197,94,0.25)", color: "#065F46" },
                        }}
                    >
                        {loading ? t("form.loading") : t("common.next")}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default FormStep;