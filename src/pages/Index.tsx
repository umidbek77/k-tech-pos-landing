import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import FeaturesGrid from '@/components/FeaturesGrid';
import UseCases from '@/components/UseCases';
import HardwareBundle from '@/components/HardwareBundle';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import ComparisonTable from '@/components/ComparisonTable';
import PricingSection from '@/components/PricingSection';
import SupportFAQ from '@/components/SupportFAQ';
import DemoForm from '@/components/DemoForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <FeaturesGrid />
      <UseCases />
      <HardwareBundle />
      <AnalyticsDashboard />
      <ComparisonTable />
      <PricingSection />
      <SupportFAQ />
      <DemoForm />
      <Footer />
    </div>
  );
};

export default Index;
