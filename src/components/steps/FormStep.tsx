import {useEffect, useState} from "react";
import {Box, Button, InputAdornment, TextField, Typography} from "@mui/material";
import {Building2, MapPin, Phone, User} from "lucide-react";
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
    const [checkingPhone, setCheckingPhone] = useState(false);

    const schema = z.object({
        fullName: z.string().min(2),
        phoneNumber: z.string().min(9),
        address: z.string().min(2),
        tenantName: z.string().min(2),

        telegramNick: z.string().optional(),
        description: z.string().optional(),
        inn: z.string().optional(),
        bankAccount: z.string().optional(),
        mfo: z.string().optional(),
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

    const checkPhone = async (phone: string) => {
        try {
            const res = await fetch(
                `https://api.pos.k-tech.uz/api/v1/contract-applications/check-pending-by-phone?phoneNumber=${phone}`,
                {
                    headers: { lang: mapLang() },
                }
            );

            if (!res.ok) return null;
            return await res.json();
        } catch {
            return null;
        }
    };

    useEffect(() => {
        const phone = form.phoneNumber;

        if (!phone || phone.length < 9) return;

        const timeout = setTimeout(async () => {
            setCheckingPhone(true);

            const data = await checkPhone(phone);

            setCheckingPhone(false);

            if (data?.tenantId) {
                onNext(data.tenantId);
            }
        }, 600);

        return () => clearTimeout(timeout);
    }, [form.phoneNumber]);

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
            const check = await checkPhone(form.phoneNumber);

            if (check?.tenantId) {
                onNext(check.tenantId);
                return;
            }

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
    };

    return (
        <Box
            sx={{
                p: 4,
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                background: "background.paper",
            }}
        >
            <Typography sx={{ fontSize: 24, fontWeight: 600, mb: 3 }}>
                {t("form.title")}
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>

                <TextField
                    placeholder={t("form.name")}
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    error={!!errors.fullName}
                    sx={inputSx}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <User size={18} />
                                </InputAdornment>
                            )
                        }
                    }}
                />

                <TextField
                    placeholder={t("form.phone")}
                    value={form.phoneNumber}
                    onChange={(e) => handleChange("phoneNumber", e.target.value)}
                    error={!!errors.phoneNumber}
                    sx={inputSx}
                    helperText={checkingPhone ? "Tekshirilmoqda..." : ""}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone size={18} />
                                </InputAdornment>
                            )
                        }
                    }}
                />

                <TextField
                    placeholder={t("form.address")}
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    error={!!errors.address}
                    sx={inputSx}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MapPin size={18} />
                                </InputAdornment>
                            )
                        }
                    }}
                />

                <TextField
                    placeholder={t("form.tenantName")}
                    value={form.tenantName}
                    onChange={(e) => handleChange("tenantName", e.target.value)}
                    error={!!errors.tenantName}
                    sx={inputSx}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Building2 size={18} />
                                </InputAdornment>
                            )
                        }
                    }}
                />

                <TextField placeholder="@username" value={form.telegramNick} onChange={(e) => handleChange("telegramNick", e.target.value)} sx={inputSx} />
                <TextField placeholder={t("form.inn")} value={form.inn} onChange={(e) => handleChange("inn", e.target.value)} sx={inputSx} />
                <TextField placeholder={t("form.bankAccount")} value={form.bankAccount} onChange={(e) => handleChange("bankAccount", e.target.value)} sx={inputSx} />
                <TextField placeholder={t("form.mfo")} value={form.mfo} onChange={(e) => handleChange("mfo", e.target.value)} sx={inputSx} />

                <TextField multiline rows={2} placeholder={t("form.receiptHeader")} value={form.receiptHeader} onChange={(e) => handleChange("receiptHeader", e.target.value)} sx={inputSx} />
                <TextField multiline rows={2} placeholder={t("form.receiptFooter")} value={form.receiptFooter} onChange={(e) => handleChange("receiptFooter", e.target.value)} sx={inputSx} />

                <Box sx={{ gridColumn: "1 / -1" }}>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        placeholder={t("form.note")}
                        value={form.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        sx={inputSx}
                    />
                </Box>

                <Box sx={{ gridColumn: "1 / -1" }}>
                    <Button
                        fullWidth
                        disabled={loading}
                        onClick={handleSubmit}
                        sx={{
                            height: 48,
                            background: "#16A34A",
                            color: "#fff",
                            fontWeight: 600,
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