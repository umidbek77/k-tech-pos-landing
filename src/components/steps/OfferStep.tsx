import {useState} from "react";
import {Box, Button, Checkbox, Dialog, DialogContent, DialogTitle, IconButton, Typography,} from "@mui/material";
import {Eye, X} from "lucide-react";
import {useLanguage} from "@/contexts/LanguageContext";

const OfferStep = ({ onNext }: { onNext: () => void }) => {
    const { t } = useLanguage();

    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box
                sx={{
                    borderRadius: 3,
                    p: 4,
                    border: "1px solid",
                    borderColor: "divider",
                    background: "background.paper",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: 26,
                        fontWeight: 600,
                        mb: 1,
                        color: "text.primary",
                    }}
                >
                    {t("offer.title")}
                </Typography>

                <Typography
                    sx={{
                        fontSize: 16,
                        mb: 3,
                        color: "text.secondary",
                    }}
                >
                    {t("offer.desc")}
                </Typography>

                <Button
                    onClick={() => setOpen(true)}
                    startIcon={<Eye size={18} />}
                    sx={{
                        mb: 3,
                        border: "2px solid #22C55E",
                        color: "#22C55E",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: 16,
                        px: 2,
                        py: 1,
                        "&:hover": {
                            background: "rgba(34,197,94,0.08)",
                        },
                    }}
                >
                    {t("offer.view")}
                </Button>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                    }}
                >
                    <Checkbox
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                        sx={{
                            color: "#22C55E",
                            "&.Mui-checked": {
                                color: "#22C55E",
                            },
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: 16,
                            color: "text.primary",
                        }}
                    >
                        {t("offer.accept")}
                    </Typography>
                </Box>

                <Button
                    fullWidth
                    disabled={!checked}
                    onClick={onNext}
                    sx={{
                        height: 48,
                        background: checked
                            ? "#16A34A"
                            : "rgba(34,197,94,0.25)",
                        color: checked ? "#fff" : "#065F46",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: 16,
                        opacity: 1,
                        "&.Mui-disabled": {
                            background: "rgba(34,197,94,0.25)",
                            color: "#065F46",
                        },
                        "&:hover": {
                            background: checked
                                ? "#15803D"
                                : "rgba(34,197,94,0.25)",
                        },
                    }}
                >
                    {t("common.next")}
                </Button>
            </Box>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "text.primary",
                    }}
                >
                    {t("offer.title")}

                    <IconButton onClick={() => setOpen(false)}>
                        <X size={18} />
                    </IconButton>
                </DialogTitle>

                <DialogContent sx={{ p: 0 }}>
                    <iframe
                        src="/offer.pdf"
                        width="100%"
                        height="600px"
                        style={{ border: "none" }}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default OfferStep;