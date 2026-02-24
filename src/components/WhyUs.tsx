import {CheckCircle, Clock, Gift, GraduationCap, Link2, TrendingUp} from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyUs() {
    const { t } = useLanguage();

    const reasons = [
        {
            icon: CheckCircle,
            title: t("whyUs.reliability"),
            description: t("whyUs.reliabilityDesc"),
        },
        {
            icon: TrendingUp,
            title: t("whyUs.scalability"),
            description: t("whyUs.scalabilityDesc"),
        },
        {
            icon: Clock,
            title: t("whyUs.support"),
            description: t("whyUs.supportDesc"),
        },
        {
            icon: Gift,
            title: t("whyUs.updates"),
            description: t("whyUs.updatesDesc"),
        },
        {
            icon: GraduationCap,
            title: t("whyUs.training"),
            description: t("whyUs.trainingDesc"),
        },
        {
            icon: Link2,
            title: t("whyUs.integration"),
            description: t("whyUs.integrationDesc"),
        },
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-background via-cyan-50/20 to-background dark:via-cyan-950/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t("whyUs.title")}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("whyUs.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-background/80 dark:bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <Icon className="text-white" size={26} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{reason.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}