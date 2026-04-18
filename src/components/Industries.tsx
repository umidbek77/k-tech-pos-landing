import {useLanguage} from "@/contexts/LanguageContext";

export function Industries() {
    const { t } = useLanguage();

    const industries = [
        {
            title: t("industries.dealers"),
            description: t("industries.dealersDesc"),
            image: "img-11.png",
        },
        {
            title: t("industries.malls"),
            description: t("industries.mallsDesc"),
            image: "img-12.jpeg",
        },
        {
            title: t("industries.hypermarkets"),
            description: t("industries.hypermarketsDesc"),
            image: "img-13.png",
        },
        {
            title: t("industries.supermarkets"),
            description: t("industries.supermarketsDesc"),
            image: "img-14.jpg",
        },
    ];

    return (
        <section
            id="industries"
            className="py-18 bg-gradient-to-b from-background via-muted/20 to-background dark:via-muted/10 mb-8"
        >
            <div className="container mx-auto px-2">
                <div className="text-center mb-6">
                    <h2 className="text-xl md:text-4xl font-bold mb-2">
                        {t("industries.title")}?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-background dark:bg-background/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold text-foreground">
                                    {industry.title}
                                </h3>

                                <p className="text-md text-muted-foreground leading-relaxed">
                                    {industry.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}