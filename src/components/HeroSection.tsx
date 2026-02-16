import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  // Parallax logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - IMAGE WITH PARALLAX */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <motion.img
              src="/public/img-1.png"
              alt="K-TECH POS system"
              className="w-full max-w-2xl lg:max-w-3xl mx-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)] rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />

            {/* Floating glow */}
            <div className="absolute -z-10 inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
          </motion.div>

          {/* RIGHT SIDE - TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              {t("hero.title")}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12 shadow-lg"
                onClick={() =>
                  document
                    .querySelector("#demo")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.cta1")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-border hover:bg-muted"
              >
                <Play className="mr-2 h-5 w-5" />
                {t("hero.cta2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
