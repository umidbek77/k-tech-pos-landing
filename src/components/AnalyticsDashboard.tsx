import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Package,
  LayoutDashboard,
  BarChart3,
  Boxes,
  Settings,
} from "lucide-react";

const AnalyticsDashboard = () => {
  const { t } = useLanguage();

  const sales = [120, 180, 150, 220, 260, 210, 300, 280, 340, 320, 360, 390];
  const lastMonth = [
    100, 150, 130, 190, 210, 200, 240, 230, 260, 250, 290, 310,
  ];

  const max = Math.max(...sales, ...lastMonth);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-3 text-foreground"
        >
          {t("dashboard.title")}
        </motion.h2>

        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          {t("dashboard.desc")}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-card border border-border rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="h-12 bg-background border-b border-border flex items-center px-4 text-sm font-medium">
            K-TECH Dashboard
          </div>

          <div className="grid grid-cols-12 min-h-[480px]">
            {/* Sidebar */}
            <div className="col-span-2 border-r border-border bg-muted/30 p-4 space-y-2 hidden md:block">
              {[
                { icon: LayoutDashboard, label: "Dashboard" },
                { icon: BarChart3, label: "Analytics" },
                { icon: Boxes, label: "Mahsulotlar" },
                { icon: Users, label: "Xodimlar" },
                { icon: Settings, label: "Sozlamalar" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium hover:bg-background transition cursor-pointer"
                >
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main */}
            <div className="col-span-12 md:col-span-10 p-5 space-y-6">
              {/* KPI CARDS */}
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    icon: TrendingUp,
                    label: "Sof foyda",
                    value: "12 450 000 so’m",
                    color: "text-primary",
                  },
                  {
                    icon: TrendingDown,
                    label: "Xarajat",
                    value: "4 200 000 so’m",
                    color: "text-destructive",
                  },
                  {
                    icon: Package,
                    label: "Sotilgan",
                    value: "1 284 dona",
                    color: "text-secondary",
                  },
                  {
                    icon: Users,
                    label: "Xodimlar",
                    value: "12 ta",
                    color: "text-primary",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-background border border-border rounded-xl p-4"
                  >
                    <stat.icon className={`h-4 w-4 ${stat.color} mb-2`} />
                    <p className="text-[11px] text-muted-foreground uppercase">
                      {stat.label}
                    </p>
                    <p className="text-base font-semibold text-foreground mt-1">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* CHART (UPDATED TO BLUE BAR CHART) */}
              <div className="border border-border rounded-xl p-4 bg-background">
                <div className="flex justify-between mb-3 text-sm">
                  <span className="font-medium text-foreground">
                    Savdo dinamikasi
                  </span>
                  <span className="text-primary font-medium">12 oy</span>
                </div>

                <div className="relative h-56 w-full">
                  {/* Grid */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((_, i) => (
                      <div key={i} className="border-t border-border" />
                    ))}
                  </div>

                  {/* Blue Bars */}
                  <div className="flex items-end justify-between h-full relative z-10 px-2">
                    {sales.map((value, i) => {
                      const height = (value / max) * 100;

                      return (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.05 }}
                          className="w-3 bg-blue-500 rounded-t-md"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* TABLE */}
              <div className="border border-border rounded-xl bg-background overflow-hidden">
                <div className="grid grid-cols-5 text-[11px] font-semibold text-muted-foreground border-b border-border p-3">
                  <div>Tovar</div>
                  <div>Kategoriya</div>
                  <div>Soni</div>
                  <div>Daromad</div>
                  <div>Holati</div>
                </div>

                {[
                  ["Coca-Cola 1L", "Ichimlik", "124", "1 860 000 so’m", "Faol"],
                  ["Oltin Yog‘", "Oziq-ovqat", "82", "2 340 000 so’m", "Faol"],
                  ["Non", "Oziq-ovqat", "210", "1 050 000 so’m", "Faol"],
                ].map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-5 text-sm p-3 border-b border-border last:border-0 hover:bg-muted/30 transition"
                  >
                    <div>{row[0]}</div>
                    <div className="text-muted-foreground">{row[1]}</div>
                    <div>{row[2]}</div>
                    <div>{row[3]}</div>
                    <div className="text-primary font-medium">{row[4]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
