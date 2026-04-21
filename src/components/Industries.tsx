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
            className="py-4 md:py-6 lg:py-8
            bg-gradient-to-b from-background via-muted/20 to-background dark:via-muted/10"
        >
            <div className="container mx-auto px-3 sm:px-4 lg:px-6">

                <div className="text-center mb-4 md:mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                        {t("industries.title")}?
                    </h2>
                </div>

                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-4 sm:gap-5 md:gap-6
                ">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="
                                group relative overflow-hidden rounded-2xl
                                border border-border
                                bg-background dark:bg-background/80
                                transition-all duration-300
                                hover:shadow-xl md:hover:shadow-2xl
                                hover:-translate-y-1 md:hover:-translate-y-2
                                hover:border-green-500
                            "
                        >
                            <div className="
                                relative overflow-hidden
                                h-44 sm:h-48 md:h-52 lg:h-56
                            ">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="
                                        w-full h-full object-cover
                                        transition-transform duration-500
                                        group-hover:scale-105
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>

                            <div className="p-4 sm:p-5 md:p-6">
                                <h3 className="
                                    text-base sm:text-lg md:text-xl font-bold
                                    text-foreground mb-2
                                ">
                                    {industry.title}
                                </h3>

                                <p className="
                                    text-sm sm:text-sm md:text-base
                                    text-muted-foreground
                                    leading-relaxed
                                ">
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