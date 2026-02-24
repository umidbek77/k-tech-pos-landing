import {Monitor, ShoppingBag, Smartphone, Tablet} from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

export function Devices() {
    const { t } = useLanguage();

    const devices = [
        {
            icon: Smartphone,
            title: t("devices.mobile"),
            description: t("devices.mobileDesc"),
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Tablet,
            title: t("devices.tablet"),
            description: t("devices.tabletDesc"),
            color: 'from-cyan-500 to-teal-500',
        },
        {
            icon: Monitor,
            title: t("devices.desktop"),
            description: t("devices.desktopDesc"),
            color: 'from-teal-500 to-emerald-500',
        },
        {
            icon: ShoppingBag,
            title: t("devices.pos"),
            description: t("devices.posDesc"),
            color: 'from-emerald-500 to-green-500',
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-background via-muted/20 to-background dark:via-muted/10">
            <div className="container mx-auto px-2">
                <div className="text-center mb-4">
                    <h2 className="text-4xl md:text-4xl font-bold mb-4">
                        {t("devices.title")}
                    </h2>
                    {/*<p className="text-lg text-muted-foreground max-w-2xl mx-auto">*/}
                    {/*    {t("devices.subtitle")}*/}
                    {/*</p>*/}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {devices.map((device, index) => {
                        const Icon = device.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-background dark:bg-background/80 rounded-2xl p-8 border border-border hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-center"
                            >
                                <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${device.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <Icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{device.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{device.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}