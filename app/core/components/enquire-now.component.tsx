"use client";

import { useEffect, useRef, useState } from "react";
import {
    Dialog,
    DialogContent,
    IconButton,
    Typography,
    TextField,
    Button,
    Box,
    CircularProgress,
    useMediaQuery,
    useTheme,
    Zoom,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

interface EnquireNowModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    subtitle?: string;
}

export default function EnquireNowModal({
    open,
    onClose,
    title = "Request More Information",
    subtitle = "Fill out the form below and our team will get in touch with you shortly.",
}: EnquireNowModalProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
        "idle"
    );
    const [serverError, setServerError] = useState("");

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const handleChange =
        (field: keyof typeof form) =>
            (
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
                setForm((prev) => ({
                    ...prev,
                    [field]: e.target.value,
                }));

                if (errors[field]) {
                    setErrors((prev) => ({
                        ...prev,
                        [field]: "",
                    }));
                }

                if (submitState === "error") {
                    setSubmitState("idle");
                    setServerError("");
                }
            };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
        ) {
            newErrors.email = "Enter a valid email address";
        }

        if (form.message.trim().length > 1000) {
            newErrors.message = "Message should be under 1000 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setForm({
            fullName: "",
            email: "",
            message: "",
        });
        setErrors({});
        setServerError("");
    };

    const handleClose = () => {
        if (!loading) {
            if (timerRef.current) clearTimeout(timerRef.current);
            setSubmitState("idle");
            setServerError("");
            onClose();
        }
    };

    const handleSubmit = async () => {
        if (!validate()) return;

        if (timerRef.current) clearTimeout(timerRef.current);

        setLoading(true);
        setSubmitState("idle");
        setServerError("");

        try {
            const res = await fetch("/api/send-enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Failed to send enquiry");
            }

            // show success overlay first
            setSubmitState("success");
            resetForm();

            // keep success popup on top for 3 sec, then close both together
            timerRef.current = setTimeout(() => {
                setSubmitState("idle");
                onClose();
            }, 3000);
        } catch (error: any) {
            setSubmitState("error");
            setServerError(error?.message || "Try again after sometime");

            // keep error popup for 3 sec, keep modal open
            timerRef.current = setTimeout(() => {
                setSubmitState("idle");
                setServerError("");
            }, 3000);
        } finally {
            setLoading(false);
        }
    };

    const textFieldSx = {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.15)",
            },
            "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.3)",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#111111",
                borderWidth: "1px",
            },
        },
        "& .MuiInputLabel-root": {
            color: "#777777",
            fontSize: "10px",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#111111",
        },
        "& .MuiInputLabel-root.Mui-error": {
            color: "#d32f2f",
        },
        "& .MuiInputBase-input": {
            color: "#111111",
        },
        "& .MuiFormHelperText-root": {
            color: "#777777",
        },
    };

    const showPopup = submitState === "success" || submitState === "error";

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullScreen={isMobile}
            maxWidth="lg"
            fullWidth
        >
            <DialogContent className="relative p-0 overflow-hidden">
                <Box className="relative grid grid-cols-1 md:grid-cols-2">
                    {/* Left Branding Panel */}
                    <Box className="hidden md:flex flex-col justify-between bg-[#111111] text-white p-10">
                        <Box>
                            <Typography className="!text-sm !tracking-[0.25em] !uppercase !text-white/70 !mb-4">
                                Baani
                            </Typography>

                            <Typography className="!text-4xl !font-semibold !leading-tight !mb-5">
                                Let’s help you find the right space.
                            </Typography>

                            <Typography className="!text-base !leading-7 !text-white/75 max-w-[420px]">
                                Share your requirements and our team will connect with you for
                                availability, pricing, and tailored recommendations.
                            </Typography>
                        </Box>

                        <Box className="space-y-5 pt-10">
                            <Box>
                                <Typography className="!text-xs !uppercase !tracking-[0.2em] !text-white/50 !mb-1">
                                    Email
                                </Typography>
                                <Typography className="!text-base !text-white">
                                    info@baani.com
                                </Typography>
                            </Box>

                            <Box>
                                <Typography className="!text-xs !uppercase !tracking-[0.2em] !text-white/50 !mb-1">
                                    Response Time
                                </Typography>
                                <Typography className="!text-base !text-white">
                                    Usually within 1 business day
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Right Form Panel */}
                    <Box className="relative bg-white px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                        <IconButton
                            onClick={handleClose}
                            className="!absolute !right-4 !top-4 !text-[#111111]"
                            disabled={loading}
                        >
                            <CloseIcon />
                        </IconButton>

                        <Box className="pr-10 sm:pr-12">
                            <Typography className="!text-2xl sm:!text-3xl !font-semibold !text-[#111111] !mb-2">
                                {title}
                            </Typography>

                            <Typography className="!text-sm sm:!text-base !text-[#555] !leading-7 !mb-8">
                                {subtitle}
                            </Typography>
                        </Box>

                        <Box className="grid grid-cols-1 gap-3">
                            <TextField
                                label="Full Name *"
                                value={form.fullName}
                                onChange={handleChange("fullName")}
                                error={!!errors.fullName}
                                helperText={errors.fullName}
                                fullWidth
                                size="small"
                                sx={textFieldSx}
                            />

                            <TextField
                                label="Email Address *"
                                value={form.email}
                                onChange={handleChange("email")}
                                error={!!errors.email}
                                helperText={errors.email}
                                fullWidth
                                size="small"
                                sx={textFieldSx}
                            />

                            <TextField
                                label="Message"
                                value={form.message}
                                onChange={handleChange("message")}
                                error={!!errors.message}
                                helperText={errors.message || `${form.message.length}/1000`}
                                fullWidth
                                multiline
                                minRows={3}
                                size="small"
                                placeholder="Tell us what you're looking for..."
                                sx={textFieldSx}
                            />

                            <Box className="flex flex-col gap-2">
                                <Typography className="!text-xs !leading-6 !text-[#777] pl-2">
                                    By submitting this form, you agree to be contacted regarding
                                    your enquiry.
                                </Typography>

                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    fullWidth
                                    className="!rounded-full !bg-[#111111] hover:!bg-[#222222] !py-2"
                                    sx={{
                                        color: "#ffffff !important",
                                        textTransform: "none",
                                        fontWeight: 500,
                                        minHeight: 44,
                                    }}
                                >
                                    {loading ? (
                                        <Box className="flex items-center gap-2">
                                            <CircularProgress size={18} sx={{ color: "white" }} />
                                            <span style={{ color: "white" }}>Sending...</span>
                                        </Box>
                                    ) : (
                                        <span style={{ color: "white" }}>Enquire Now</span>
                                    )}
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    {/* INLINE STATUS POPUP OVERLAY */}
                    {showPopup && (
                        <Box
                            className="absolute inset-0 flex items-center justify-center"
                            sx={{
                                backgroundColor: "rgba(0,0,0,0.18)",
                                zIndex: 20,
                                backdropFilter: "blur(2px)",
                            }}
                        >
                            <Zoom in={showPopup} timeout={250}>
                                <Box
                                    className="rounded-4xl bg-white px-8 py-7 text-center shadow-2xl"
                                    sx={{
                                        minWidth: isMobile ? "16rem" : "24rem",
                                        maxWidth: "90vw",
                                    }}
                                >
                                    {submitState === "success" ? (
                                        <>
                                            <CheckCircleRoundedIcon
                                                sx={{ fontSize: 64, color: "#16a34a", mb: 1.5 }}
                                            />
                                            <Typography className="!text-2xl !font-semibold !text-[#111111] !mb-1">
                                                Enquiry sent
                                            </Typography>
                                            <Typography className="!text-sm !text-[#666]">
                                                Our team will get in touch with you shortly.
                                            </Typography>
                                        </>
                                    ) : (
                                        <>
                                            <CancelRoundedIcon
                                                sx={{ fontSize: 64, color: "#dc2626", mb: 1.5 }}
                                            />
                                            <Typography className="!text-2xl !font-semibold !text-[#111111] !mb-1">
                                                Try again
                                            </Typography>
                                            <Typography className="!text-sm !text-[#666]">
                                                {serverError || "Try again after sometime"}
                                            </Typography>
                                        </>
                                    )}
                                </Box>
                            </Zoom>
                        </Box>
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    );
}