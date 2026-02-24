import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  const { t } = useLanguage();

  const cards = [
    {
      image: "img-15.jpg",
      q: t("problem.q1"),
      a: t("problem.a1"),
    },
    {
      image: "img-16.jpg",
      q: t("problem.q2"),
      a: t("problem.a2"),
    },
    {
      image: "img-17.jpg",
      q: t("problem.q3"),
      a: t("problem.a3"),
    },
  ];

  return (
    <section id="solution" className="py-4 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground"
        >
          {t("problem.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="h-46 overflow-hidden">
                <img
                  src={card.image}
                  alt="problem illustration"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-2 text-center">
                <p className="text-md font-medium text-muted-foreground leading-relaxed">
                  {card.q}
                </p>

                <p className="text-lg font-semibold text-primary leading-relaxed">
                  {card.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
